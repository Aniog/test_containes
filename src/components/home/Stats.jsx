import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 15000, suffix: '+', label: 'Machines Delivered' },
  { value: 45, suffix: '+', label: 'Countries Served' },
  { value: 99.7, suffix: '%', label: 'Uptime Rate' },
  { value: 25, suffix: '+', label: 'Years Experience' },
]

function AnimatedCounter({ end, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = Date.now()
          const isFloat = end % 1 !== 0

          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = eased * end

            setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current))

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(end)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-extrabold text-white">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="relative bg-charcoal py-16 lg:py-20 overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-steel/40 to-charcoal" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="text-white/50 text-sm font-medium mt-2 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
