import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import StrkImage, { useStrkImageLoader } from "@/components/ui/StrkImage";

export default function BrandStory() {
  const ref = useStrkImageLoader([]);
  return (
    <section
      ref={ref}
      aria-labelledby="story-title"
      className="bg-cream-soft border-y border-line"
    >
      <div className="mx-auto grid max-w-editorial grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center px-5 md:px-10 py-20 md:py-28">
        <div className="md:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-warm">
            <StrkImage
              imgId="brand-story-img-1a2b"
              query="[story-title] [story-eyebrow]"
              ratio="4x5"
              width={1000}
              alt="A founder's hands at the jewelry bench"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
        <div className="md:col-span-6">
          <p className="eyebrow" id="story-eyebrow">Our Story</p>
          <h2
            id="story-title"
            className="mt-3 font-display text-4xl md:text-5xl leading-[1.05]"
          >
            Quietly made. <em className="text-gold">Worn</em> for years.
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-ink-soft max-w-xl">
            Velmora began at a small bench in a converted print studio, where
            our founder sketched the first ear cuff in soft pencil. We work in
            18K gold plate over a hypoallergenic core — built to live with
            you, not in a box. Every piece is set, polished, and packed by
            hand in our studio.
          </p>
          <p className="mt-5 text-base leading-[1.8] text-ink-soft max-w-xl">
            We believe the most luxurious thing a piece of jewelry can be is
            worn. Often. With nothing to prove.
          </p>
          <Link to="/about" className="mt-8 btn-ghost">
            Our Story
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
