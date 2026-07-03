import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section bg-[#FAF8F5]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div 
              className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#C9A962]"
              style={{ transform: 'translate(10%, 10%)' }}
            />
          </div>

          {/* Content */}
          <div className="py-8 md:py-0">
            <p className="label-uppercase text-xs tracking-[0.2em] mb-4" style={{ color: 'var(--color-gold)' }}>
              Our Story
            </p>
            
            <h2 className="heading-2 mb-6" style={{ color: 'var(--color-text)' }}>
              Where Elegance
              <br />
              Meets Affordability
            </h2>
            
            <div className="space-y-4 text-[#6B6560] leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves to wear beautiful, 
                well-crafted jewelry without the luxury markup. We partner directly with skilled 
                artisans who share our commitment to quality and ethical production.
              </p>
              <p>
                Each piece in our collection is crafted with 18K gold plating over hypoallergenic 
                metals, ensuring both beauty and comfort. We believe in jewelry that can be worn 
                every day—treasured, not saved for special occasions.
              </p>
            </div>

            <Link 
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-wider font-medium border-b border-[#2D2926] pb-1 hover:border-[#C9A962] hover:text-[#C9A962] transition-colors"
              style={{ color: 'var(--color-text)' }}
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
