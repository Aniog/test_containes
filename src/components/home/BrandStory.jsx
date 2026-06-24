import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StockImage from "@/components/ui/StockImage";

export default function BrandStory() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6 relative">
            <div className="relative aspect-[4/5] bg-espresso stock-skeleton overflow-hidden">
              <StockImage
                query="[story-subtitle] [story-title] gold jewelry on warm linen in atelier editorial"
                imageId="brand-story-main"
                ratio="4x5"
                width={1200}
                alt="Inside the Velmora atelier"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-bone border border-hairline px-6 py-5 max-w-[220px]">
              <p className="font-display text-2xl text-espresso leading-tight">
                Made by hand, kept forever.
              </p>
            </div>
          </div>

          <div className="md:col-span-6 md:pl-8 lg:pl-12">
            <p id="story-title" className="eyebrow eyebrow-gold">
              Our Story
            </p>
            <h2 className="section-title mt-4">
              Demi-fine, made{" "}
              <span className="section-title-italic">properly</span>.
            </h2>
            <p
              id="story-subtitle"
              className="section-subtitle mt-6"
            >
              Velmora began at a kitchen table with a single sketchbook and a
              refusal to choose between quality and price. Today, every piece is
              designed in our atelier and finished by hand in 18k gold-plated
              brass, set with hypoallergenic crystals and made to wear daily,
              give often, and keep.
            </p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-3 text-[11px] tracking-widest3 uppercase text-espresso hover:text-gold transition-colors"
            >
              Read our story
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}