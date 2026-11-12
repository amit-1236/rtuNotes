import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import Subject from "./pages/Subject";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <>
      <div className="blob b1" /><div className="blob b2" />
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/year/:year" element={<Subjects />} />
          <Route path="/subject/:slug" element={<Subject />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
