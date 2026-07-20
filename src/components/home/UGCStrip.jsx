import { ugcContent } from '../../data/products';

const UGCStrip = () => {
  return (
    <section className="py-section-mobile lg:py-section bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal">As Seen On You</h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 px-4 md:px-0 md:overflow-visible md:flex-nowrap md:justify-center scrollbar-hide">
          {ugcContent.map((item, index) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-40 md:w-56 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[9/16] overflow-hidden group">
                <img 
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-serif text-cream text-sm italic">
                    "{item.caption}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Hint (Mobile) */}
      <div className="md:hidden text-center mt-4">
        <span className="text-xs text-taupe uppercase tracking-wider">Swipe to explore</span>
      </div>
    </section>
  );
};

export default UGCStrip;