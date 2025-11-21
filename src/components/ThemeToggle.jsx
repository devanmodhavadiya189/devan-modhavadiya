import { usetheme } from '../context/themecontext'

export default function ThemeToggle() {
  const { theme, toggletheme } = usetheme()
  
  return (
    <button onClick={toggletheme} className="theme-toggle" aria-label="Toggle theme">
      <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
    </button>
  )
}
