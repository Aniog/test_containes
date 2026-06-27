import { ugcContent } from '../../data/products';

export default function UGCSection() {
  return (
    <section className="py-16 bg-[#F5F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="font-serif text-2xl md:text-3xl text-center text-[#1A1A1A]">
          Styled by You
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar scroll-snap-x pb-4">
        {ugcContent.map((item, index) => (
          <div 
            key={item.id}
            className="flex-shrink-0 w-40 md:w-48 scroll-snap-center animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="relative aspect-[9/16] bg-[#E5E0D8] overflow-hidden group">
              <img 
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent flex items-end justify-center pb-4">
                <p className="font-serif text-sm text-white italic px-2 text-center">
                  "{item.caption}"
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Extra items for continuous scroll feel */}
        {ugcContent.slice(0, 3).map((item, index) => (
          <div 
            key={`dup-${item.id}`}
            className="flex-shrink-0 w-40 md:w-48 scroll-snap-center"
          >
            <div className="relative aspect-[9/16] bg-[#E5E0D8] overflow-hidden group">
              <img 
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent flex items-end justify-center pb-4">
                <p className="font-serif text-sm text-white italic px-2 text-center">
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