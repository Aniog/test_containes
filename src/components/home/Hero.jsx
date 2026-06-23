import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-velvet-950">
        <div className="absolute inset-0 bg-gradient-to-b from-velvet-950/70 via-velvet-950/30 to-velvet-950/70" />
        {/* Warm gold glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-warm-500/20 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-sans text-[10px] tracking-[0.4em] text-cream-400/80 mb-6 uppercase">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream-50 font-medium leading-[1.08] tracking-tight mb-6 animate-fade-up">
          Crafted to be<br className="hidden sm:block" /> Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-cream-300/80 max-w-lg mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Jewelry that doesn&apos;t wait for special occasions — because every day deserves a touch of gold.
        </p>
        <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Link to="/shop" className="btn-outline border-cream-50/30 text-cream-50 hover:border-cream-50 hover:bg-cream-50 hover:text-velvet-950">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <span className="text-[9px] font-sans tracking-[0.3em] text-cream-400/60 uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-cream-400/40 to-transparent" />
      </div>
    </section>
  )
}
