import { Code, Server, Database, Layout, Cpu, GitBranch } from "lucide-react"
import "../styles/skills.css"

export default function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "Python", level: 70 },
        { name: "C", level: 65 },
        { name: "Java", level: 40 },
        { name: "JavaScript", level: 50 },
      ],
    },
    {
      name: "Frontend Development",
      icon: <Layout size={24} />,
      skills: [
        { name: "HTML5/CSS3", level: 70 },
        { name: "React.js", level: 70 },
        { name: "PHP", level: 60 },
        

      ],
    },
    {
      name: "Backend Development",
      icon: <Server size={24} />,
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 65 },
        { name: "Flask", level: 50 },
        { name: "RESTful APIs", level: 50 },
      ],
    },
    {
      name: "Databases",
      icon: <Database size={24} />,
      skills: [
        { name: "MongoDB", level: 60 },
        { name: "MySQL", level: 70 },
        { name: "Firebase", level: 50 },
      ],
    },
    {
      name: "DevOps & Tools",
      icon: <Cpu size={24} />,
      skills: [
        // { name: "Git", level: 90 },
        // { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        // { name: "CI/CD", level: 65 },
      ],
    },
    {
      name: "Version Control",
      icon: <GitBranch size={24} />,
      skills: [
        { name: "Git", level: 60 },
        { name: "GitHub", level: 65 },
        // { name: "GitLab", level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="section-title-underline"></div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon">{category.icon}</div>
                <h3 className="skill-category">{category.name}</h3>
              </div>

              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

