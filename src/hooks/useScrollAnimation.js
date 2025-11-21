import { useEffect, useRef } from 'react'

export function useScrollAnimation(direction = 'right') {
  const ref = useRef(null)
  const hasAnimated = useRef(false)
  
  useEffect(() => {
    const element = ref.current
    if (!element) return
    
    const translateValue = direction === 'right' ? '100px' : '-100px'
    
    element.style.transform = `translateX(${translateValue})`
    
    const children = element.querySelectorAll('.section-title, .hero-content > *, .skill-card, .project-card, .education-item, .experience-item, .dsa-card, .contact-grid > *')
    children.forEach((child, index) => {
      child.style.opacity = '0'
      child.style.transform = `translateX(${direction === 'right' ? '50px' : '-50px'})`
      child.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`
    })
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            
            element.style.transform = 'translateX(0)'
            element.style.opacity = '1'
            
            children.forEach((child) => {
              child.style.opacity = '1'
              child.style.transform = 'translateX(0)'
            })
          }
        })
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
      }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [direction])
  
  return ref
}
