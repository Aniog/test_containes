import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&h=900&fit=crop&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase font-sans mb-4 opacity-90">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-tight mb-6">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-sm md:text-base max-w-md opacity-90 mb-10 font-light">
          Timeless pieces designed for the modern woman. 18K gold-plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-velmora-gold text-white px-10 py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold-light transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
