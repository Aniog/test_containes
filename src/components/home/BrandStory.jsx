import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-cream overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="font-serif text-3xl md:text-h2 text-charcoal mb-6">Our Story</h2>
            <div className="space-y-4 text-charcoal-light leading-relaxed">
              <p>
                Velmora was born from a simple belief: that every woman deserves jewelry that makes her feel extraordinary, without the extraordinary price tag.
              </p>
              <p>
                Founded in 2020, we set out to create pieces that balance the line between fine jewelry and accessible luxury. Each piece in our collection is thoughtfully designed in our studio and crafted with care by skilled artisans.
              </p>
              <p>
                We use only the finest materials — 18K gold plating, sterling silver bases, and ethically sourced gemstones — ensuring that your jewelry not only looks luxurious but stands the test of time.
              </p>
            </div>
            <Link 
              to="#"
              className="inline-block mt-8 font-sans text-sm uppercase tracking-widest text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}