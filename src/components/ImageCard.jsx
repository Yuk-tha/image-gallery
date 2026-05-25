// 📚 MENTOR NOTE — CHILD COMPONENT
// ImageCard is a REUSABLE component. It doesn't know about the full list —
// it only knows about ONE image, passed to it via PROPS.
//
// Props are like function arguments for components.
// Parent sends data DOWN to child using props.
// Child NEVER modifies props — it's read-only (one-way data flow).

import "./ImageCard.css";

// 👇 We destructure props directly: { image } instead of props.image
function ImageCard({ image }) {
  // image = { id, url, title, description, category }

  return (
    // 📚 No wrapper div needed here — the article tag is semantic HTML
    // Use <React.Fragment> or <> </> when you truly need no DOM element
    <article className="image-card">
      {/* The image itself */}
      <div className="image-card__image-wrapper">
        <img
          src={image.url}
          alt={image.title}         // ← Always add alt for accessibility!
          className="image-card__img"
          loading="lazy"            // ← Lazy load = better performance
        />
        {/* Category badge — shown on hover via CSS */}
        <span className="image-card__badge">{image.category}</span>
      </div>

      {/* Text content below the image */}
      <div className="image-card__body">
        <h3 className="image-card__title">{image.title}</h3>
        <p className="image-card__desc">{image.description}</p>
      </div>
    </article>
  );
}

export default ImageCard;
