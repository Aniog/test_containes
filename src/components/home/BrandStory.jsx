import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StockImage from "@/components/ui/StockImage";
import Reveal from "@/components/ui/Reveal";
import { BRAND_STORY } from "@/data/site";

export default function BrandStory() {
  return (
    <section className="py-20 sm:py-28 bg-cream-200">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <StockImage
                query={BRAND_STORY.image}
                ratio="4x5"
                width={1200}
                imgId="brand-story-2d4e1c"
                className="w-full h-full"
                alt="Craftsperson shaping a Velmora piece"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-6 -right-6 w-32 h-32 sm:w-48 sm:h-48 bg-gold-100 hidden sm:block"
                style={{ background: "linear-gradient(135deg, #E9DCC0, #D9C28A)" }}
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="lg:pl-6 max-w-[44ch]">
              <p className="eyebrow mb-5">{BRAND_STORY.eyebrow}</p>
              <h2 className="font-display text-[44px] sm:text-[64px] leading-[1.02] text-onyx-800">
                {BRAND_STORY.title}
              </h2>
              <p className="mt-6 text-[16px] sm:text-[17px] text-mocha-600 leading-[1.75]">
                {BRAND_STORY.body}
              </p>
              <Link
                to={BRAND_STORY.ctaTo}
                className="mt-8 inline-flex items-center gap-2 font-sans uppercase tracking-widest-2 text-[12px] text-onyx-800 border-b border-onyx-800 pb-1 hover:text-gold-500 hover:border-gold-500 transition-colors"
              >
                {BRAND_STORY.cta} <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
