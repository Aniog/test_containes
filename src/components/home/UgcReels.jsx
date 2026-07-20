import React from "react";

const reels = [
  { id: 1, caption: "Morning routine edit.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80" },
  { id: 2, caption: "Date night layers.", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80" },
  { id: 3, caption: "Office to dinner.", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80" },
  { id: 4, caption: "Weekend brunch.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" },
  { id: 5, caption: "Gift edit.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80" },
];

const UgcReels = () => {
  return (
    <section className="bg-white border-y border-border">
      <div className="section-container py-10 md:py-14">
        <p className="eyebrow text-center">@velmora</p>
        <h2 className="mt-2 font-serif text-2xl md:text-3xl text-center text-ink">Worn by you</h2>

        <div className="mt-8 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative min-w-[220px] md:min-w-[260px] aspect-[9/16] rounded-2xl overflow-hidden snap-start bg-background"
            >
              <img src={reel.image} alt={reel.caption} className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <p className="font-serif text-sm text-white/90">{reel.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UgcReels;
