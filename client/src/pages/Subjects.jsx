import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSubjects } from "../api";
const ordinal = ["", "1st", "2nd", "3rd", "4th"];
export default function Subjects() {
  const { year } = useParams();
  const [q, setQ] = useState("");
  const [list, setList] = useState([]);
  useEffect(() => { getSubjects(year, q).then(setList).catch(() => setList([])); }, [year, q]);
  return (
    <>
      <div className="head-row">
        <div>
          <Link to="/" className="back">← Back to years</Link>
          <h1>Subjects for <span className="grad">{ordinal[year]} Year</span></h1>
        </div>
        <input className="search" placeholder="Search subjects..." value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <div className="grid three">
        {list.map((s) => (
          <Link key={s._id} to={`/subject/${s.slug}`} className="card glass">
            <h3>{s.name}</h3>
            <p>Access all resources for this subject</p>
            <span className="link">View Resources →</span>
          </Link>
        ))}
      </div>
    </>
  );
}
