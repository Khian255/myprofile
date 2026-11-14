import ImageSlider from "../components/ImageSlider.jsx";
import { projects } from "../data/projects.js";

export default function Work() {
  return (
    <>
      <div className="hero">
        <h1>My Work</h1>
        <p>Everything I have made.</p>
      </div>
      <section>
        <h2>Projects</h2>
        <p className="hint">Use the arrows to see more screenshots of each project.</p>
        <div className="work-grid">
          {projects.map((p) => (
            <div className="work-card" key={p.title}>
              <ImageSlider images={p.images} alt={`Screenshot of ${p.title.split(" - ")[0]}`} />
              <h3>{p.title}</h3>
              <p className={p.placeholder ? "placeholder" : undefined}>{p.description}</p>
            </div>
          ))}
          <div className="work-card coming-soon">
            <h3>More Projects Coming Soon</h3>
            <p className="placeholder">I will be putting my upcoming projects here soon.</p>
          </div>
        </div>
      </section>
    </>
  );
}
