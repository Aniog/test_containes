const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday elegance' },
  { id: 'ugc-2', caption: 'Golden hour glow' },
  { id: 'ugc-3', caption: 'Stack & layer' },
  { id: 'ugc-4', caption: 'Date night ready' },
  { id: 'ugc-5', caption: 'Gift-worthy' },
  { id: 'ugc-6', caption: 'Minimal chic' },
];

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24 bg-brand-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-14">
        <div className="text-center">
          <p className="section-subheading mb-3">Worn & Loved</p>
          <h2 className="section-heading">The Velmora Edit</h2>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 sm:px-6 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item, idx) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] overflow-hidden group cursor-pointer"
            >
              <div
                data-strk-img-id={item.id}
                data-strk-img={`[ugc-caption-${idx}] gold jewelry worn on ear neck model close-up editorial`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                className="absolute inset-0 w-full h-full bg-brand-sand"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Caption */}
              <p
                id={`ugc-caption-${idx}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-lg text-white/90 italic"
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
