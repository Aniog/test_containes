import { ArrowRight, Award, Shield, Cog } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* BG gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-surface to-brand-dark" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-gold/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-gold/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      {/* Decorative lines */}
      <div className="absolute top-24 left-6 w-px h-32 bg-gradient-to-b from-accent-gold/40 to-transparent hidden md:block" />
      <div className="absolute top-24 left-10 w-px h-24 bg-gradient-to-b from-accent-gold/20 to-transparent hidden md:block" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-accent-gold" />
            <span className="text-accent-gold text-sm font-medium uppercase tracking-[0.2em]">
              Premium Industrial Machinery
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-family-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-text-primary mb-6">
            Precision Sheet Metal{' '}
            <span className="text-accent-gold">Folding</span>{' '}
            Solutions
          </h1>

          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl mb-10">
            Engineered for excellence. ARTITECT MACHINERY delivers world-class
            double folding machines and sheet metal folders trusted by
            fabricators across the globe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-3 bg-accent-gold text-brand-dark px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-accent-gold-light transition-colors group"
            >
              Explore Our Machines
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 border border-border-medium text-text-primary px-8 py-3.5 rounded-lg font-semibold text-base hover:border-accent-gold/50 hover:text-accent-gold transition-colors"
            >
              Request a Quote
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-8 mt-16 pt-10 border-t border-border-subtle">
            {[
              { icon: Award, label: 'ISO Certified' },
              { icon: Shield, label: '5-Year Warranty' },
              { icon: Cog, label: 'Precision Engineered' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-accent-gold" />
                <span className="text-text-secondary text-sm font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
