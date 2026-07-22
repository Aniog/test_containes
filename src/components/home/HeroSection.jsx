import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.animate-on-scroll').forEach((child, i) => {
            child.style.animationDelay = `${i * 150}ms`
            child.classList.add('animate-slide-up')
          })
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=1600&q=85&auto=format"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-wide">
          <div className="max-w-xl">
            <p className="animate-on-scroll opacity-0 font-sans text-xs uppercase tracking-[0.2em] text-velvet-gold mb-4">
              New Collection
            </p>
            <h1 className="animate-on-scroll opacity-0 font-serif text-5xl md:text-7xl lg:text-8xl font-light text-velvet-text leading-tight mb-6">
              Crafted to be
              <span className="block italic font-medium text-velvet-gold">Treasured</span>
            </h1>
            <p className="animate-on-scroll opacity-0 font-sans text-base md:text-lg text-velvet-muted leading-relaxed mb-10 max-w-md">
              Hand-finished demi-fine jewelry in 18K gold plating. Designed for the woman who values quiet luxury and enduring beauty.
            </p>
            <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-4">
              <Link to="/shop" className="btn-primary inline-block text-center">
                Shop the Collection
              </Link>
              <Link to="/collections" className="btn-outline inline-block text-center">
                View Collections
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-8 bg-velvet-gold/60" />
      </div>
    </section>
  )
}