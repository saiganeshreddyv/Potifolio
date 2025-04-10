import { Heart, Mail, Github, Linkedin, Twitter } from "lucide-react"
import "./styles/footer.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            <a href="mailto:john.doe@example.com" className="social-link" aria-label="Email">
              <Mail size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
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

          <p className="copyright">© {currentYear} Sai Ganesh Reddy. All rights reserved.</p>
          {/* <p className="made-with">
            Made with <Heart size={14} className="heart-icon" /> using React.js
          </p> */}
        </div>
      </div>
    </footer>
  )
}

