// 📚 MENTOR NOTE:
// This is your DATA LAYER — completely separate from your UI.
// Each object has the same shape: { id, url, title, description, category }
// To add a new image, just add a new object here — no JSX changes needed!
// That's the power of data-driven React.

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    title: "Mountain Serenity",
    description: "Snow-capped peaks piercing through morning clouds in the Alps.",
    category: "Nature",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
    title: "City Lights",
    description: "A dazzling urban skyline glowing under the twilight sky.",
    category: "Urban",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    title: "Ocean Calm",
    description: "Crystal-clear turquoise water meeting a pristine sandy shore.",
    category: "Nature",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
    title: "Forest Path",
    description: "Sunlight filtering through ancient trees on a misty trail.",
    category: "Nature",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&q=80",
    title: "Desert Dunes",
    description: "Golden sand dunes sculpted by desert winds at sunset.",
    category: "Landscape",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80",
    title: "Northern Lights",
    description: "Aurora borealis dancing across a star-filled Arctic sky.",
    category: "Nature",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=600&q=80",
    title: "Frozen Lake",
    description: "A perfectly still winter lake reflecting icy mountains above.",
    category: "Landscape",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
    title: "Aerial Valley",
    description: "A lush green valley seen from high above the clouds.",
    category: "Landscape",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&q=80",
    title: "Night Market",
    description: "Vibrant colors and lanterns fill a bustling night market street.",
    category: "Urban",
  },
];

export default images;
