import { socialLinks } from "../data/links.js";

export default function Contact() {
  return (
    <>
      <div className="hero">
        <h1>Contact Me</h1>
        <p>Ways to reach me.</p>
      </div>
      <section>
        <h2>My Links</h2>
        <div className="contact-links">
          <p className="contact-link">Contact Number: 09541833276</p>
          {socialLinks.map(({ name, label, url }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
