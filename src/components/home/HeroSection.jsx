import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] -mt-16 md:-mt-20 overflow-hidden">
      {/* Background image with zoom-in animation */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1600&q=85"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover animate-[scaleIn_1.2s_ease-out]"
          style={{ animation: 'scaleIn 1.4s ease-out forwards' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container-page w-full">
          <div className="max-w-xl">
            <p className="text-gold-light text-sm tracking-widest uppercase font-sans font-medium mb-4 animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
              Demi-Fine Gold Jewelry
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white leading-tight mb-6 animate-[fadeInUp_0.8s_ease-out_0.5s_both]">
              Crafted to be<br />
              <span className="italic">Treasured</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-md mb-8 leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.7s_both]">
              Every piece tells a story. Discover our collection of handcrafted gold jewelry designed for the moments that matter.
            </p>
            <Link
              to="/collection"
              className="btn-primary inline-block text-base px-10 py-4 animate-[fadeInUp_0.8s_ease-out_0.9s_both]"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-[fadeInUp_0.8s_ease-out_1.2s_both]">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-8 bg-white/30 overflow-hidden">
          <div className="w-full h-1/2 bg-white/60 animate-pulse" />
        </div>
      </div>
    </section>
  )
}