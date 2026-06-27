import { useRef, useEffect, useState } from 'react';
import { ugcContent } from '@/data/products';

export default function UGCRow() {
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
  
  // Hide scrollbar on mobile
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.scrollbarWidth = 'none';
      scrollRef.current.style.msOverflowStyle = 'none';
    }
  }, []);
  
  return (
    <section className="py-12 md:py-16 bg-[var(--color-ivory)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-2">
            @velmorajewelry
          </p>
          <h2 
            className="font-serif text-2xl md:text-3xl text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Styled by You
          </h2>
        </div>
      </div>
      
      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-4 overflow-x-auto pb-4 cursor-grab select-none"
        style={{
          scrollbarWidth: 'none',
          scrollSnapType: 'x mandatory',
          scrollPaddingLeft: '1.5rem'
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {/* Add left padding on mobile */}
        <div className="flex-shrink-0 w-6 md:hidden" />
        
        {ugcContent.map((item, index) => (
          <article
            key={item.id}
            className="flex-shrink-0 w-40 md:w-56 snap-start"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative aspect-[9/16] rounded overflow-hidden group">
              {/* Image */}
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
                draggable={false}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-rich-black)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p 
                  className="font-serif text-sm text-white italic mb-1"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {item.caption}
                </p>
                <p className="text-xs text-white/70">
                  {item.author}
                </p>
              </div>
            </div>
          </article>
        ))}
        
        {/* Right padding */}
        <div className="flex-shrink-0 w-6 md:w-12" />
      </div>
      
      {/* View on Instagram CTA */}
      <div className="container mt-6 text-center">
        <a
          href="https://instagram.com/velmorajewelry"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-gold)] transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span>Follow us @velmorajewelry</span>
        </a>
      </div>
    </section>
  );
}
