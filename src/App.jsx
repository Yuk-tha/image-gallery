// 📚 MENTOR NOTE — PARENT COMPONENT
// App.jsx is the PARENT. It:
//   1. Owns the data (imports images array)
//   2. Manages state (which category is selected)
//   3. Passes data DOWN to ImageCard via props
//
// Data flow in React is always: Parent → Child (one direction)

import { useState } from "react";
import ImageCard from "./components/ImageCard";
import images from "./data/images";
import "./App.css";

function App() {
  // 📚 useState — React's way to track changing values
  const [activeCategory, setActiveCategory] = useState("All");

  // 📚 Derived data — calculate categories from the array (no duplicates)
  const categories = ["All", ...new Set(images.map((img) => img.category))];

  // 📚 Filter images based on selected category
  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    // 📚 React Fragment (<>) — groups elements without adding a DOM node
    <>
      {/* HEADER */}
      <header className="gallery-header">
        <div className="header-content">
          <p className="header-eyebrow">React Image Gallery</p>
          <h1 className="header-title">
            The World in <span className="header-accent">Frames</span>
          </h1>
          <p className="header-subtitle">
            {images.length} handpicked photographs · click a category to explore
          </p>
        </div>
      </header>

      {/* MAIN */}
      <main className="gallery-main">
        {/* FILTER BAR — map() over categories */}
        <nav className="filter-bar" aria-label="Filter by category">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "filter-btn--active" : ""}`}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </nav>

        <p className="results-count">
          Showing <strong>{filteredImages.length}</strong> image
          {filteredImages.length !== 1 ? "s" : ""}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        </p>

        {/* GALLERY GRID — the core React pattern: map data → components */}
        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
            />
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="gallery-footer">
        <p>Built with React · Photos from Unsplash</p>
      </footer>
    </>
  );
}

export default App;
