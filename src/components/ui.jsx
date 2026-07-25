import { useEffect, useRef, useState } from "react"
import { Star, StarHalf } from "lucide-react"
import { cn } from "@/lib/utils"

export function Eyebrow({ children, className }) {
  return (
    <p
      className={cn(
        "text-[11px] font-medium uppercase tracking-[0.25em] text-gold",
        className
      )}
    >
      {children}
    </p>
  )
}

export function RatingStars({ rating = 5, className, starClass = "h-3.5 w-3.5" }) {
  const full = Math.floor(rating)
  const half = rating - full >= 0.5
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} className={cn(starClass, "fill-gold text-gold")} />
      ))}
      {half && <StarHalf className={cn(starClass, "fill-gold text-gold")} />}
      {Array.from({ length: 5 - full - (half ? 1 : 0) }).map((_, i) => (
        <Star key={`e-${i}`} className={cn(starClass, "text-gold/40")} />
      ))}
    </span>
  )
}

export function Reveal({ children, className, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", visible && "is-visible", className)}
    >
      {children}
    </div>
  )
}

export function Hairline({ className }) {
  return <div className={cn("h-px w-full bg-hairline", className)} />
}
