import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-[1400px] mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/5] bg-cream-200 order-2 lg:order-1">
            <img
              alt="Velmora brand story — artisan crafting gold jewelry"
              className="w-full h-full object-cover"
              data-strk-img-id="brand-story-img-8f3a2c"
              data-strk-img="[brand-story-heading] artisan jewelry workshop gold crafting"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <div className="divider-gold mb-8" />
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-400 tracking-wide mb-6 leading-tight"
            >
              The Velmora Story
            </h2>
            <p className="text-sm text-charcoal-100 leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that feels 
              luxurious without the luxury markup. We design demi-fine pieces in 18K gold that 
              you can wear every single day — to the office, on date night, or while doing 
              absolutely nothing at all.
            </p>
            <p className="text-sm text-charcoal-100 leading-relaxed mb-8">
              Each piece is crafted with care, designed to last, and made to make you feel like 
              the most confident version of yourself. Because jewelry should be treasured, not 
              tucked away.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest-xl font-sans font-medium text-charcoal-400 group"
            >
              <span className="border-b border-charcoal-400 pb-0.5 group-hover:border-gold-500 group-hover:text-gold-600 transition-all duration-300">
                Our Story
              </span>
              <span className="text-charcoal-50 group-hover:text-gold-500 transition-colors">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
