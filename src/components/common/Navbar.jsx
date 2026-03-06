import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: "/Home", label: "Home" },
    { to: "/About", label: "About" },
    { to: "/Services", label: "Services" },
    { to: "/Projects", label: "Projects" },
    { to: "/Contact", label: "Contact" },
  ];

  return (
    <nav >

      <ul className="navbar-links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={location.pathname === to ? "active" : ""}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;