// Typing Text Animation
class TypingAnimation {
  constructor() {
    this.displayElement = document.getElementById("typing-display")
    this.phases = ["Hi", "I'm Abbaszadə Barış"]
    this.currentPhase = 0
    this.currentIndex = 0
    this.typingSpeed = 50
    this.pauseBetweenPhases = 3000

    this.startTyping()
  }

  startTyping() {
    if (this.currentPhase >= this.phases.length) return

    const targetText = this.phases[this.currentPhase]

    const typeInterval = setInterval(() => {
      if (this.currentIndex <= targetText.length) {
        this.displayElement.textContent = targetText.slice(0, this.currentIndex)
        this.currentIndex++
      } else {
        clearInterval(typeInterval)
        // Wait before moving to next phase
        setTimeout(() => {
          if (this.currentPhase < this.phases.length - 1) {
            this.currentPhase++
            this.currentIndex = 0
            this.startTyping()
          }
        }, this.pauseBetweenPhases)
      }
    }, this.typingSpeed)
  }
}

// Resume Modal
class ResumeModal {
  constructor() {
    this.modal = document.getElementById("resume-modal")
    this.openBtn = document.getElementById("resume-btn")
    this.closeBtn = document.getElementById("close-modal")

    this.init()
  }

  init() {
    this.openBtn.addEventListener("click", () => this.open())
    this.closeBtn.addEventListener("click", () => this.close())

    // Close modal when clicking outside
    this.modal.addEventListener("click", (e) => {
      if (e.target === this.modal) {
        this.close()
      }
    })

    // Close modal with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.modal.classList.contains("active")) {
        this.close()
      }
    })
  }

  open() {
    this.modal.classList.add("active")
    document.body.style.overflow = "hidden"
  }

  close() {
    this.modal.classList.remove("active")
    document.body.style.overflow = ""
  }
}

// Night Sky Background
class NightSkyBackground {
  constructor() {
    this.starsContainer = document.getElementById("stars-container")
    this.moon = document.getElementById("moon")
    this.moonCraters = document.getElementById("moon-craters")
    this.moonPos = { x: 8, y: 12 }
    this.idleAngle = 0

    this.generateStars()
    this.generateMoonCraters()
    this.animateMoon()
  }

  generateStars() {
    const starCount = 200

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div")
      star.className = "star"

      const top = Math.random() * 100
      const left = Math.random() * 100
      const delay = Math.random() * 2
      const opacity = Math.random() * 0.7 + 0.3
      const size = Math.random() * 1.5 + 0.5

      star.style.top = `${top}%`
      star.style.left = `${left}%`
      star.style.animationDelay = `${delay}s`
      star.style.opacity = opacity
      star.style.width = `${size}px`
      star.style.height = `${size}px`

      // Add glow effect for larger stars
      if (size > 1.5) {
        star.style.boxShadow = "0 0 4px rgba(255, 255, 255, 0.8)"
      } else {
        star.style.boxShadow = "0 0 2px rgba(255, 255, 255, 0.5)"
      }

      this.starsContainer.appendChild(star)
    }
  }

  generateMoonCraters() {
    const craterCount = 12

    for (let i = 0; i < craterCount; i++) {
      const crater = document.createElement("div")

      const top = Math.random() * 80 + 10
      const left = Math.random() * 80 + 10
      const size = 6 + Math.random() * 14
      const opacity = 0.15 + Math.random() * 0.25

      crater.style.position = "absolute"
      crater.style.width = `${size}px`
      crater.style.height = `${size}px`
      crater.style.borderRadius = "50%"
      crater.style.top = `${top}%`
      crater.style.left = `${left}%`
      crater.style.background = `radial-gradient(circle at 30% 30%, rgba(0,0,0,${opacity * 0.5}), rgba(0,0,0,${opacity}))`
      crater.style.boxShadow = `
        inset 2px 2px 4px rgba(0, 0, 0, ${opacity * 1.5}),
        inset -1px -1px 3px rgba(255, 255, 255, ${opacity * 0.3})
      `

      this.moonCraters.appendChild(crater)
    }
  }

  animateMoon() {
    const animate = () => {
      this.idleAngle += 0.002
      const dx = Math.sin(this.idleAngle) * 0.2
      const dy = Math.cos(this.idleAngle * 1.3) * 0.15

      this.moonPos.x = 8 + dx
      this.moonPos.y = 12 + dy

      this.moon.style.top = `${this.moonPos.y}%`
      this.moon.style.left = `${this.moonPos.x}%`

      requestAnimationFrame(animate)
    }

    animate()
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new TypingAnimation()
  new ResumeModal()
  new NightSkyBackground()
})
