const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', titleId: 'ugc-reel-1-title', imgId: 'ugc-reel-img-1-e1f2g3' },
  { id: 'reel-2', caption: 'Stacking season', titleId: 'ugc-reel-2-title', imgId: 'ugc-reel-img-2-h4i5j6' },
  { id: 'reel-3', caption: 'Date night ready', titleId: 'ugc-reel-3-title', imgId: 'ugc-reel-img-3-k7l8m9' },
  { id: 'reel-4', caption: 'Golden hour glow', titleId: 'ugc-reel-4-title', imgId: 'ugc-reel-img-4-n0o1p2' },
  { id: 'reel-5', caption: 'Gift-worthy', titleId: 'ugc-reel-5-title', imgId: 'ugc-reel-img-5-q3r4s5' },
  { id: 'reel-6', caption: 'Minimal luxe', titleId: 'ugc-reel-6-title', imgId: 'ugc-reel-img-6-t6u7v8' },
];

const UGCReel = () => {
  return (
    <section className="py-16 md:py-24 border-t border-brand-warm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal font-light">
            As Seen On You
          </h2>
          <p className="mt-2 text-sm text-brand-muted font-sans">
            @velmora community
          </p>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {reels.map(reel => (
            <div key={reel.id} className="relative w-44 md:w-52 flex-shrink-0 group cursor-pointer">
              <div className="aspect-[9/16] overflow-hidden bg-brand-ivory rounded-sm">
                <img
                  data-strk-img-id={reel.imgId}
                  data-strk-img={`[${reel.titleId}] woman wearing gold jewelry`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={reel.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p id={reel.titleId} className="font-serif text-sm text-white italic">
                  {reel.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
