const ugcItems = [
  { caption: 'Golden hour glow', id: 'ugc-1' },
  { caption: 'Everyday elegance', id: 'ugc-2' },
  { caption: 'Stack & layer', id: 'ugc-3' },
  { caption: 'Date night ready', id: 'ugc-4' },
  { caption: 'Minimal & chic', id: 'ugc-5' },
  { caption: 'Gift her sparkle', id: 'ugc-6' },
];

export default function UGCReel() {
  return (
    <section className="py-16 sm:py-20 bg-velmora-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-[11px] tracking-[0.3em] uppercase text-velmora-gold font-medium mb-2">
          As Seen On
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-velmora-charcoal">
          @VelmoraJewelry
        </h2>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-4" style={{ paddingLeft: 'max(1rem, calc((100vw - 80rem) / 2 + 2rem))' }}>
          {ugcItems.map((item, i) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-44 sm:w-52 aspect-[9/16] overflow-hidden group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div
                className="absolute inset-0"
                data-strk-img-id={item.id}
                data-strk-img={`[${item.id}-caption] jewelry on ear neck closeup warm lighting`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
              >
                <div className="w-full h-full bg-gradient-to-b from-velmora-sand via-velmora-taupe/40 to-velmora-dark/60" />
              </div>

              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/70 via-transparent to-transparent flex items-end p-4">
                <p
                  id={`${item.id}-caption`}
                  className="font-serif text-base sm:text-lg text-white italic leading-snug"
                >
                  {item.caption}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-velmora-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
