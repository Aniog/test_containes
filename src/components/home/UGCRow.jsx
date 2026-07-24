import { ugcItems } from '@/data/products';

const UGCRow = () => {
  return (
    <section className="py-16 bg-cream-100/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <span className="section-subtitle block mb-2">#VELMORAJEWELRY</span>
          <h2 className="section-title text-2xl md:text-3xl">Styled by You</h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-hide pb-4">
          {ugcItems.map((item) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-40 sm:w-48 md:w-56 aspect-[9/16] relative group cursor-pointer"
            >
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-serif text-cream-50 text-sm italic text-center">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Fades */}
        <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-cream-100/50 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-cream-100/50 to-transparent pointer-events-none" />
      </div>

      {/* View More */}
      <div className="text-center mt-8">
        <a 
          href="https://instagram.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-charcoal-600 hover:text-charcoal-900 font-sans text-sm tracking-wide transition-colors"
        >
          Follow us @velmorajewelry
        </a>
      </div>
    </section>
  );
};

export default UGCRow;
