import { useEffect, useRef } from "react";
import { Heart } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Container from "@/components/ui/Container";

const reels = [
  {
    id: "reel-1",
    handle: "@noor.ingrid",
    caption: "the everyday stack",
    query: "close up of woman ear with gold huggie earrings editorial portrait warm light",
    likes: "1.2k",
  },
  {
    id: "reel-2",
    handle: "@maya.kit",
    caption: "soft morning light",
    query: "woman neckline with delicate gold necklace editorial warm light close up",
    likes: "984",
  },
  {
    id: "reel-3",
    handle: "@elena.house",
    caption: "the floral piece",
    query: "woman wearing multicolor floral crystal gold pendant editorial close up",
    likes: "2.4k",
  },
  {
    id: "reel-4",
    handle: "@sienna.lila",
    caption: "paired, never overdone",
    query: "woman ear stack gold huggies and crystal ear cuff editorial warm",
    likes: "1.8k",
  },
  {
    id: "reel-5",
    handle: "@aria.may",
    caption: "the heirloom set",
    query: "woman wearing gold earrings and necklace set editorial portrait warm light",
    likes: "3.1k",
  },
  {
    id: "reel-6",
    handle: "@lola.ren",
    caption: "evening ritual",
    query: "close up woman wearing gold filigree drop earrings editorial warm portrait",
    likes: "762",
  },
  {
    id: "reel-7",
    handle: "@vesper.studio",
    caption: "the wedding edit",
    query: "bride wearing delicate gold jewelry close up editorial warm portrait",
    likes: "1.5k",
  },
];

const placeholder =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'>
      <defs>
        <radialGradient id='g' cx='40%' cy='30%' r='90%'>
          <stop offset='0%' stop-color='#5C4A3A'/>
          <stop offset='50%' stop-color='#2A2218'/>
          <stop offset='100%' stop-color='#0E0B07'/>
        </radialGradient>
        <radialGradient id='gold' cx='60%' cy='40%' r='22%'>
          <stop offset='0%' stop-color='#E8C58A' stop-opacity='0.65'/>
          <stop offset='100%' stop-color='#A8824A' stop-opacity='0'/>
        </radialGradient>
      </defs>
      <rect width='9' height='16' fill='url(%23g)'/>
      <ellipse cx='5.4' cy='6.4' rx='2.2' ry='3' fill='url(%23gold)'/>
    </svg>`
  );

function ReelCard({ reel, idx }) {
  const capId = `reel-cap-${reel.id}`;
  return (
    <article className="snap-start shrink-0 w-[220px] md:w-[260px] flex flex-col gap-3 group">
      <div className="relative w-full aspect-[9/16] bg-espresso/95 overflow-hidden">
        <img
          alt={reel.caption}
          data-strk-img-id={`${reel.id}-img`}
          data-strk-img={`[${capId}] warm editorial close up gold jewelry on woman ${reel.query}`}
          data-strk-img-ratio="9x16"
          data-strk-img-width="500"
          src={placeholder}
          className="h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-espresso/85" />

        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-ivory/90 text-espresso px-2 py-1 text-[10px] tracking-label-tight">
          <Heart size={10} strokeWidth={1.5} className="fill-brass text-brass" />
          {reel.likes}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-ivory">
          <p id={capId} className="font-serif italic text-xl md:text-2xl leading-tight">
            {reel.caption}
          </p>
          <p className="label text-ivory/70 text-[10px] mt-2">{reel.handle}</p>
        </div>
      </div>
    </article>
  );
}

export default function UGCReel() {
  const ref = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-bone/60 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="eyebrow">@velmora · #WornInVelmora</span>
            <h2 className="display-2 text-espresso">
              As worn, <em className="italic text-brass">by you</em>
            </h2>
          </div>
          <p className="text-sm text-taupe font-light max-w-xs">
            Real moments from our community. Tag <span className="text-espresso">@velmora</span> for a chance to be featured.
          </p>
        </div>
      </Container>

      <div
        ref={scrollerRef}
        className="no-scrollbar flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory px-6 md:px-10 pb-4"
        style={{ scrollPaddingLeft: "1.5rem" }}
      >
        {reels.map((r, i) => (
          <ReelCard key={r.id} reel={r} idx={i} />
        ))}
      </div>
    </section>
  );
}
