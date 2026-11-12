import { Link } from "react-router-dom";


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


export default function AllSkills() {
    return (
        <section className="skill-section">

            <div className="section-heading">
                <span className="section-label">
                    LEVEL UP YOUR SKILLS
                </span>

                <h2 className="section-title">
                    Build Skills   <span className="grad">Build Your Future.</span>
                </h2>
                <p>
                    Explore in-demand tech skills and discover
                    your path towards a successful career.
                </p>
            </div>




            <div className="grid three">
                {skillPaths.map((skill) => (
                    <div className="card glass skill-card" key={skill.id}>

                        <div className="skill-icon">
                            {skill.icon}
                        </div>

                        <h3>{skill.title}</h3>

                        <p>{skill.description}</p>

                        <div className="skill-tags">
                            {skill.tags.map((tag) => (
                                <span className="skill-tag" key={tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="skill-footer">
                            <small>{skill.level}</small>

                            <Link
                                to={`/skills/${skill.id}`}
                                className="link"
                            >
                                Explore →
                            </Link>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    )
}