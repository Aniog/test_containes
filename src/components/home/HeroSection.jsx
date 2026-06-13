import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Factory, PackageCheck, Ship } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      className="relative bg-[#1a2b4a] overflow-hidden"
      ref={(el) => {
        if (el && typeof window !== 'undefined') {
          // placeholder for any future scroll or animation logic
        }
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2b4a]/80 via-[#1a2b4a]/90 to-[#1a2b4a]" />

      <div className="relative container-main section-padding pt-24 md:pt-32 lg:pt-40">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#c4951a]/15 border border-[#c4951a]/30 px-3 py-1 text-xs font-medium text-[#c4951a]">
              <ShieldCheck className="w-3.5 h-3.5" />
              Trusted by 500+ Buyers Worldwide
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            China Sourcing Agent<br className="hidden sm:block" /> for{' '}
            <span className="text-[#c4951a]">Global Buyers</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-base md:text-lg text-white/75 leading-relaxed mb-8 max-w-2xl"
          >
            We find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can focus on growing your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/contact" className="btn-primary text-base px-8 py-3.5">
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/services" className="btn-secondary text-base px-8 py-3.5 text-white border-white/30 hover:bg-white/10 hover:text-white">
              Explore Our Services
            </Link>
          </div>

          {/* Quick trust badges */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            {[
              { icon: Factory, label: 'Factory Verification' },
              { icon: PackageCheck, label: 'Quality Inspection' },
              { icon: Ship, label: 'Shipping Coordination' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-white/60">
                <item.icon className="w-4 h-4 text-[#c4951a]" />
                <span className="text-xs font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative h-16 md:h-20">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path d="M0 80V40C240 70 480 10 720 40C960 70 1200 10 1440 40V80H0Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
