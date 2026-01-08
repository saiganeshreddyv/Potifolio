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
            <h2 className="about-subtitle">Computer Science Graduate</h2>
            <p className="about-description">
              I am a Computer Science graduate who builds real-world software solutions for clients, with experience across web development, mobile application development, machine learning, and cloud-focused security systems. I work on designing, developing, and delivering scalable, secure, and user-centric applications based on practical requirements.
I handle projects end-to-end, including requirement understanding, development, testing, and deployment. I am comfortable working independently or in collaborative environments, adapt quickly to new technologies, and focus on delivering reliable, production-ready solutions that create real value.
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
                <span>Yerragondapalem, AP</span>
              </div>
              <div className="contact-item">
                <User className="contact-icon" size={18} />
                <span>Open to Full-Time Opportunities and Freelance Engagements</span>
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

