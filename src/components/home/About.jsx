import { useEffect, useRef } from 'react'
import { CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const milestones = [
  { year: '1998', event: 'Founded in Shanghai, China' },
  { year: '2005', event: 'First CNC folding machine launched' },
  { year: '2010', event: 'Expanded to 30+ countries' },
  { year: '2016', event: 'ISO 9001 certification achieved' },
  { year: '2020', event: '5,000th machine delivered' },
  { year: '2024', event: 'IoT-enabled smart folding systems' },
]

const values = [
  'Precision in every detail',
  'Customer-first engineering',
  'Continuous innovation',
  'Global reliability standards',
  'Sustainable manufacturing',
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" className="py-20 md:py-28 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
              About Us
            </span>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-6"
            >
              Crafting the Future of Metal Folding
            </h2>
            <p
              id="about-subtitle"
              className="text-steel-600 text-lg leading-relaxed mb-6"
            >
              For over 25 years, ARTITECT MACHINERY has been at the forefront of
              sheet metal folding technology. We combine traditional
              craftsmanship with cutting-edge automation to deliver machines that
              set new standards in precision and productivity.
            </p>
            <p className="text-steel-600 leading-relaxed mb-8">
              Our state-of-the-art manufacturing facility spans 50,000 square
              meters and employs over 300 skilled engineers and technicians. Every
              machine that bears the ARTITECT name has been meticulously designed,
              manufactured, and tested to perform flawlessly in real-world
              conditions.
            </p>

            <div className="space-y-3 mb-8">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <span className="text-dark font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl mb-8">
              <img
                alt="ARTITECT factory"
                data-strk-img-id="about-factory-k2m7r"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto"
              />
            </div>

            <div className="bg-offwhite rounded-xl p-6">
              <h3 className="text-lg font-bold text-dark mb-4">Our Journey</h3>
              <div className="space-y-4">
                {milestones.map((m) => (
                  <div key={m.year} className="flex items-start gap-4">
                    <span className="text-gold-500 font-bold text-sm min-w-[48px]">
                      {m.year}
                    </span>
                    <span className="text-steel-600 text-sm">{m.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
