import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div
            className="aspect-[4/5] overflow-hidden"
            style={{ backgroundColor: 'var(--color-border)' }}
          >
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <span
              className="font-sans text-xs tracking-[0.2em] uppercase mb-4 block"
              style={{ color: 'var(--color-gold)' }}
            >
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
              Jewelry with Purpose
            </h2>
            <p
              className="font-sans text-base leading-relaxed mb-6"
              style={{ color: 'var(--color-muted)' }}
            >
              Founded with a vision to create jewelry that feels like a natural extension of the woman who wears it, 
              Velmora combines timeless elegance with modern sensibility. Each piece is thoughtfully designed to 
              transcend trends and become a treasured part of your personal story.
            </p>
            <p
              className="font-sans text-base leading-relaxed mb-8"
              style={{ color: 'var(--color-muted)' }}
            >
              Our demi-fine collections feature premium materials — 18K gold plating on sterling silver — 
              ensuring lasting beauty without the premium price tag. We believe everyone deserves to feel luxurious.
            </p>
            <Link
              to="/about"
              className="btn-outline inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}