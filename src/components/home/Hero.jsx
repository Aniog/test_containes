import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-brand-ink">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white">
        <p className="text-xs uppercase tracking-[0.3em] text-white/80 mb-4">Demi-Fine Jewelry</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6">Crafted to be Treasured</h1>
        <p className="text-base md:text-lg text-white/85 max-w-xl mx-auto mb-8 leading-relaxed">
          Modern heirlooms in 18K gold. Designed for the everyday, gifted for the unforgettable.
        </p>
        <Link to="/shop" className="btn-primary">
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
