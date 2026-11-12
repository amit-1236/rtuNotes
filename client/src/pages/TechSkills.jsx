
import { Link } from "react-router-dom";

const skills = [
    {
        title: "Web Development",
        description: "Learn to build modern websites and powerful web applications.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
    },
    {
        title: "AI & Machine Learning",
        description: "Explore Artificial Intelligence, Machine Learning and Generative AI.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900",
    },
    {
        title: "DSA & Problem Solving",
        description: "Master data structures, algorithms and coding challenges.",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=900",
    },
    {
        title: "Cloud & Cybersecurity",
        description: "Explore cloud computing, digital security and modern technologies.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900",
    },
];

export default function TechSkills() {
    return (
        <section className="tech-skills-section">

            <div className="tech-heading">
                <span>LEARN • BUILD • GROW</span>
                <h2>Explore Tech Skills 🚀</h2>
                <p>
                    Discover in-demand technology skills and
                    start building your future today.
                </p>
            </div>

            <div className="tech-skills-grid">

                {skills.map((skill) => (
                    <div className="tech-skill-card" key={skill.title}>

                        <div className="tech-skill-image">
                            <img
                                src={skill.image}
                                alt={skill.title}
                                loading="lazy"
                            />
                        </div>

                        <div className="tech-skill-content">
                            <h3>{skill.title}</h3>
                            <p>{skill.description}</p>
                        </div>

                    </div>
                ))}

            </div>

            <div className="explore-all-skills">
                <Link to="/skills" className="explore-skills-btn">
                    Explore All Skills →
                </Link>
            </div>

        </section>
    );
}
