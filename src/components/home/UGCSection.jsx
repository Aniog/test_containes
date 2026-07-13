const ugcItems = [
  {
    imgId: 'ugc-1-img-p7q8r9',
    titleId: 'ugc-1-title-p7q8r9',
    descId: 'ugc-1-desc-p7q8r9',
    title: 'Gold Ear Cuff',
    caption: 'Effortless everyday gold',
    desc: 'Woman wearing gold ear cuff jewelry close up portrait',
  },
  {
    imgId: 'ugc-2-img-s1t2u3',
    titleId: 'ugc-2-title-s1t2u3',
    descId: 'ugc-2-desc-s1t2u3',
    title: 'Floral Necklace',
    caption: 'Worn with intention',
    desc: 'Woman wearing delicate floral crystal necklace gold jewelry portrait',
  },
  {
    imgId: 'ugc-3-img-v4w5x6',
    titleId: 'ugc-3-title-v4w5x6',
    descId: 'ugc-3-desc-v4w5x6',
    title: 'Huggie Earrings',
    caption: 'Stack. Layer. Shine.',
    desc: 'Close up of woman ear with gold huggie earrings stacked jewelry',
  },
  {
    imgId: 'ugc-4-img-y7z8a9',
    titleId: 'ugc-4-title-y7z8a9',
    descId: 'ugc-4-desc-y7z8a9',
    title: 'Filigree Drops',
    caption: 'For the golden hour',
    desc: 'Woman wearing gold filigree drop earrings warm light portrait',
  },
  {
    imgId: 'ugc-5-img-b1c2d3',
    titleId: 'ugc-5-title-b1c2d3',
    descId: 'ugc-5-desc-b1c2d3',
    title: 'Heirloom Set',
    caption: 'A gift she\'ll treasure',
    desc: 'Woman wearing matching gold earring and necklace jewelry set portrait',
  },
];

export default function UGCSection() {
  return (
    <section className="py-20 md:py-24 bg-espresso overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-gold mb-3">
              @velmora
            </p>
            <h2 className="font-serif font-medium text-4xl md:text-5xl text-ivory">
              As Worn
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-sans text-xs font-medium uppercase tracking-widest text-ivory/50 hover:text-gold transition-colors border-b border-ivory/20 pb-0.5"
          >
            Follow on Instagram
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-6 md:px-10 pb-2">
        {ugcItems.map((item) => (
          <div
            key={item.imgId}
            className="relative flex-shrink-0 w-44 md:w-56 rounded-sm overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.title}</span>
            <span id={item.descId} className="sr-only">{item.desc}</span>

            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
            {/* Caption */}
            <p className="absolute bottom-4 left-4 right-4 font-serif italic text-ivory text-base leading-snug">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
