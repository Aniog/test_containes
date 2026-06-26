import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle } from 'lucide-react'

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '5000+', label: 'Machines Delivered' },
  { value: '50+', label: 'Countries Served' },
  { value: '99%', label: 'Customer Satisfaction' },
]

const highlights = [
  'ISO 9001 certified manufacturing',
  'Custom engineering solutions',
  'Global service network',
  'Comprehensive warranty coverage',
  'On-site installation & training',
  '24/7 technical support',
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" className="py-16 md:py-24 bg-surface" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 id="about-title" className="mt-3 text-3xl md:text-4xl font-bold text-primary tracking-tight">
              Trusted Leader in Metal Folding Technology
            </h2>
            <p id="about-desc" className="mt-4 text-muted leading-relaxed">
              For over 25 years, ARTITECT MACHINERY has been at the forefront of sheet metal
              folding innovation. Our commitment to precision engineering and customer success
              has made us the preferred choice for manufacturers worldwide.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              From small workshops to large-scale industrial operations, our machines deliver
              consistent, high-quality results that drive productivity and profitability.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
              data-strk-bg-id="about-bg-s4t5u6"
              data-strk-bg="[about-desc] [about-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            />
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
