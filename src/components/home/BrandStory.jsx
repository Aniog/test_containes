import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=900&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative frame */}
            <div className="absolute top-6 left-6 right-6 bottom-6 border border-gold-300/40 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="label text-gold-500 mb-4">Our Story</p>
            <h2 className="heading-2 text-charcoal-900 mb-6 leading-tight">
              Made with intention,
              <br />
              <em className="font-light italic text-gold-700">worn with love</em>
            </h2>

            <div className="space-y-4 mb-10">
              <p className="body-text text-charcoal-700">
                Velmora was born from a simple belief: you shouldn't have to choose between quality and accessibility. Every piece in our collection is designed in our studio and hand-finished by skilled artisans.
              </p>
              <p className="body-text text-charcoal-700">
                We use 18K gold plating over hypoallergenic sterling silver and brass — materials that look and feel premium, without the premium price tag.
              </p>
            </div>

            <div className="flex items-center gap-10 mb-10">
              <div>
                <p className="font-serif text-3xl font-light text-charcoal-900 mb-1">18K</p>
                <p className="label text-charcoal-500">Gold Plating</p>
              </div>
              <div className="w-px h-10 bg-charcoal-200" />
              <div>
                <p className="font-serif text-3xl font-light text-charcoal-900 mb-1">100%</p>
                <p className="label text-charcoal-500">Hypoallergenic</p>
              </div>
              <div className="w-px h-10 bg-charcoal-200" />
              <div>
                <p className="font-serif text-3xl font-light text-charcoal-900 mb-1">30</p>
                <p className="label text-charcoal-500">Day Returns</p>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 group self-start"
            >
              <span className="text-xs font-sans font-semibold uppercase tracking-ultra-wide text-charcoal-900 border-b border-charcoal-400 pb-0.5 group-hover:border-charcoal-900 transition-colors">
                Discover Our Story
              </span>
              <span className="text-charcoal-400 group-hover:text-charcoal-900 group-hover:translate-x-1 transition-all duration-200">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
