import React, { useRef } from 'react';

const UGCSection = () => {
  const scrollRef = useRef(null);

  const posts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', caption: 'Everyday elegance.' },
    { id: 2, image: 'https://images.unsplash.com/photo-1596945037920-ab6456a09ca2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', caption: 'Golden hour layers.' },
    { id: 3, image: 'https://images.unsplash.com/photo-1610444369046-24ba08edab7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', caption: 'The perfect huggie.' },
    { id: 4, image: 'https://images.unsplash.com/photo-1599643478524-fb66f7f2b1d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', caption: 'Statement pieces.' },
    { id: 5, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', caption: 'Ear stacking.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif">Worn by You</h2>
          <p className="mt-2 text-muted-foreground uppercase tracking-widest text-xs">@velmorajewelry</p>
        </div>
      </div>
      
      {/* Horizontal Scroll Area */}
      <div className="pl-4 md:pl-8">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory scrollbar-hide pr-4 md:pr-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="relative shrink-0 w-[240px] md:w-[280px] lg:w-[320px] aspect-[9/16] snap-center group cursor-pointer overflow-hidden rounded-sm"
            >
              <img 
                src={post.image} 
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-serif italic text-lg">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCSection;
