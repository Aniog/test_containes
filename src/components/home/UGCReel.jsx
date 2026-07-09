const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'The perfect everyday ear stack',
    query: 'woman wearing gold ear stack huggie earrings close-up portrait',
  },
  {
    id: 'ugc-2',
    caption: 'Golden hour glow',
    query: 'gold necklace on woman neck warm sunlight close-up',
  },
  {
    id: 'ugc-3',
    caption: 'Subtle statement piece',
    query: 'woman wearing gold drop earrings editorial portrait warm tone',
  },
  {
    id: 'ugc-4',
    caption: 'Gifting made special',
    query: 'luxury jewelry gift box gold earrings necklace on velvet',
  },
  {
    id: 'ugc-5',
    caption: 'Everyday elegance',
    query: 'gold huggie earrings on woman ear close-up warm lighting',
  },
  {
    id: 'ugc-6',
    caption: 'Layered perfection',
    query: 'woman wearing layered gold necklaces editorial portrait',
  },
];

export default function UGCReel() {
  return (
    <section className="py-16 lg:py-24 bg-velmora-espresso overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-sans text-[10px] uppercase tracking-widest-2xl text-velmora-gold mb-3">
            @VelmoraJewelry
          </p>
          <h2 className="font-serif text-3xl lg:text-heading-2 text-white mb-4">
            Styled by You
          </h2>
          <div className="section-divider" />
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-6 lg:px-10 pb-4">
        {ugcItems.map((item, index) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 lg:w-60 aspect-[9/16] rounded-lg overflow-hidden group"
          >
            <div
              data-strk-img-id={item.id}
              data-strk-img={`[${item.id}-caption] ${item.query}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="480"
              className="absolute inset-0"
            >
              <div className="w-full h-full bg-gradient-to-br from-velmora-stone to-velmora-espresso flex items-center justify-center">
                <span className="font-serif text-2xl text-velmora-gold-muted/40 tracking-widest">VM</span>
              </div>
            </div>
            {/* Caption overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 pt-12">
              <p id={`${item.id}-caption`} className="font-serif text-sm text-white leading-snug">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
