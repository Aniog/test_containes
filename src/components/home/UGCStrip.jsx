import { ugcContent } from '../../data/products';

export default function UGCStrip() {
  return (
    <section className="py-16 lg:py-24 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-ultra-wide text-taupe mb-3">
            Styled by You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Seen on Our Community
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div className="relative">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto hide-scrollbar pb-4">
          {ugcContent.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 md:w-56 lg:w-64 stagger-item"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[9/16] overflow-hidden group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-serif text-cream text-sm italic mb-1">
                    "{item.caption}"
                  </p>
                  <p className="text-cream/60 text-xs">
                    {item.username}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-ivory to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-ivory to-transparent pointer-events-none" />
      </div>

      {/* Instagram CTA */}
      <div className="text-center mt-8">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-charcoal/60 hover:text-charcoal transition-colors"
        >
          <span className="font-medium">Follow us</span>
          <span>@velmorajewelry</span>
        </a>
      </div>
    </section>
  );
}
