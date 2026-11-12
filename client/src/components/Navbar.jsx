import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="glass-nav">
      <Link to="/" className="brand-link">
        <Logo />
      </Link>
      {/* <Link to="/years" className="btn small">Years</Link> */}
      {/* add here admin login btn */}
      <Link to="/admin" className="btn small">Admin</Link>
    </header>
  );
}
