import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSubject } from "../api";
export default function Subject() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => { getSubject(slug).then(setData).catch(() => setData({ error: true })); }, [slug]);
  if (!data) return <p>Loading...</p>;
  if (data.error) return <p>Subject not found.</p>;
  return (
    <>
      <Link to={`/year/${data.subject.year}`} className="back">← Back to subjects</Link>
      <h1>{data.subject.name}</h1>
      {data.resources.length === 0 && <p className="muted">Abhi koi resource add nahi hua hai.</p>}
      <div className="grid three">
        {data.resources.map((r) => (
          <a key={r._id} href={r.url} target="_blank" rel="noreferrer" className="card glass">
            <span className="tag">{r.type}</span>
            <h3>{r.title}</h3>
            <span className="link">Open →</span>
          </a>
        ))}
      </div>
    </>
  );
}
