export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800" />

      <div className="absolute top-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-xs md:text-sm font-medium tracking-wide uppercase">
              Precision Metal Folding Solutions
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Industrial-Grade{' '}
            <span className="text-gold">Metal Folding</span>{' '}
            Machinery
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
            ARTITECT MACHINERY engineers premium double folding machines, sheet metal folders,
            and metal folding equipment trusted by fabrication professionals worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center bg-gold text-navy-900 px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-gold/90 transition-all duration-200 shadow-lg shadow-gold/20"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-slate-500 text-slate-200 px-8 py-3.5 rounded-lg font-medium text-base hover:border-gold hover:text-gold transition-all duration-200"
            >
              Request a Quote
            </a>
          </div>
        </div>

        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-96">
          <div className="relative">
            <div className="w-80 h-80 border border-gold/20 rounded-full absolute -top-40 -right-20" />
            <div className="w-64 h-64 border border-gold/10 rounded-full absolute -top-32 -right-10" />
            <div className="grid grid-cols-2 gap-3">
              {['DF-2000', 'DF-3000', 'SF-1500', 'MF-5000'].map((model) => (
                <div
                  key={model}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center hover:border-gold/30 transition-all duration-200"
                >
                  <div className="text-gold font-bold text-lg">{model}</div>
                  <div className="text-slate-400 text-xs mt-1">Premium Series</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
    </section>
  )
}