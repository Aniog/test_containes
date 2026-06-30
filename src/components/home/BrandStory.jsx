import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 lg:py-24 bg-cream-100">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm px-6 py-4">
                <p className="font-serif text-lg italic text-charcoal-800">
                  "Jewelry should feel like an extension of you — effortless, warm, and always radiant."
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-label text-brand mb-4">Our Story</p>
            <h2 className="heading-serif text-3xl lg:text-4xl text-charcoal-800 mb-6 leading-snug">
              Born from a love of
              <br />
              <span className="italic font-normal text-brand">quiet luxury</span>
            </h2>
            <div className="w-12 h-[1px] bg-brand mb-8" />
            <div className="space-y-4 text-charcoal-500 text-sm leading-relaxed">
              <p>
                Velmora was founded on a simple belief: that luxury jewelry shouldn't require a luxury price tag. 
                Every piece in our collection is crafted from 18K gold-plated sterling silver, designed to be 
                worn daily and treasured for years.
              </p>
              <p>
                We work directly with skilled artisans, cutting out the middleman to bring you 
                premium demi-fine jewelry at accessible prices. Each piece is hypoallergenic, 
                water-resistant, and backed by our 30-day happiness guarantee.
              </p>
              <p>
                From the drawing board to your jewelry box, every detail matters.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-label text-charcoal-800 hover:text-brand transition-colors border-b border-charcoal-800 hover:border-brand pb-1"
              style={{ textDecoration: 'none' }}
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
