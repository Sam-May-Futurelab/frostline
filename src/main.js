import './style.css'

// FROSTLINE Snowboard Website - Enhanced with Beautiful Scroll Animations
class FrostlineAnimations {
  constructor() {
    this.init()
  }

  init() {
    this.createSnowParticles()
    this.initHeroAnimations()
    this.initGearSection()
    this.initScrollRevealAnimations()
    this.initSmoothScroll()
    this.initInteractiveEffects()
    this.initParallaxEffects()
    this.initSectionTransitions()
    this.initNavigationEffects()
    this.initCursorEffects()
  }

  // Create animated snow particles
  createSnowParticles() {
    const snowContainer = document.getElementById('snow-container')
    if (!snowContainer) return

    // Create floating snow particles with varied sizes and animations
    for (let i = 0; i < 100; i++) {
      const snowflake = document.createElement('div')
      const size = Math.random() * 6 + 2 // 2-8px
      const opacity = Math.random() * 0.8 + 0.2 // 0.2-1.0
      const duration = Math.random() * 8 + 5 // 5-13s
      const delay = Math.random() * 5 // 0-5s
      const drift = Math.random() * 100 - 50 // -50 to 50px drift
      
      snowflake.className = 'snow-particle enhanced-snow'
      snowflake.style.cssText = `
        position: fixed;
        pointer-events: none;
        z-index: 1000;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(255,255,255,${opacity}), rgba(179,229,252,${opacity * 0.5}));
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: -10px;
        animation: enhanced-snow-fall ${duration}s linear infinite ${delay}s;
        box-shadow: 0 0 ${size * 2}px rgba(79, 195, 247, ${opacity * 0.3});
      `
      
      snowflake.style.setProperty('--drift', drift + 'px')
      snowContainer.appendChild(snowflake)
    }

    // Add enhanced snow fall animation
    if (!document.querySelector('#enhanced-snow-styles')) {
      const style = document.createElement('style')
      style.id = 'enhanced-snow-styles'
      style.textContent = `
        @keyframes enhanced-snow-fall {
          0% {
            transform: translateY(-10px) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(var(--drift)) rotate(360deg);
            opacity: 0;
          }
        }
        
        .enhanced-snow:nth-child(3n) {
          animation-timing-function: ease-in-out;
        }
        
        .enhanced-snow:nth-child(3n+1) {
          animation-timing-function: ease-out;
        }
        
        .enhanced-snow:nth-child(3n+2) {
          animation-timing-function: ease-in;
        }
      `
      document.head.appendChild(style)
    }
  }

  // Initialize hero animations with vanilla JS
  initHeroAnimations() {
    const heroTitle = document.getElementById('hero-title')
    const heroSubtitle = document.getElementById('hero-subtitle')
    const heroButtons = document.getElementById('hero-buttons')
    const snowboarder = document.getElementById('snowboarder')

    // Animate hero elements with staggered timing
    setTimeout(() => {
      if (heroTitle) {
        heroTitle.style.transition = 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        heroTitle.style.opacity = '1'
        heroTitle.style.transform = 'translateY(0)'
      }
    }, 200)

    setTimeout(() => {
      if (heroSubtitle) {
        heroSubtitle.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        heroSubtitle.style.opacity = '1'
        heroSubtitle.style.transform = 'translateY(0)'
      }
    }, 700)

    setTimeout(() => {
      if (heroButtons) {
        heroButtons.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        heroButtons.style.opacity = '1'
        heroButtons.style.transform = 'translateY(0)'
      }
    }, 1200)

    setTimeout(() => {
      if (snowboarder) {
        snowboarder.style.transition = 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        snowboarder.style.opacity = '1'
        snowboarder.style.transform = 'translateX(0) scale(1)'
      }
    }, 1700)
  }

  // Initialize gear section
  initGearSection() {
    const gearCards = document.querySelectorAll('.gear-card')
    
    // Add staggered animation delays
    gearCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.2}s`
    })
  }

  // Enhanced scroll-triggered reveal animations
  initScrollRevealAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, observerOptions)

    // Observe all reveal elements
    const revealElements = document.querySelectorAll('.reveal-element')
    revealElements.forEach(element => {
      observer.observe(element)
    })

    // Special animations for specific sections
    const aboutStats = document.querySelectorAll('.stat-card')
    aboutStats.forEach((stat, index) => {
      stat.classList.add('reveal-element')
      stat.style.transitionDelay = `${index * 0.1}s`
      observer.observe(stat)
    })

    const testimonialCards = document.querySelectorAll('.testimonial-card')
    testimonialCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.2}s`
      observer.observe(card)
    })
  }

  // Smooth scroll for navigation links
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })
  }

  // Interactive effects
  initInteractiveEffects() {
    // Enhanced button hover effects
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary')
    buttons.forEach(button => {
      button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)'
        this.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      })
      
      button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)'
      })
    })

    // Gear card hover effects
    const gearCards = document.querySelectorAll('.gear-card')
    gearCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)'
      })
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)'
      })
    })

    // Testimonial card hover effects
    const testimonialCards = document.querySelectorAll('.testimonial-card')
    testimonialCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)'
        this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)'
      })
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)'
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)'
      })
    })
  }

  // Parallax effects
  initParallaxEffects() {
    let ticking = false

    function updateParallax() {
      const scrolled = window.pageYOffset

      // Hero parallax
      const hero = document.getElementById('hero')
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`
      }

      // About section mountain parallax
      const mountainSilhouette = document.querySelector('.mountain-silhouette')
      if (mountainSilhouette) {
        const aboutSection = document.getElementById('about')
        const rect = aboutSection?.getBoundingClientRect()
        if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
          const offset = (window.innerHeight - rect.top) * 0.1
          mountainSilhouette.style.transform = `translateY(${offset}px)`
        }
      }

      // Snow particles additional movement
      const snowParticles = document.querySelectorAll('.snow-particle')
      snowParticles.forEach((particle, index) => {
        if (index % 3 === 0) { // Only affect every 3rd particle for performance
          const offset = scrolled * (0.1 + (index % 3) * 0.05)
          particle.style.transform = `translateY(${offset}px)`
        }
      })

      ticking = false
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax)
        ticking = true
      }
    })
  }

  // Enhanced section transition effects
  initSectionTransitions() {
    const sections = document.querySelectorAll('section')
    
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add section-specific animations
          const section = entry.target
          const sectionId = section.id
          
          this.triggerSectionAnimation(sectionId, section)
        }
      })
    }, {
      threshold: 0.3,
      rootMargin: '0px 0px -20% 0px'
    })
    
    sections.forEach(section => {
      sectionObserver.observe(section)
    })
  }

  triggerSectionAnimation(sectionId, section) {
    switch(sectionId) {
      case 'gear':
        this.animateGearCards(section)
        break
      case 'about':
        this.animateAboutSection(section)
        break
      case 'testimonials':
        this.animateTestimonials(section)
        break
      case 'cta':
        this.animateCTA(section)
        break
    }
  }

  animateGearCards(section) {
    const cards = section.querySelectorAll('.gear-card')
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.transform = 'translateY(0) scale(1)'
        card.style.opacity = '1'
        
        // Add sparkle effect
        this.addSparkleEffect(card)
      }, index * 200)
    })
  }

  animateAboutSection(section) {
    const statCards = section.querySelectorAll('.stat-card')
    const aboutImage = section.querySelector('.about-image-container')
    
    // Animate stat cards with counter effect
    statCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('revealed')
        
        // Counter animation for numbers
        const numberElement = card.querySelector('.text-4xl, .text-5xl')
        if (numberElement) {
          this.animateCounter(numberElement)
        }
      }, index * 300)
    })
    
    // Animate mountain scene
    if (aboutImage) {
      setTimeout(() => {
        aboutImage.style.transform = 'scale(1)'
        aboutImage.style.opacity = '1'
      }, 800)
    }
  }

  animateTestimonials(section) {
    const testimonialCards = section.querySelectorAll('.testimonial-card')
    
    testimonialCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.transform = 'translateY(0) scale(1)'
        card.style.opacity = '1'
        
        // Add floating particles around testimonials
        this.addFloatingParticles(card)
      }, index * 250)
    })
  }

  animateCTA(section) {
    const ctaElements = section.querySelectorAll('h2, p, .btn')
    
    ctaElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.transform = 'translateY(0)'
        element.style.opacity = '1'
      }, index * 200)
    })
  }

  // Counter animation for stat numbers
  animateCounter(element) {
    const text = element.textContent
    const number = parseInt(text.replace(/\D/g, ''))
    const suffix = text.replace(/[0-9]/g, '')
    
    if (isNaN(number)) return
    
    let current = 0
    const increment = number / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= number) {
        current = number
        clearInterval(timer)
      }
      element.textContent = Math.floor(current) + suffix
    }, 40)
  }

  // Add sparkle effect to elements
  addSparkleEffect(element) {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const sparkle = document.createElement('div')
        sparkle.style.cssText = `
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, #4FC3F7, transparent);
          border-radius: 50%;
          pointer-events: none;
          animation: sparkle-fade 1.5s ease-out forwards;
          top: ${Math.random() * 100}%;
          left: ${Math.random() * 100}%;
          z-index: 10;
        `
        
        element.style.position = 'relative'
        element.appendChild(sparkle)
        
        setTimeout(() => sparkle.remove(), 1500)
      }, i * 200)
    }
    
    // Add sparkle animation if not exists
    if (!document.querySelector('#sparkle-styles')) {
      const style = document.createElement('style')
      style.id = 'sparkle-styles'
      style.textContent = `
        @keyframes sparkle-fade {
          0% {
            opacity: 1;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0);
          }
        }
      `
      document.head.appendChild(style)
    }
  }

  // Add floating particles around elements
  addFloatingParticles(element) {
    for (let i = 0; i < 3; i++) {
      const particle = document.createElement('div')
      particle.style.cssText = `
        position: absolute;
        width: 6px;
        height: 6px;
        background: linear-gradient(45deg, rgba(79, 195, 247, 0.6), rgba(129, 212, 250, 0.4));
        border-radius: 50%;
        pointer-events: none;
        animation: float-around 4s ease-in-out infinite;
        top: ${20 + Math.random() * 60}%;
        left: ${10 + Math.random() * 80}%;
        z-index: 5;
        animation-delay: ${i * 0.8}s;
      `
      
      element.style.position = 'relative'
      element.appendChild(particle)
    }
    
    // Add floating animation if not exists
    if (!document.querySelector('#float-styles')) {
      const style = document.createElement('style')
      style.id = 'float-styles'
      style.textContent = `
        @keyframes float-around {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-10px) translateX(5px);
            opacity: 1;
          }
          50% {
            transform: translateY(-5px) translateX(-3px);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-8px) translateX(8px);
            opacity: 1;
          }
        }
      `
      document.head.appendChild(style)
    }
  }

  // Enhanced navigation scroll effects
  initNavigationEffects() {
    const nav = document.querySelector('nav')
    let lastScrollY = 0
    let ticking = false

    function updateNavigation() {
      const scrollY = window.pageYOffset
      
      if (scrollY > 100) {
        nav.classList.add('scrolled')
      } else {
        nav.classList.remove('scrolled')
      }
      
      // Hide/show navigation based on scroll direction
      if (scrollY > lastScrollY && scrollY > 300) {
        nav.style.transform = 'translateY(-100%)'
      } else {
        nav.style.transform = 'translateY(0)'
      }
      
      lastScrollY = scrollY
      ticking = false
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateNavigation)
        ticking = true
      }
    })
  }

  // Add magical cursor trail effect
  initCursorEffects() {
    const cursor = document.createElement('div')
    cursor.className = 'magic-cursor'
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, rgba(79, 195, 247, 0.6), transparent);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
      transition: transform 0.1s ease;
    `
    document.body.appendChild(cursor)

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX - 10 + 'px'
      cursor.style.top = e.clientY - 10 + 'px'
    })

    // Enhanced cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .gear-card, .testimonial-card')
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)'
        cursor.style.background = 'radial-gradient(circle, rgba(79, 195, 247, 0.8), rgba(129, 212, 250, 0.3))'
      })
      
      element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)'
        cursor.style.background = 'radial-gradient(circle, rgba(79, 195, 247, 0.6), transparent)'
      })
    })
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new FrostlineAnimations()

  // Add loading animation
  document.body.style.opacity = '0'
  document.body.style.transition = 'opacity 0.8s ease-out'
  
  setTimeout(() => {
    document.body.style.opacity = '1'
  }, 100)
})
