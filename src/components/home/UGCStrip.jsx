import { ugcContent } from '../../data/products';

export default function UGCStrip() {
  return (
    <section className="py-16 bg-[var(--color-cream-dark)] overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wide">
          Styled by You
        </h2>
      </div>
      
      <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 md:px-8">
        {ugcContent.map((item, index) => (
          <div 
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative aspect-[9/16] overflow-hidden mb-3">
              <img 
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-serif italic">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
        
        {/* Duplicate for seamless scroll effect */}
        {ugcContent.map((item, index) => (
          <div 
            key={`dup-${item.id}`}
            className="flex-shrink-0 w-[180px] md:w-[220px]"
          >
            <div className="relative aspect-[9/16] overflow-hidden mb-3">
              <img 
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-serif italic">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
