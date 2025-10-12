import express from "express";
import aiRoutes from "./src/routes/ai-route.js";
import cors from "cors";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });


app.use("/ai", aiRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
