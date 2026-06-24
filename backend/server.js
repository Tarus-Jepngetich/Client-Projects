import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("BELMAC Backend Running");
});

app.post("/api/contact", async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Message received. Email setup will be completed soon.",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});