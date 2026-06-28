import { Link } from "react-router-dom";
import Button from "@/components/Button";
import { IMG_PLACEHOLDER } from "@/lib/placeholder";

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="aspect-[4/5] overflow-hidden bg-sand order-1">
            <img
              alt="Velmora atelier"
              data-strk-img-id="velmora-story-image-w8r3"
              data-strk-img="[story-subtitle] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src={IMG_PLACEHOLDER}
              className="w-full h-full object-cover bg-sand"
            />
          </div>

          <div className="order-2 md:pl-10">
            <p className="text-[11px] uppercase tracking-[0.32em] text-champagne mb-4">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif font-light text-4xl md:text-5xl text-ink leading-[1.1] tracking-tight"
            >
              A quiet luxury,
              <br />
              <span className="italic text-champagne">made for the every day.</span>
            </h2>
            <div
              id="story-subtitle"
              className="mt-7 space-y-4 text-base md:text-lg text-taupe leading-relaxed"
            >
              <p>
                Velmora was founded in 2019 by a small team of jewelers in Lisbon, with
                a single question: why should fine jewelry be saved for special
                occasions?
              </p>
              <p>
                Every piece is designed in-house and crafted in small batches from
                recycled brass with a generous 18K gold plating. We obsess over the
                weight, the finish, the way the clasp closes. The result is jewelry
                that lives with you — not in a drawer.
              </p>
            </div>
            <div className="mt-9">
              <Button as={Link} to="/about" variant="outline" size="md">
                Read Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
