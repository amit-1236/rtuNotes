import { Link } from "react-router-dom";
import { YEARS } from "../config";

const ordinal = ["", "1st", "2nd", "3rd", "4th"];

function GradCapWatermark() {
  return (
    <svg
      className="card-watermark"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zm-7 9.18V16c0 2.21 3.13 4 7 4s7-1.79 7-4v-3.82l-7 3.82-7-3.82z" />
    </svg>
  );
}

function YearCards() {
  return (
    <div className="grid four">
      {YEARS.map((y) => (
        <Link key={y} to={`/year/${y}`} className="card glass">
          <GradCapWatermark />
          <div className="chip">{y}</div>
          <h3>{ordinal[y]} Year</h3>
          <p>Access all subjects and notes for {ordinal[y]} Year.</p>
          <span className="link">Explore →</span>
        </Link>
      ))}
    </div>
  );
}

function Years() {
  return (
    <>
      <section className="hero">
        <h1>
          Notes, Books & PYQs <br />
          <span className="grad">for every semester</span>
        </h1>
        <p>Year-wise subjects aur unke saare resources, ek hi jagah.</p>
        {/* <Link to="/year/3" className="btn">
          Start Exploring
        </Link> */}
      </section>

      <YearCards />
    </>
  );
}

export default Years;
export { Years, YearCards, GradCapWatermark };
