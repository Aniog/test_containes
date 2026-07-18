import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ugcItems } from '@/data/products';

export default function UGCReelStrip() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 0.5;
      if (scrollPos >= el.scrollWidth - el.clientWidth) {
        scrollPos = 0;
      }
      el.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleEnter = () => cancelAnimationFrame(animationId);
    const handleLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    el.addEventListener('mouseenter', handleEnter);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      cancelAnimationFrame(animationId);
      el.removeEventListener('mouseenter', handleEnter);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <section className="bg-velvet-100/50 py-20 md:py-28">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet-900 tracking-wide">
          As Seen On You
        </h2>
        <p className="mt-3 text-velvet-500 text-sm tracking-wide">
          Tag @velmorajewelry to be featured
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-12 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.productSlug}`}
            className="flex-shrink-0 w-[180px] md:w-[220px] group"
          >
            <div
              className="relative aspect-[9/16] bg-velvet-200 rounded-sm overflow-hidden"
              data-strk-bg-id={`ugc-${item.id}-bg`}
              data-strk-bg={`[ugc-${item.id}-caption] jewelry on model`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="500"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/70 via-transparent to-transparent" />
              <p
                id={`ugc-${item.id}-caption`}
                className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic leading-snug"
              >
                {item.caption}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}