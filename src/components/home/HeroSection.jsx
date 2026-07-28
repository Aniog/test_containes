import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShieldCheck, Search, Truck, CheckCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-15"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-orange/20 px-4 py-1.5 mb-6">
              <CheckCircle className="h-4 w-4 text-brand-orange" />
              <span className="text-sm font-medium text-brand-orange">Trusted by 500+ Global Buyers</span>
            </div>
            
            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent for <span className="text-brand-orange">Global Buyers</span>
            </h1>
            
            <p id="hero-subtitle" className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all from China.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold text-base px-8 py-4 h-auto">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 font-medium text-base px-8 py-4 h-auto">
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 items-center text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-400" />
                <span>Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <Search className="h-5 w-5 text-green-400" />
                <span>QC Inspections</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-green-400" />
                <span>Door-to-Door Shipping</span>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="hero-main-img"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China sourcing agent helping global buyers"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
