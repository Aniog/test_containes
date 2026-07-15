import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;
    return ImageHelper.loadImages(strkImgConfig, node);
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-ivory py-20 md:py-28"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-cream">
              <SmartImage
                alt="Founder portrait at workbench"
                query="founder designer at jewelry workbench with gold pieces warm portrait editorial"
                ratio="4x3"
                width={1200}
                imgId="brand-story-portrait"
                className="w-full h-full"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </Reveal>

          <div className="md:pl-6">
            <Reveal>
              <p className="eyebrow text-gold-deep">Our Story</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
                Designed slowly.{" "}
                <em className="italic font-normal text-mauve">Made to last.</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-mauve text-[15px] md:text-[16px] leading-relaxed max-w-prose">
                Velmora began with a single question: why should choosing
                demi-fine jewelry mean choosing between quality and price? We
                started in a small studio, sketching pieces we wanted to wear
                ourselves — pieces that feel like fine jewelry, made for real
                life.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-4 text-mauve text-[15px] md:text-[16px] leading-relaxed max-w-prose">
                Today every Velmora piece is hand-finished in 18K gold
                plating, hypoallergenic by design, and arrives in packaging
                worth keeping. This is jewelry that quietly outlasts trends.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-8 flex items-center gap-6">
                <Link to="/about" className="link-underline inline-flex items-center gap-2">
                  Read our story
                  <ArrowRight size={14} strokeWidth={1.6} />
                </Link>
                <span className="text-stone text-[11px] uppercase tracking-eyebrow">
                  Est. 2024
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
