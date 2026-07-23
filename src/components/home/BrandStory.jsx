import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-section-mobile lg:py-section bg-velmora-light">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-border animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8 animate-fade-in delay-100">
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-black">
              Our Story
            </h2>
            <div className="mt-6 space-y-4 text-velmora-gray leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromise. We create pieces that bridge the gap between fine jewelry and fashion accessories—premium quality at accessible prices.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed in our studio and crafted with care using ethically sourced materials. Our signature 18K gold plating ensures lasting beauty that you can treasure for years to come.
              </p>
              <p>
                We believe in jewelry that doesn't just accessorize an outfit, but becomes a part of your story. Pieces that are worn, remembered, and passed down.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm uppercase tracking-widest text-velmora-gold border-b border-velmora-gold pb-1 hover:text-velmora-gold-hover hover:border-velmora-gold-hover transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}