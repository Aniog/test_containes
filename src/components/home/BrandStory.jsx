import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-[#F5F3EF]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm tracking-[0.2em] uppercase text-[#C9A962] mb-4 block">
              Our Story
            </span>
            <h2
              className="text-3xl md:text-4xl text-[#1A1815] mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Crafted with Intention, Worn with Joy
            </h2>
            <p className="text-[#6B6560] leading-relaxed mb-6">
              At Velmora, we believe jewelry should be more than an accessory — it
              should be a cherished part of your story. Founded in 2019, our
              collection bridges the gap between fine jewelry and everyday luxury.
            </p>
            <p className="text-[#6B6560] leading-relaxed mb-8">
              Each piece is thoughtfully designed with quality materials, crafted
              to last and bring joy for years to come. We use 18K gold plating on
              sterling silver, ensuring your jewelry maintains its beautiful glow.
            </p>
            <Link
              to="/about"
              className="inline-block text-sm tracking-[0.1em] uppercase text-[#1A1815] border-b border-[#1A1815] pb-1 hover:text-[#C9A962] hover:border-[#C9A962] transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}