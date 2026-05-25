# 🖼️ Dynamic Image Gallery — React

A responsive image gallery built with React JS as a learning project.

## 🚀 Live Demo
<!-- Replace YOUR_USERNAME with your GitHub username after deploying -->
🔗 https://YOUR_USERNAME.github.io/image-gallery/

## 🧠 React Concepts Practiced
- **Components** — Reusable `ImageCard` component
- **Props** — Passing data from parent (`App`) to child (`ImageCard`)
- **State** — `useState` for category filtering
- **map()** — Dynamic rendering from a data array
- **React Fragments** — `<>...</>` to avoid extra DOM elements
- **CSS Grid** — Responsive layout with `auto-fill` and `minmax()`

## 📁 Project Structure
```
src/
├── components/
│   ├── ImageCard.jsx   # Reusable card component
│   └── ImageCard.css   # Card styles
├── data/
│   └── images.js       # Image data array
├── App.jsx             # Parent component
├── App.css             # Global styles
└── main.jsx            # Entry point
```

## 🛠️ Running Locally
```bash
npm install
npm run dev
```

## ➕ Adding a New Image
Open `src/data/images.js` and add an object to the array:
```js
{
  id: 10,
  url: "https://your-image-url.jpg",
  title: "My New Photo",
  description: "A short description.",
  category: "Nature",
}
```
That's it — the gallery updates automatically!

## 🚢 Deployment
Deployed automatically via GitHub Actions → GitHub Pages.
