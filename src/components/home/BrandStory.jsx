import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { STORY_IMAGE } from "@/data/products";

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-bone">
      <div className="container-velmora">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6 order-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-cream">
              <img
                src={STORY_IMAGE}
                alt="Velmora founder styling a gold necklace"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 order-2 md:pl-4">
            <p className="eyebrow mb-6">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] text-ink">
              Made slowly.
              <br />
              <span className="italic">Worn daily.</span>
            </h2>
            <p className="mt-6 md:mt-8 text-base text-ink-soft leading-relaxed max-w-lg">
              Velmora began with a single cuff and a question: why does fine
              jewelry always feel either out of reach or out of place? We design
              demi-fine pieces that bridge the two — substantial enough to feel
              heirloom, accessible enough to wear with a t-shirt.
            </p>
            <p className="mt-4 text-base text-ink-soft leading-relaxed max-w-lg">
              Every Velmora piece is hand-finished in small batches, plated in
              18K gold over a hypoallergenic core, and packaged without
              pretense. No countdown timers. No discounts dressed up as
              occasions.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-product text-ink font-medium border-b border-ink pb-1 hover:text-ink-soft hover:border-ink-soft transition-colors"
            >
              Our Story
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}