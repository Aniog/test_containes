import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { StockImage } from "@/components/ui/StockImage";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function BrandStory() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      id="brand-story-section"
      ref={ref}
      className="bg-ivory py-20 md:py-28"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] bg-cocoa overflow-hidden">
            <StockImage
              id="brand-story-img-7e1c"
              query="artisan hand finishing gold jewelry editorial warm light [brand-story-section-title]"
              ratio="4x5"
              width={900}
              alt="A craftsperson finishing a piece of gold jewelry by hand"
              className="transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="md:pl-4 lg:pl-8">
            <p id="brand-story-section-eyebrow" className="eyebrow">
              Our Story
            </p>
            <h2
              id="brand-story-section-title"
              className="mt-4 font-serif text-3xl md:text-5xl font-light leading-[1.05] text-ink"
            >
              Jewelry for the in-between hours.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink-soft max-w-prose-luxe">
              Velmora began at a kitchen table in 2019, with a single brass mold
              and a question: what if demi-fine felt like fine?
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-taupe max-w-prose-luxe">
              We work with two family-run ateliers in Jaipur and Arezzo who
              finish every piece by hand, in small batches, with the kind of
              care that has no place in fast fashion.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-ui text-ink hover:text-gold-deep transition-colors"
            >
              Read Our Story
              <ArrowRight size={14} strokeWidth={1.4} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
