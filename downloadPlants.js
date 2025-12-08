import fetch from "node-fetch";
import fs from "fs-extra";
import path from "path";

const OUTPUT_DIR = "../assets/images";

// Make sure directory exists
fs.ensureDirSync(OUTPUT_DIR);

// List your plants here
const plants = [
  { latin: "Dracaena trifasciata", file: "snakeplant.jpg" },
  { latin: "Monstera deliciosa", file: "monstera.jpg" },
  { latin: "Chlorophytum comosum", file: "spiderplant.jpg" },
  { latin: "Spathiphyllum wallisii", file: "peacelily.jpg" },
  { latin: "Zamioculcas zamiifolia", file: "zzplant.jpg" },
  { latin: "Ficus elastica", file: "rubberplant.jpg" }
];

// Wikimedia API: search image by species name
async function fetchImageURL(latinName) {
  const query = encodeURIComponent(`${latinName} plant`);
  const apiURL = `
    https://commons.wikimedia.org/w/api.php
    ?action=query
    &generator=search
    &gsrsearch=${query}
    &gsrlimit=1
    &prop=imageinfo
    &iiprop=url
    &format=json
    &origin=*
  `.replace(/\s+/g, "");

  const res = await fetch(apiURL);
  const data = await res.json();

  if (!data.query || !data.query.pages) return null;

  const page = Object.values(data.query.pages)[0];
  return page.imageinfo?.[0]?.url || null;
}

// Download image
async function downloadImage(url, filename) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to download image");

  const buffer = await res.buffer();
  await fs.writeFile(path.join(OUTPUT_DIR, filename), buffer);
}

// Main loop
(async () => {
  for (const plant of plants) {
    console.log(`📥 Fetching: ${plant.latin}`);
    const imageURL = await fetchImageURL(plant.latin);

    if (!imageURL) {
      console.warn(`⚠️ No image found for ${plant.latin}`);
      continue;
    }

    await downloadImage(imageURL, plant.file);
    console.log(`✅ Saved as ${plant.file}`);
  }

  console.log("🌿 All downloads complete");
})();
