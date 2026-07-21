import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight } from "lucide-react";
import JewelImage from "@/components/ui/JewelImage";

export default function BrandStory() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-cream-warm">
      <div className="mx-auto max-w-editorial grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] order-1">
          <JewelImage shape="lifestyle" bg="warm" alt="Atelier scene" className="absolute inset-0" />
          <img
            data-strk-img-id="brand-story-img-1"
            data-strk-img="[brand-story-eyebrow] [brand-story-title] [brand-story-body]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Inside the Velmora atelier"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2 text-cream">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
            <span className="eyebrow text-[0.6rem] text-cream/80">Atelier No. 03</span>
          </div>
        </div>

        <div className="order-2 px-6 md:px-16 py-16 md:py-24 flex flex-col justify-center">
          <span id="brand-story-eyebrow" className="eyebrow text-champagne-dark">Our Story</span>
          <h2 id="brand-story-title" className="font-display text-4xl md:text-5xl mt-4 text-ink leading-[1.05]">
            Designed in our atelier.<br />Worn for a lifetime.
          </h2>
          <p id="brand-story-body" className="mt-6 text-base text-muted leading-relaxed max-w-md">
            Velmora began as a small bench in a shared studio — a search for the warmth of fine gold at a price you can wear every day. Each piece is sketched, cast, and finished by hand in small batches, with the same patience a jeweler brings to an heirloom.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <Stat label="Pieces designed" value="120+" />
            <Stat label="Hand-set crystals" value="4,800" />
            <Stat label="Worn in 32 countries" value="32" />
          </div>
          <div className="mt-9">
            <Link to="/about" className="inline-flex items-center gap-2 eyebrow text-[0.7rem] text-ink link-underline">
              Read our story
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="font-display text-3xl text-ink">{value}</p>
      <p className="eyebrow text-[0.6rem] text-muted mt-1">{label}</p>
    </div>
  );
}
