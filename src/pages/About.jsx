import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { SectionDivider } from "@/components/shared/SectionDivider";

const STORY_FALLBACK =
  "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1400&q=90&fit=max&fm=jpg";

const VALUES = [
  {
    title: "Made to be lived in",
    body: "We design for the morning, the meeting, the dinner, the morning after. Pieces that feel inevitable.",
  },
  {
    title: "Considered materials",
    body: "Hypoallergenic brass cores, 18K gold plating, ethically sourced crystals and freshwater pearls.",
  },
  {
    title: "Small-batch craft",
    body: "Each piece is hand-finished in limited runs. We never over-produce, and we never rush.",
  },
];

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div className="bg-bone min-h-screen pt-24 md:pt-28 pb-20">
      <div className="px-6 md:px-10 lg:px-16 max-w-[1100px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[10px] uppercase tracking-wider3 text-gold-deep mb-3">
            Our Story
          </p>
          <h1 className="font-serif text-ink text-4xl md:text-6xl font-light leading-tight">
            A small atelier,
            <br />
            <span className="italic">a quiet point of view.</span>
          </h1>
        </div>

        <div ref={ref} className="relative aspect-[4/3] md:aspect-[16/8] overflow-hidden bg-ivory mb-16">
          <img
            data-strk-img-id="story-image-1"
            src={STORY_FALLBACK}
            alt="Inside the Velmora atelier"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="max-w-2xl mx-auto text-ink/85 text-base md:text-lg leading-relaxed space-y-6">
          <p>
            Velmora began in a small Paris atelier with a single idea: demi-fine jewelry that
            feels as considered as fine jewelry, at a price you can give without hesitation.
          </p>
          <p>
            Every piece in our collection is hand-finished in 18K gold plating, over a
            hypoallergenic brass core. Substantial enough to feel like a keepsake; gentle
            enough to wear from morning to evening, and every day in between.
          </p>
          <p>
            We design slowly, in small batches, for the women we have always made jewelry
            for — the ones who notice the weight of a ring, the warmth of a clasp, the
            quiet of a piece that was clearly made with care.
          </p>
        </div>

        <SectionDivider withOrnament className="my-20" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {VALUES.map((v) => (
            <div key={v.title} className="text-center md:text-left">
              <h3 className="font-serif text-ink text-2xl md:text-3xl font-light mb-3">
                {v.title}
              </h3>
              <p className="text-ink/75 text-sm md:text-base leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/shop"
            className="inline-block bg-ink text-bone px-10 py-4 text-[11px] uppercase tracking-wider2 font-medium hover:bg-gold-deep transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
