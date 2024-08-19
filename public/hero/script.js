const axios = require("axios");
const fs = require("fs");
const path = require("path");

async function downloadImage(url, filepath) {
  const writer = fs.createWriteStream(filepath);

  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

Array.from(Array(49).keys()).forEach((i) => {
  const seq = i + 1 <= 9 ? `0${i + 1}` : i + 1;
  const filename = `hero-sequence${seq}.webp`;

  const url = `https://d20b8mqh7zo0pc.cloudfront.net/hero-sequence/v2/webp/ese-hero-sequence${seq}.webp`;
  const out = path.resolve(__dirname, filename);

  if (fs.existsSync(out)) return;

  downloadImage(url, out)
    .then(() => console.log("Image downloaded successfully"))
    .catch((err) => console.error("Error downloading image:", err));
});
