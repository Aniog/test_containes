const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour glow', query: 'woman wearing gold huggie earrings closeup ear warm light' },
  { id: 'ugc-2', caption: 'Everyday luxury', query: 'woman neck gold necklace pendant warm light portrait' },
  { id: 'ugc-3', caption: 'Stack & layer', query: 'gold earrings collection on ear multiple piercings warm light' },
  { id: 'ugc-4', caption: 'Gift-worthy', query: 'gold jewelry gift set velvet box elegant warm light' },
  { id: 'ugc-5', caption: 'Crystal details', query: 'closeup gold crystal necklace on skin warm light editorial' },
  { id: 'ugc-6', caption: 'Self-purchase love', query: 'woman wearing gold necklace mirror selfie warm light' },
];

export default function UGCReel() {
  return (
    <section className="bg-velmora-bg py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-velmora-gold mb-3">
              @VelmoraJewelry
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-text font-light">
              As Worn By You
            </h2>
          </div>
          <a href="#" className="text-xs tracking-[0.1em] uppercase text-velmora-gold hover:text-velmora-gold-light transition-colors hidden md:block">
            Follow Us &rarr;
          </a>
        </div>
        <div className="w-12 h-px bg-velmora-gold mt-5" />
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-3 md:gap-4 px-4 sm:px-6 lg:px-8" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-[180px] md:w-[220px] aspect-[9/16] flex-shrink-0 overflow-hidden group"
            >
              <img
                data-strk-img-id={item.id}
                data-strk-img={`[${item.id}-caption] jewelry worn on ear neck warm light portrait`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-bg/70 via-transparent to-transparent" />
              <p
                id={`${item.id}-caption`}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm md:text-base text-velmora-text italic leading-snug"
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
