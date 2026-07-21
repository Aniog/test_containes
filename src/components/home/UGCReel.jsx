import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGC_POSTS = [
  { id: 1, name: 'Golden Hour Glow', imgId: 'ugc-img-1' },
  { id: 2, name: 'Layered Details', imgId: 'ugc-img-2' },
  { id: 3, name: 'The Perfect Gift', imgId: 'ugc-img-3' },
  { id: 4, name: 'Effortless Elegance', imgId: 'ugc-img-4' },
  { id: 5, name: 'Daily Treasures', imgId: 'ugc-img-5' },
  { id: 6, name: 'Velmora Muse', imgId: 'ugc-img-6' },
];

const UGCReel = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, scrollRef.current);
    }, []);

  return (
    <section className="py-32 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-3xl font-serif text-center uppercase tracking-widest">Seen as Styled</h2>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 no-scrollbar snap-x pb-8"
      >
        {UGC_POSTS.map((post) => (
          <div 
            key={post.id}
            className="flex-shrink-0 w-64 md:w-72 aspect-[9/16] relative overflow-hidden snap-center group"
          >
            <img 
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
              data-strk-img={`[ugc-title-${post.id}] jewelry style worn on ear neck model aesthetic`}
              data-strk-img-id={post.imgId}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              alt={post.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-80" />
            <div className="absolute bottom-8 left-8 right-8">
              <p 
                id={`ugc-title-${post.id}`}
                className="text-white font-serif text-lg md:text-xl italic opacity-0 translate-y-4 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0"
              >
                {post.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
