import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowUpRight } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";

export default function BrandStory() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-cream">
      <div className="container-x py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6 relative aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-bg">
            <StrkImage
              imgId="brand-story-img-9b4e7a"
              query="[brand-story-title] jeweler hands crafting gold jewelry in studio editorial warm light"
              ratio="4x5"
              width={1100}
              alt="Jeweler hands crafting Velmora jewelry in studio"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-6">
            <p className="eyebrow mb-4">Our story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.05] max-w-xl"
            >
              Designed to outlast the season.
            </h2>
            <p className="mt-7 text-[15px] md:text-base text-ink/80 leading-relaxed max-w-lg">
              Velmora began at a workbench in 2021, with a single question: why
              does fine jewelry have to feel out of reach? We design in-house
              and partner with family-run ateliers to bring you demi-fine
              pieces in 18K gold plating, sterling silver, and gold vermeil —
              refined enough for the occasion, considered enough for the
              everyday.
            </p>
            <p className="mt-5 text-[15px] md:text-base text-muted leading-relaxed max-w-lg">
              Each piece is hypoallergenic, tarnish-resistant, and made to
              live in. Because the things you wear every day should feel like
              you — quietly, lastingly.
            </p>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 label-cap text-ink border-b border-ink/60 hover:border-ink pb-1"
            >
              Read our story
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
