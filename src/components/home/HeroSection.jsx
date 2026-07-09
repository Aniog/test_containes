import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-b from-velvet-900/60 via-velvet-950/40 to-velvet-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
        <p className="text-xs md:text-sm tracking-super-wide uppercase text-gold-400 mb-6 font-medium">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="heading-xl text-velvet-50 mb-6 text-balance">
          Crafted to be Treasured
        </h1>
        <p className="body-text max-w-xl mx-auto mb-10">
          Thoughtfully designed pieces in 18K gold plate — for the everyday and the extraordinary.
        </p>
        <Link to="/shop" className="btn-primary">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 rounded-full border border-velvet-400 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-velvet-300 animate-bounce" />
        </div>
      </div>
    </section>
  )
}