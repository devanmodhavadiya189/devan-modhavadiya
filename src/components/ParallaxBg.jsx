import { useEffect } from 'react'
import { usetheme } from '../context/themecontext'

export default function ParallaxBg() {
  const { theme } = usetheme()
  
  useEffect(() => {
    const container = document.querySelector('.parallax-bg')
    if (!container) return
    
    container.innerHTML = ''
    
    const canvas = document.createElement('canvas')
    canvas.style.position = 'fixed'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100vw'
    canvas.style.height = '100vh'
    canvas.style.pointerEvents = 'none'
    canvas.style.zIndex = '1'
    canvas.style.maxWidth = '100vw'
    canvas.style.overflow = 'hidden'
    canvas.style.transform = 'translateZ(0)'
    canvas.style.backfaceVisibility = 'hidden'
    canvas.style.imageRendering = '-webkit-optimize-contrast'
    canvas.id = 'particle-canvas'
    container.appendChild(canvas)
    
    const ctx = canvas.getContext('2d')
    let animationFrameId
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const particles = []
    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 50 : 100
    const maxDistance = isMobile ? 120 : 160
    const mouse = { x: null, y: null, radius: isMobile ? 80 : 120 }
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 3
      })
    }
    
    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const isDark = theme === 'dark'
      const particleColor = isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)'
      
      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy
        
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
        
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < mouse.radius) {
          particle.x -= dx * 0.02
          particle.y -= dy * 0.02
        }
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particleColor
        ctx.fill()
        
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x
          const dy = particles[j].y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance)
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = isDark ? `rgba(255, 255, 255, ${opacity * 0.2})` : `rgba(0, 0, 0, ${opacity * 0.2})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      })
      
      animationFrameId = requestAnimationFrame(animate)
    }
    
    animate()
    
    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX
        mouseY = e.touches[0].clientY
      }
    }
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('resize', handleResize)
    
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [theme])
  
  return <div className="parallax-bg"></div>
}
