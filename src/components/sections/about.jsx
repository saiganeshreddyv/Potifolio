import { User, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import "../styles/about.css"
import saiimage from "./sai1.jpg"

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h1 className="about-title">
              Hi, I'm <span className="highlight">V. Sai Ganesh Reddy</span>
            </h1>
            <h2 className="about-subtitle">Computer Science Student</h2>
            <p className="about-description">
            I’m a final-year Computer Science student with a passion for building real-world solutions through code. I enjoy working on projects involving web development, mobile apps, machine learning, and cloud security. As a quick learner and problem solver, I’m eager to grow as a developer and contribute to meaningful tech-driven innovations.
            </p>

            <div className="contact-info">
              <div className="contact-item">
                <Mail className="contact-icon" size={18} />
                <a href="mailto:saiganeshvanipenta@gmail.com" className="contact-link">
                  saiganeshvanipenta@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" size={18} />
                <span>Guntur, AP</span>
              </div>
              <div className="contact-item">
                <User className="contact-icon" size={18} />
                <span>Available for full-time positions</span>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/saiganeshreddyv"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sai-ganesh-vanipenta-097908289/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter Profile"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="profile-image-container">
            <div className="profile-image-wrapper">
              <Image
                src={saiimage}
                alt="V. Sai Ganesh Reddy"
                fill
                className="profile-image"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

