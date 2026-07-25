import { useRef } from 'react';

export default function UGCReel() {
  const scrollRef = useRef(null);

  const ugcItems = [
    { id: 'ugc-1', caption: "Effortless everyday stack.", imgQuery: "gold ear cuff close up worn editorial" },
    { id: 'ugc-2', caption: "Sunday morning light.", imgQuery: "gold necklace on neck warm light editorial" },
    { id: 'ugc-3', caption: "The perfect chunky huggie.", imgQuery: "chunky gold huggie earrings worn editorial" },
    { id: 'ugc-4', caption: "Gifting done right.", imgQuery: "jewelry gift box unboxing editorial" },
    { id: 'ugc-5', caption: "Layered to perfection.", imgQuery: "layered gold necklaces worn editorial" },
    { id: 'ugc-6', caption: "Vintage inspired details.", imgQuery: "gold filigree earrings close up editorial" },
  ];

  return (
    <section className="py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-6 lg:px-12 mb-10">
        <h2 id="ugc-title" className="font-serif text-2xl tracking-wide text-velmora-text text-center">SPOTTED IN VELMORA</h2>
      </div>

      {/* Horizontal Scroll Area */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 px-6 md:px-12 pb-8 no-scrollbar snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div 
            key={item.id} 
            className="relative flex-none w-64 md:w-72 aspect-[9/16] snap-center rounded-sm overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <img
              data-strk-img-id={`img-${item.id}`}
              data-strk-img={item.imgQuery}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-serif text-white text-lg italic drop-shadow-sm">
                "{item.caption}"
              </p>
            </div>
            
            {/* Instagram Icon hint (optional visual flair) */}
            <div className="absolute top-4 right-4 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}