import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function DSA() {
  const sectionRef = useScrollAnimation('left')
  
  const platforms = [
    { name: 'LeetCode', url: import.meta.env.VITE_LEETCODE_URL || '#', rating: 'Max rating : 1748 ', icon: 'leetcode' },
    { name: 'Codeforces', url: import.meta.env.VITE_CODEFORCES_URL || '#', rating: 'Pupil', icon: 'codeforces' },
    { name: 'CodeChef', url: import.meta.env.VITE_CODECHEF_URL || '#', rating: '3 Star', icon: 'codechef' }
  ]
  
  return (
    <section id="dsa" className="section scroll-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Competitive Programming</h2>
        <div className="dsa-grid">
          {platforms.map(platform => (
            <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="dsa-card">
              <i className={`si si-${platform.icon}`} style={{ fontSize: '52px' }}></i>
              <h3>{platform.name}</h3>
              <p>{platform.rating}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
