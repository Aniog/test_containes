import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 sm:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold-500 -z-10 hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="font-sans text-xs tracking-ultra uppercase text-gold-500">
              Our Story
            </span>
            
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-charcoal leading-tight">
              Where Elegance Meets Everyday
            </h2>

            <p className="mt-6 font-sans text-base text-warmGray leading-relaxed">
              Velmora was born from a simple belief: every woman deserves jewelry that makes 
              her feel extraordinary, without the extraordinary price tag. We craft each piece 
              with intention, using premium materials and timeless designs that transition 
              effortlessly from morning meetings to evening cocktails.
            </p>

            <p className="mt-4 font-sans text-base text-warmGray leading-relaxed">
              Our demi-fine jewelry is designed to be lived in, cherished, and passed down. 
              Because the most meaningful pieces aren't just worn—they're treasured.
            </p>

            <div className="mt-10">
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 font-sans text-sm text-charcoal 
                         hover:text-gold-500 transition-colors group"
              >
                <span className="tracking-wide">Read Our Story</span>
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
      </div>
    </section>
  );
};

export default BrandStory;
