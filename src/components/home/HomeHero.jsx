import React from "react"
import { Link } from "react-router-dom"

const HomeHero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-wide">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
          Demi-fine jewelry designed for the modern woman. Each piece is thoughtfully crafted to be worn every day and gifted for a lifetime.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-10 px-8 py-4 bg-white text-stone-900 text-xs uppercase tracking-[0.2em] hover:bg-stone-100 transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}

export default HomeHero
