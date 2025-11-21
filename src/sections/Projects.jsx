import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Projects() {
  const sectionRef = useScrollAnimation('left')
  
  const projects = [
    {
      title: 'Financial-Document-Chatbot-Multimodal-RAG-Based-Pipeline',
      description: 'This project is an AI-powered financial analysis system that uses multimodal RAG to process PDFs, spreadsheets, and reports while providing ratio insights, trends, and conversational answers. It runs on a modular backend that supports secure document handling, vector search, large-file uploads, and reliable data processing, all through a clean and responsive interface.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js','JWT','Multer + AWS S3 ','FastAPI','LangChain','Pinecone',],
      github: 'https://github.com/devanmodhavadiya189/Financial-Document-Chatbot-Multimodal-RAG-Based-Pipeline',
    },
    {
      title: 'SamVaad',
      description: 'Samvad is a real-time chat application that supports instant messaging, JWT authentication, and file sharing across text, media, and documents. It uses WebSockets for live communication, Cloudinary for storage, and offers user profiles with a fully responsive interface. The system combines a React–Tailwind frontend with a Node.js, Express, MongoDB, and Socket.io backend to deliver a fast and reliable messaging experience.',
      tech: ['React', 'Node.js', 'Tailwind CSS','Express.js','JWT','MongoDB','Cloudinary','Postman','Socket.IO'],
      github: 'https://github.com/devanmodhavadiya189/chatapp',
      live: 'https://chatapp-4vr7.onrender.com'
    },
    {
      title: 'Voting System',
      description: 'This project is a Java-based voting management system backed by MySQL, supporting election administration, political party operations, and voter registration through a command-line interface. It uses an object-oriented architecture with encapsulated database utilities, panel-based inheritance, and method overriding for specialized behaviors. The system allows region management, candidate handling, voter authentication, election control, vote casting, and real-time result tracking while enforcing age limits, Aadhaar validation, and duplicate-vote prevention.',
      tech: ['Java', 'JDBC (Java Database Coneecter)', 'MySQL' ,'Concepts of OOP'],
      github: 'https://github.com/devanmodhavadiya189/vote_machine',
    },
    {
      title: 'FaceLink',
      description: 'This project is a real-time peer-to-peer video calling application built with WebRTC, enabling direct browser-to-browser communication with live user presence, call notifications, and connection management. It uses a Node.js and Socket.IO backend for signaling and a React-Vite frontend for the interface, delivering smooth video calling, online-user tracking, and a responsive UI without relying on external streaming servers.',
      tech: ['React', 'WebRTC', 'Express.js', 'Socket.IO'],
      github: 'https://github.com/devanmodhavadiya189/FaceLink',
      live: 'https://facelink-xxlg.onrender.com'
    },
    {
      title: 'DevTube',
      description: 'This project is a console-based movie streaming simulator that includes user accounts, secure login, watch history, and simple movie recommendations. It uses a Binary Search Tree for searching movies, a graph for movie relationships, and linked lists for tracking views, allowing users to manage accounts, browse categories, and receive basic suggestions through a modular C++ implementation.',
      tech: ['C++', 'Data Structures & Algorithms', 'Binary Search Tree','Graph', 'Linked List'],
      github: 'https://github.com/devanmodhavadiya189/devtube',
    },
    {
      title: 'Wine Quality Prediction',
      description: 'This project predicts wine quality using chemical attributes from the Wine Quality dataset by performing data cleaning, statistical analysis, visualization, and machine-learning modeling. It preprocesses missing values, explores key distribution patterns, and uses KNN classification and regression with an 80-20 train-test split to evaluate accuracy and error.',
      tech: ['Next.js', 'MongoDB', 'NextAuth'],
      github: 'https://github.com/devanmodhavadiya189/Data-Cleaning-and-Predictive-Modeling-Project',
    }
  ]
  
  return (
    <section id="projects" className="section scroll-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-number">{String(idx + 1).padStart(2, '0')}</div>
              <h3 className="project-name">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech-stack">
                {project.tech.map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
