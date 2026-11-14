import { useEffect, useRef, useState } from "react";

// Replaces the old nav-dropdown.js: closes on outside click and Escape.
export default function Dropdown({ label, links }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <li className={`dropdown${open ? " open" : ""}`} ref={ref}>
      <button
        ref={toggleRef}
        className="dropdown-toggle"
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {label} &#9662;
      </button>
      <ul className="dropdown-menu">
        {links.map(({ name, url }) => (
          <li key={name}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
