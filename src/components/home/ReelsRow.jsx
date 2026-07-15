import { useRef } from "react";
import { StrkImage } from "@/components/ui/StrkImage";
import { useImageLoader } from "@/hooks/useImageLoader";

const reels = [
  { id: "reel-1", caption: "Ear stacks for every mood" },
  { id: "reel-2", caption: "Close-up gold moments" },
  { id: "reel-3", caption: "Gift-ready packaging" },
  { id: "reel-4", caption: "Layered necklaces" },
  { id: "reel-5", caption: "Huggies all day" },
  { id: "reel-6", caption: "Weekend shine" },
];

export function ReelsRow() {
  const ref = useRef(null);
  useImageLoader(ref, []);

  return (
    <section ref={ref} className="bg-velmora-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
          @velmorajewelry
        </p>
        <h2 className="mt-3 font-serif text-3xl tracking-wide md:text-4xl">
          Styled by You
        </h2>
      </div>

      <div className="mt-10 flex gap-4 overflow-x-auto px-5 pb-4 md:px-8 scrollbar-hide">
        {reels.map((reel, idx) => (
          <article
            key={reel.id}
            className="relative shrink-0 w-[180px] md:w-[220px] aspect-[9/16] overflow-hidden rounded-sm"
          >
            <StrkImage
              id={`reel-img-${idx}`}
              query={`[reel-caption-${idx}] gold jewelry worn ear neck`}
              ratio="9x16"
              width={400}
              alt={reel.caption}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/70 via-transparent to-transparent" />
            <p
              id={`reel-caption-${idx}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-lg leading-tight text-white"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
