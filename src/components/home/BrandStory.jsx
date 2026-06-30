import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded overflow-hidden order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-gold/30 -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 lg:pl-8">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-charcoal leading-tight mb-6">
              Where Quiet Luxury Meets Artisanal Craft
            </h2>
            <div className="space-y-4 text-warm-gray leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without the extraordinary price tag.
              </p>
              <p>
                Founded in 2019, we partner with master jewelers who share our passion for quality and detail. Each piece is thoughtfully designed and crafted with 18K gold plating over hypoallergenic metals, ensuring beauty that lasts.
              </p>
              <p>
                We believe in jewelry that whispers rather than shouts — pieces that become cherished companions through life's moments, both big and small.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-sm uppercase tracking-wider text-charcoal hover:text-gold transition-colors duration-300 group"
            >
              Discover Our Journey
              <span className="w-8 h-px bg-charcoal group-hover:bg-gold transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
