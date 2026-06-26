import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Zap, Gauge } from 'lucide-react'

const highlights = [
  { icon: Shield, label: 'Precision Engineering' },
  { icon: Zap, label: 'High Performance' },
  { icon: Gauge, label: 'Built to Last' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-7a1b3c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-0 bg-primary/80" />

      <div className="container-main relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Industrial Sheet Metal Solutions
          </p>
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground-inverse leading-tight mb-6"
          >
            Precision Folding Machines for Modern Manufacturing
          </h1>
          <p
            id="hero-subtitle"
            className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
          >
            Discover our range of double folding machines, sheet metal folders, and
            metal folding solutions engineered for accuracy, speed, and long-term
            reliability.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-7 py-3.5 rounded-md transition-colors"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-medium px-7 py-3.5 rounded-md transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 md:mt-20">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-5 border border-white/10"
            >
              <div className="w-10 h-10 bg-accent/20 rounded-md flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-white font-medium text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
