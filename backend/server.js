import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use("/api/notes",notesRoutes);

// what is endpoint?
// an endpoint is a specific URL where an API can be accessed by a client application






//const PORT = process.env.PORT || 3000;

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});
