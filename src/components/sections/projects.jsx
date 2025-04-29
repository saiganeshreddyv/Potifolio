import { Github, ExternalLink, Code } from "lucide-react"
import Image from "next/image"
import "../styles/projects.css"
import job from "./job.png"
import pnemonia from "./pneomonia.png"

export default function Projects() {
  const projects = [
    {
      title: "Job Portal",
      description:
        "Developed a full-stack Job Portal that bridges job seekers and employers, featuring functionalities like job search, job applications, and job postings. The platform includes intuitive UI for seamless interaction between applicants and recruiters.",
      image: job,
      technologies: ["Html", "JS", "PHP", "MySql"],
      // demoLink: "https://project-demo.com",
      githubLink: "https://github.com/saiganeshreddyv/Job_Portal",
      featured: true,
    },
    {
      title: "Deep Learning for Pneumonia Diagnosis in X-Rays",
      description:
        "The model automatically detects pneumonia from X-ray images by combining deep learning with machine learning classifiers, enhancing accuracy through advanced image preprocessing.",
      image: pnemonia,
      technologies: ["Python", "TensorFlow", "ML", "DL"],
      // demoLink: "https://project-demo.com",
      githubLink: "https://github.com/saiganeshreddyv/Pneumonia",
      featured: true,
    },
    {
      title: "Event Management System",
      description:
        "Developed a secure, responsive web-based Event Management System with user authentication, event registration, and integrated feedback functionality.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["HTML", "CSS", "JS", "MySQL", "PHP"],
      // demoLink: "https://project-demo.com",
      githubLink: "https://github.com/saiganeshreddyv/Event-Management",
      featured: false,
    },
    {
      title: "Weather Application",
      description:
        "Built a Flutter-based Weather App that fetches real-time weather conditions based on user-selected locations with a sleek and interactive UI.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["DART", "OpenWeather API", "Firebase"],
      // demoLink: "https://project-demo.com",
      githubLink: "https://github.com/saiganeshreddyv/Weather",
      featured: false,
    },
    {
      title: "Sign Language Recognition",
      description: "Built a Deep Learning-based Sign Language Recognition system to accurately translate hand gestures into text, enabling real-time communication support for the Deaf and Hard of Hearing communities.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "TensorFlow", "DL"],
      // demoLink: "https://project-demo.com",
      githubLink: "https://github.com/saiganeshreddyv/Sign-Language-Recognition",
      featured: false,
    },
    {
      title: "Secure Mobile Entry System",
      description: "Designed and developed a secure mobile authentication system using Flutter, integrating fingerprint and facial recognition with Firebase backend to ensure fast and reliable user verification.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React Native", "Firebase"],
      // demoLink: "https://project-demo.com",
      githubLink: "https://github.com/saiganeshreddyv/Secure-Mobile-Entry-System",
      featured: false,
    },
  ]

  // Separate featured projects
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="section-title-underline"></div>

        {/* Featured Projects */}
        <div className="featured-projects">
          <h3 className="subsection-title">Featured Projects</h3>
          <div className="featured-projects-grid">
            {featuredProjects.map((project, index) => (
              <div key={index} className="featured-project-card">
                <div className="project-image-container">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="project-image" />
                </div>
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="technology-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {/* <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink size={16} className="link-icon" />
                      Live Demo
                    </a> */}
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Github size={16} className="link-icon" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <h3 className="subsection-title">Other Projects</h3>
        <div className="other-projects-grid">
          {otherProjects.map((project, index) => (
            <div key={index} className="other-project-card">
              <div className="other-project-header">
                <h4 className="other-project-title">{project.title}</h4>
                <div className="other-project-links">
                  {/* <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="other-project-link"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <ExternalLink size={18} />
                  </a> */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="other-project-link"
                    aria-label={`Source code for ${project.title}`}
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <p className="other-project-description">{project.description}</p>

              <div className="other-project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="other-technology-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="more-projects">
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="more-projects-button"
          >
            <Code size={18} className="button-icon" />
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

