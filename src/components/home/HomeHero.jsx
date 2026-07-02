import { Link } from 'react-router-dom'

export default function HomeHero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-velmora-ink">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/50" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=80)',
            backgroundPosition: 'center 30%',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-white/70 font-sans text-xs md:text-sm tracking-super uppercase mb-6 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium tracking-wide leading-tight max-w-3xl animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="text-white/60 font-sans text-sm md:text-base mt-6 max-w-lg leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          18K gold-plated pieces designed for the modern woman — timeless, ethical, and made to be worn every day.
        </p>
        <Link
          to="/shop"
          className="mt-10 btn-primary animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}