import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <li>
        <Link to={"/Home"}>Home</Link>
        <Link to={"/Projects"}>Projects</Link>
        <Link to={"/About"}>About</Link>
      </li>
    </nav>
  );
};

export default Navbar;
