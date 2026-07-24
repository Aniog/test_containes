import { useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ugcItems } from '../../data/products';

export default function UGCStrip() {
  const [ref, isVisible] = useIntersectionObserver();
  const scrollRef = useRef(null);

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div ref={ref} className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-xs font-medium uppercase tracking-ultra-wide text-velmora-gold mb-3 block">
            Styled by You
          </span>
          <h2 className="heading-section">Seen on Instagram</h2>
          <p className="mt-4 text-velmora-warm-gray max-w-md mx-auto">
            Join our community of jewelry lovers. Tag @velmorajewelry for a chance to be featured.
          </p>
        </div>
      </div>

      {/* Scrollable Strip - Full width */}
      <div 
        ref={scrollRef}
        className={`flex gap-4 px-6 md:px-8 lg:px-12 overflow-x-auto scrollbar-hide pb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Left fade */}
        <div className="flex-shrink-0 w-6 md:w-12" />
        
        {ugcItems.map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-40 md:w-52 lg:w-60 transition-all duration-500"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden group">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-white text-sm italic leading-snug">
                  "{item.caption}"
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Right fade */}
        <div className="flex-shrink-0 w-6 md:w-12" />
      </div>

      {/* Instagram CTA */}
      <div className={`text-center mt-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <a
          href="https://instagram.com/velmorajewelry"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-velmora-warm-gray hover:text-velmora-gold transition-colors"
        >
          <span>@velmorajewelry</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>
  );
}
