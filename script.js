// --- Sustainable Plant Tracker ---
// --- Sustainable Plant Tracker (Expanded & Scientifically Grounded) ---
const plantData = {
  sweden: [
    {
      name: "Snake Plant",
      latin: "Dracaena trifasciata",
      image: "assets/images/snakeplant.jpg",
      origin: "West Africa",
      care: "Low to bright indirect light, water every 2–3 weeks.",
      facts: "CAM plant; highly drought tolerant and long-lived."
    },
    {
      name: "Spider Plant",
      latin: "Chlorophytum comosum",
      image: "assets/images/spiderplant.jpg",
      origin: "Southern Africa",
      care: "Indirect light, weekly watering.",
      facts: "Excellent for propagation via plantlets."
    },
    {
      name: "Peace Lily",
      latin: "Spathiphyllum wallisii",
      image: "assets/images/peacelily.jpg",
      origin: "Central America",
      care: "Bright indirect light, evenly moist soil.",
      facts: "Thrives in low light, signals water stress clearly."
    },
    {
      name: "Rubber Plant",
      latin: "Ficus elastica",
      image: "assets/images/rubberplant.jpg",
      origin: "South & Southeast Asia",
      care: "Bright indirect light, let soil dry slightly.",
      facts: "Long lifespan, grown indoors since 19th century."
    },
    {
      name: "ZZ Plant",
      latin: "Zamioculcas zamiifolia",
      image: "assets/images/zzplant.jpg",
      origin: "Eastern Africa",
      care: "Low light, sparse watering.",
      facts: "Stores water in rhizomes."
    },
    {
      name: "English Ivy",
      latin: "Hedera helix",
      image: "assets/images/ivy.jpg",
      origin: "Europe",
      care: "Bright light, cool temperatures.",
      facts: "Native European species; excellent climber."
    },
    {
      name: "Wild Strawberry",
      latin: "Fragaria vesca",
      image: "assets/images/wildstrawberry.jpg",
      origin: "Europe",
      care: "Sun to partial shade, moist soil.",
      facts: "Native to Sweden; supports pollinators."
    },
    {
      name: "Bilberry",
      latin: "Vaccinium myrtillus",
      image: "assets/images/bilberry.jpg",
      origin: "Northern Europe",
      care: "Acidic soil, cool conditions.",
      facts: "Key species in Nordic forests."
    },
    {
      name: "Parsley",
      latin: "Petroselinum crispum",
      image: "assets/images/parsley.jpg",
      origin: "Mediterranean",
      care: "Bright light, regular watering.",
      facts: "Biennial herb; easily container-grown."
    },
    {
      name: "Basil",
      latin: "Ocimum basilicum",
      image: "assets/images/basil.jpg",
      origin: "South Asia",
      care: "Warmth, bright light, moist soil.",
      facts: "Fast-growing; ideal greenhouse herb."
    }
  ],

  usa: [
    {
      name: "Aloe Vera",
      latin: "Aloe barbadensis Mill.",
      image: "assets/images/aloe.jpg",
      origin: "Arabian Peninsula",
      care: "Bright sun, minimal watering.",
      facts: "Succulent adapted to arid environments."
    },
    {
      name: "Eastern Prickly Pear",
      latin: "Opuntia humifusa",
      image: "assets/images/opuntia.jpg",
      origin: "Eastern USA",
      care: "Full sun, very little water.",
      facts: "Cold-hardy native cactus."
    },
    {
      name: "Golden Pothos",
      latin: "Epipremnum aureum",
      image: "assets/images/pothos.jpg",
      origin: "French Polynesia",
      care: "Low to bright indirect light.",
      facts: "Extremely resilient vine."
    },
    {
      name: "Monstera",
      latin: "Monstera deliciosa",
      image: "assets/images/monstera.jpg",
      origin: "Southern Mexico",
      care: "Bright indirect light, humid air.",
      facts: "Epiphytic rainforest species."
    },
    {
      name: "Boston Fern",
      latin: "Nephrolepis exaltata",
      image: "assets/images/fern.jpg",
      origin: "Americas",
      care: "High humidity, indirect light.",
      facts: "Classic American houseplant."
    },
    {
      name: "Blueberry",
      latin: "Vaccinium corymbosum",
      image: "assets/images/blueberry.jpg",
      origin: "North America",
      care: "Acidic soil, full sun.",
      facts: "Native fruiting shrub."
    },
    {
      name: "Sage",
      latin: "Salvia officinalis",
      image: "assets/images/sage.jpg",
      origin: "Mediterranean",
      care: "Sun, well-drained soil.",
      facts: "Drought tolerant perennial herb."
    },
    {
      name: "Snake Plant",
      latin: "Dracaena trifasciata",
      image: "assets/images/snakeplant.jpg",
      origin: "West Africa",
      care: "Low water, indirect light.",
      facts: "Common in sustainable indoor design."
    },
    {
      name: "Spiderwort",
      latin: "Tradescantia virginiana",
      image: "assets/images/tradescantia.jpg",
      origin: "Eastern USA",
      care: "Bright light, moderate water.",
      facts: "Native flowering perennial."
    },
    {
      name: "Mint",
      latin: "Mentha spicata",
      image: "assets/images/mint.jpg",
      origin: "Europe & Asia",
      care: "Moist soil, partial sun.",
      facts: "Highly vigorous and hardy."
    }
  ],

  uk: [
    {
      name: "Spider Plant",
      latin: "Chlorophytum comosum",
      image: "assets/images/spiderplant.jpg",
      origin: "South Africa",
      care: "Indirect light, weekly watering.",
      facts: "Easy propagation."
    },
    {
      name: "English Ivy",
      latin: "Hedera helix",
      image: "assets/images/ivy.jpg",
      origin: "Europe",
      care: "Cool temperatures, bright light.",
      facts: "Native British species."
    },
    {
      name: "Lavender",
      latin: "Lavandula angustifolia",
      image: "assets/images/lavender.jpg",
      origin: "Mediterranean",
      care: "Full sun, dry soil.",
      facts: "Pollinator-friendly."
    },
    {
      name: "Rosemary",
      latin: "Salvia rosmarinus",
      image: "assets/images/rosemary.jpg",
      origin: "Mediterranean",
      care: "Bright sun, minimal water.",
      facts: "Long-lived woody herb."
    },
    {
      name: "Hart’s Tongue Fern",
      latin: "Asplenium scolopendrium",
      image: "assets/images/fernhart.jpg",
      origin: "Europe",
      care: "Shade, moist soil.",
      facts: "Native woodland fern."
    },
    {
      name: "Strawberry",
      latin: "Fragaria × ananassa",
      image: "assets/images/strawberry.jpg",
      origin: "Europe",
      care: "Sun, rich soil.",
      facts: "Easy greenhouse crop."
    },
    {
      name: "Tomato",
      latin: "Solanum lycopersicum",
      image: "assets/images/tomato.jpg",
      origin: "South America",
      care: "Bright light, regular feeding.",
      facts: "Staple UK greenhouse plant."
    },
    {
      name: "Basil",
      latin: "Ocimum basilicum",
      image: "assets/images/basil.jpg",
      origin: "South Asia",
      care: "Warmth and sunlight.",
      facts: "Annual herb."
    },
    {
      name: "Marjoram",
      latin: "Origanum majorana",
      image: "assets/images/marjoram.jpg",
      origin: "Mediterranean",
      care: "Sun, moderate watering.",
      facts: "Traditional European herb."
    },
    {
      name: "Fuchsia",
      latin: "Fuchsia magellanica",
      image: "assets/images/fuchsia.jpg",
      origin: "South America",
      care: "Cool, moist soil.",
      facts: "Popular UK greenhouse shrub."
    }
  ],

  globalSouth: [
    {
      name: "Banana",
      latin: "Musa acuminata",
      image: "assets/images/banana.jpg",
      origin: "Southeast Asia",
      care: "Warm, humid, bright light.",
      facts: "One of the oldest cultivated plants."
    },
    {
      name: "Papaya",
      latin: "Carica papaya",
      image: "assets/images/papaya.jpg",
      origin: "Central America",
      care: "Sun, warmth, regular water.",
      facts: "Fast-growing fruit tree."
    },
    {
      name: "Cassava",
      latin: "Manihot esculenta",
      image: "assets/images/cassava.jpg",
      origin: "South America",
      care: "Warm temperatures, light soil.",
      facts: "Staple crop for millions."
    },
    {
      name: "Chili Pepper",
      latin: "Capsicum annuum",
      image: "assets/images/chili.jpg",
      origin: "Americas",
      care: "Sun, warmth.",
      facts: "Domesticated over 6,000 years ago."
    },
    {
      name: "Okra",
      latin: "Abelmoschus esculentus",
      image: "assets/images/okra.jpg",
      origin: "Africa",
      care: "Heat and sun.",
      facts: "Highly nutritious edible plant."
    },
    {
      name: "Lemongrass",
      latin: "Cymbopogon citratus",
      image: "assets/images/lemongrass.jpg",
      origin: "Southeast Asia",
      care: "Warmth, moisture.",
      facts: "Perennial grass herb."
    },
    {
      name: "Moringa",
      latin: "Moringa oleifera",
      image: "assets/images/moringa.jpg",
      origin: "India",
      care: "Sun, drought tolerant.",
      facts: "Highly nutritious leaves."
    },
    {
      name: "Sweet Potato",
      latin: "Ipomoea batatas",
      image: "assets/images/sweetpotato.jpg",
      origin: "Central America",
      care: "Warm soil.",
      facts: "Edible leaves and tubers."
    },
    {
      name: "Ginger",
      latin: "Zingiber officinale",
      image: "assets/images/ginger.jpg",
      origin: "Southeast Asia",
      care: "Partial shade, moisture.",
      facts: "Rhizome cultivation."
    },
    {
      name: "Turmeric",
      latin: "Curcuma longa",
      image: "assets/images/turmeric.jpg",
      origin: "South Asia",
      care: "Warm, humid environments.",
      facts: "Closely related to ginger."
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
