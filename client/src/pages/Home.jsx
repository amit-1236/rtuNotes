import { Link } from "react-router-dom";
import { YearCards } from "../components/Years";
import TechSkills from "./TechSkills";
import Gate from "./Gate";

const CERTIFICATION_PLATFORMS = [
  {
    name: "SWAYAM",
    href: "https://swayam.gov.in/",
    logo: "/logos/swayam.png",
    desc: "Government online courses.",
  },
  {
    name: "NPTEL",
    href: "https://nptel.ac.in/",
    logo: "/logos/nptel.png",
    desc: "IIT and IISc online courses and certifications.",
  },
  {
    name: "Infosys Springboard",
    href: "https://infyspringboard.onwingspan.com/",
    logo: "/logos/infosys.svg",
    desc: "Digital learning and professional skills.",
  },
  {
    name: "Coursera",
    href: "https://www.coursera.org/",
    logo: "/logos/coursera.svg",
    desc: "Courses from top universities.",
  },
];
const skillPaths = [
  {
    id: "web-development",
    icon: "🌐",
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript, React and build modern websites.",
    tags: ["HTML", "CSS", "React", "Node.js"],
    level: "Beginner to Advanced",
  },
  {
    id: "ai-ml",
    icon: "🤖",
    title: "AI & Machine Learning",
    description: "Explore Artificial Intelligence, Python, ML and Generative AI.",
    tags: ["Python", "AI", "ML", "GenAI"],
    level: "Beginner to Advanced",
  },
  {
    id: "dsa",
    icon: "🧠",
    title: "DSA & Problem Solving",
    description: "Master data structures, algorithms and coding problems.",
    tags: ["Arrays", "Trees", "Graphs", "Algorithms"],
    level: "All Levels",
  },
  {
    id: "cybersecurity",
    icon: "🔐",
    title: "Cybersecurity",
    description: "Understand ethical hacking and digital security.",
    tags: ["Networking", "Security", "Linux"],
    level: "Beginner to Advanced",
  },
  {
    id: "cloud-devops",
    icon: "☁️",
    title: "Cloud & DevOps",
    description: "Learn cloud platforms, deployment and automation.",
    tags: ["AWS", "Docker", "Azure", "CI/CD"],
    level: "Intermediate",
  },
  {
    id: "data-science",
    icon: "📊",
    title: "Data Science",
    description: "Discover data analytics, Python, SQL and statistics.",
    tags: ["Python", "SQL", "Analytics"],
    level: "Beginner to Advanced",
  },
];
export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>
          Notes, Books & PYQs <br />
          <span className="grad">for every semester</span>
        </h1>
        <p>Year-wise subjects aur unke saare resources, ek hi jagah.</p>
        <Link to="/year/3" className="btn">
          Start Exploring
        </Link>
      </section>

      <section>
        <Link to="/gate" className="btn">
          GATE Resources
        </Link>
      </section>

      <section className="home-section">
        <div className="section-head">
          <div>
            <h2 className="section-title">
              Academic <span className="grad">Years</span>
            </h2>
            <p className="muted">Browse resources by academic year.</p>
          </div>
          <Link to="/years" className="section-link">
            View All →
          </Link>
        </div>
        <YearCards />
      </section>

      <section className="home-section">
        <div className="section-head">
          <div>
            <h2 className="section-title">
              Learn & <span className="grad">Get Certified</span>
            </h2>
            <p className="muted">Curated external tools and learning platforms.</p>
          </div>
        </div>

        <div className="grid four">
          {CERTIFICATION_PLATFORMS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className="card glass"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="chip chip-logo">
                <img src={p.logo} alt={`${p.name} Logo`} />
              </div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <span className="link">Website ↗</span>
            </a>
          ))}
        </div>
      </section>




      <TechSkills />

    </>
  );
}
