import { useRef, useEffect, useState } from 'react';
import { ugcPosts } from '@/data/products';

const UGCStrip = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-16 bg-cream overflow-hidden">
      <div className="container-main mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-champagne text-sm tracking-[0.3em] uppercase mb-2">
              Real Style
            </p>
            <h2 className="font-serif text-subsection text-velvet">
              Seen on You
            </h2>
          </div>
          <p className="hidden md:block text-sm text-taupe">
            Drag to explore →
          </p>
        </div>
      </div>

      {/* Reel-style horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-6 md:px-12 pb-4 cursor-grab select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-[200px] md:w-[280px] relative group"
          >
            {/* Vertical Image Card */}
            <div className="relative aspect-[9/16] rounded overflow-hidden">
              <img
                src={post.image}
                alt={`Instagram post by ${post.author}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velvet/80 via-velvet/20 to-transparent" />
              
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-ivory text-sm italic leading-relaxed mb-2">
                  "{post.caption}"
                </p>
                <p className="text-ivory/70 text-xs tracking-wide">
                  {post.author}
                </p>
              </div>

              {/* Play Icon (Instagram reel style) */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-ivory/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 text-ivory" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ))}

        {/* End spacer for scroll */}
        <div className="flex-shrink-0 w-6 md:w-12" />
      </div>
    </section>
  );
};

export default UGCStrip;
