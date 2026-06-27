import React from 'react';

const UGCReel = () => {
  const reels = [
    { title: 'Golden Hour Glow', query: 'gold earrings on woman ear warm sunlight glow jewelry aesthetic' },
    { title: 'The Perfect Stack', query: 'multiple piercing earrings gold huggies aesthetic jewelry photography' },
    { title: 'Everyday Luxury', query: 'gold necklace on woman neck casual white shirt editorial' },
    { title: 'Timeless Heirloom', query: 'gold filigree earrings close up high detail luxury' },
    { title: 'Gift of Velmora', query: 'unboxing jewelry gift box aesthetic gold ribbon' },
    { title: 'Layering Art', query: 'layered gold necklaces model neck beige outfit aesthetic' }
  ];

  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-3xl font-serif text-center">As Seen On You</h2>
      </div>
      
      <div className="flex space-x-4 overflow-x-auto pb-8 px-6 no-scrollbar">
        {reels.map((reel, idx) => (
          <div key={idx} className="flex-none w-64 md:w-72 aspect-[9/16] relative group overflow-hidden bg-stone/10">
            <img 
              data-strk-img-id={`ugc-${idx}`}
              data-strk-img={reel.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-serif text-lg tracking-wide">{reel.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
