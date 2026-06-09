export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#1F3460] to-[#152240]" />

      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #C9A84C 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, #C9A84C 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 border border-brand-gold/30 rounded-full text-brand-gold text-xs tracking-[0.2em] uppercase font-medium">
            Precision Metal Folding Since 1998
          </span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Advanced Metal
          <span className="block text-brand-gold">Folding Machinery</span>
        </h1>

        <p className="max-w-2xl mx-auto text-white/70 text-base md:text-lg leading-relaxed mb-10">
          Artitect Machinery delivers precision-engineered sheet metal folding solutions
          for modern fabrication. From compact double folders to industrial metal folding
          machines, each system is built for accuracy, durability, and ease of use.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="px-8 py-3.5 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-[#B8983B] transition-all shadow-lg shadow-brand-gold/20"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
          >
            Request a Quote
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { value: '500+', label: 'Machines Delivered' },
            { value: '26+', label: 'Years Experience' },
            { value: '40+', label: 'Countries Served' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-brand-gold mb-1">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs md:text-sm tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}