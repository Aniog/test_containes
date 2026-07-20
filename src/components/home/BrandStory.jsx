import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section id="about" className="section-padding section-padding-y bg-cream-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-main"
              data-strk-img="jewelry artisan crafting gold piece workshop warm light editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative frame */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold-400/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-500 mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-900 leading-tight mb-6">
              Jewelry that tells
              <br />
              <em className="italic text-gold-600">your story</em>
            </h2>
            <div className="w-12 h-px bg-gold-400 mb-6" />
            <p className="font-sans text-sm md:text-base text-charcoal-600 leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves to wear jewelry that 
              makes her feel extraordinary — without the extraordinary price tag.
            </p>
            <p className="font-sans text-sm md:text-base text-charcoal-600 leading-relaxed mb-8">
              Each piece in our collection is crafted with 18K gold plating over premium base 
              metals, designed to be hypoallergenic and durable enough for everyday wear. We 
              work directly with skilled artisans, cutting out the middleman to bring you 
              luxury-quality jewelry at accessible prices.
            </p>
            <Link to="/shop" className="btn-outline text-xs">
              Discover the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
