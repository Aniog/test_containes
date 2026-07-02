import { Link } from 'react-router-dom';

export default function BrandStorySection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-ivory-100">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-sm">
            <div
              className="absolute inset-0"
              data-strk-bg-id="brand-story-img-main"
              data-strk-bg="[story-title] [story-subtitle]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="900"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p id="story-subtitle" className="section-subtitle mb-4 text-left">Our Story</p>
            <h2 id="story-title" className="font-serif text-3xl md:text-4xl text-charcoal-900 tracking-[0.04em] mb-6">
              Jewelry That Honors Your Story
            </h2>
            <div className="space-y-4 font-sans text-sm text-charcoal-600 leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that feels as
                special as the moments she wears it in. Our pieces are designed in New York and
                crafted with the finest 18K gold plating — hypoallergenic, tarnish-resistant, and
                built to last.
              </p>
              <p>
                We cut out the middleman to bring you luxury-quality jewelry at prices that make
                sense. No markups. No gatekeeping. Just beautiful pieces that arrive at your door
                in premium packaging, ready to gift — or to keep.
              </p>
            </div>
            <Link
              to="#"
              className="inline-block mt-8 font-sans text-xs tracking-[0.14em] uppercase font-medium text-charcoal-900 border-b border-charcoal-900 pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors"
            >
              Read Our Story &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
