import { placeholderSvg, ugcItems } from "@/data/products";

export default function UgcReelSection() {
  return (
    <section id="journal" className="overflow-hidden bg-velmora-parchment py-16 text-velmora-espresso md:py-24">
      <div className="velmora-container">
        <div className="mb-9 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">Seen in soft light</p>
            <h2 id="ugc-title" className="serif-heading mt-3 text-5xl md:text-7xl">
              Worn by Velmora
            </h2>
          </div>
          <p id="ugc-subtitle" className="max-w-md text-sm leading-7 text-velmora-cocoa">
            A reel-style strip of everyday gold moments, from ear stacks to collarbone layers.
          </p>
        </div>
      </div>
      <div className="reel-scroll flex snap-x gap-4 overflow-x-auto px-5 pb-2 sm:px-8 lg:px-[max(3rem,calc((100vw-80rem)/2+3rem))]">
        {ugcItems.map((item) => (
          <article key={item.id} className="group relative h-[28rem] min-w-[16rem] snap-start overflow-hidden rounded-[2rem] bg-velmora-cocoa shadow-soft md:h-[34rem] md:min-w-[19rem]">
            <img
              alt={item.caption}
              className="h-full w-full object-cover transition duration-700 ease-velmora group-hover:scale-105"
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}] [ugc-subtitle] [ugc-title]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src={placeholderSvg}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/70 via-transparent to-transparent" />
            <p id={item.titleId} className="absolute bottom-5 left-5 right-5 font-serifDisplay text-3xl leading-none text-velmora-ivory">
              {item.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
