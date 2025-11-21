import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const sectionRef = useScrollAnimation('right')
  
  return (
    <section id="about" className="section scroll-section" ref={sectionRef}>
      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <h1>Devan Modhavadiya</h1>
            <h2>Software Engineer - Distributed & Backend Systems</h2>
            <p>Software engineer passionate about designing robust backend systems, distributed computing, and scalable architectures that power real-world applications.</p>
            <div className="hero-buttons">
              <a href="/devan_modhavadiya.pdf" download className="btn-primary">Download Resume</a>
              <a href="#contact" className="btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/profile.jpeg" alt="Devan Modhavadiya" />
          </div>
        </div>
      </div>
    </section>
  )
}
