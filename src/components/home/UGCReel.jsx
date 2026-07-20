import React from "react";

// Simulated UGC / Instagram Reels style content
const ugcItems = [
  {
    id: 1,
    caption: "Golden hour with my new huggies",
    alt: "Model wearing gold huggie earrings",
  },
  {
    id: 2,
    caption: "Layered necklaces for everyday",
    alt: "Close-up of layered gold necklaces",
  },
  {
    id: 3,
    caption: "Statement earrings for date night",
    alt: "Model wearing ornate gold drop earrings",
  },
  {
    id: 4,
    caption: "The perfect gift for her",
    alt: "Gift box with jewelry set",
  },
  {
    id: 5,
    caption: "Minimal gold on warm skin",
    alt: "Close-up of gold jewelry on model",
  },
];

export function UGCReel() {
  return (
    <section className="py-12 bg-[var(--color-bg-alt)]">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs tracking-[0.15em] text-[var(--color-text-muted)] uppercase">As Seen On</span>
            <h3 className="heading-serif text-3xl mt-1">Real Moments</h3>
          </div>
          <a href="#instagram" className="hidden md:block text-sm tracking-widest uppercase hover:text-[var(--color-accent)]">
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex gap-4 pl-6 pr-12">
          {ugcItems.map((item) => (
            <div key={item.id} className="ugc-card group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3D3730] to-[#2C2823]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-full border border-[var(--color-gold)]/40" />
                    <span className="text-[10px] text-white/40 tracking-widest">REEL</span>
                  </div>
                </div>
              </div>
              <div className="ugc-caption">
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
