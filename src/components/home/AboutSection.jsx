import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function AboutSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" className="py-20 md:py-28 bg-brand-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <div
                className="w-full h-full bg-primary-dark"
                data-strk-bg-id="about-bg-4d5e6f"
                data-strk-bg="[about-title] [about-desc]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-5 border border-brand-100 max-w-[200px]">
              <p className="font-display text-3xl font-bold text-accent">30+</p>
              <p className="font-body text-sm text-brand-600">Countries Served Worldwide</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-accent font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              About Us
            </span>
            <h2 id="about-title" className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Masters of Metal Folding Since 1995
            </h2>
            <p id="about-desc" className="font-body text-brand-600 leading-relaxed mb-6">
              Founded in 1995, ARTITECT MACHINERY has grown from a small workshop into
              a globally recognized manufacturer of precision sheet metal folding equipment.
              Our name combines "architecture" and "artisan" — reflecting our belief that
              every machine we build is both a feat of engineering and a work of craftsmanship.
            </p>
            <p className="font-body text-brand-600 leading-relaxed mb-8">
              Today, our machines operate in over 30 countries across automotive, aerospace,
              construction, and consumer goods industries. We remain committed to continuous
              innovation, investing 8% of annual revenue into R&D to push the boundaries of
              what metal folding technology can achieve.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-5 border border-brand-100">
                <p className="font-display text-2xl font-bold text-primary">500+</p>
                <p className="font-body text-sm text-brand-500 mt-1">Machines Installed</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-brand-100">
                <p className="font-display text-2xl font-bold text-primary">50+</p>
                <p className="font-body text-sm text-brand-500 mt-1">Patents & Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}