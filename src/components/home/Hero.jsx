import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-wide font-serif mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg font-light mb-8 max-w-md mx-auto leading-relaxed opacity-90">
          Demi-fine gold jewelry designed for everyday luxury. Each piece tells a story of craftsmanship and intention.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-white text-gray-900 px-8 py-4 text-sm tracking-[0.2em] uppercase font-light hover:bg-gray-100 transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}

export default Hero
