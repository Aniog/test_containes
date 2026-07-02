import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function BrandStory() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-16 md:py-24 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="animate-on-scroll grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <div
              className="absolute inset-0"
              data-strk-bg-id="brand-story-image-main"
              data-strk-bg="artisan hands crafting gold jewelry warm workshop light"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
            />
            <div className="absolute inset-0 ring-1 ring-charcoal-200/20" />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <p className="text-xs tracking-mega-wide uppercase text-gold-500 font-medium mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 font-light leading-snug mb-6">
              Jewelry that feels like
              <em className="block">you, elevated.</em>
            </h2>
            <div className="w-12 h-[1px] bg-gold-400 mb-6" />
            <p className="text-sm md:text-base text-charcoal-500 leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that feels luxurious 
              without the luxury price tag. We craft demi-fine pieces in 18K gold plating over 
              sterling silver, designed to be worn every day and treasured for years.
            </p>
            <p className="text-sm md:text-base text-charcoal-500 leading-relaxed mb-8">
              Each piece is hypoallergenic, nickel-free, and built to resist tarnishing. 
              Because we believe that quality shouldn't be a compromise.
            </p>
            <Link
              to="/shop"
              className="inline-block text-xs tracking-widest uppercase font-semibold text-charcoal-900 border-b-2 border-gold-400 pb-1 hover:text-gold-600 hover:border-gold-500 transition-colors duration-300"
            >
              Discover the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
