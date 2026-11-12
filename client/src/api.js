import { API } from "./config";
const token = () => localStorage.getItem("token");
async function req(path, opts = {}) {
  const res = await fetch(API + path, {
    ...opts,
    headers: { "Content-Type": "application/json", ...(token() ? { Authorization: `Bearer ${token()}` } : {}) },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Request failed");
  return data;
}
export const getSubjects = (year, q = "") => req(`/subjects?year=${year}&q=${encodeURIComponent(q)}`);
export const getSubject = (slug) => req(`/subjects/${slug}`);
export const login = (body) => req("/auth/login", { method: "POST", body: JSON.stringify(body) });
export const addResource = (body) => req("/resources", { method: "POST", body: JSON.stringify(body) });
export const deleteResource = (id) => req(`/resources/${id}`, { method: "DELETE" });
