import { GraduationCap, Calendar, Award } from "lucide-react"
import "../styles/education.css"

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution:"Vignan's Foundation for Science, Technology and Research",
      location: "Guntur, Vadlamudi",
      period: "2021 - 2025",
      gpa: "7.7/10.0",
      achievements: [
        // "Dean's List: All semesters",
        // "Graduated with Honors",
        // "Senior Project: Developed an AI-powered study assistant",
      ],
      courses: [
        "Data Structures and Algorithms",
        "Database Systems",
        "Web Development",
        "Artificial Intelligence",
        "Machine Learning",
        "Computer Networks",
        "Operating Systems",
        "Software Engineering",
      ],
    },
    {
      degree: "Intermediate Education",
      institution: "NRI Junior College",
      location: "Guntur, Andhra Pradesh",
      period: "2019 - 2021",
      gpa: "8.7/10.0",
      // achievements: [
      //   "Valedictorian",
      //   "President of Computer Science Club",
      //   "First place in Regional Coding Competition",
      // ],
      courses: ["MPC"],
    },
    {
      degree: " High School",
      institution: "Chaitanya High School",
      location: "Yerragondapalem, Andhra Pradesh",
      period: "2018 - 2019",
      gpa: "9.3/10.0",
      // achievements: [
      //   "Valedictorian",
      //   "President of Computer Science Club",
      //   "First place in Regional Coding Competition",
      // ],
      courses: [],
    }
  ]

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="section-title-underline"></div>

        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-card-content">
                <div className="education-icon">
                  <GraduationCap size={32} />
                </div>

                <div className="education-details">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <div className="education-meta">
                    <div className="education-institution">
                      <span>
                        {edu.institution}, {edu.location}
                      </span>
                    </div>
                    <div className="education-period">
                      <Calendar size={14} className="meta-icon" />
                      <span>{edu.period}</span>
                      <span className="meta-separator">•</span>
                      <Award size={14} className="meta-icon" />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>

                  <div className="education-achievements">
                    {/* <h4 className="subsection-title">Achievements</h4> */}
                    {/* <ul className="achievement-list">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul> */}
                  </div>

                  <div className="education-courses">
                    <h4 className="subsection-title">Relevant Coursework</h4>
                    <div className="course-tags">
                      {edu.courses.map((course, i) => (
                        <span key={i} className="course-tag">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

