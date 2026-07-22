import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-section-mobile md:py-section bg-velmora-off-white">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velmora-stone/20 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">
              Our Story
            </h2>
            <div className="mt-6 space-y-4 text-velmora-gray leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromise. We create pieces that bridge the gap between fine jewelry and fashion accessories.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed in our studio, using only the finest materials—18K gold plating, genuine crystals, and ethically sourced gemstones. Our commitment to quality means your jewelry will remain beautiful for years to come.
              </p>
              <p>
                We believe in jewelry that tells a story. Whether it's a gift for someone special or a treat for yourself, Velmora pieces are meant to be treasured, worn, and loved.
              </p>
            </div>
            <Link 
              to="/about"
              className="inline-block mt-8 text-sm uppercase tracking-widest text-velmora-gold border-b border-velmora-gold pb-1 hover:text-velmora-bronze hover:border-velmora-bronze transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;