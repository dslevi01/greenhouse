// --- Sustainable Plant Tracker ---
const plantData = {
  sweden: [
    {
      name: "Snake Plant",
      latin: "Sansevieria trifasciata",
      image: "assets/images/snakeplant.jpg",
      origin: "West Africa",
      care: "Indirect sunlight, water every 2–3 weeks, avoid overwatering.",
      facts: "Air purifying, very hardy, low maintenance."
    },
    {
      name: "Peace Lily",
      latin: "Spathiphyllum",
      image: "assets/images/peacelily.jpg",
      origin: "Central America",
      care: "Bright indirect light, keep soil moist, mist leaves occasionally.",
      facts: "Produces white flowers, removes toxins from air."
    }
  ],
  usa: [
    {
      name: "Aloe Vera",
      latin: "Aloe barbadensis",
      image: "assets/images/aloe.jpg",
      origin: "Arabian Peninsula",
      care: "Bright light, water sparingly, allow soil to dry between waterings.",
      facts: "Medicinal uses, purifies indoor air."
    }
  ],
  uk: [
    {
      name: "Spider Plant",
      latin: "Chlorophytum comosum",
      image: "assets/images/spiderplant.jpg",
      origin: "South Africa",
      care: "Indirect light, water weekly, easy to propagate.",
      facts: "Removes pollutants, good for beginners."
    }
  ]
};

// DOM references
const countrySelect = document.getElementById('country');
const plantList = document.getElementById('plant-list');
const plantImage = document.getElementById('plant-image');
const plantName = document.getElementById('plant-name');
const plantLatin = document.getElementById('plant-latin');
const plantOrigin = document.getElementById('plant-origin');
const plantCare = document.getElementById('plant-care');
const plantFacts = document.getElementById('plant-facts');

// Populate plant list based on country
function populatePlants() {
  const country = countrySelect.value;
  const plants = plantData[country] || [];
  plantList.innerHTML = "";

  plants.forEach((plant, index) => {
    const div = document.createElement('div');
    div.className = "cursor-pointer hover:bg-green-50 rounded p-2 flex items-center gap-2";
    div.innerHTML = `
      <img src="${plant.image}" alt="${plant.name}" class="w-12 h-12 object-cover rounded">
      <div>
        <p class="font-semibold">${plant.name}</p>
        <p class="text-gray-500 text-sm">${plant.latin}</p>
      </div>
    `;
    div.addEventListener('click', () => showPlantDetails(plant));
    plantList.appendChild(div);

    // Auto-show first plant
    if(index === 0) showPlantDetails(plant);
  });
}

// Show plant details
function showPlantDetails(plant) {
  plantImage.src = plant.image;
  plantName.textContent = plant.name;
  plantLatin.textContent = plant.latin;
  plantOrigin.textContent = `Origin: ${plant.origin}`;
  plantCare.textContent = `Care: ${plant.care}`;
  plantFacts.textContent = `Fun Facts: ${plant.facts}`;
}

// Event listener for country change
countrySelect.addEventListener('change', populatePlants);

// Initialize
populatePlants();
