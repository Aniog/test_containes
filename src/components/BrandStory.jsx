import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section id="story" className="py-16 md:py-0 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px]">
            <img
              src="https://placehold.co/800x1000/2a1f1a/d4b87a?text=Velmora+Atelier"
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-6 py-16 md:px-16 lg:px-20">
            <div className="max-w-md">
              <p className="text-xs tracking-ultra uppercase text-gold mb-4">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight">
                Designed with
                <br />
                <span className="italic">Intention</span>
              </h2>
              <div className="w-12 h-px bg-gold mt-6 mb-6" />
              <p className="text-sm text-stone leading-relaxed mb-4">
                Velmora was born from a simple belief: fine jewelry should not be reserved for special occasions alone. Every piece in our collection is designed to feel luxurious yet liveable — pieces you reach for with your morning coffee and your evening plans.
              </p>
              <p className="text-sm text-stone leading-relaxed mb-8">
                We work with master artisans using 18K gold plating over recycled brass, ensuring each design is hypoallergenic, water-resistant, and made to last. Our materials are responsibly sourced, and our packaging is fully recyclable.
              </p>
              <Link
                to="/collection"
                className="text-xs tracking-widest uppercase font-medium text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors"
              >
                Explore the Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
