import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const FALLBACKS = [
  "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=700&q=90&fit=max&fm=jpg",
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700&q=90&fit=max&fm=jpg",
  "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=700&q=90&fit=max&fm=jpg",
  "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=700&q=90&fit=max&fm=jpg",
  "https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?w=700&q=90&fit=max&fm=jpg",
  "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=700&q=90&fit=max&fm=jpg",
  "https://images.unsplash.com/photo-1606293459339-aa5d34a7b0e1?w=700&q=90&fit=max&fm=jpg",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=700&q=90&fit=max&fm=jpg",
  "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=700&q=90&fit=max&fm=jpg",
  "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?w=700&q=90&fit=max&fm=jpg",
];

const REEL = [
  { caption: "Wearing the Aura cuff daily." },
  { caption: "Flora Nectar, layered." },
  { caption: "The Sphere huggies, my forever piece." },
  { caption: "Soft gold, slow afternoons." },
  { caption: "Heirloom on repeat." },
  { caption: "Pearl drops, always." },
  { caption: "Twisted Sirens, paired with linen." },
  { caption: "Gold that moves with you." },
  { caption: "Lumière, never off." },
  { caption: "The new stack." },
];

export function HomeReel() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section className="bg-bone pb-20 md:pb-28">
      <div className="px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto mb-8 md:mb-10 flex items-end justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-wider3 text-gold-deep mb-3">
            @velmora
          </p>
          <h2 className="font-serif text-ink text-3xl md:text-5xl font-light leading-tight">
            Worn by you
          </h2>
        </div>
        <p className="hidden md:block text-sm text-muted max-w-xs italic font-serif">
          Tag #velmora to be featured.
        </p>
      </div>

      <div
        ref={ref}
        className="flex gap-4 md:gap-5 overflow-x-auto px-6 md:px-10 lg:px-16 pb-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {REEL.map((card, i) => (
          <article
            key={i}
            className="relative shrink-0 w-[55vw] sm:w-[220px] md:w-[200px] aspect-[9/16] snap-start overflow-hidden bg-ink group"
          >
            <img
              data-strk-img-id={`ugc-${i + 1}`}
              src={FALLBACKS[i]}
              alt={card.caption}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <p className="absolute left-4 right-4 bottom-4 font-serif text-bone text-base md:text-lg leading-snug italic">
              {card.caption}
            </p>
            <span className="absolute top-4 right-4 text-bone/80 text-[10px] uppercase tracking-wider2">
              @velmora
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
