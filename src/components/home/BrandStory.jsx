import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-[#F5F0E8] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#C9A962]">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
              Jewelry with Purpose
            </h2>
            <p className="text-[#8A8A8A] leading-relaxed mb-6">
              Founded with a vision to make fine jewelry accessible, Velmora creates pieces that bridge the gap between luxury and everyday elegance. Each piece is thoughtfully designed in our studio and crafted with care using ethically sourced materials.
            </p>
            <p className="text-[#8A8A8A] leading-relaxed mb-8">
              We believe jewelry should be more than an accessory — it should be a cherished part of your story, worn with joy for years to come.
            </p>
            <Link
              to="/about"
              className="btn-secondary"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}