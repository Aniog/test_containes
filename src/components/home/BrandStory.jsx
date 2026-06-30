import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-main"
              data-strk-img="artisan gold jewelry workshop hands crafting"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative frame */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold-400/20 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-widest-xl uppercase text-gold-500 mb-4 font-medium">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800 mb-6" style={{ fontWeight: 400 }}>
              Jewelry That Tells<br />
              <em className="italic" style={{ fontWeight: 300 }}>Your Story</em>
            </h2>
            <div className="space-y-4 text-charcoal-500 text-sm leading-relaxed">
              <p>
                Velmora was born from a simple belief: everyone deserves jewelry that feels both luxurious and effortless. Our pieces are crafted from 18K gold-plated sterling silver, designed to be worn every day and treasured for years.
              </p>
              <p>
                Each design starts as a hand sketch in our studio, refined through countless iterations until every curve, every angle, every catch of light is exactly right. We work with artisan workshops that share our commitment to quality and ethical craftsmanship.
              </p>
              <p>
                The result is demi-fine jewelry that bridges the gap between costume and fine — premium quality without the premium price tag.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 text-xs tracking-widest-xl uppercase text-charcoal-800 border-b border-charcoal-800 pb-0.5 hover:text-gold-600 hover:border-gold-600 transition-colors font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
