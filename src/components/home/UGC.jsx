import { ugcContent } from '@/data/products';

export default function UGC() {
  return (
    <section className="py-16 bg-velmora-warmBlack overflow-hidden">
      <div className="ugc-scroll flex gap-4 px-4">
        {ugcContent.map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-40 md:w-56 relative group cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="aspect-[9/16] bg-velmora-charcoal overflow-hidden">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-warmBlack/60 to-transparent" />
              
              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-serif text-sm text-velmora-cream italic">
                  "{item.caption}"
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Duplicate for infinite scroll effect */}
        {ugcContent.map((item, index) => (
          <div
            key={`dup-${item.id}`}
            className="flex-shrink-0 w-40 md:w-56 relative group cursor-pointer"
          >
            <div className="aspect-[9/16] bg-velmora-charcoal overflow-hidden">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-warmBlack/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-serif text-sm text-velmora-cream italic">
                  "{item.caption}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}