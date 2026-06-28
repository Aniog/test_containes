import { Link } from "react-router-dom";

export default function BrandStory() {
  return (
    <section className="bg-velmora-ivory">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:grid-cols-2 md:gap-16 md:px-10 md:py-28 lg:gap-24 lg:px-16 lg:py-36">
        {/* Image */}
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-velmora-bone">
            <img
              alt="Velmora atelier — hands setting a stone"
              data-strk-img-id="story-atelier-3f9c2a"
              data-strk-img="[story-blurb] [story-title] atelier jewelry maker hands setting stone warm light editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width={900}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Inset accent line */}
          <span className="absolute -bottom-3 -right-3 hidden h-32 w-32 border border-velmora-gold md:block" />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <p className="text-[11px] uppercase tracking-[0.32em] text-velmora-taupe">
            Our Story
          </p>
          <h2
            id="story-title"
            className="mt-4 font-serif text-4xl font-light leading-tight text-velmora-ink md:text-5xl lg:text-[56px]"
          >
            Heirlooms for a new <em className="italic text-velmora-gold-deep">generation</em>.
          </h2>
          <p
            id="story-blurb"
            className="mt-6 text-[15px] leading-relaxed text-velmora-charcoal/85 md:text-[16px]"
          >
            Velmora was born from a simple idea — that fine-feeling jewelry should be a part of everyday life, not saved for a single occasion. We work in small batches with recycled metals, ethically sourced stones, and the kind of detail you only notice when you wear a piece for years.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-velmora-charcoal/75 md:text-[16px]">
            Designed in New York, made in our atelier in Florence. Built to be passed down.
          </p>
          <Link
            to="/about"
            className="mt-9 inline-block self-start border border-velmora-ink px-7 py-3.5 text-[11px] uppercase tracking-[0.24em] text-velmora-ink transition-colors duration-300 hover:bg-velmora-ink hover:text-velmora-cream"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
