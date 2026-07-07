import { Link } from 'react-router-dom';

export function BrandStory() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold-300 rounded-full opacity-50" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="font-sans text-xs tracking-extra-wide uppercase text-gold-500">
              Our Story
            </span>
            <h2 className="section-title mt-4 mb-6">
              Jewelry That Tells Your Story
            </h2>
            <div className="space-y-4 text-charcoal-600 font-light leading-relaxed">
              <p>
                At Velmora, we believe every woman deserves jewelry that feels 
                like it was made just for her. Our demi-fine pieces are crafted 
                with the precision of fine jewelry and the accessibility of 
                everyday luxury.
              </p>
              <p>
                Each design begins with a moment of inspiration—a sunset, a 
                memory, a feeling—and is transformed into wearable art that 
                you can carry with you throughout your day.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 mt-8 font-sans text-sm tracking-wider uppercase text-charcoal-800 hover:text-gold-600 transition-colors group"
            >
              <span>Discover Our Journey</span>
              <span className="w-8 h-px bg-current transform transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
