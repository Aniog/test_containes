import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { safeLoadImages } from '@/lib/imageLoader'


export default function AboutPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return safeLoadImages(containerRef.current)
  }, [])

  return (
    <div className="pt-20 md:pt-24" ref={containerRef}>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          data-strk-bg-id="about-hero-bg-f1g2"
          data-strk-bg="[about-hero-subtitle] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-brand-warm-black"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-5">
          <h1 id="about-hero-title" className="font-serif text-display md:text-display-lg text-white">Our Story</h1>
          <p id="about-hero-subtitle" className="mt-3 text-base text-white/80 font-light">The art of quiet luxury</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto section-padding">
          <div className="w-12 h-px bg-brand-gold mx-auto mb-10" />

          <p className="text-center text-sm md:text-base text-brand-warm-gray leading-relaxed mb-6">
            Velmora was born from a simple belief: that beautifully crafted jewelry shouldn't come with an extraordinary price tag. We design demi-fine pieces that honor traditional goldsmithing while embracing modern sensibilities.
          </p>

          <p className="text-center text-sm md:text-base text-brand-warm-gray leading-relaxed mb-6">
            Every piece in our collection is 18K gold plated over brass, hypoallergenic, and designed to be worn every day — not saved for special occasions. We believe the best jewelry is the kind you never want to take off.
          </p>

          <p className="text-center text-sm md:text-base text-brand-warm-gray leading-relaxed mb-10">
            By selling directly to you, we eliminate the traditional retail markup and invest instead in what matters: exceptional materials, thoughtful design, and craftsmanship that stands the test of time.
          </p>

          <div className="w-12 h-px bg-brand-gold mx-auto mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-serif text-3xl text-brand-charcoal mb-2">18K</h3>
              <p className="text-xs tracking-widest uppercase font-sans text-brand-warm-gray">Gold Plated</p>
            </div>
            <div>
              <h3 className="font-serif text-3xl text-brand-charcoal mb-2">100%</h3>
              <p className="text-xs tracking-widest uppercase font-sans text-brand-warm-gray">Hypoallergenic</p>
            </div>
            <div>
              <h3 className="font-serif text-3xl text-brand-charcoal mb-2">30</h3>
              <p className="text-xs tracking-widest uppercase font-sans text-brand-warm-gray">Day Returns</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/shop" className="btn-accent text-xs">Shop the Collection</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
