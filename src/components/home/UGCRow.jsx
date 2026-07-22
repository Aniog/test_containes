import { Instagram } from 'lucide-react';
import { ugcContent } from '../../data/products';

const UGCRow = () => {
  return (
    <section className="py-16 md:py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-ultra-wide text-taupe mb-2 block">
              Community
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-espresso">
              Styled by You
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-xs uppercase tracking-ultra-wide text-taupe hover:text-espresso transition-colors"
          >
            <Instagram className="w-4 h-4" />
            Follow Us
          </a>
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex gap-3 md:gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto pb-4 scrollbar-hide" style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}>
        {ugcContent.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-40 md:w-52 aspect-[9/16] relative overflow-hidden group"
          >
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <p className="font-serif text-ivory text-sm italic">
                "{item.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View All */}
      <div className="md:hidden text-center mt-6 px-4">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-ultra-wide text-taupe hover:text-espresso transition-colors"
        >
          <Instagram className="w-4 h-4" />
          Follow Us
        </a>
      </div>
    </section>
  );
};

export default UGCRow;
