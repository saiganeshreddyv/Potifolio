import { FileText, Download, Eye } from "lucide-react"
import "../styles/resume.css"

export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="section-title-underline"></div>

        <p className="resume-description">
          Download my resume to get a comprehensive overview of my education, skills, projects, and work experience.
        </p>

        <div className="resume-buttons">
          <a href="https://drive.google.com/file/d/1w7VccVoR2bOZ4p_N7O16nNH88jATdoE8/view?usp=sharing" target="_blank" download className="download-button">
            <Download size={18} className="button-icon" />
            Download Resume
          </a>
          <a href="https://drive.google.com/file/d/1w7VccVoR2bOZ4p_N7O16nNH88jATdoE8/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="view-button">
            <Eye size={18} className="button-icon" />
            View Resume
          </a>
        </div>

        <div className="resume-highlights">
          <h3 className="highlights-title">
            <FileText size={24} className="highlights-icon" />
            Resume Highlights
          </h3>

          <div className="highlights-grid">
            <div className="highlights-column">
              <h4 className="highlights-subtitle">Technical Skills</h4>
              <ul className="highlights-list">
                <li>• Full-stack web development</li>
                <li>• Mobile app development</li>
                <li>• Database design and management</li>
                <li>• Cloud services (AWS, Firebase)</li>
                <li>• Version control systems</li>
              </ul>
            </div>

            <div className="highlights-column">
              <h4 className="highlights-subtitle">Soft Skills</h4>
              <ul className="highlights-list">
                <li>• Problem-solving</li>
                <li>• Team collaboration</li>
                <li>• Project management</li>
                <li>• Technical writing</li>
                <li>• Presentation skills</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

