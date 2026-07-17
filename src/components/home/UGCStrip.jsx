import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcPosts } from '@/data/products';

export default function UGCStrip() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="section-heading text-center">Styled by You</h2>
        <p className="text-text-secondary text-sm text-center mt-3">
          How our community wears Velmora.
        </p>

        <div className="relative mt-12">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg hidden md:flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg hidden md:flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>

          {/* Scrollable strip */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory -mx-6 px-6 lg:-mx-10 lg:px-10"
            style={{ scrollbarWidth: 'none' }}
          >
            {ugcPosts.map((post) => (
              <div
                key={post.id}
                className="flex-shrink-0 w-[200px] md:w-[240px] snap-start"
              >
                <div className="aspect-[9/16] bg-muted rounded-sm overflow-hidden relative group cursor-pointer">
                  <img
                    src={`https://images.unsplash.com/photo-${['1599643478518', '1602173574767', '1633810542707', '1629224316810', '1515562141207', '1535632066927'][ugcPosts.indexOf(post)]}?w=400&q=80`}
                    alt={post.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-xs font-medium">{post.username}</p>
                    <p className="text-white/80 text-[11px] mt-1 leading-snug font-serif italic">
                      {post.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
