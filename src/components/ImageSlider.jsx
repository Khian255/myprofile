import { useState } from "react";

export default function ImageSlider({ images, alt }) {
  const [index, setIndex] = useState(0);
  const multiple = images.length > 1;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="slider">
      <img className="work-thumb" src={images[index]} alt={alt} />
      {multiple && (
        <>
          <button className="slider-btn prev" type="button" onClick={prev} aria-label="Previous screenshot">
            &#10094;
          </button>
          <button className="slider-btn next" type="button" onClick={next} aria-label="Next screenshot">
            &#10095;
          </button>
        </>
      )}
    </div>
  );
}
