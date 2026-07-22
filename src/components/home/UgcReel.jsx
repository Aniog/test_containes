import Reveal from "@/components/Reveal";
import StockImage from "@/components/StockImage";

const CLIPS = [
  {
    id: "ear-stack",
    caption: "The morning stack",
    handle: "@amelia.r",
    query: "close-up of a woman's ear wearing layered gold huggie earrings and an ear cuff, warm sunlight, editorial photography",
  },
  {
    id: "neck-layers",
    caption: "Layered in gold",
    handle: "@sofia.maree",
    query: "delicate gold necklaces layered on a woman's neck and collarbone, soft warm editorial light",
  },
  {
    id: "getting-ready",
    caption: "Getting ready with V.",
    handle: "@juliette.l",
    query: "woman putting on gold drop earrings in front of a mirror, warm bathroom light, candid editorial moment",
  },
  {
    id: "golden-hour",
    caption: "Golden hour, golden ears",
    handle: "@noor.h",
    query: "profile portrait of a woman at golden hour wearing chunky gold dome huggie earrings, glowing warm skin",
  },
  {
    id: "everyday",
    caption: "Everyday alchemy",
    handle: "@clara.b",
    query: "elegant flat lay of gold jewelry on warm beige linen fabric with soft shadows, editorial still life",
  },
];

export default function UgcReel() {
  return (
    <section className="border-y border-hairline bg-cream py-20 md:py-28 overflow-hidden">
      <Reveal className="mx-auto mb-10 max-w-7xl px-5 md:px-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-gold">
            #MyVelmora
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium text-espresso md:text-5xl">
            Worn &amp; Loved
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-taupe">
          Tag @velmora to be featured — real pieces on real people, in real
          light.
        </p>
      </Reveal>

      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:gap-5 md:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        {CLIPS.map((clip) => (
          <figure
            key={clip.id}
            className="group relative w-[62vw] max-w-[240px] shrink-0 snap-start overflow-hidden bg-espresso aspect-[9/16] sm:w-[220px] md:w-[240px]"
          >
            <StockImage
              imgId={`ugc-${clip.id}`}
              query={clip.query}
              ratio="9x16"
              width={500}
              alt={clip.caption}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-transparent to-espresso/20" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-serif text-lg italic leading-snug text-ivory">
                &ldquo;{clip.caption}&rdquo;
              </p>
              <p className="mt-1.5 text-[11px] tracking-[0.2em] uppercase text-sand/90">
                {clip.handle}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
