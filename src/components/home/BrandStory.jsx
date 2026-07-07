import { Link } from "react-router-dom";

export default function BrandStory() {
  return (
    <section id="story" className="py-16 sm:py-24 bg-velmora-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] bg-velmora-beige overflow-hidden">
            <img
              data-strk-img-id="story-img"
              data-strk-img="[story-title] [story-body]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora story"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-velmora-accent font-medium">
              Our Philosophy
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl sm:text-4xl leading-snug"
            >
              Jewelry Should Feel Like a Secret Between You and the Mirror
            </h2>
            <p
              id="story-body"
              className="text-velmora-muted leading-relaxed text-sm sm:text-base"
            >
              Velmora was born from a simple belief: fine jewelry does not need a
              fine price. We design in small batches, source responsibly, and
              obsess over details — so every piece feels like a quiet luxury you
              reach for again and again.
            </p>
            <Link
              to="/"
              className="inline-block text-xs uppercase tracking-[0.14em] font-medium border-b border-velmora-text pb-1 hover:text-velmora-accent hover:border-velmora-accent transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
