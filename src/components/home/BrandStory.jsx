import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function BrandStory() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div ref={ref} className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className={`relative aspect-[4/5] rounded-lg overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-velmora-gold rounded-full opacity-30" />
          </div>

          {/* Content */}
          <div className={`flex flex-col justify-center transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <span className="text-xs font-medium uppercase tracking-ultra-wide text-velmora-gold mb-4">
              Our Story
            </span>
            <h2 className="heading-section mb-6">
              Jewelry that tells your story
            </h2>
            <div className="space-y-4 text-velmora-warm-gray leading-relaxed">
              <p>
                Velmora was born from a simple belief: everyone deserves to wear jewelry that makes them feel extraordinary. We create demi-fine pieces that bridge the gap between fashion and fine jewelry.
              </p>
              <p>
                Each piece is thoughtfully designed in our studio and crafted by skilled artisans using premium materials — 18K gold plating, hypoallergenic metals, and ethically sourced stones. We believe luxury should be accessible, not exclusive.
              </p>
              <p>
                More than adornment, Velmora jewelry is meant to be a companion through life's moments — from everyday victories to celebrations worth remembering.
              </p>
            </div>
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-velmora-charcoal hover:text-velmora-gold transition-colors group"
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-current after:transform after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left">
                Learn More About Us
              </span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
