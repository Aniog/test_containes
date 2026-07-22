import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StockImage from "@/components/ui/StockImage";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { useStrkImage } from "@/hooks/useStrkImage";
import { HERO_IMAGE_QUERY } from "@/data/products";

export default function Hero() {
  const ref = useRef(null);
  useStrkImage(ref, []);
  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] md:min-h-screen flex items-end overflow-hidden bg-espresso"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <StockImage
          id="hero-portrait-7a3b9c"
          query={HERO_IMAGE_QUERY}
          alt="Model wearing Velmora gold jewelry in warm window light"
          ratio="3x4"
          width={1600}
          className="w-full h-full"
          imgClassName="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Warm gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/15 to-espresso/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/55 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-screen-2xl w-full px-5 md:px-8 lg:px-12 pb-16 md:pb-24 lg:pb-32 pt-32">
        <div className="max-w-2xl">
          <Eyebrow
            as="span"
            className="text-champagne-soft"
          >
            The Velmora Edit · Summer 2026
          </Eyebrow>
          <h1
            id="hero-headline"
            className="mt-5 md:mt-7 font-serif font-light text-cream leading-[1.02] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            Crafted to be <em className="italic font-normal">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="mt-5 md:mt-7 text-cream/85 text-base md:text-lg leading-relaxed max-w-md"
          >
            Demi-fine 18K gold plated jewelry, designed in small batches
            and finished by hand. Pieces to live in, season after season.
          </p>
          <div className="mt-8 md:mt-10 flex items-center gap-4 flex-wrap">
            <Button as={Link} to="/shop" size="lg" variant="onDark">
              Shop the Collection
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.6} />
            </Button>
            <Button
              as={Link}
              to="/about"
              size="lg"
              variant="ghostLight"
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Tiny corner index */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-10 hidden sm:flex flex-col items-end text-cream/70 text-[10px] uppercase tracking-eyebrow">
        <span>SS · 26</span>
        <span className="mt-1 h-px w-12 bg-cream/40" />
        <span className="mt-1">Editorial 01</span>
      </div>
    </section>
  );
}
