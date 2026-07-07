import { Link } from 'react-router-dom'

export function HeroSection() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1613966561243-c6959a886009?auto=format&fit=crop&w=1920&q=85)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velvet/40 via-velvet/20 to-velvet/70" />

      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.25em] text-cream/80 mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.05]">
            Crafted to be Treasured
          </h1>
          <p className="mt-6 text-base md:text-lg text-cream/85 max-w-xl mx-auto font-light leading-relaxed">
            Timeless pieces for everyday luxury. Designed for the moments you keep close.
          </p>
          <div className="mt-9">
            <Link
              to="/shop"
              className="inline-block px-10 py-4 bg-accent text-velvet text-xs font-sans uppercase tracking-[0.18em] font-semibold hover:bg-accent-hover transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
