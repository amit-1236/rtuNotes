import { Link, NavLink } from "react-router-dom";
import { SITE_NAME, SITE_SUFFIX, YEARS } from "../config";
export default function Navbar() {
  return (
    <header className="glass-nav">
      <Link to="/" className="logo">{SITE_NAME}</Link>
      <nav>
        {YEARS.map((y) => <NavLink key={y} to={`/year/${y}`}>Year {y}</NavLink>)}
        <Link to="/admin" className="btn small">Admin</Link>
      </nav>

    </header>
  );
}
