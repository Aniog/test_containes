import { Link } from 'react-router-dom'

const HERO_BG = 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1653651461594-df68ea7fe086'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-noir bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-noir/70 via-noir/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream font-medium leading-tight">
            Crafted to be Treasured
          </h1>
          <p className="mt-4 text-cream/70 text-base md:text-lg leading-relaxed max-w-md">
            Demi-fine gold jewelry designed for the modern woman. Timeless elegance, accessible luxury.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 px-8 py-3.5 bg-gold text-cream text-sm font-medium uppercase tracking-product hover:bg-gold-dark transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
