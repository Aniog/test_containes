import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-velmora-bg-primary pt-20">
      <div className="max-w-container mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl md:text-5xl text-velmora-text-primary mb-6">
            About Velmora
          </h1>
          <div className="w-16 h-px bg-velmora-accent mx-auto" />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="aspect-[4/5] bg-velmora-bg-secondary">
              <img 
                src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=750&fit=crop"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-2xl text-velmora-text-primary">
                Our Beginning
              </h2>
              <p className="text-velmora-text-secondary leading-relaxed">
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary. Founded in 2020, we set out to create pieces that bridge the gap between fine jewelry and everyday luxury.
              </p>
              <p className="text-velmora-text-secondary leading-relaxed">
                Our name derives from the Latin "vel" meaning "to veil" and "mora" meaning "jewel" — a tribute to the subtle elegance our pieces bring to any ensemble.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="font-serif text-2xl text-velmora-text-primary">
                Our Craft
              </h2>
              <p className="text-velmora-text-secondary leading-relaxed">
                Each Velmora piece is thoughtfully designed in our studio and crafted with care by skilled artisans. We use only the finest materials — 18K gold-plated sterling silver, genuine crystals, and ethically sourced gemstones.
              </p>
              <p className="text-velmora-text-secondary leading-relaxed">
                Our commitment to quality means your jewelry will remain beautiful for years to come, becoming treasured pieces in your collection.
              </p>
            </div>
            <div className="order-1 md:order-2 aspect-[4/5] bg-velmora-bg-secondary">
              <img 
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Values */}
          <div className="py-12 border-t border-b border-velmora-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-serif text-xl text-velmora-text-primary mb-3">Quality</h3>
                <p className="text-sm text-velmora-text-secondary">
                  Premium materials and expert craftsmanship ensure lasting beauty.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl text-velmora-text-primary mb-3">Sustainability</h3>
                <p className="text-sm text-velmora-text-secondary">
                  Responsible sourcing and eco-friendly packaging minimize our impact.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl text-velmora-text-primary mb-3">Community</h3>
                <p className="text-sm text-velmora-text-secondary">
                  We give back through partnerships with women's empowerment organizations.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link 
              to="/shop"
              className="inline-block bg-velmora-accent text-velmora-bg-primary px-10 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-velmora-accent-hover"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}