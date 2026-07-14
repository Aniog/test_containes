import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ImageFrame from "@/components/ui/ImageFrame";

export default function BrandStory() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="container-editorial">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6">
            <div className="relative">
              <ImageFrame
                id="brand-story-img"
                query="[brand-story-body] [brand-story-heading]"
                ratio="4x5"
                width={900}
                tone="warm"
                alt="Inside the Velmora atelier"
              />
              <div className="absolute -right-4 -top-4 hidden bg-ivory px-4 py-3 shadow-editorial md:block">
                <p className="eyebrow">Est. 2021</p>
                <p className="mt-1 font-serif text-base italic text-charcoal">
                  California, US
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-6">
            <p className="eyebrow">Our story</p>
            <h2
              id="brand-story-heading"
              className="mt-3 font-serif text-4xl leading-[1.05] text-charcoal md:text-[44px]"
            >
              Demi-fine jewelry, designed to live a long and loved life.
            </h2>
            <p
              id="brand-story-body"
              className="mt-6 max-w-lg font-sans text-[15px] leading-relaxed text-mocha"
            >
              Velmora began at a small bench in California with a simple
              idea — that the pieces you wear every day should feel as
              considered as the ones you save for moments. We work in 18K
              gold-plated brass and sterling silver, hand-finished in small
              batches, designed to be worn daily and kept for years.
            </p>
            <Link
              to="/about"
              className="btn-ghost mt-8"
            >
              Our Story
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
