import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-soft-black mb-6 tracking-wide">
                Our Story
              </h2>
              <div className="w-24 h-px bg-velmora-gold mb-8" />
            </div>

            <div className="space-y-6 font-sans text-base leading-relaxed text-velmora-charcoal">
              <p>
                At Velmora, we believe that jewelry should be as unique as the woman who wears it.
                Our pieces are designed for those who appreciate the beauty in simplicity and the
                luxury in everyday moments.
              </p>
              <p>
                Each piece in our collection is crafted with meticulous attention to detail, using
                18K gold plating over high-quality brass, ensuring that your jewelry remains
                beautiful and tarnish-free for years to come.
              </p>
              <p>
                From our studio to your jewelry box, every Velmora piece carries with it a
                commitment to quality, sustainability, and timeless design.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-block border-b-2 border-velmora-gold text-velmora-soft-black font-sans text-sm tracking-widest uppercase pb-1 hover:text-velmora-gold transition-colors"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
