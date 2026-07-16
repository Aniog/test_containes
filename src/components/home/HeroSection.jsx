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
          el.querySelectorAll('[data-animate]').forEach((child, i) => {
            setTimeout(() => {
              child.classList.add('opacity-100', 'translate-y-0')
              child.classList.remove('opacity-0', 'translate-y-8')
            }, i * 200)
          })
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative h-[90vh] min-h-[600px] md:min-h-[700px] overflow-hidden -mt-20"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=1600&auto=format&q=85"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-950/70 via-midnight-950/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <p
              data-animate
              className="text-ivory-200/80 text-xs md:text-sm uppercase tracking-widest font-sans mb-4 transition-all duration-700 opacity-0 translate-y-8"
            >
              Velmora Fine Jewelry
            </p>
            <h1
              data-animate
              className="font-serif text-4xl md:text-5xl lg:text-7xl text-white leading-tight font-light transition-all duration-700 opacity-0 translate-y-8"
            >
              Crafted to be
              <span className="block font-semibold italic">Treasured</span>
            </h1>
            <p
              data-animate
              className="text-ivory-200/80 text-sm md:text-base font-sans mt-6 max-w-md leading-relaxed transition-all duration-700 opacity-0 translate-y-8"
            >
              Ethically crafted demi-fine gold jewelry, designed to be worn daily and 
              treasured for a lifetime. Discover pieces that transcend trends.
            </p>
            <div
              data-animate
              className="mt-8 flex flex-wrap gap-4 transition-all duration-700 opacity-0 translate-y-8"
            >
              <Link to="/shop" className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 font-sans text-sm font-medium uppercase tracking-wider transition-all duration-300">
                Shop the Collection
              </Link>
              <Link to="/shop" className="border border-white/40 text-white hover:bg-white hover:text-midnight-950 px-8 py-3.5 font-sans text-sm font-medium uppercase tracking-wider transition-all duration-300">
                Explore Bestsellers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}