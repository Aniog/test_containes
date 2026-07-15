import { ugcItems } from '../../data/products';

const UGCReels = () => {
  return (
    <section className="py-12 md:py-16 bg-charcoal overflow-hidden">
      <div className="container-luxury mb-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs tracking-[0.2em] text-gold uppercase font-sans">
              Community
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-white mt-2">
              As Seen On You
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm text-white/60 hover:text-gold transition-colors"
          >
            @velmorajewelry
          </a>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-4 px-4 md:px-8 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
          {ugcItems.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 md:w-56 snap-start animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={item.image}
                  alt={`${item.handle} wearing Velmora jewelry`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-serif text-sm text-white mb-1">
                      {item.caption}
                    </p>
                    <p className="text-xs text-white/60">
                      {item.handle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-charcoal to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-charcoal to-transparent pointer-events-none" />
      </div>

      {/* Mobile Instagram Handle */}
      <div className="md:hidden container-luxury mt-4">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-sm text-white/60 hover:text-gold transition-colors"
        >
          @velmorajewelry
        </a>
      </div>
    </section>
  );
};

export default UGCReels;
