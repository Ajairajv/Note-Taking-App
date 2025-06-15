import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();


const app = express();
const  PORT = process.env.PORT || 5001


// console.log(process.env.MONGO_URI);

connectDB();

//middleware
app.use(express.json())

app.use("/api/notes",notesRoutes);
// app.use("/api/notes",notesRoutes);
// app.use("/api/notes",notesRoutes);
// app.use("/api/notes",notesRoutes);

// what is endpoint?
// an endpoint is a specific URL where an API can be accessed by a client application






//const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port:",PORT);
});

