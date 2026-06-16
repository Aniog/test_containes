import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 29, suffix: '+', label: 'Years of Experience' },
  { value: 3500, suffix: '+', label: 'Machines Installed' },
  { value: 42, suffix: '', label: 'Countries Served' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
]

function AnimatedNumber({ target, suffix, inView }) {
  const [count, setCount] = useState(target)

  useEffect(() => {
    if (!inView) return
    let current = 0
    setCount(0)
    const duration = 2000
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      current = Math.floor(eased * target)
      setCount(current)
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [target, inView])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-16 md:py-20 bg-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-sm text-brand-300 font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
