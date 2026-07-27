import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Shield, Globe, CheckCircle } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 hover:bg-blue-500/30">
              <Globe className="h-3 w-3 mr-1" />
              Trusted by 500+ Global Buyers
            </Badge>
          </div>

          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            China Sourcing Agent for <span className="text-blue-300">Global Buyers</span>
          </h1>

          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8">
              <Link to="/contact">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-500 text-white hover:bg-white/10 hover:text-white">
              <Link to="/how-it-works">
                See How It Works
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-slate-700/50">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-blue-400 shrink-0" />
              <span className="text-sm text-slate-300">Verified Suppliers</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-blue-400 shrink-0" />
              <span className="text-sm text-slate-300">Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-3 col-span-2 md:col-span-1">
              <Globe className="h-5 w-5 text-blue-400 shrink-0" />
              <span className="text-sm text-slate-300">Worldwide Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
