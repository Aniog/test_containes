import { useRef, useEffect, useState } from "react";

const ugcItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=700&fit=crop&crop=center",
    caption: "Golden hour glow",
    handle: "@sarah.m",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop&crop=center",
    caption: "Every day luxury",
    handle: "@emma.l",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop&crop=center",
    caption: "Statement pieces",
    handle: "@olivia.k",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=700&fit=crop&crop=center",
    caption: "Stacked and stunning",
    handle: "@mia.r",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=700&fit=crop&crop=center",
    caption: "Gift worthy",
    handle: "@ava.j",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=700&fit=crop&crop=center",
    caption: "Delicate layers",
    handle: "@chloe.w",
  },
];

export default function UGCStrip() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      checkScroll();
    }
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("div")?.offsetWidth || 250;
    el.scrollBy({ left: dir * (cardWidth + 16), behavior: "smooth" });
  };

  return (
    <section className="py-section md:py-section-lg bg-cream-100/40">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 px-4">
          <p className="text-overline uppercase text-gold tracking-[0.2em] mb-3">
            As Seen On You
          </p>
          <h2
            className="text-display-md text-charcoal-800 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            #VelmoraStyle
          </h2>
          <div className="section-divider" />
        </div>

        {/* Horizontal scroll */}
        <div className="relative group">
          {/* Left arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-cream-50/90 shadow-soft rounded-full flex items-center justify-center text-charcoal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 glass-effect"
              aria-label="Scroll left"
            >
              ‹
            </button>
          )}

          {/* Right arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-cream-50/90 shadow-soft rounded-full flex items-center justify-center text-charcoal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 glass-effect"
              aria-label="Scroll right"
            >
              ›
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-10 snap-x snap-mandatory"
          >
            {ugcItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] snap-start"
              >
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden group/card cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.caption}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800/70 via-transparent to-transparent" />
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p
                      className="text-cream-50 text-lg font-light italic"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {item.caption}
                    </p>
                    <p className="text-cream-200/70 text-caption mt-1">
                      {item.handle}
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
