import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-accent-500/10 rounded-2xl blur-xl" />
            <img
              data-strk-img-id="about-factory-d2e8f4"
              data-strk-img="[about-subtitle] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="ARTITECT MACHINERY factory"
              className="relative rounded-2xl shadow-xl w-full object-cover"
            />
            {/* Badge overlay */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-accent-500 text-brand-900 rounded-xl px-6 py-4 shadow-lg">
              <div className="text-3xl font-bold font-[var(--font-heading)]">25+</div>
              <div className="text-sm font-semibold">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <span className="text-accent-600 font-semibold text-sm tracking-widest uppercase">
              About Us
            </span>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl font-bold text-brand-900 font-[var(--font-heading)]"
            >
              Crafting the Future of Metal Folding
            </h2>
            <p
              id="about-subtitle"
              className="text-brand-600 leading-relaxed"
            >
              Founded in 1998, ARTITECT MACHINERY has grown from a small
              workshop into a globally recognized manufacturer of precision
              metal folding equipment. Our journey has been driven by a single
              passion: making metal folding simpler, more accurate, and more
              productive for fabricators everywhere.
            </p>
            <p className="text-brand-600 leading-relaxed">
              Every machine that leaves our factory carries the expertise of
              hundreds of engineers and the feedback of thousands of operators.
              We do not just build machines — we build partnerships that help
              our customers grow.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: 'R&D Engineers', value: '80+' },
                { label: 'Production Area', value: '50,000 m²' },
                { label: 'Annual Output', value: '500+ units' },
                { label: 'Patents Held', value: '35+' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-4 border border-brand-100">
                  <div className="text-2xl font-bold text-accent-600 font-[var(--font-heading)]">
                    {item.value}
                  </div>
                  <div className="text-brand-600 text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
