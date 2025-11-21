import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Education() {
  const sectionRef = useScrollAnimation('right')
  
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Nirma University, Ahmedabad',
      date: '2023 - 2027',
      cgpa: 'Current CGPA: 8.92',
      description: 'Studying key CS subjects including Operating Systems, Object-Oriented Programming, Database Management Systems, Computer Networks, and Data Structures & Algorithms, along with a minor specialization in Adaptive AI.'
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Royal Science School, Dhoraji',
      date: 'Jun 2021 - May 2023 ',
      cgpa: 'GUJCET: 108.75/120 (99.42 PR) | JEE: 97.74 PR | Board: 96.56 PR',
      description: 'Science stream with Physics, Chemistry, and Mathematics.'
    }
  ]
  
  return (
    <section id="education" className="section scroll-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {education.map((edu, idx) => (
            <div key={idx} className="timeline-item">
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <div className="date">{edu.date}</div>
              {edu.cgpa && <p className="cgpa">{edu.cgpa}</p>}  
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
