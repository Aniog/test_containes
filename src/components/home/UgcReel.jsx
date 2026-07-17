import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { JewelryImage } from "@/components/ui/JewelryImage";

const reels = [
  {
    id: "u1",
    handle: "@noor.aurelia",
    caption: "Wearing the Golden Sphere Huggies for the third week running.",
  },
  {
    id: "u2",
    handle: "@maeve.studios",
    caption: "The Flora Nectar, caught in afternoon light.",
  },
  {
    id: "u3",
    handle: "@isla.minimal",
    caption: "Quiet days call for the Lace drops.",
  },
  {
    id: "u4",
    handle: "@theo.editorial",
    caption: "Layering the heirloom set for the holiday table.",
  },
  {
    id: "u5",
    handle: "@ari.kim",
    caption: "Aura cuff + a glass of red. Sunday, sorted.",
  },
  {
    id: "u6",
    handle: "@hanna.kintsugi",
    caption: "The Huggies, everywhere with me.",
  },
];

export function UgcReel() {
  const scroller = useRef(null);

  const scroll = (dir) => {
    const el = scroller.current;
    if (!el) return;
    const step = el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="bg-espresso py-20 text-ink-onDark md:py-28">
      <div className="container-editorial">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow eyebrow-on-dark">@velmora · Tagged</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              Worn by you
            </h2>
            <p className="mt-3 max-w-md text-ink-onDarkSecondary leading-relaxed">
              Real moments from our community. Tag #velmoraworn for a chance to
              be featured.
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scroll(-1)}
              className="grid h-10 w-10 place-items-center border border-line-dark text-ink-onDark hover:border-ink-onDark hover:bg-ink-onDark hover:text-espresso transition-colors"
              aria-label="Scroll reels left"
            >
              <ChevronLeft size={16} strokeWidth={1.4} />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              className="grid h-10 w-10 place-items-center border border-line-dark text-ink-onDark hover:border-ink-onDark hover:bg-ink-onDark hover:text-espresso transition-colors"
              aria-label="Scroll reels right"
            >
              <ChevronRight size={16} strokeWidth={1.4} />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:gap-7"
        >
          {reels.map((r, i) => (
            <article
              key={r.id}
              className="relative w-[68vw] max-w-[280px] flex-shrink-0 snap-start md:max-w-[300px]"
            >
              <div className="relative overflow-hidden">
                <JewelryImage
                  art="ugc"
                  palette={i % 2 === 0 ? "amber" : "warm"}
                  variant={i}
                  ratio="9/16"
                  className="w-full"
                  alt={`${r.handle} wearing Velmora`}
                />
                {/* Bottom gradient + caption */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-serif text-base italic leading-snug text-ink-onDrop md:text-lg">
                    &ldquo;{r.caption}&rdquo;
                  </p>
                  <p className="mt-3 text-[10px] uppercase tracking-wider2 text-ink-onDarkSecondary">
                    {r.handle}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UgcReel;
