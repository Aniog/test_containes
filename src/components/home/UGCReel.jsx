import React from 'react';

const UGCReel = () => {
  const posts = [
    { id: 1, caption: 'Golden hour glow', imgId: 'ugc-1' },
    { id: 2, caption: 'Everyday essentials', imgId: 'ugc-2' },
    { id: 3, caption: 'Detail oriented', imgId: 'ugc-3' },
    { id: 4, caption: 'Effortless elegance', imgId: 'ugc-4' },
    { id: 5, caption: 'Statement pieces', imgId: 'ugc-5' },
    { id: 6, caption: 'Bespoke beauty', imgId: 'ugc-6' },
  ];

  return (
    <section className="py-24 bg-base overflow-hidden">
      <div className="px-6 md:px-12 mb-12">
        <h2 className="font-serif text-3xl text-center">Seen on Velmora Women</h2>
      </div>

      <div className="flex gap-4 px-6 md:px-12 overflow-x-auto pb-8 scrollbar-hide no-scrollbar">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="relative flex-shrink-0 w-64 md:w-80 aspect-[9/16] group cursor-pointer overflow-hidden"
          >
            <div 
              data-strk-bg-id={`ugc-bg-${post.id}`}
              data-strk-bg={`[ugc-caption-${post.id}] model wearing gold jewelry portrait reel`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="800"
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <p 
                id={`ugc-caption-${post.id}`}
                className="font-serif text-white text-lg italic leading-tight"
              >
                "{post.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
