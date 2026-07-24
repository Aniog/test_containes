import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding bg-cream">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
                alt="Jewelry craftsperson at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 rounded-full hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-overline text-gold mb-4">Our Story</p>
            <h2 className="heading-2 text-charcoal mb-6">
              Where Tradition Meets Modern Elegance
            </h2>
            <div className="space-y-4 text-charcoal-light leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves to wear jewelry that feels 
                precious without compromise. We craft each piece with the attention to detail of 
                fine jewelry, while keeping it accessible for everyday luxury.
              </p>
              <p>
                Our name, derived from the Latin word for "beloved," reflects our commitment to 
                creating pieces you'll treasure for years to come. Each design begins with a story, 
                inspired by nature's quiet moments and the modern women who wear them.
              </p>
            </div>
            <div className="mt-10">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-charcoal hover:text-gold transition-colors duration-200 group"
              >
                <span className="font-serif text-lg italic">Discover Our Story</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
