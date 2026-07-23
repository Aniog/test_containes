import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[var(--color-gold)] -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p 
              className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] mb-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Our Story
            </p>
            
            <h2 
              className="mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Where Artistry<br />Meets Everyday Luxury
            </h2>

            <div className="space-y-6 text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                Velmora was born from a simple belief: everyone deserves to wear beautiful, 
                well-crafted jewelry without compromise. We create pieces that bridge the gap 
                between fashion jewelry and fine jewelry—demi-fine jewelry that feels luxurious 
                and accessible.
              </p>
              
              <p>
                Each piece in our collection is thoughtfully designed and crafted with 
                premium materials—18K gold plating, hypoallergenic metals, and carefully 
                selected stones. We believe in jewelry that can be worn every day, 
                treasured for years.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 mt-8 btn btn-outline"
            >
              Discover More
              <svg 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
