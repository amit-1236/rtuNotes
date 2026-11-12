import { Link } from "react-router-dom";
import { YEARS } from "../config";
const ordinal = ["", "1st", "2nd", "3rd", "4th"];
export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Notes, Books & PYQs <br /><span className="grad">for every semester</span></h1>
        <p>Year-wise subjects aur unke saare resources, ek hi jagah.</p>
        <Link to="/year/3" className="btn">Start Exploring</Link>
      </section>
      <h2 className="section-title">Select Your Year</h2>
      <div className="grid four">
        {YEARS.map((y) => (
          <Link key={y} to={`/year/${y}`} className="card glass">
            <div className="chip">{y}</div>
            <h3>{ordinal[y]} Year</h3>
            <p>Explore all subjects for {ordinal[y]} Year</p>
            <span className="link">View Subjects →</span>
          </Link>
        ))}
      </div>
    </>
  );
}
