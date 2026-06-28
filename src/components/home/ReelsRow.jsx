import { Play } from "lucide-react";
import { REELS } from "@/data/products";

export default function ReelsRow() {
  return (
    <section className="bg-velmora-ivory">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-velmora-taupe">
              @velmora
            </p>
            <h2 className="mt-3 font-serif text-4xl font-light text-velmora-ink md:text-5xl">
              As Worn by You
            </h2>
          </div>
          <a
            href="#"
            className="link-underline hidden text-[12px] uppercase tracking-[0.24em] text-velmora-ink md:inline-block"
          >
            Follow on Instagram
          </a>
        </div>
      </div>

      <div className="scroll-x mx-auto flex w-full max-w-[1440px] gap-4 overflow-x-auto px-5 pb-20 md:gap-5 md:px-10 lg:px-16">
        {REELS.map((reel) => (
          <article
            key={reel.id}
            className="group relative w-[68%] flex-shrink-0 overflow-hidden bg-velmora-ink sm:w-[42%] md:w-[28%] lg:w-[22%]"
          >
            <div className="relative aspect-[9/16] w-full">
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.captionId}] gold jewelry worn close-up vertical reel editorial soft warm light`}
                data-strk-img-ratio="9x16"
                data-strk-img-width={600}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/70 via-transparent to-velmora-ink/10" />
              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-velmora-cream/15 text-velmora-cream backdrop-blur-md">
                <Play className="h-3 w-3 fill-current" strokeWidth={1.4} />
              </div>
              <p
                id={reel.captionId}
                className="absolute bottom-4 left-4 right-4 font-serif text-lg italic leading-tight text-velmora-cream md:text-xl"
              >
                {reel.caption}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
