import { ugcContent } from '../../data/products';
import { Instagram } from 'lucide-react';

export default function UGCReels() {
  return (
    <section className="py-12 bg-ivory-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="inline-block font-sans text-xs tracking-ultra-wide text-accent mb-2 uppercase">
              Community
            </span>
            <h2 className="heading-serif text-2xl md:text-3xl">
              Seen on You
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-charcoal-600 hover:text-espresso transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="font-sans text-sm">Follow us</span>
          </a>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div
          className="flex gap-3 px-4 sm:px-6 lg:px-8 pb-4 overflow-x-auto scrollbar-hide"
          style={{
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {ugcContent.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[200px] sm:w-[240px] aspect-[9/16] rounded-xl overflow-hidden relative group scroll-snap-align-start"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  className="font-serif text-ivory-100 text-sm italic leading-snug"
                  style={{ fontStyle: 'italic' }}
                >
                  "{item.caption}"
                </p>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram className="w-5 h-5 text-ivory-100/80" />
              </div>
            </div>
          ))}

          {/* View All Card */}
          <div className="flex-shrink-0 w-[200px] sm:w-[240px] aspect-[9/16] rounded-xl overflow-hidden relative bg-ivory-200 flex items-center justify-center">
            <div className="text-center p-6">
              <Instagram className="w-10 h-10 text-charcoal-400 mx-auto mb-4" />
              <p className="font-serif text-charcoal-600 text-sm mb-2">
                Tag us @velmorajewelry
              </p>
              <p className="font-sans text-xs text-charcoal-500">
                Join the community
              </p>
            </div>
          </div>
        </div>

        {/* Gradient fade edges */}
        <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-ivory-100 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-ivory-100 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
