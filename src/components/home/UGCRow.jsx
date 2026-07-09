import React from 'react';

const UGCRow = () => {
  const reels = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80',
      caption: 'Morning light with my new huggies',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80',
      caption: 'The perfect gift from my sister',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80',
      caption: 'Wearing these every day',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80',
      caption: 'My favorite everyday pieces',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80',
      caption: 'Layered for the evening',
    },
  ];

  return (
    <section className="py-16 bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs tracking-[0.15em] text-[#B8976A]">AS SEEN ON</span>
            <h2 className="heading-md mt-1">Worn by You</h2>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hidden md:block text-sm tracking-widest hover:text-[#B8976A]">
            @VELMORA →
          </a>
        </div>

        <div className="ugc-scroll">
          {reels.map((reel) => (
            <div key={reel.id} className="ugc-card aspect-[9/16] bg-[#1C1917] rounded-sm overflow-hidden">
              <img
                src={reel.image}
                alt={reel.caption}
                className="w-full h-full object-cover"
              />
              <div className="ugc-caption">
                {reel.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCRow;