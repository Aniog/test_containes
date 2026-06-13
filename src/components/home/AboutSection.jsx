import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Award, Factory, Users, Globe } from 'lucide-react'

const stats = [
  { icon: Award, value: '25+', label: 'Years of Excellence' },
  { icon: Factory, value: '12,000+', label: 'Machines Deployed' },
  { icon: Users, value: '8,500+', label: 'Happy Customers' },
  { icon: Globe, value: '60+', label: 'Countries Served' },
]

export default function AboutSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div ref={containerRef} className="relative">
            <div className="relative overflow-hidden">
              <img
                alt="ARTITECT MACHINERY factory facility"
                data-strk-img-id="about-factory-b1c2d3"
                data-strk-img="[about-subtitle] [about-heading]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-brand-navy/10" />
            </div>

            {/* Accent box */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-8 border-brand-gold/30 hidden lg:block" />
          </div>

          {/* Content side */}
          <div>
            <span className="text-brand-gold text-xs uppercase tracking-[0.2em] font-medium">
              About Us
            </span>
            <h2
              id="about-heading"
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mt-3 mb-6"
            >
              Engineering Excellence Since{' '}
              <span className="text-brand-gold">1998</span>
            </h2>
            <p
              id="about-subtitle"
              className="text-brand-text-muted leading-relaxed mb-6 text-lg"
            >
              ARTITECT MACHINERY is a global leader in the design and
              manufacture of sheet metal folding equipment. From our
              state-of-the-art facility, we engineer double folding machines,
              metal folders, and precision bending solutions that set the
              standard for quality and reliability.
            </p>
            <p className="text-brand-text-muted leading-relaxed mb-8">
              Our team of over 200 engineers and technicians works
              collaboratively with clients to develop machinery that meets the
              exacting demands of modern manufacturing. Every machine undergoes
              rigorous testing before delivery to ensure peak performance from
              day one.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <Icon className="w-6 h-6 text-brand-gold mx-auto mb-2" />
                    <div className="font-heading text-2xl font-bold text-brand-navy">
                      {stat.value}
                    </div>
                    <div className="text-xs text-brand-text-muted uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}