import React, { useState, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function UGCReelSection() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  // Mock UGC data - vertical 9:16 cards
  const ugcPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop",
      caption: "Perfect for date night ✨",
      author: "@sarah_m"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop",
      caption: "Obsessed with my new earrings!",
      author: "@emily_j"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop",
      caption: "Everyday elegance 💫",
      author: "@maria_l"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop",
      caption: "Gifted myself these beauties",
      author: "@jessica_k"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop",
      caption: "Stacking game strong 💪",
      author: "@alex_r"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop",
      caption: "Morning light hits different",
      author: "@luna_p"
    }
  ];
  
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Worn by You</h2>
          <p className="text-velmora-text-light text-lg">Real moments, real jewelry</p>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-4"></div>
        </div>
        
        {/* Scroll Controls */}
        <div className="flex justify-end space-x-2 mb-6">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="p-2 border border-velmora-text-light rounded-full hover:border-velmora-gold hover:text-velmora-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="p-2 border border-velmora-text-light rounded-full hover:border-velmora-gold hover:text-velmora-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcPosts.map((post, index) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-64 md:w-72 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[9/16] bg-velmora-cream rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover"
                />
                
                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black bg-opacity-50 rounded-full p-4">
                    <Play className="w-8 h-8 text-white" fill="white" />
                  </div>
                </div>
                
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-light italic">
                    "{post.caption}"
                  </p>
                  <p className="text-velmora-gold-light text-xs mt-1">
                    {post.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
