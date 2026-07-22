import React, { useRef, useEffect } from 'react';
import { ugcPosts } from '../../data/products';

const UGCReel = () => {
  const scrollRef = useRef(null);

  // Optional: Add drag-to-scroll functionality
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      el.classList.add('cursor-grabbing');
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const handleMouseUp = () => {
      isDown = false;
      el.classList.remove('cursor-grabbing');
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener('mousedown', handleMouseDown);
    el.addEventListener('mouseup', handleMouseUp);
    el.addEventListener('mouseleave', handleMouseUp);
    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('mousedown', handleMouseDown);
      el.removeEventListener('mouseup', handleMouseUp);
      el.removeEventListener('mouseleave', handleMouseUp);
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="py-16 md:py-20 overflow-hidden bg-cream-100">
      <div className="container-luxury mb-8">
        <div className="text-center">
          <span className="text-xs font-sans font-medium tracking-widest uppercase text-gold-600">
            Community Love
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 mt-3">
            Seen on You
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-6 px-4 md:px-8 cursor-grab select-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-6 w-8 bg-gradient-to-r from-cream-100 to-transparent z-10 pointer-events-none" />
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-6 w-8 bg-gradient-to-l from-cream-100 to-transparent z-10 pointer-events-none" />

        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-40 md:w-52 relative group"
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-charcoal-200">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-serif text-sm text-cream-50 italic leading-snug mb-2 line-clamp-2">
                  "{post.caption}"
                </p>
                <span className="text-xs text-cream-300 font-sans">
                  {post.handle}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* View More Card */}
        <div className="flex-shrink-0 w-40 md:w-52">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full min-h-[280px] md:min-h-[350px] border-2 border-dashed border-charcoal-300 
                       rounded flex flex-col items-center justify-center gap-3 hover:border-gold-400 
                       hover:bg-gold-50/30 transition-all duration-300"
          >
            <span className="w-10 h-10 rounded-full border-2 border-charcoal-300 flex items-center justify-center">
              <span className="text-xl text-charcoal-500">+</span>
            </span>
            <span className="font-serif text-sm text-charcoal-600 italic">
              Share your look
            </span>
            <span className="text-xs text-charcoal-400 font-sans">
              #VelmoraJewelry
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
