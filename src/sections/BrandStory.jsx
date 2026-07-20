import { Link } from "react-router-dom";

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const BrandStory = () => (
  <section className="bg-[#fbfaf9] py-16 md:py-24">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
          <img
            alt="Velmora jewelry craftsmanship"
            src={PLACEHOLDER}
            data-strk-img-id="brand-story-img"
            data-strk-img="[story-title] [story-body] velmora fine jewelry craftsmanship"
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="md:py-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-700">
            Our Story
          </p>
          <h2
            id="story-title"
            className="mt-4 font-serif text-3xl font-light leading-tight text-stone-900 md:text-4xl lg:text-5xl"
          >
            Jewelry That Feels Like You
          </h2>
          <p
            id="story-body"
            className="mt-6 leading-relaxed text-stone-600"
          >
            Velmora was born from a simple belief: fine jewelry should feel
            personal, wearable, and within reach. Each piece is designed in our
            studio and finished in 18k gold plate — made to move with you from
            morning coffee to midnight toasts.
          </p>
          <p className="mt-4 leading-relaxed text-stone-600">
            We skip the markup, not the craft. Because the best pieces are the
            ones you never want to take off.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-block text-xs font-medium uppercase tracking-[0.18em] text-stone-900 underline-offset-4 hover:text-amber-700 hover:underline"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default BrandStory;
