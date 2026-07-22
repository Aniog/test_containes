import React from 'react';

// Simulated UGC / Instagram Reels style content
const ugcItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80",
    caption: "Golden hour with my new huggies",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
    caption: "Wearing the Flora Nectar to dinner",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
    caption: "These ear cuffs are everything",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80",
    caption: "My everyday stack",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80",
    caption: "The perfect gift from my sister",
  },
];

const UGCReel = () => {
  return (
    <section className="py-12 bg-[var(--velmora-bg-alt)] overflow-hidden">
      <div className="container mb-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-gold-dark)]">As Seen On You</span>
            <h2 className="heading-serif text-3xl mt-1">Worn in Real Life</h2>
          </div>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-6 pl-6 md:pl-8 lg:pl-12 scrollbar-hide snap-x snap-mandatory">
        {ugcItems.map((item) => (
          <div key={item.id} className="ugc-card snap-start rounded-sm">
            <img src={item.image} alt={item.caption} />
            <div className="ugc-caption">
              {item.caption}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
