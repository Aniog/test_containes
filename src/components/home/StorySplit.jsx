import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import StrkImageLoader from "@/components/ui/StrkImageLoader";

export default function StorySplit() {
  return (
    <section className="bg-ivory-100">
      <Container className="grid lg:grid-cols-2 gap-0 lg:gap-12 items-stretch">
        <StrkImageLoader className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[640px] overflow-hidden bg-ivory-200 order-1">
          <div
            className="absolute inset-0"
            data-strk-bg-id="story-image-7d4e2c"
            data-strk-bg="[story-paragraph] [story-title]"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="1100"
            aria-hidden="true"
          />
        </StrkImageLoader>

        <div className="flex items-center order-2 px-2 sm:px-6 lg:px-12 py-16 lg:py-24">
          <div className="max-w-md">
            <p className="eyebrow mb-5">Our Story</p>
            <h2
              id="story-title"
              className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] text-espresso font-light"
            >
              Designed in studio.<br />Made to be worn.
            </h2>
            <p
              id="story-paragraph"
              className="mt-6 text-base sm:text-[17px] leading-relaxed text-taupe font-light"
            >
              Velmora began with a single question: what if demi-fine jewelry felt
              like an heirloom from the first wear? Every piece is sketched,
              prototyped and finished by hand — gold-plated in 18K, hypoallergenic,
              and built to outlast the season.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-medium text-espresso border-b border-espresso/60 hover:border-espresso pb-1 transition-colors"
            >
              Read Our Story
              <ArrowRight size={12} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
