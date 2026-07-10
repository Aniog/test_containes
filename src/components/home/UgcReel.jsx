import React, { useRef } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";

const REELS = [
  {
    id: "ugc-1",
    imgId: "ugc-reel-ear-cuff-2a8b1d",
    query: "closeup video still of model wearing 18K gold ear cuff and crystal on neutral linen background natural daylight",
    caption: "Wearing the Vivid Aura cuff daily — three months in and still my most asked-about piece.",
    author: "Maya R.",
  },
  {
    id: "ugc-2",
    imgId: "ugc-reel-necklace-7e3c5f",
    query: "closeup of multicolor floral crystal pendant necklace on chest cream linen editorial portrait warm light",
    caption: "Layered with my grandmother's chain. The Flora Nectar has earned a place.",
    author: "Imogen S.",
  },
  {
    id: "ugc-3",
    imgId: "ugc-reel-huggies-4d9a82",
    query: "model closeup smiling wearing chunky gold dome huggie earrings soft natural light editorial",
    caption: "The huggies that made me stop buying fast jewelry. Real weight. Real finish.",
    author: "Naima K.",
  },
  {
    id: "ugc-4",
    imgId: "ugc-reel-lace-6c1b73",
    query: "model looking down wearing textured gold filigree drop earrings on warm neutral background",
    caption: "I bought the lace drops for a wedding. I've worn them every weekend since.",
    author: "Sloane P.",
  },
  {
    id: "ugc-5",
    imgId: "ugc-reel-set-9f0e54",
    query: "model wearing matching gold earring and necklace set on linen dress warm sunlight editorial",
    caption: "Gifted the Royal Heirloom set to my sister. The packaging alone made her cry.",
    author: "Alia B.",
  },
  {
    id: "ugc-6",
    imgId: "ugc-reel-stack-3a7c29",
    query: "editorial closeup of stacked gold necklaces and huggies on model warm soft lighting neutral",
    caption: "Three pieces, one quiet stack. The rule I never break.",
    author: "Devon L.",
  },
];

export default function UgcReel() {
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.7;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="bg-sand-100">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <span className="label-cap text-champagne-600">Worn by You</span>
            <h2
              id="ugc-reel-title"
              className="mt-4 font-serif text-4xl md:text-5xl font-light text-ink-950"
            >
              Quietly, in the world.
            </h2>
            <p
              id="ugc-reel-subtitle"
              className="mt-4 text-textmute max-w-md"
            >
              Real customers, real light. Tag <span className="text-ink-950">@velmora.jewelry</span> to be featured.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll reels left"
              className="w-11 h-11 inline-flex items-center justify-center border border-ink-950 text-ink-950 hover:bg-ink-950 hover:text-textondark editorial-transition"
            >
              <ArrowLeft size={16} strokeWidth={1.4} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll reels right"
              className="w-11 h-11 inline-flex items-center justify-center border border-ink-950 text-ink-950 hover:bg-ink-950 hover:text-textondark editorial-transition"
            >
              <ArrowRight size={16} strokeWidth={1.4} />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="no-scrollbar flex gap-4 md:gap-5 overflow-x-auto scroll-smooth -mx-6 md:-mx-10 lg:-mx-16 px-6 md:px-10 lg:px-16"
        >
          {REELS.map((r) => (
            <article
              key={r.id}
              className="relative flex-shrink-0 w-[60vw] sm:w-[42vw] md:w-[280px] lg:w-[300px] aspect-[9/16] overflow-hidden bg-ink-950 group"
            >
              <div className="absolute inset-0">
                <StrkImage
                  imgId={r.imgId}
                  query={r.query}
                  ratio="9x16"
                  width={600}
                  alt={`Customer story by ${r.author}`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-ink-950/0 via-ink-950/0 to-ink-950/80" />
              <div className="absolute top-4 right-4 w-9 h-9 inline-flex items-center justify-center rounded-full bg-textondark/15 backdrop-blur-sm border border-textondark/30 text-textondark">
                <Play size={12} strokeWidth={1.4} className="ml-0.5" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-textondark">
                <p
                  id={`ugc-caption-${r.id}`}
                  className="font-serif text-lg md:text-xl font-light leading-snug"
                >
                  "{r.caption}"
                </p>
                <p
                  id={`ugc-author-${r.id}`}
                  className="mt-3 label-cap text-champagne-300"
                >
                  — {r.author}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
