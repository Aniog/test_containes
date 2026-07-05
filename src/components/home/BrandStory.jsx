import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-14 md:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-sm">
            <div
              className="absolute inset-0 bg-cover bg-center"
              data-strk-bg-id="brand-story-img"
              data-strk-bg="gold jewelry artisan hands crafting workshop warm editorial"
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="900"
            />
          </div>
          <div className="py-2 md:py-6">
            <p className="text-xs tracking-[0.25em] uppercase text-gold-600 mb-3">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-950 tracking-wide leading-tight">
              Jewelry That Feels Like Home
            </h2>
            <p className="mt-4 text-charcoal-600 leading-relaxed text-sm md:text-base">
              Velmora was born from a simple belief: fine jewelry should not be reserved for special occasions.
              Every piece in our collection is designed to become part of your daily ritual — worn, loved,
              and passed on. We use responsibly sourced materials and 18K gold plating to create demi-fine
              pieces that last.
            </p>
            <p className="mt-3 text-charcoal-600 leading-relaxed text-sm md:text-base">
              From our studio to your jewelry box, each item is inspected by hand and packaged with care.
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="inline-block text-sm tracking-widest uppercase text-charcoal-900 border-b border-charcoal-900 pb-0.5 hover:text-gold-600 hover:border-gold-600 transition-colors"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
