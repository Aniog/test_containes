import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import ImageFrame from "@/components/ui/ImageFrame";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-charcoal text-ivory">
      <div className="container-editorial relative">
        <div className="grid grid-cols-1 items-center gap-10 py-20 md:grid-cols-12 md:gap-12 md:py-28 lg:py-36">
          {/* Copy */}
          <div className="md:col-span-6 lg:col-span-5">
            <div className="inline-flex items-center gap-2 border border-ivory/20 px-3 py-1.5">
              <Sparkles size={13} strokeWidth={1.5} className="text-gold-soft" />
              <span className="font-sans text-[10px] font-medium uppercase tracking-product text-ivory/80">
                Summer Edit · 2026
              </span>
            </div>
            <h1
              id="hero-title"
              className="mt-6 font-serif text-[44px] font-light leading-[1.02] tracking-[-0.01em] text-ivory md:text-[64px] lg:text-[78px]"
            >
              Crafted to be <em className="italic text-gold-soft">treasured</em>.
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 max-w-md font-sans text-[16px] font-light leading-relaxed text-ivory/80"
            >
              Demi-fine gold jewelry, hand-finished in small batches. Designed
              to be worn daily, gifted often, and kept for years.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/shop" className="btn-primary !bg-ivory !text-charcoal hover:!bg-cream">
                Shop the Collection
                <ArrowRight size={14} strokeWidth={1.5} className="ml-3" />
              </Link>
              <Link
                to="/about"
                className="font-sans text-[12px] font-medium uppercase tracking-product text-ivory/85 underline-offset-4 transition-colors hover:text-ivory hover:underline"
              >
                Our Story
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-8 text-ivory/65">
              <div>
                <p className="font-serif text-3xl text-ivory">12k+</p>
                <p className="font-sans text-[11px] uppercase tracking-product text-ivory/60">
                  Treasured pieces
                </p>
              </div>
              <div className="h-10 w-px bg-ivory/20" />
              <div>
                <p className="font-serif text-3xl text-ivory">4.9</p>
                <p className="font-sans text-[11px] uppercase tracking-product text-ivory/60">
                  Customer rating
                </p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="md:col-span-6 lg:col-span-7">
            <div className="relative">
              <ImageFrame
                id="hero-main-img"
                query="[hero-subtitle] [hero-title]"
                ratio="4x5"
                width={1200}
                tone="dark"
                alt="Model wearing Velmora demi-fine gold jewelry"
                className="shadow-editorial-md"
              />
              {/* Floating editorial caption */}
              <div className="absolute -left-6 bottom-8 hidden bg-ivory px-5 py-4 shadow-editorial md:block">
                <p className="eyebrow">Now showing</p>
                <p className="mt-1 font-serif text-base text-charcoal">
                  The Flora Edit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gold rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}
