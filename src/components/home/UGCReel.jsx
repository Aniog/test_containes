const UGCReel = () => {
  const reels = [
    { id: 1, caption: "Golden Hour Glow", slug: "ear-rings-model-1" },
    { id: 2, caption: "Effortless Elegance", slug: "neck-lace-model-1" },
    { id: 3, caption: "The Perfect Huggie", slug: "ear-rings-model-2" },
    { id: 4, caption: "Layered to Perfection", slug: "neck-lace-model-2" },
    { id: 5, caption: "Details that Matter", slug: "jewelry-details-1" },
    { id: 6, caption: "My Daily Essentials", slug: "jewelry-details-2" },
  ];

  return (
    <section className="py-24 bg-surface/50 overflow-hidden">
      <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
        <div>
          <h2 className="font-serif text-4xl mb-2">As Seen On You</h2>
          <p className="font-sans text-muted uppercase tracking-[0.2em] text-[10px] font-semibold">Tag @VELMORA to be featured</p>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto px-6 md:px-12 no-scrollbar pb-4 -mb-4">
        {reels.map((reel) => (
          <div key={reel.id} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] relative group overflow-hidden bg-surface">
            <img
              data-strk-img-id={`ugc-reel-${reel.id}`}
              data-strk-img={`[ugc-caption-${reel.id}] jewelry gold worn on model lifestyle editorial`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span id={`ugc-caption-${reel.id}`} className="text-white font-serif italic text-xl px-4">{reel.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
