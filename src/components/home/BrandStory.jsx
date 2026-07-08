import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="section-padding py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/5] bg-stone-200 overflow-hidden">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[brand-story-title] [brand-story-text] gold jewelry artisan craftsmanship warm light"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center py-4">
          <p className="font-sans text-xs uppercase tracking-widest-2xl text-gold-500 mb-4">Our Story</p>
          <h2 id="brand-story-title" className="heading-lg text-dark-900 mb-6">
            Jewelry That Feels Like You
          </h2>
          <p id="brand-story-text" className="body-md text-dark-600 mb-4">
            Velmora was born from a simple belief: luxury shouldn't be out of reach. We create demi-fine jewelry
            that bridges the gap between fast fashion accessories and fine jewelry — pieces you'll reach for
            every single day.
          </p>
          <p className="body-md text-dark-600 mb-8">
            Every piece is crafted in 18K gold plating over sterling silver, designed to be hypoallergenic
            and enduring. Because the best jewelry isn't the kind you save for special occasions — it's the
            kind that makes every day feel a little more special.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-wider text-gold-500 hover:text-gold-600 transition-colors group">
            Read Our Story
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
