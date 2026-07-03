import { reelItems } from "@/data/products";
import { useStrkImages } from "@/lib/useStrkImages";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function ReelStrip() {
  const containerRef = useStrkImages([]);

  return (
    <section ref={containerRef} className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="mb-10 text-center">
          <p className="font-sans text-[11px] uppercase tracking-widest3 text-champagne">As Worn By You</p>
          <h2 className="mt-3 font-serif text-4xl text-cream md:text-5xl">#VelmoraMoments</h2>
        </div>
      </div>

      <div className="no-scrollbar flex gap-4 overflow-x-auto px-5 pb-4 md:px-10 md:pl-[max(2.5rem,calc((100vw-1400px)/2+2.5rem))]">
        {reelItems.map((item) => (
          <article
            key={item.id}
            className="group relative aspect-[9/16] w-[230px] shrink-0 overflow-hidden bg-ink/40 md:w-[280px]"
          >
            <img
              alt={item.caption}
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src={PLACEHOLDER}
              className="h-full w-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <p
              id={item.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic leading-snug text-cream"
            >
              {item.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
