import { ArrowRight, Shield, Gauge, Award } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.5) 50px, rgba(255,255,255,0.5) 51px), repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.5) 50px, rgba(255,255,255,0.5) 51px)',
        }} />
      </div>

      {/* Accent glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-medium">Precision Engineering Since 1998</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Industrial-Grade{' '}
              <span className="text-accent">Sheet Metal</span>{' '}
              Folding Machines
            </h1>

            <p className="text-lg md:text-xl text-steel max-w-xl mb-8 leading-relaxed">
              Engineered for accuracy, built for durability. Our double folding machines
              deliver consistent, high-precision bends for professional metal fabrication shops.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-bold text-base rounded-lg hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/20"
              >
                View Our Machines
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold text-base rounded-lg hover:border-white/40 hover:bg-white/5 transition-all"
              >
                Request a Demo
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Shield, label: 'ISO 9001 Certified' },
                { icon: Gauge, label: '0.01mm Precision' },
                { icon: Award, label: '5-Year Warranty' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-steel">
                  <Icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-primary-light border border-white/5">
              <img
                data-strk-img-id="hero-machine-main-f8a2c1"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT double folding machine in operation"
                className="w-full h-full object-cover"
                id="hero-title"
              />
              <div id="hero-subtitle" className="sr-only">
                Industrial sheet metal folding machine precision engineering
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-5 max-w-[200px]">
              <div className="text-3xl font-extrabold text-charcoal">2,500+</div>
              <div className="text-sm text-muted mt-1">Machines delivered worldwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
