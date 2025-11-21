import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Experience() {
  const sectionRef = useScrollAnimation('right')
  
  const experiences = [
    {
      title: 'Executive Committee Member at Computer Society of India, Nirma University',
      company: 'Technical Club',
      date: 'Oct 2024 - Present',
      location:'Ahmedabad, India',
      description: 'Organized events and workshops, engaging students in technical learning.',
      responsibilities: [
        'Mentoring Juniors'
      ]
    },
    {
      title: 'Member at Computer Society of India, Nirma University',
      company: 'Techinacal Club',
      location:'Ahmedabad, India',
      date: 'Oct 2024 - Present',
      description: 'Participated in club activities, events, and workshops.',
    },
  ]
  
  return (
    <section id="experience" className="section scroll-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <div className="date">{exp.date}</div>
              {exp.location && <p>{exp.location}</p>}
              <p>{exp.description}</p>
             { exp.responsibilities && <ul>
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
