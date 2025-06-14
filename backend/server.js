import express from "express"


const app = express();


// what is endpoint?
// an endpoint is a specific URL where an API can be accessed by a client application



app.get("/api/notes", (req,res)=>{
    res.status(200).send("you got 20 notes");
});

app.post("/api/notes", (req, res) => {
    res.status(201).json({message:"Note created successfully"});
});

app.put("/api/notes/:id", (req,res)=>{
     res.status(200).json({message:"Note updated successfully"});
});

app.delete("/api/notes/:id", (req,res)=>{
     res.status(200).json({message:"Note deleted successfully"});
}
);




//const PORT = process.env.PORT || 3000;

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});
