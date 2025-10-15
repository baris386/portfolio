"use client"

import { useState, useEffect } from "react"

export function TypingText() {
  const [displayText, setDisplayText] = useState("")
  const [currentPhase, setCurrentPhase] = useState(0)

  const phases = [
    "Hi",
    "I'm Abbaszadə Barış"
  ]

  useEffect(() => {
    if (currentPhase >= phases.length) return

    const targetText = phases[currentPhase]
    let currentIndex = 0

    const typingInterval = setInterval(() => {
      if (currentIndex <= targetText.length) {
        setDisplayText(targetText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        // Wait before moving to next phase
        setTimeout(() => {
          if (currentPhase < phases.length - 1) {
            setCurrentPhase(currentPhase + 1)
          }
        }, 3000)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [currentPhase])

  return (
    <div className="min-h-[120px] flex items-center justify-center">
      <p className="text-2xl md:text-3xl font-medium text-white text-balance">
        {displayText}
        <span className="inline-block w-0.5 h-6 md:h-8 bg-white ml-1 animate-pulse" />
      </p>
    </div>
  )
}
