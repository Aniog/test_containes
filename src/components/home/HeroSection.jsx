import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0")
          entry.target.classList.remove("opacity-0", "translate-y-6")
        }
      },
      { threshold: 0.2 }
    )
    const els = containerRef.current?.querySelectorAll(".animate-in")
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden -mt-20 md:-mt-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
          alt="Gold jewelry close-up"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <p className="animate-in opacity-0 translate-y-6 transition-all duration-700 delay-200 text-gold/90 text-sm md:text-base uppercase tracking-[0.25em] mb-4 font-medium">
              Velmora Fine Jewelry
            </p>
            <h1 className="animate-in opacity-0 translate-y-6 transition-all duration-700 delay-400 text-5xl md:text-7xl lg:text-8xl text-white font-semibold leading-tight" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>
              Crafted to be
              <br />
              <span className="text-gold">Treasured</span>
            </h1>
            <p className="animate-in opacity-0 translate-y-6 transition-all duration-700 delay-600 text-white/70 text-base md:text-lg mt-6 max-w-md leading-relaxed font-light">
              Demi-fine gold jewelry designed for the modern woman. Each piece, a keepsake.
            </p>
            <div className="animate-in opacity-0 translate-y-6 transition-all duration-700 delay-800 mt-10">
              <Link
                to="/shop"
                className="inline-block bg-gold text-white uppercase tracking-[0.2em] text-sm px-10 py-4 hover:bg-gold-hover transition-all duration-300"
              >
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-white/30" />
      </div>
    </section>
  )
}