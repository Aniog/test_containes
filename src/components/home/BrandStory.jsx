import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useImageLoader } from "@/hooks/useImageLoader";

export default function BrandStory() {
  const containerRef = useRef(null);
  useImageLoader(containerRef, []);

  return (
    <section ref={containerRef} id="about" className="bg-bone">
      <div className="mx-auto grid max-w-7.5xl grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[640px]">
          <img
            alt="Founder of Velmora at her workbench"
            data-strk-img-id="brand-story-img"
            data-strk-img="hands of a jewelry maker at a workbench, gold pieces, soft natural light, editorial documentary"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            loading="lazy"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-20 sm:px-12 sm:py-28 lg:px-20">
          <p className="font-sans text-[10px] uppercase tracking-wider-3 text-gold-deep">
            Our Story
          </p>
          <h2 className="mt-4 font-serif text-4xl text-espresso sm:text-5xl lg:text-6xl">
            <span className="italic font-light text-stone-dark">Heirlooms,</span>
            <br />
            quietly made.
          </h2>
          <p className="mt-6 max-w-prose font-sans text-base leading-relaxed text-stone-dark">
            Velmora began at a small workbench in Lisbon, where our founder set out to make
            gold jewelry that felt as good to wear as it did to keep. Each piece is finished
            by hand in a small atelier — never mass-produced, never rushed, never loud.
          </p>
          <p className="mt-4 max-w-prose font-sans text-base leading-relaxed text-stone-dark">
            We use 18K gold plating over a hypoallergenic base, and design for the everyday —
            the things you reach for without thinking, and pass down without trying.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <Link
              to="/#about"
              className="group inline-flex items-center gap-3 border-b border-espresso pb-1 font-sans text-[11px] uppercase tracking-wider-2 text-espresso transition-colors hover:border-gold-deep hover:text-gold-deep"
            >
              Our Story
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/#about"
              className="font-sans text-[11px] uppercase tracking-wider-2 text-stone transition-colors hover:text-espresso"
            >
              Sustainability
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
