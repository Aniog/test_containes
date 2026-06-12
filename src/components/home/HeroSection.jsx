import CTAButton from '@/components/shared/CTAButton'
import { Shield, Globe, CheckCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm mb-6">
              <Globe className="w-4 h-4" />
              <span>Trusted by 500+ global buyers</span>
            </div>

            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>

            <p id="hero-subtitle" className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all under one roof.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <CTAButton variant="primary">Get a Free Sourcing Quote</CTAButton>
              <CTAButton to="/how-it-works" variant="white">See How It Works</CTAButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { icon: Shield, text: 'Verified Suppliers Only' },
                { icon: CheckCircle, text: 'No Hidden Fees' },
                { icon: Globe, text: 'English-Speaking Team' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-slate-300 text-sm">
                  <item.icon className="w-4 h-4 text-accent-400" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
              data-strk-bg-id="hero-bg-7f3a2c"
              data-strk-bg="[hero-subtitle] [hero-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#1a2d5a' }}
            />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Factory Verified</p>
                  <p className="text-xs text-slate-500">Quality Assured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
