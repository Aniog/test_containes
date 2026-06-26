import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Award, Factory, Users, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Award, value: '35+', label: 'Years of Expertise' },
  { icon: Factory, value: '12,000+', label: 'Machines Installed' },
  { icon: Users, value: '80+', label: 'Countries Served' },
  { icon: TrendingUp, value: '99.7%', label: 'Uptime Rate' },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-80 md:h-96 bg-brand-bg-alt rounded-sm overflow-hidden">
              <img
                alt="ARTITECT MACHINERY manufacturing facility"
                data-strk-img-id="about-facility-v2w3x4"
                data-strk-img="[about-title] [about-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/20 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-brand-dark text-white p-6 rounded-sm shadow-lg hidden md:block">
              <p className="text-3xl font-bold text-brand-gold">35+</p>
              <p className="text-sm text-white/70 mt-1">Years of Innovation</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-brand-gold text-xs font-medium tracking-[0.2em] uppercase" id="about-subtitle">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mt-4 mb-6 tracking-tight" id="about-title">
              A Legacy of Precision Metal Forming
            </h2>
            <div className="space-y-4 text-brand-text-secondary leading-relaxed">
              <p>
                Founded in 1990, ARTITECT MACHINERY has grown from a small German
                engineering workshop into a globally recognized manufacturer of premium
                sheet metal folding equipment.
              </p>
              <p>
                Our machines are designed by engineers who understand the realities of
                the shop floor. Every component is selected for durability, every
                control interface is built for ease of use, and every machine is tested
                exhaustively before leaving our facility.
              </p>
              <p>
                Today, over 12,000 ARTITECT machines operate across 80 countries,
                forming everything from architectural panels to aerospace components.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 md:mt-20">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center p-6 bg-white border border-brand-border rounded-sm">
                <Icon className="w-6 h-6 text-brand-gold mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold text-brand-dark">{stat.value}</p>
                <p className="text-sm text-brand-text-secondary mt-1">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}