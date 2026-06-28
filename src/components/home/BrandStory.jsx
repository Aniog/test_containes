import { Link } from "react-router-dom";

export default function BrandStory() {
  return (
    <section className="bg-[#EFE7DA] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#E2D4BE]">
          <img
            alt="Velmora atelier"
            data-strk-img-id="velmora-brand-story-img-7711"
            data-strk-img="[story-title] [story-blurb] jeweler workshop hand gold ring craft warm light"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="md:pl-6 lg:pl-12">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#B8924A] mb-5">
            Our Story
          </p>
          <h2
            id="story-title"
            className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-[#1A1410] tracking-tight leading-[1.1]"
          >
            Heirlooms,
            <br />
            <em className="italic text-[#8E6E33]">made today.</em>
          </h2>
          <div className="mt-8 space-y-5 text-[#3D332A] leading-relaxed max-w-lg">
            <p id="story-blurb">
              Velmora began in a small studio in Lisbon — two friends, one bench,
              and a shared belief that fine jewelry should be lived in, not locked
              away.
            </p>
            <p>
              We make pieces in small batches, plated in 18K gold over recycled
              brass and sterling silver. Every stone is hand-set. Every closure is
              tested. Every order leaves our atelier wrapped in linen.
            </p>
          </div>

          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[#1A1410] hover:text-[#B8924A] transition-colors"
          >
            Read Our Story
            <span aria-hidden className="w-10 h-px bg-current" />
          </Link>
        </div>
      </div>
    </section>
  );
}
