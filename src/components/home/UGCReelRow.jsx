import React from 'react';

export default function UGCReelRow() {
  const reels = [
    { id: 1, caption: 'Everyday elegance', username: '@sarahm' },
    { id: 2, caption: 'Golden hour glow', username: '@emilyr' },
    { id: 3, caption: 'Stacked to perfection', username: '@jessl' },
    { id: 4, caption: 'Minimalist vibes', username: '@aishwaryak' },
    { id: 5, caption: 'Gifted with love', username: '@nicolew' },
    { id: 6, caption: 'Date night ready', username: '@laurenb' }
  ];

  return (
    <section className="py-20 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">#VelmoraStyle</h2>
        <p className="text-center text-gray-600 mb-12 tracking-wide">Tag us @velmora for a chance to be featured</p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex space-x-4 px-6 pb-4" style={{ width: 'max-content' }}>
          {reels.map((reel) => (
            <div key={reel.id} className="flex-shrink-0 w-64 md:w-72 relative group cursor-pointer">
              <div className="aspect-[9/16] bg-gradient-to-b from-gray-800 to-gray-600 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-white">
                    <p className="font-serif text-lg mb-2">{reel.caption}</p>
                    <p className="text-sm opacity-80">{reel.username}</p>
                  </div>
                </div>
                
                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
