import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-brand-gold-light">
            <img
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=900&q=85"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal font-light leading-tight">
              Crafted with
              <br />
              <span className="italic">Intention</span>
            </h2>
            <div className="w-12 h-px bg-brand-gold my-6" />
            <p className="text-brand-warm-gray text-sm md:text-base leading-relaxed font-light">
              Every Velmora piece begins with a sketch, a story, and a commitment to quality 
              that transcends trends. We work with master artisans who transform 18K gold-plated 
              metals into heirloom-worthy designs — at prices that honor both craftsmanship and 
              accessibility.
            </p>
            <p className="text-brand-warm-gray text-sm md:text-base leading-relaxed mt-4 font-light">
              From our atelier to you: jewelry that feels as good as it looks, worn on the days 
              that matter and the ones in between.
            </p>
            <Link
              to="/shop"
              className="inline-block mt-8 text-sm uppercase tracking-[0.15em] text-brand-charcoal border-b border-brand-charcoal pb-0.5 hover:text-brand-gold hover:border-brand-gold transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}