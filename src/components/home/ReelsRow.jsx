import React from 'react';

const reels = [
  { id: 1, text: "Effortless everyday stacking.", query: "woman wearing small gold huggie earrings minimalist aesthetic" },
  { id: 2, text: "The perfect golden glow.", query: "close up woman neck wearing gold necklace sunlight" },
  { id: 3, text: "Designed for the modern woman.", query: "elegant woman wearing gold jewelry editorial portrait" },
  { id: 4, text: "Materials that last a lifetime.", query: "detail shot of gold jewelry on aesthetic background" },
  { id: 5, text: "Gifted with love, worn with pride.", query: "woman opening a jewelry gift box golden hour" },
];

const ReelsRow = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-0">
      <div className="max-w-7xl mx-auto md:px-12 mb-12 text-center md:text-left">
         <p className="text-[#C5A059] uppercase tracking-widest text-[10px] font-bold mb-2">Social Moments</p>
         <h2 className="text-3xl md:text-4xl font-serif">As Seen on You</h2>
      </div>

      <div className="flex overflow-x-auto space-x-4 px-4 md:px-0 no-scrollbar pb-8">
        <div className="flex space-x-4 min-w-max md:pl-[max(1.5rem,calc((100vw-80rem)/2+3rem))] pr-4">
          {reels.map((reel) => (
            <div 
              key={reel.id} 
              className="relative w-[280px] h-[500px] overflow-hidden group cursor-pointer shadow-lg"
            >
              <div 
                className="absolute inset-0 bg-neutral-100"
                data-strk-bg-id={`reel-bg-${reel.id}`}
                data-strk-bg={reel.query}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="600"
              >
                <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-8 text-white z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <p className="text-lg font-serif italic mb-0 animate-fade-in">{reel.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsRow;
