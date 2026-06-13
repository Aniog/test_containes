import { Link } from 'react-router-dom'
import { ArrowRight, Users, Factory, Globe } from 'lucide-react'

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                data-strk-img-id="about-preview-img-1"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="About ARTITECT MACHINERY"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:bottom-8 md:-right-6 bg-amber-600 rounded-xl p-4 md:p-6 shadow-xl">
              <div className="text-white text-2xl md:text-3xl font-bold">20+</div>
              <div className="text-amber-100 text-xs md:text-sm uppercase tracking-wider">Years</div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <span className="text-amber-500 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
              About Us
            </span>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Precision Engineering for a Modern World
            </h2>
            <p
              id="about-desc"
              className="text-slate-400 text-base md:text-lg leading-relaxed mb-8"
            >
              At ARTITECT MACHINERY, we design and manufacture world-class folding machines trusted by sheet metal fabricators across the globe. From compact workshops to industrial production lines, our equipment delivers the precision, speed, and reliability that professionals demand.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { icon: Factory, label: 'Built', value: '500+' },
                { icon: Globe, label: 'Markets', value: '40+' },
                { icon: Users, label: 'Clients', value: '1200+' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-5 h-5 text-amber-500 mx-auto mb-2" />
                  <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-500 transition-colors text-sm"
            >
              Learn Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
