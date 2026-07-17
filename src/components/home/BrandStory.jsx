import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image side */}
          <div className="aspect-[4/5] lg:aspect-auto bg-gradient-to-br from-espresso-100 via-espresso-200 to-gold-600 flex items-center justify-center">
            <div className="text-center opacity-30">
              <span className="text-cream/50 text-[12rem] font-serif leading-none">V</span>
            </div>
          </div>

          {/* Text side */}
          <div className="flex items-center px-8 lg:px-16 py-16 lg:py-0 bg-sand-50">
            <div className="max-w-md">
              <p className="font-serif italic text-gold text-lg mb-4">Our Story</p>
              <h2 className="font-serif text-3xl lg:text-4xl tracking-widest uppercase text-espresso leading-tight">
                Designed for the Woman Who Collects Moments
              </h2>
              <div className="mt-4 w-12 h-px bg-gold" />
              <p className="mt-6 text-warm text-sm leading-relaxed">
                Velmora was born from a simple belief: that fine jewelry shouldn&apos;t be reserved
                for special occasions. Our pieces are crafted in 18K gold plate over brass,
                designed to be worn every day — through morning coffees, important meetings,
                and nights that turn into memories.
              </p>
              <p className="mt-4 text-warm text-sm leading-relaxed">
                Each design is imagined in our London studio and brought to life by master
                artisans who share our obsession with detail. The result is demi-fine jewelry
                that looks and feels like heirlooms — without the heirloom price tag.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-block border-b border-gold text-gold text-xs uppercase tracking-super font-medium pb-1 hover:text-gold-500 hover:border-gold-500 transition-colors"
              >
                Read Our Full Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
