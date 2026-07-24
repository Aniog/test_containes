import { ugcContent } from '../../data/products';

const UGCSection = () => {
  return (
    <section className="py-16 bg-velmora-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="font-serif text-3xl lg:text-4xl text-velmora-cream text-center">
          Styled by You
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-4 overflow-x-auto snap-x-mandatory hide-scrollbar px-4 lg:px-8 pb-4">
        {ugcContent.map((item) => (
          <div 
            key={item.id}
            className="flex-shrink-0 w-40 md:w-48 snap-center"
          >
            <div className="relative aspect-[9/16] bg-velmora-sand overflow-hidden group">
              <img 
                src={item.image} 
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 font-serif text-sm text-velmora-cream italic">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
        
        {/* Extra items for continuous scroll effect */}
        {ugcContent.slice(0, 3).map((item) => (
          <div 
            key={`dup-${item.id}`}
            className="flex-shrink-0 w-40 md:w-48 snap-center"
          >
            <div className="relative aspect-[9/16] bg-velmora-sand overflow-hidden group">
              <img 
                src={item.image} 
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 font-serif text-sm text-velmora-cream italic">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCSection;