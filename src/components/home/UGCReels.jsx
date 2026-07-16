import React from 'react';

const UGCReels = () => {
  const reels = [
    { id: 1, caption: "Golden Hour Glow" },
    { id: 2, caption: "Stacks on Stacks" },
    { id: 3, caption: "Bridal Details" },
    { id: 4, caption: "Coffee and Gold" },
    { id: 5, caption: "Minimalist Staples" },
    { id: 6, caption: "Night Out Essentials" }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-12">
        <h2 className="font-serif text-3xl text-center uppercase tracking-widest">As Seen On You</h2>
      </div>

      <div className="flex overflow-x-auto no-scrollbar gap-4 px-6 md:px-12">
        {reels.map((reel) => (
          <div key={reel.id} className="relative flex-shrink-0 w-64 md:w-72 aspect-[9/16] group overflow-hidden">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              data-strk-img-id={`ugc-${reel.id}`}
              data-strk-img={`[ugc-caption-${reel.id}] jewelry worn by woman`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              alt={reel.caption} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p id={`ugc-caption-${reel.id}`} className="text-white font-serif text-lg italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReels;
