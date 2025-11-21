import { useEffect } from 'react'
import './styles.css'
import { usetheme, Themeprovider } from './context/themecontext'
import ParallaxBg from './components/ParallaxBg'
import ThemeToggle from './components/ThemeToggle'
import Nav from './components/Nav'
import About from './sections/About'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import DSA from './sections/DSA'
import Contact from './sections/Contact'

function AppContent() {
  const { theme } = usetheme()
  
  useEffect(() => {
    const sections = document.querySelectorAll('.section')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    })
    
    sections.forEach(section => {
      observer.observe(section)
    })
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }, [])
  
  return (
    <div className={theme}>
      <ParallaxBg />
      <ThemeToggle />
      <Nav />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <DSA />
      <Contact />
    </div>
  )
}

function App() {
  return (
    <Themeprovider>
      <AppContent />
    </Themeprovider>
  )
}

export default App
