import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const REELS = [
  {
    id: "ear-stack",
    caption: "Layered for everyday.",
    image:
      "https://images.unsplash.com/photo-1620656798932-902f7fc28b3f?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "necklace-soft",
    caption: "Soft light, soft gold.",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "huggies-side",
    caption: "The everyday huggie.",
    image:
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "gift-moment",
    caption: "For the one who notices.",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "minimal-stack",
    caption: "Less, but better.",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "close-glow",
    caption: "Made to catch the light.",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "cuff-detail",
    caption: "One piece, endless ways.",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=85",
  },
];

export default function HomeReels() {
  const scrollerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Sync active "page" based on horizontal scroll.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = el.firstElementChild?.getBoundingClientRect?.().width ?? 280;
      const idx = Math.round(el.scrollLeft / (cardWidth + 16));
      setActiveIndex(Math.min(Math.max(idx, 0), REELS.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el || !el.firstElementChild) return;
    const step = el.firstElementChild.getBoundingClientRect().width + 16;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-24 bg-[var(--color-cream)]">
      <Container>
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
          <SectionHeading
            eyebrow="@velmora · On You"
            title="Worn & loved"
            align="left"
          />
          <div className="hidden md:flex items-center gap-2 pb-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous reel"
              className="w-10 h-10 border border-[var(--color-ink)]/20 hover:border-[var(--color-ink)] flex items-center justify-center text-[var(--color-ink)] transition-colors"
            >
              <ChevronLeft size={16} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next reel"
              className="w-10 h-10 border border-[var(--color-ink)]/20 hover:border-[var(--color-ink)] flex items-center justify-center text-[var(--color-ink)] transition-colors"
            >
              <ChevronRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </Container>

      {/* Edge-to-edge horizontal scroll */}
      <div className="overflow-x-auto no-scrollbar" ref={scrollerRef}>
        <ul className="flex gap-4 px-6 sm:px-8 lg:px-12 pb-4 snap-x snap-mandatory">
          {REELS.map((reel, i) => (
            <li
              key={reel.id}
              className={cn(
                "snap-start flex-shrink-0 relative overflow-hidden bg-[var(--color-ink)]",
                "w-[60vw] sm:w-[280px] md:w-[300px]",
                "aspect-[9/16]"
              )}
            >
              <img
                src={reel.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "center 30%" }}
              />
              <div className="absolute inset-0 reel-overlay" />
              <div className="absolute top-4 left-4 flex items-center gap-2 text-[var(--color-bone)]/85">
                <span className="w-6 h-6 rounded-full border border-[var(--color-bone)]/40 flex items-center justify-center">
                  <Play size={9} strokeWidth={1.5} className="fill-current ml-0.5" />
                </span>
                <span className="text-[0.6rem] uppercase tracking-eyebrow">@velmora</span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5">
                <p className="font-serif text-2xl text-[var(--color-bone)] leading-snug">
                  {reel.caption}
                </p>
                <p className="mt-2 text-[0.6rem] uppercase tracking-eyebrow text-[var(--color-bone)]/70">
                  Reel {String(i + 1).padStart(2, "0")} / {String(REELS.length).padStart(2, "0")}
                </p>
              </div>
            </li>
          ))}
          <li className="snap-start flex-shrink-0 w-1 sm:w-2" aria-hidden="true" />
        </ul>
      </div>

      {/* Dot indicators (mobile) */}
      <div className="md:hidden flex items-center justify-center gap-2 mt-6">
        {REELS.map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-1 rounded-full transition-all duration-300",
              i === activeIndex ? "w-6 bg-[var(--color-ink)]" : "w-1.5 bg-[var(--color-ink)]/25"
            )}
          />
        ))}
      </div>
    </section>
  );
}