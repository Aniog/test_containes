import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StockImage from "@/components/ui/StockImage";
import useImageLoader from "@/lib/useImageLoader";

export default function BrandStory() {
  const ref = useRef(null);
  useImageLoader(ref);

  return (
    <section
      ref={ref}
      className="bg-cream-200 py-20 md:py-28"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-espresso-300">
              <StockImage
                imgId="story-portrait-c1d2"
                query="[story-subtitle] [story-title] [home-our-story-title] artisan goldsmith jewelry studio"
                refTitle="story-title"
                refDesc="story-subtitle"
                refSection="home-our-story-title"
                ratio="3x4"
                width="1200"
                alt="Velmora studio"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 font-sans text-[10px] uppercase tracking-widest2 text-muted">
              The Velmora studio — Los Angeles
            </p>
          </div>
          <div className="md:col-span-6 order-1 md:order-2 max-w-xl">
            <p className="eyebrow">Our Story</p>
            <h2
              id="home-our-story-title"
              className="mt-3 font-serif text-4xl md:text-[56px] md:leading-[1.05] text-espresso-300 tracking-tight"
            >
              <span id="story-title">Quiet pieces,</span>{" "}
              <em className="italic text-gold-500">made to last.</em>
            </h2>
            <p
              id="story-subtitle"
              className="mt-6 text-muted text-base md:text-lg leading-relaxed"
            >
              Velmora began with a simple idea: that fine jewelry shouldn't live
              in a box. We design in California, hand-finish in small batches,
              and plate in 18K gold over brass — demi-fine pieces that feel as
              good on a Tuesday as they do on a wedding day.
            </p>
            <p className="mt-4 text-muted text-base md:text-lg leading-relaxed">
              Every piece is hypoallergenic, lead-free, and built for the
              everyday. We don't do loud. We don't do fast. We do quiet,
              considered, and made to be worn.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-sans text-[12px] uppercase tracking-widest2 text-espresso-300 link-underline"
            >
              Our Story
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
