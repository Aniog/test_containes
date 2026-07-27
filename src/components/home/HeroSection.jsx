import { Link } from 'react-router-dom'
import { ArrowRight, Shield, CheckCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, hsl(215 60% 25%) 0%, hsl(215 60% 25% / 0.95) 50%, hsl(215 60% 25% / 0.8) 100%)' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)'
        }} />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 md:py-24 lg:py-32">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <Shield className="w-4 h-4" />
              <span>Trusted by 500+ global buyers</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              China Sourcing Agent
              <span className="block text-amber-400">for Global Buyers</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality,
              follow production, and coordinate shipping — all from one trusted team in China.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary bg-amber-500 hover:bg-amber-600 text-primary font-semibold text-base">
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary border-white/30 text-white hover:bg-white/10">
                See How It Works
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>No upfront fees</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>Verified suppliers only</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>English-speaking team</span>
              </div>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div
                data-strk-bg-id="hero-bg-a1b2c3"
                data-strk-bg="[hero-title] [hero-subtitle]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
                className="w-full aspect-[4/3] bg-white/5"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 text-foreground">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Quality Verified</p>
                  <p className="text-xs text-muted-foreground">Pre-shipment inspection passed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden text for image query */}
      <h1 id="hero-title" className="sr-only">China Sourcing Agent for Global Buyers</h1>
      <p id="hero-subtitle" className="sr-only">Factory verification and quality inspection services</p>
    </section>
  )
}
