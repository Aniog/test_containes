import { Link } from 'react-router-dom'
import { Icons } from '@/lib/data'

export default function HomeHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-light rounded-full -translate-x-1/4 translate-y-1/4" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white/90">
              <Icons.BadgeCheck className="w-4 h-4 text-accent-light" />
              Trusted by 500+ global buyers since 2010
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              China Sourcing Agent
              <span className="block text-accent-light">for Global Buyers</span>
            </h1>

            <p className="text-lg text-white/80 max-w-lg leading-relaxed">
              We find reliable suppliers, verify factories, inspect quality, 
              follow production, and coordinate shipping — so you can source 
              from China with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-md transition-all shadow-lg shadow-accent/30 hover:shadow-accent/40"
              >
                Get a Free Sourcing Quote
                <Icons.ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-md transition-all"
              >
                How It Works
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-primary bg-accent/60 flex items-center justify-center">
                    <Icons.Users className="w-3.5 h-3.5 text-white" />
                  </div>
                ))}
              </div>
              <div className="text-white/70 text-sm">
                <span className="text-white font-semibold">4.9/5</span> rating from{' '}
                <span className="text-white font-semibold">500+</span> clients
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                alt="Factory inspection in China"
                data-strk-img-id="hero-factory-inspection-a1b2c3"
                data-strk-img="China factory quality inspection professional"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full rounded-xl"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Icons.CheckCircle2 className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-xs text-text-muted">Verified Suppliers</p>
                <p className="text-sm font-bold text-text-primary">10,000+ factories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}