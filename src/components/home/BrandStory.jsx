import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-24 bg-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight mb-6">
              Where Craft Meets <br />
              <span className="italic">Everyday Luxury</span>
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Founded in 2019, Velmora began with a simple belief: luxury should feel accessible, 
              not exclusive. We craft demi-fine jewelry that celebrates the beauty of everyday moments, 
              using premium materials and timeless designs that transcend seasons.
            </p>
            <p className="text-charcoal/80 leading-relaxed mb-8">
              Each piece is thoughtfully designed in our studio and crafted with care, ensuring that 
              every customer receives jewelry they'll treasure for years to come.
            </p>
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-charcoal hover:text-gold transition-colors group"
            >
              <span className="relative">
                Discover Our Journey
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
