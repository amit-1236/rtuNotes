import { useEffect, useState } from "react";
import { addResource, deleteResource, getSubject, getSubjects, login } from "../api";

export default function Admin() {
  const [authed, setAuthed] = useState(!!localStorage.getItem("token"));
  const [creds, setCreds] = useState({ email: "", password: "" });
  const [year, setYear] = useState(3);
  const [subjects, setSubjects] = useState([]);
  const [form, setForm] = useState({ subject: "", title: "", type: "notes", url: "" });
  const [resources, setResources] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => { if (authed) getSubjects(year).then(setSubjects); }, [authed, year]);
  const loadResources = (id) => {
    const s = subjects.find((x) => x._id === id);
    if (s) getSubject(s.slug).then((d) => setResources(d.resources));
  };
  useEffect(() => { if (form.subject) loadResources(form.subject); }, [form.subject, subjects]);

  const doLogin = async (e) => {
    e.preventDefault();
    try { const { token } = await login(creds); localStorage.setItem("token", token); setAuthed(true); }
    catch (err) { setMsg(err.message); }
  };
  const submit = async (e) => {
    e.preventDefault();
    try { await addResource(form); setForm({ ...form, title: "", url: "" }); setMsg("Added ✓"); loadResources(form.subject); }
    catch (err) { setMsg(err.message); }
  };

  if (!authed)
    return (
      <form className="glass panel" onSubmit={doLogin}>
        <h2>Admin Login</h2>
        <input placeholder="Email" value={creds.email} onChange={(e) => setCreds({ ...creds, email: e.target.value })} />
        <input type="password" placeholder="Password" value={creds.password} onChange={(e) => setCreds({ ...creds, password: e.target.value })} />
        <button className="btn">Login</button><p className="muted">{msg}</p>
      </form>
    );

  return (
    <div className="glass panel">
      <h2>Add Resource</h2>
      <form onSubmit={submit}>
        <select value={year} onChange={(e) => setYear(e.target.value)}>{[1,2,3,4].map((y) => <option key={y} value={y}>Year {y}</option>)}</select>
        <select required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
          <option value="">Select subject</option>{subjects.map((s) => <option key={s._id} value={s._id}>{s.name}</option>)}
        </select>
        <input required placeholder="Title (e.g. Unit 1 Notes)" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
          {["notes","book","pyq","syllabus","link"].map((t) => <option key={t}>{t}</option>)}
        </select>
        <input required placeholder="Drive / PDF link" value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} />
        <button className="btn">Add</button> <span className="muted">{msg}</span>
      </form>
      {resources.map((r) => (
        <div key={r._id} className="row"><span>{r.title} <em>({r.type})</em></span>
          <button className="danger" onClick={() => deleteResource(r._id).then(() => loadResources(form.subject))}>Delete</button></div>
      ))}
      <button className="link-btn" onClick={() => { localStorage.removeItem("token"); setAuthed(false); }}>Logout</button>
    </div>
  );
}
