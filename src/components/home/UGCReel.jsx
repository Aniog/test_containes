import React from 'react';

const UGCReel = () => {
  const posts = [
    { id: 1, caption: 'Everyday elegance', user: '@sarah_m' },
    { id: 2, caption: 'The perfect glow', user: '@lena_j' },
    { id: 3, caption: 'Stacked to perfection', user: '@emma.fine' },
    { id: 4, caption: 'Golden hour ritual', user: '@chloe_luxury' },
    { id: 5, caption: 'Minimalist dreams', user: '@nina_styling' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="px-6 md:px-12 mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 italic">Worn by You</h2>
          <p className="text-[10px] uppercase tracking-widest opacity-60">Tag us @velmora #velmorawoman</p>
        </div>
      </div>
      
      <div className="flex space-x-4 overflow-x-auto pb-10 px-6 md:px-12 scrollbar-hide no-scrollbar">
        {posts.map((post) => (
          <div key={post.id} className="relative flex-shrink-0 w-[240px] md:w-[320px] aspect-[9/16] group cursor-pointer">
            <div 
              className="absolute inset-0 bg-stone-100"
              data-strk-bg-id={`ugc-post-${post.id}`}
              data-strk-bg={`[ugc-caption-${post.id}] model wearing gold jewelry vertical pose lifestyle`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="600"
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            </div>
            
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white text-center">
              <p id={`ugc-caption-${post.id}`} className="font-serif text-lg md:text-xl italic mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                "{post.caption}"
              </p>
              <p className="text-[10px] uppercase tracking-widest opacity-70 mb-4">{post.user}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
