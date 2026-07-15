import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-velmora-charcoal overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <span className="text-xs text-velmora-gold uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mt-3">
              Crafted with Intention, Worn with Love
            </h2>
            <p className="mt-6 text-velmora-muted leading-relaxed">
              Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without the extraordinary price tag. We source the finest materials and work with skilled artisans to create pieces that transcend trends.
            </p>
            <p className="mt-4 text-velmora-muted leading-relaxed">
              Each piece in our collection is designed to become a treasured part of your story — whether it's the necklace you reach for every day or the earrings that mark a special moment.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm text-velmora-charcoal border-b border-velmora-charcoal/30 pb-1 hover:border-velmora-gold hover:text-velmora-gold transition-colors"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}