import { ArrowRight, ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-950 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Accent gradient overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-500/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-brand-950 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/20 rounded-full px-4 py-1.5">
              <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              <span className="text-accent-300 text-sm font-medium">Industry-Leading Precision</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05]">
              <span className="block">Double Folding</span>
              <span className="block text-accent-400">Machine</span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-light text-brand-300 mt-2">
                Excellence
              </span>
            </h1>

            <p className="text-lg text-brand-300 max-w-xl leading-relaxed">
              Engineered for precision and built to last. Our double folding machines deliver
              unmatched accuracy in sheet metal fabrication, setting the standard for the industry.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-base transition-all hover:shadow-xl hover:shadow-accent-500/20 hover:-translate-y-0.5"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-8 py-4 rounded-lg font-semibold text-base border border-white/10 transition-all hover:-translate-y-0.5"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {[
                { value: '25+', label: 'Years Experience' },
                { value: '5000+', label: 'Machines Sold' },
                { value: '99.8%', label: 'Precision Rate' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-accent-400">{stat.value}</div>
                  <div className="text-sm text-brand-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Machine image area */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-accent-500/20 rounded-2xl" />
              <div className="absolute -inset-8 border border-white/5 rounded-3xl" />

              {/* Main image area */}
              <div className="relative bg-gradient-to-br from-brand-800 to-brand-900 rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  data-strk-img-id="hero-machine-main-a7b3c9"
                  data-strk-img="[hero-subtitle] [hero-title] sheet metal double folding machine industrial"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="ARTITECT Double Folding Machine"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent" />

                {/* Label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
                    <p className="text-white font-semibold text-sm">Model DF-2500 Pro</p>
                    <p className="text-brand-300 text-xs">2500mm working length | 6mm capacity</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-accent-500 text-white px-5 py-3 rounded-lg shadow-xl">
                <p className="text-xs font-medium opacity-90">Starting from</p>
                <p className="text-xl font-bold">Request Quote</p>
              </div>
            </div>

            {/* Hidden text for image interpolation */}
            <span id="hero-title" className="hidden">Double Folding Machine</span>
            <span id="hero-subtitle" className="hidden">Precision sheet metal folder industrial machinery</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-brand-400 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-brand-400 animate-bounce" />
      </div>
    </section>
  )
}

export default Hero
