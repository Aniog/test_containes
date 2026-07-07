import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function BrandStory() {
  const [textRef, textVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-16 lg:py-28 bg-cream">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=85"
                alt="Velmora jewelry craft"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold hidden lg:block" />
          </div>

          {/* Text */}
          <div ref={textRef} className={`lg:pl-8 ${textVisible ? 'animate-in' : 'opacity-0'}`}>
            <p className="font-sans text-xs font-medium uppercase tracking-extra-wide text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl font-light text-charcoal leading-tight mb-6">
              Jewelry that
              <br />
              <em className="italic">tells your story</em>
            </h2>
            <div className="space-y-4 mb-8">
              <p className="font-sans text-sm text-warmGray-600 leading-relaxed">
                Velmora was born from a simple belief: you shouldn't have to choose between beauty and quality, between luxury and kindness to your skin.
              </p>
              <p className="font-sans text-sm text-warmGray-600 leading-relaxed">
                Every piece is thoughtfully designed and crafted with 18K gold plating over hypoallergenic brass — so it looks stunning and feels comfortable, every single day.
              </p>
            </div>
            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
