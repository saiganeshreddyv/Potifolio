import { Briefcase, Smartphone, Download, Lock } from "lucide-react"
import "../styles/internship.css"

export default function Internship() {
  return (
    <section id="internship" className="internship-section">
      <div className="container">
        <h2 className="section-title">Internship Experience</h2>

        <div className="internship-card">
          <div className="internship-header">
            <div>
              <h3 className="company-name">Jumbo Money</h3>
              <p className="role">
                <Smartphone size={16} /> Mobile Application Developer Intern
              </p>
            </div>
            <span className="duration">September 2025 – December 2025</span>
          </div>

          <p className="internship-description">
            During my internship, I worked on developing two connected mobile applications—one for Agents and one for Customers. The main purpose of these apps is to help sell industrial machines and manage customer leads. Customers use the app to explore machines and raise purchase requests, while agents use a separate app to manage multiple customers and leads. Along with machine sales, the application also provides loan services, allowing users to apply for different types of loans directly within the app. The system is designed so that every customer acts as a lead, enabling agents to track, verify, and assist customers throughout the buying and loan process. Both apps follow a similar loan and verification flow, while key features differ based on user roles.
          </p>

          <ul className="internship-points">
            <li>Built mobile application features using Flutter and Dart</li>
            <li>Integrated Firebase Authentication and Firestore for real-time data</li>
            <li>Worked on two mobile apps: one for Agents and one for Customers</li>
            <li>Supported industrial machine sales through a digital lead-based system</li>
            <li>Implemented document upload and verification for identity and loan purposes</li>
            <li>Performed testing and debugging to ensure stability and performance</li>
            <li>Tested complete workflows to ensure smooth and reliable app behavior</li>
          </ul>

          <div className="internship-actions">
            <a
              href="https://drive.google.com/file/d/1W3IeMg14o2eQFBvTPoLdjHAmDSySJqbA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="apk-btn"
            >
              <Download size={16} />
              Download APK
            </a>

            <div className="private-code">
              <Lock size={16} />
              Source Code (Private – Company Policy)
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
