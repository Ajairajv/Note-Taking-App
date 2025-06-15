import ratelimit from "../config/upstash.js";


const rateLimiter = async(req,res,next)=>{

    ratelimit
    try{
     const{success} = await ratelimit.limit("my-limit")
    if(!success){
        return res.status(429).json({
            message:"Too many request, please try again later"
        })
    }

     next()
    }catch(error){
       console.log("Rate Limit error",error);
       next(error);
    }
}
export default rateLimiter;