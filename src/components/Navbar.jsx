import { NavLink, Link } from "react-router-dom";
import Dropdown from "./Dropdown.jsx";
import { navLinks, socialLinks } from "../data/links.js";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        My Profile
      </Link>
      <ul>
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <NavLink to={to} end className={({ isActive }) => (isActive ? "active" : undefined)}>
              {label}
            </NavLink>
          </li>
        ))}
        <Dropdown label="Connect" links={socialLinks} />
      </ul>
    </nav>
  );
}
