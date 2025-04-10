"use client"

import { useState, useEffect } from "react"
import Navbar from "./navbar"
import About from "./sections/about"
import Education from "./sections/education"
import Skills from "./sections/skills"
import Projects from "./sections/projects"
import Achievements from "./sections/achievements"
import Resume from "./sections/resume"
import Footer from "./footer"
import { ThemeProvider } from "./theme-provider"
import "./styles/portfolio.css"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const checkSection = () => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    checkSection()
  }, [scrollY])

  return (
    <ThemeProvider>
      <div className="portfolio-container">
        <Navbar activeSection={activeSection} />
        <main className="main-content">
          <About />
          <Education />
          <Skills />
          <Projects />
          <Achievements />
          <Resume />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

