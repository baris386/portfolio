"use client"

import { useEffect, useState, useRef } from "react"

export function NightWeatherBackground() {
  const [stars, setStars] = useState<
    Array<{ top: number; left: number; delay: number; opacity: number; size: number }>
  >([])
  const [moonPos, setMoonPos] = useState({ x: 8, y: 12 }) // %
  const [craters, setCraters] = useState<Array<{ top: number; left: number; size: number; opacity: number }>>([])
  const idleAngle = useRef(0)

  useEffect(() => {
    const generatedStars = [...Array(200)].map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.7 + 0.3,
      size: Math.random() * 1.5 + 0.5,
    }))
    setStars(generatedStars)

    const generatedCraters = [...Array(12)].map(() => ({
      top: Math.random() * 80 + 10,
      left: Math.random() * 80 + 10,
      size: 6 + Math.random() * 14,
      opacity: 0.15 + Math.random() * 0.25,
    }))
    setCraters(generatedCraters)
  }, [])

  useEffect(() => {
    let frame: number
    function animate() {
      idleAngle.current += 0.002
      const dx = Math.sin(idleAngle.current) * 0.2
      const dy = Math.cos(idleAngle.current * 1.3) * 0.15
      setMoonPos({ x: 8 + dx, y: 12 + dy })
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle-fast shadow-sm shadow-white/50"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
              opacity: star.opacity,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: star.size > 1.5 ? "0 0 4px rgba(255, 255, 255, 0.8)" : "0 0 2px rgba(255, 255, 255, 0.5)",
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          top: `${moonPos.y}%`,
          left: `${moonPos.x}%`,
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: `
            radial-gradient(circle at 35% 35%, #fff9e6 0%, #f5f0d8 15%, #e8e3c8 30%, #d4cfb5 50%, #c0bba5 70%, #a8a390 100%),
            radial-gradient(circle at 60% 40%, rgba(200, 195, 180, 0.3) 0%, transparent 40%),
            radial-gradient(circle at 25% 65%, rgba(180, 175, 160, 0.4) 0%, transparent 35%)
          `,
          boxShadow: `
            0 0 60px rgba(255, 250, 220, 0.7),
            inset -8px -8px 20px rgba(0, 0, 0, 0.15),
            inset 8px 8px 15px rgba(255, 255, 255, 0.1)
          `,
          transform: "translate(-50%, -50%)",
          overflow: "hidden",
        }}
      >
        {craters.map((c, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: `${c.size}px`,
              height: `${c.size}px`,
              borderRadius: "50%",
              top: `${c.top}%`,
              left: `${c.left}%`,
              background: `radial-gradient(circle at 30% 30%, rgba(0,0,0,${c.opacity * 0.5}), rgba(0,0,0,${c.opacity}))`,
              boxShadow: `
                inset 2px 2px 4px rgba(0, 0, 0, ${c.opacity * 1.5}),
                inset -1px -1px 3px rgba(255, 255, 255, ${c.opacity * 0.3})
              `,
            }}
          />
        ))}

        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: `
              repeating-radial-gradient(circle at 50% 50%, transparent 0px, rgba(0,0,0,0.02) 1px, transparent 2px),
              repeating-radial-gradient(circle at 30% 40%, transparent 0px, rgba(255,255,255,0.02) 1px, transparent 3px)
            `,
            mixBlendMode: "overlay",
          }}
        />
      </div>
    </div>
  )
}
