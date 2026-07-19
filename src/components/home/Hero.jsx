import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StockImage from "@/components/ui/StockImage";
import useImageLoader from "@/lib/useImageLoader";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  useImageLoader(ref);

  return (
    <section
      ref={ref}
      className="relative w-full h-[88vh] min-h-[600px] md:h-[92vh] md:min-h-[720px] bg-espresso-300 overflow-hidden"
    >
      <div className="absolute inset-0">
        <StockImage
          imgId="hero-velmora-7c1f"
          query="[hero-subtitle] [hero-title] [hero-eyebrow]"
          refTitle="hero-title"
          refDesc="hero-subtitle"
          refSection="hero-eyebrow"
          ratio="3x4"
          width="1600"
          alt="Model wearing demi-fine gold jewelry"
          className="w-full h-full object-cover"
          eager
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-300/40 via-espresso-300/10 to-espresso-300/55" />
      </div>

      <div className="relative h-full container-wide flex flex-col justify-end pb-16 md:pb-24">
        <div className="max-w-2xl text-cream-50 animate-fadeUp">
          <p
            id="hero-eyebrow"
            className="font-sans text-[11px] md:text-xs uppercase tracking-widest2 text-gold-200"
          >
            Velmora Fine Jewelry
          </p>
          <h1
            id="hero-title"
            className="mt-4 md:mt-6 font-serif font-light text-[44px] leading-[1.05] md:text-[72px] md:leading-[1.04] tracking-tight"
          >
            Crafted to be <em className="italic font-light text-gold-200">Treasured</em>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-5 md:mt-6 text-base md:text-lg text-cream-100/85 max-w-md leading-relaxed"
          >
            Demi-fine gold jewelry designed for the everyday — light on the ear,
            soft on the skin, made to last a lifetime of wear.
          </p>
          <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4">
            <Link to="/shop" className="btn-outline-light">
              Shop the Collection
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link
              to="/about"
              className="font-sans text-[12px] uppercase tracking-widest2 text-cream-100/85 hover:text-gold-200 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
