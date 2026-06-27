import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=1080&fit=crop&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-espresso)]/70 via-[var(--color-charcoal)]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container">
        <div className="flex items-center h-full py-20">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4 text-[var(--color-gold)]"
              style={{ animation: 'fadeIn 0.8s ease forwards' }}
            >
              Handcrafted · Hypoallergenic · 18K Gold
            </p>

            {/* Headline */}
            <h1
              className="heading-1 text-white mb-6 leading-tight"
              style={{ animation: 'fadeIn 0.8s ease 0.2s forwards', opacity: 0 }}
            >
              Crafted to be
              <br />
              <span className="italic font-normal">Treasured</span>
            </h1>

            {/* Subhead */}
            <p
              className="body-lg text-white/80 mb-8 max-w-md"
              style={{ animation: 'fadeIn 0.8s ease 0.4s forwards', opacity: 0 }}
            >
              Timeless demi-fine jewelry designed for everyday elegance. 
              Each piece tells your story with warmth and grace.
            </p>

            {/* CTA Button */}
            <div
              className="flex flex-wrap gap-4"
              style={{ animation: 'fadeIn 0.8s ease 0.6s forwards', opacity: 0 }}
            >
              <Link to="/shop" className="btn btn-gold">
                Shop the Collection
              </Link>
              <Link
                to="/about"
                className="btn bg-transparent border-white text-white hover:bg-white hover:text-[var(--color-charcoal)]"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
