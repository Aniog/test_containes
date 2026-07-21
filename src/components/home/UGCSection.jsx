import { ugcPosts } from '@/data/products';

export default function UGCSection() {
  return (
    <section className="py-12 md:py-16 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-gold text-sm uppercase tracking-ultra-wide mb-2">
            Community Love
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-48 md:w-56 group cursor-pointer"
            >
              {/* Vertical Image Card */}
              <div className="relative aspect-[9/16] overflow-hidden bg-champagne">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-ivory text-sm italic leading-relaxed">
                    "{post.caption}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade Edges (Desktop) */}
        <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-cream to-transparent pointer-events-none hidden md:block" />
        <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-cream to-transparent pointer-events-none hidden md:block" />
      </div>

      {/* Instagram CTA */}
      <div className="text-center mt-8">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-cocoa hover:text-gold transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="18" cy="6" r="1" fill="currentColor" />
          </svg>
          Follow us @velmorajewelry
        </a>
      </div>
    </section>
  );
}
