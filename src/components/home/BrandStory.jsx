import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-champagne">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-gold text-sm uppercase tracking-ultra-wide mb-4">
              Our Story
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-6 leading-tight">
              Where Artistry Meets<br />
              Everyday Elegance
            </h2>

            <div className="space-y-4 text-cocoa leading-relaxed">
              <p>
                At Velmora, we believe that beautiful jewelry shouldn't be reserved for special occasions alone. 
                Our journey began with a simple vision: to create pieces that transition effortlessly 
                from morning coffee to evening cocktails.
              </p>
              
              <p>
                Each piece in our collection is thoughtfully designed and crafted with premium materials— 
                18K gold plating, hypoallergenic metals, and carefully selected stones. We believe in 
                quality that lasts, not jewelry that fades.
              </p>
              
              <p>
                More than adornment, Velmora pieces are meant to be companions through life— 
                marking milestones, celebrating achievements, and adding a touch of magic to the everyday.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-espresso hover:text-gold transition-colors group"
            >
              <span className="border-b-2 border-gold pb-1 group-hover:border-espresso transition-colors">
                Discover Our Story
              </span>
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
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
}
