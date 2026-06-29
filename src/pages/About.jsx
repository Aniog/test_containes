import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Target, Eye, Heart, Ruler } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'Every micron matters. Our machines are calibrated to deliver accuracy that exceeds industry standards.',
  },
  {
    icon: Eye,
    title: 'Innovation',
    description: 'We continuously invest in R&D to bring the latest folding technology to our customers worldwide.',
  },
  {
    icon: Heart,
    title: 'Craftsmanship',
    description: 'Each machine is built by skilled technicians who take pride in their work and attention to detail.',
  },
  {
    icon: Ruler,
    title: 'Quality',
    description: 'Rigorous testing and ISO 9001 certified processes ensure every machine meets our exacting standards.',
  },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Our Story
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            About ARTITECT MACHINERY
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Building the world's finest sheet metal folding machines for over two decades.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                Who We Are
              </span>
              <h2 className="text-3xl font-bold text-text-primary mt-2 mb-5">
                Engineering Excellence Since 2001
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                ARTITECT MACHINERY was founded with a singular vision: to build sheet metal folding machines that set the benchmark for precision, reliability, and innovation. What began as a small engineering workshop has grown into a global leader in metal folding technology.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our machines are trusted by manufacturers across automotive, aerospace, HVAC, construction, and electronics industries. From compact workshop folders to fully automated production-line systems, every ARTITECT machine is built to the same uncompromising standard.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Headquartered in the manufacturing heartland with distribution partners in over 40 countries, we combine German engineering principles with responsive global support to keep our customers' production lines running smoothly.
              </p>
            </div>
            <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
              <div
                data-strk-bg-id="about-factory-6h8i9j"
                data-strk-bg="[about-subtitle] [about-title]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
                className="w-full h-full"
              />
              <div className="hidden" id="about-title">Industrial machinery manufacturing facility</div>
              <div className="hidden" id="about-subtitle">Precision engineering factory floor</div>
            </div>
          </div>

          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Our Values
            </span>
            <h2 className="text-3xl font-bold text-text-primary mt-2 mb-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="bg-white rounded-xl border border-gray-100 p-6 text-center hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{value.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}