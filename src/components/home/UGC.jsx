import { ugcContent } from '../../data/products';

export default function UGC() {
  return (
    <section className="py-16 bg-velmora-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <span className="text-velmora-gold text-xs uppercase tracking-widest">Community</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-3 text-velmora-cream">As Seen On You</h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="ugc-scroll flex gap-4 px-4 md:px-8 overflow-x-auto pb-4 snap-x">
        {ugcContent.map((item) => (
          <div 
            key={item.id}
            className="flex-shrink-0 w-40 md:w-56 snap-center"
          >
            <div className="relative aspect-[9/16] overflow-hidden">
              <img 
                src={item.image} 
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-velmora-cream italic">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
        
        {/* Extra items for continuous scroll effect */}
        {ugcContent.slice(0, 3).map((item) => (
          <div 
            key={`dup-${item.id}`}
            className="flex-shrink-0 w-40 md:w-56 snap-center"
          >
            <div className="relative aspect-[9/16] overflow-hidden">
              <img 
                src={item.image} 
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-velmora-cream italic">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}