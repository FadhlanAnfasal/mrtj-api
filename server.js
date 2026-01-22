import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;
const dataPath = "./hasil_scrapper_mrtj (1).json";

// Baca data JSON
const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

app.get("/", (req, res) => {
  res.json(data); // langsung kirim semua isi file JSON
});

// Jalankan server
app.listen(PORT, () => {
  console.log("Server aktif di port: " + PORT);
});

