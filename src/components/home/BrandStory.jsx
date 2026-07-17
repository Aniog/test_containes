import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] rounded-sm overflow-hidden bg-warm-100">
            <div
              className="w-full h-full"
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] artisan crafting gold jewelry hands warm lighting"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
            />
          </div>

          {/* Text */}
          <div>
            <p className="section-subheading mb-4">Our Story</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-espresso-800 mb-6 leading-tight">
              Jewelry meant to be lived in,<br />loved, and passed down
            </h2>
            <p className="text-espresso-500 leading-relaxed mb-6 font-sans">
              Velmora was born from the belief that fine jewelry shouldn't be locked away for special occasions. Our pieces are crafted in small Italian ateliers using 18K gold plating over brass, designed to become part of your everyday story.
            </p>
            <p className="text-espresso-500 leading-relaxed mb-8 font-sans">
              Every curve, every facet, every clasp is considered. We use nickel-free, hypoallergenic materials because luxury should feel as good as it looks.
            </p>
            <Link to="/shop" className="btn-outline text-xs">
              Our Story
            </Link>
            <span id="brand-story-title" className="sr-only">Velmora artisan gold jewelry craftsmanship</span>
          </div>
        </div>
      </div>
    </section>
  );
}
