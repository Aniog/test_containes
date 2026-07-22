import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useStrkImage } from "@/hooks/useStrkImage";
import { useReveal } from "@/hooks/useReveal";
import StockImage from "@/components/ui/StockImage";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";

export default function BrandStory() {
  const ref = useRef(null);
  useReveal(ref);
  useStrkImage(ref, []);
  return (
    <section ref={ref} className="bg-ivory py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-screen-2xl px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="reveal lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-cream-deep">
              <StockImage
                id="brand-story-portrait"
                query="artisan hands working on gold jewelry in warm studio light"
                alt="Jeweler at work, warm studio light"
                ratio="4x5"
                width={1100}
                className="w-full h-full"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-cream text-[10px] uppercase tracking-eyebrow">
                <span>From the studio</span>
                <span>Fig. 02</span>
              </div>
            </div>
          </div>

          <div className="reveal lg:col-span-6">
            <Eyebrow id="brand-story-eyebrow">Our Story</Eyebrow>
            <h2
              id="brand-story-headline"
              className="mt-4 font-serif font-light text-espresso leading-[1.08] tracking-tight text-4xl md:text-5xl"
            >
              A small studio, a long&nbsp;table, and a love of <em className="italic">quiet</em> things.
            </h2>
            <p
              id="brand-story-body"
              className="mt-6 text-base md:text-[17px] text-espresso-soft leading-[1.7] max-w-xl"
            >
              Velmora began at a kitchen table in 2021, with a single roll of
              18K gold-plated wire and a question: why does fine jewelry feel
              untouchable, and costume feel disposable? We make the piece
              in between — demi-fine, hand-finished, and priced so it can be
              worn every day. Designed in New York, made in small batches by
              artisans we know by name.
            </p>
            <div className="mt-8">
              <Button as={Link} to="/about" variant="ghost" size="lg">
                Read Our Story
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.6} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
