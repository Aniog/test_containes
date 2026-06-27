import { Link } from "react-router-dom";

export default function BrandStory() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6 relative">
            <div
              className="relative aspect-[4/5] overflow-hidden bg-cream"
              data-strk-bg-id="velmora-story-img-aa11bb"
              data-strk-bg="[story-headline] artisan jeweler workshop gold tools hands"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="1100"
            />
            <div className="hidden md:block absolute -bottom-6 -right-6 w-40 h-40 bg-gold/15 -z-10" />
          </div>

          <div className="md:col-span-6 md:pl-6">
            <p className="text-[11px] tracking-[0.35em] uppercase text-gold mb-5">
              Our Story
            </p>
            <h2
              id="story-headline"
              className="font-serif font-light text-4xl md:text-5xl leading-[1.05] tracking-tight"
            >
              Slow craft, warm gold,<br />
              <em className="italic">one piece at a time.</em>
            </h2>
            <div className="mt-7 space-y-5 text-ink/75 leading-relaxed max-w-lg">
              <p>
                Velmora began at a small jeweler's bench in Lisbon, where our
                founder spent a year studying how gold should be set,
                soldered and softened by hand.
              </p>
              <p>
                Each piece is plated with 18K gold over recycled brass and
                polished by artisans in small batches. We design for the
                everyday — but make for the long run.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-10 inline-block text-[12px] tracking-[0.3em] uppercase text-ink hover:text-gold border-b border-ink/30 hover:border-gold pb-1.5 transition-all"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
