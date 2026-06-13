import { ArrowDown, Award, Zap, Shield } from 'lucide-react'

export default function Hero() {
  const scrollToProducts = (e) => {
    e.preventDefault()
    const target = document.querySelector('#products')
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-brand-dark overflow-hidden"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-navy to-brand-dark" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-accent/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-brand-dark to-transparent" />
        {/* Decorative grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,169,89,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,89,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="py-16 lg:py-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-accent/10 border border-brand-accent/20 rounded-full mb-8">
              <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse" />
              <span className="text-brand-accent text-xs font-medium tracking-widest uppercase">
                Precision Engineering Since 1998
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-surface leading-[1.05] mb-6">
              Built to
              <span className="block text-brand-accent">Bend Metal.</span>
              <span className="block text-brand-surface/70 text-3xl sm:text-4xl lg:text-5xl font-medium mt-2">
                Engineered to Last.
              </span>
            </h1>

            <p className="text-brand-surface/60 text-lg lg:text-xl max-w-lg mb-10 leading-relaxed">
              Industrial-grade double folding and sheet metal machines that deliver
              unmatched precision, power, and reliability for every fabrication need.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#products"
                onClick={scrollToProducts}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent text-brand-dark font-semibold rounded tracking-wide uppercase text-sm hover:bg-brand-accent-light transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/20"
              >
                Explore Machines
                <ArrowDown size={16} />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-brand-surface/20 text-brand-surface font-semibold rounded tracking-wide uppercase text-sm hover:border-brand-accent hover:text-brand-accent transition-all duration-300"
              >
                Request Catalog
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: '25+', label: 'Years Experience' },
                { number: '12K', label: 'Machines Delivered' },
                { number: '45+', label: 'Countries Served' },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-brand-accent/30 pl-4">
                  <div className="font-heading text-2xl lg:text-3xl font-bold text-brand-accent">
                    {stat.number}
                  </div>
                  <div className="text-brand-surface/50 text-xs tracking-wide uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual element */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative circle */}
              <div className="absolute -inset-8 border border-brand-accent/10 rounded-full" />
              <div className="absolute -inset-16 border border-brand-accent/5 rounded-full" />

              {/* Machine image placeholder */}
              <div className="relative bg-gradient-to-br from-brand-navy to-brand-dark rounded-2xl overflow-hidden border border-brand-surface/10 aspect-square flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-24 h-24 mx-auto mb-6 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                    <Zap size={48} className="text-brand-accent" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-brand-surface mb-3">
                    Double Folder Series
                  </h3>
                  <p className="text-brand-surface/50 text-sm">
                    Up to 6mm capacity &bull; CNC control &bull; 4-meter working length
                  </p>
                </div>
                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-accent/5" style={{ clipPath: 'polygon(0 100%, 0 0, 100% 100%)' }} />
              </div>

              {/* Floating badges */}
              <div className="absolute -right-4 top-12 bg-brand-dark border border-brand-accent/20 rounded-lg px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-brand-accent" />
                  <span className="text-brand-surface text-xs font-medium tracking-wide">ISO 9001</span>
                </div>
              </div>
              <div className="absolute -left-4 bottom-16 bg-brand-dark border border-brand-accent/20 rounded-lg px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <Shield size={18} className="text-brand-accent" />
                  <span className="text-brand-surface text-xs font-medium tracking-wide">CE Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-brand-surface/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-brand-surface/20 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-brand-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
