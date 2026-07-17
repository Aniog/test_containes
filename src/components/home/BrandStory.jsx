import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1612965607446-25e1332775ae?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold-300" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-xs uppercase tracking-ultra-wide text-taupe mb-4">
              Our Story
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
              Jewelry That<br />
              <span className="italic">Tells Your Story</span>
            </h2>

            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                At Velmora, we believe every woman deserves to wear jewelry that makes her feel special 
                — not just on special occasions, but every day. Our demi-fine collection bridges 
                the gap between fashion jewelry and fine jewelry.
              </p>
              <p>
                Each piece is crafted with 18K gold plating over sterling silver, ensuring 
                lasting quality without the luxury price tag. We source our materials responsibly 
                and work with skilled artisans who share our commitment to excellence.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm text-charcoal link-underline"
            >
              Learn More About Us
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
