import React from 'react';

const UGCReel = () => {
  const ugcItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
      caption: 'Morning light with my Aura cuff',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80',
      caption: 'The Flora necklace for date night',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',
      caption: 'Golden spheres, every day',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80',
      caption: 'Lace drops for the wedding',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
      caption: 'Heirloom set from my sister',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-vel-bg-alt">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="text-xs tracking-[0.12em] uppercase text-vel-muted mb-2">As Seen On You</div>
        <h2 className="text-3xl md:text-4xl">Real Moments</h2>
      </div>

      <div className="overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex gap-4 pl-6 md:pl-6 max-w-7xl mx-auto">
          {ugcItems.map((item) => (
            <div key={item.id} className="ugc-card aspect-[9/16] rounded-sm overflow-hidden">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="ugc-caption">
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
