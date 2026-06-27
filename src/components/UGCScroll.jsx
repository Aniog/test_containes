import { ugcImages } from '../data/products';

export default function UGCScroll() {
  return (
    <section className="py-12 overflow-hidden">
      <div className="container-custom mb-8">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wider text-center">
          Worn with Love
        </h2>
      </div>
      
      {/* Scrolling Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-velmora-cream to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-velmora-cream to-transparent pointer-events-none" />
        
        {/* Scroll Track */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-4 md:px-20">
          {/* Double the items for seamless loop */}
          {[...ugcImages, ...ugcImages].map((item, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-40 md:w-48 animate-scroll"
              style={{
                animation: `scroll 30s linear infinite`,
                animationDelay: `${index * -5}s`
              }}
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}