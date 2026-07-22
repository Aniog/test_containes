import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";

export default function BrandStory() {
  const containerRef = useRef(null);

  return (
    <section
      aria-labelledby="story-title"
      className="bg-cream py-20 md:py-32"
    >
      <div
        ref={containerRef}
        className="container-x grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center"
      >
        <div className="md:col-span-6 order-1 md:order-1">
          <div className="relative aspect-[4/5] overflow-hidden bg-blush">
            <StrkImage
              imgId="brand-story-img-3b1e8a"
              query="[story-subtitle] [story-title] founder of a fine jewelry brand working with gold pieces in her sunlit studio warm editorial"
              ratio="4x5"
              width={900}
              alt="The Velmora studio"

            />
          </div>
        </div>

        <div className="md:col-span-6 order-2 md:order-2 max-w-xl">
          <p className="eyebrow mb-6">Our Story</p>
          <h2
            id="story-title"
            className="font-serif text-h2 md:text-[52px] leading-[1.05] text-ink"
          >
            Made slowly,{" "}
            <em className="italic font-normal text-champagne-deep">
              worn often
            </em>
            .
          </h2>
          <p
            id="story-subtitle"
            className="mt-6 text-lead text-espresso"
          >
            Velmora began at a kitchen table in Brooklyn — a single pair of
            hand-formed gold cuffs made for a friend, and a quiet realization
            that fine jewelry had become untouchable.
          </p>
          <p className="mt-4 text-body text-espresso/90">
            We work with a small atelier in Istanbul, plating each piece in a
            heavy 18K gold over a hypoallergenic base. Every design is
            prototyped, worn, and revised before it ever reaches a shelf.
            The result is demi-fine jewelry that looks like a keepsake — and
            feels like a second skin.
          </p>
          <div className="mt-10">
            <Link
              to="/about"
              className="btn-ghost"
            >
              Read Our Story
              <ArrowRight className="w-3.5 h-3.5 ml-3" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
