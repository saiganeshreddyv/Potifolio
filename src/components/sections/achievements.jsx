import { Trophy, Award, Star, Medal } from "lucide-react"
import "../styles/achievements.css"

export default function Achievements() {
  const achievements = [
    {
      title: "Google Developer Group on Campus",
      description: "Secured 3rd prize in Creathon 2023 for developing a interactive dashboard for data visualization.",
      icon: <Trophy size={24} />,
      year: "2023",
    },
    {
      title: "AWS Cloud Practitioner",
      description:
        "Achieved AWS Certified Cloud Practitioner certification, demonstrating foundational cloud knowledge.",
      icon: <Star size={24} />,
      year: "2024",
    },
    // {
    //   title: "Hackathon Winner",
    //   description:
    //     "First place at the University Tech Hackathon for developing an innovative solution for remote learning.",
    //   icon: <Award size={24} />,
    //   year: "2022",
    // },
    // {
    //   title: "Coding Competition Finalist",
    //   description: "Reached the finals of the National Collegiate Programming Contest, ranking in the top 5%.",
    //   icon: <Medal size={24} />,
    //   year: "2021",
    // },
    // {
    //   title: "Open Source Contributor",
    //   description: "Active contributor to several open-source projects with over 50 accepted pull requests.",
    //   icon: <Star size={24} />,
    //   year: "2020-Present",
    // },
    // {
    //   title: "Teaching Assistant",
    //   description:
    //     "Selected as a teaching assistant for Data Structures and Algorithms course for two consecutive semesters.",
    //   icon: <Award size={24} />,
    //   year: "2021-2022",
    // },
  ]

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="section-title-underline"></div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-content">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-details">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">{achievement.description}</p>
                  <div className="achievement-year">{achievement.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

