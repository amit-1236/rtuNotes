import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import Subject from "./pages/Subject";
import Admin from "./pages/Admin";
import Years from "./components/Years";
import AllSkills from "./pages/AllSkills";
import Gate from "./pages/Gate";

export default function App() {
  const { pathname } = useLocation();

  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Years" element={<Years />} />
      <Route path="/year/:year" element={<Subjects />} />
      <Route path="/subject/:slug" element={<Subject />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/skills" element={<AllSkills />} />
      <Route path="/gate" element={<Gate />} />
    </Routes>
  );


  return (
    <>
      <div className="blob b1" /><div className="blob b2" />
      <Navbar />
      <main className="container">{routes}</main>
      <Footer />
    </>
  );
}
