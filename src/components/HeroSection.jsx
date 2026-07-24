import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] md:h-[100vh] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-main-bg"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E")` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p
          id="hero-subtitle"
          className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-white/80 mb-5"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight max-w-3xl"
        >
          Crafted to be Treasured
        </h1>
        <div className="mt-10">
          <Link to="/shop" className="btn-primary px-10 py-4">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}