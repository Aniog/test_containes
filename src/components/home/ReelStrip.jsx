import { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";
import { cn } from "@/lib/utils";

// Eight reel cards. Each card has its own title/desc ids so the stock image
// query references real DOM text.
const REELS = [
  {
    id: "reel-earparty",
    handle: "@velmora.jewels",
    caption: "An ear party, layered softly.",
    titleId: "reel-earparty-title",
    descId: "reel-earparty-desc",
    imgId: "reel-earparty-img",
    query:
      "close up of a woman wearing layered gold huggie earrings editorial portrait soft warm light",
  },
  {
    id: "reel-collarbone",
    handle: "@amaya.k",
    caption: "The floral, on collarbones.",
    titleId: "reel-collarbone-title",
    descId: "reel-collarbone-desc",
    imgId: "reel-collarbone-img",
    query:
      "close up of a woman wearing a delicate multicolor crystal necklace editorial portrait warm light",
  },
  {
    id: "reel-stacks",
    handle: "@velmora.jewels",
    caption: "Three rings, one hand.",
    titleId: "reel-stacks-title",
    descId: "reel-stacks-desc",
    imgId: "reel-stacks-img",
    query:
      "close up of a woman's hand with stacked gold rings editorial portrait soft natural light",
  },
  {
    id: "reel-giftbox",
    handle: "@noor.studio",
    caption: "Unboxing the heirloom set.",
    titleId: "reel-giftbox-title",
    descId: "reel-giftbox-desc",
    imgId: "reel-giftbox-img",
    query:
      "woman unboxing a cream gold jewelry gift box editorial lifestyle portrait warm light",
  },
  {
    id: "reel-morning",
    handle: "@mira.in.paris",
    caption: "Morning light, gold filigree.",
    titleId: "reel-morning-title",
    descId: "reel-morning-desc",
    imgId: "reel-morning-img",
    query:
      "woman wearing gold filigree drop earrings in soft morning window light editorial portrait",
  },
  {
    id: "reel-essentials",
    handle: "@velmora.jewels",
    caption: "Everyday essentials, paired.",
    titleId: "reel-essentials-title",
    descId: "reel-essentials-desc",
    imgId: "reel-essentials-img",
    query:
      "woman wearing matching gold earrings and necklace set editorial portrait warm soft light",
  },
  {
    id: "reel-twist",
    handle: "@studio.lin",
    caption: "A single ear cuff, undone.",
    titleId: "reel-twist-title",
    descId: "reel-twist-desc",
    imgId: "reel-twist-img",
    query:
      "close up of a woman wearing a single gold ear cuff editorial portrait soft warm light",
  },
  {
    id: "reel-evening",
    handle: "@eve.notes",
    caption: "For the dinner reservation.",
    titleId: "reel-evening-title",
    descId: "reel-evening-desc",
    imgId: "reel-evening-img",
    query:
      "woman in evening light wearing gold jewelry editorial portrait warm dim atmosphere",
  },
];

export default function ReelStrip() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="reel-title"
      className="bg-ivory py-20 md:py-28 border-t border-hairline"
    >
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p className="eyebrow mb-4">From the Community</p>
            <h2
              id="reel-title"
              className="font-serif text-h2 md:text-[44px] leading-[1.05]"
            >
              <em className="italic font-normal text-champagne-deep">Worn</em> by you
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-small text-muted hidden md:inline">
              Scroll the reel
            </span>
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous reels"
              className="w-10 h-10 grid place-items-center border border-hairline text-ink hover:bg-ink hover:text-bone transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next reels"
              className="w-10 h-10 grid place-items-center border border-hairline text-ink hover:bg-ink hover:text-bone transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="overflow-x-auto no-scrollbar scroll-smooth"
      >
        <ul
          ref={trackRef}
          className={cn(
            "flex gap-5 md:gap-7 px-6 md:px-10",
            "snap-x snap-mandatory"
          )}
          style={{ scrollPaddingLeft: "24px" }}
        >
          {REELS.map((reel) => (
            <li
              key={reel.id}
              className="snap-start flex-shrink-0 w-[200px] sm:w-[230px] md:w-[260px]"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-blush group">
                <StrkImage
                  imgId={reel.imgId}
                  query={`[${reel.descId}] [${reel.titleId}] ${reel.query}`}
                  ratio="9x16"
                  width={600}
                  alt={reel.caption}

                />
                {/* Gradient veil for caption legibility */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(38,33,29,0) 35%, rgba(38,33,29,0.0) 50%, rgba(38,33,29,0.75) 100%)",
                  }}
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 text-bone/95">
                  <Play className="w-3 h-3 fill-bone text-bone" />
                  <span className="text-[10px] uppercase tracking-[0.2em]">
                    Reel
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-bone">
                  <p
                    id={reel.titleId}
                    className="font-serif italic text-[19px] leading-tight"
                  >
                    {reel.caption}
                  </p>
                  <p
                    id={reel.descId}
                    className="text-[11px] uppercase tracking-[0.22em] text-bone/70 mt-2"
                  >
                    {reel.handle}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
