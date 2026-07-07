import React from 'react';

const UGCRow = () => {
  const reels = [
    { id: 1, caption: "Morning light", img: "https://picsum.photos/id/1005/600/1067" },
    { id: 2, caption: "Golden hour", img: "https://picsum.photos/id/1011/600/1067" },
    { id: 3, caption: "Effortless elegance", img: "https://picsum.photos/id/1009/600/1067" },
    { id: 4, caption: "Everyday luxury", img: "https://picsum.photos/id/1016/600/1067" },
    { id: 5, caption: "Timeless beauty", img: "https://picsum.photos/id/106/600/1067" },
  ];

  return (
    <section className="bg-[#F8F5F0] py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 mb-8">
        <div className="font-serif text-3xl tracking-[1px] text-[#2C2522] text-center">As Seen On You</div>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-4 px-6 snap-x snap-mandatory scrollbar-hide">
        {reels.map((reel) => (
          <div key={reel.id} className="relative flex-shrink-0 w-[180px] md:w-[200px] snap-start group">
            <div className="aspect-[9/16] bg-[#EDE7DC] overflow-hidden relative">
              <img 
                src={reel.img} 
                alt={reel.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-serif text-white text-sm tracking-wide italic">"{reel.caption}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;
