const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday sparkle', imgId: 'ugc-reel-ear-a1b2c3', captionId: 'ugc-caption-1' },
  { id: 'ugc-2', caption: 'Layered & loved', imgId: 'ugc-reel-neck-d4e5f6', captionId: 'ugc-caption-2' },
  { id: 'ugc-3', caption: 'Golden hour', imgId: 'ugc-reel-gold-g7h8i9', captionId: 'ugc-caption-3' },
  { id: 'ugc-4', caption: 'Gift-worthy', imgId: 'ugc-reel-gift-j0k1l2', captionId: 'ugc-caption-4' },
  { id: 'ugc-5', caption: 'Minimal luxe', imgId: 'ugc-reel-min-m3n4o5', captionId: 'ugc-caption-5' },
  { id: 'ugc-6', caption: 'Date night ready', imgId: 'ugc-reel-date-p6q7r8', captionId: 'ugc-caption-6' },
];

const UGCReel = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 id="ugc-section-title" className="font-serif text-3xl md:text-4xl text-charcoal font-light">
            As Worn by You
          </h2>
          <p className="font-sans text-sm text-muted-fg mt-3">Tag @velmora to be featured</p>
        </div>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map(item => (
            <div key={item.id} className="relative w-44 md:w-52 flex-shrink-0">
              <div className="aspect-[9/16] bg-muted overflow-hidden relative">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.captionId}] [ugc-section-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/60 to-transparent p-4">
                  <p id={item.captionId} className="font-serif text-sm text-cream italic">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
