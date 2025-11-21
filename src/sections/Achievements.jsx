import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Achievements() {
  const sectionRef = useScrollAnimation('right')
  
  const achievements = [
    { 
      title: 'CodeChef START172D', 
      description: 'Global Rank 143 in START172D on CodeChef',
      year: 'February 5, 2025',
      icon: 'trophy', // trophy , medal , award , star 
      link: 'https://www.codechef.com/rankings/START172D?itemsPerPage=100&order=asc&page=3&search=devnmodhvadiya&sortBy=rank'
    },
    { 
      title: 'LeetCode Weekly 462', 
      description: 'Global Rank 1143 in LeetCode Weekly Contest 462',
      year: 'April 21, 2024',
      icon: 'trophy',
      link: 'https://leetcode.com/contest/weekly-contest-462/ranking/46/?region=global_v2'
    },
    { 
      title: 'CodeChef START197C', 
      description: 'Global Rank 815 in START197C on CodeChef coding contest',
      year: 'July 30, 2025',
      icon: 'trophy',
      link: 'https://www.codechef.com/rankings/START197C?itemsPerPage=100&order=asc&page=1&search=devnmodhvadiya&sortBy=rank'
    },
    { 
      title: 'Educational Codeforces Round 173 (Div. 2)', 
      description: 'Global Rank 4350 in Educational Codeforces Round 173 (Div. 2) coding contest',
      year: 'December 24, 2024',
      icon: 'trophy',
      link: 'https://codeforces.com/contest/2043/standings/participant/199985962#p199985962'
    },
    { 
      title: 'Competitive Programming Summer Camp 2024', 
      description: 'Completed ”Competitive Programming Summer Camp 2024” held by IICPC (Inter IIT Competitive Programming Conclave).',
      year: 'Summer 2024',
      icon: 'medal',
      link: 'https://drive.google.com/file/d/1x12mpSNUGIUqq64wLedTvFVsze3oP3Gw/view?usp=sharing'
    },
    { 
      title: 'HackNUThon 6.0', 
      description: 'Participated in HackNUThon 6.0, developed a digital farming solution using an ML model on Reve Soil data to analyze correlations.',
      year: 'March 29 to 31, 2025',
      icon: 'medal',
    }
  ]
  
  return (
    <section id="achievements" className="section scroll-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Certificates & Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <i className={`fas fa-${achievement.icon}`}></i>
              <div className="achievement-year">{achievement.year}</div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
              {achievement.link && (
                <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="achievement-link-btn">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
