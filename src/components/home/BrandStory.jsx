import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="bg-amber-50 py-16 text-stone-950 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:items-center md:px-8">
        <div className="relative aspect-[4/5] overflow-hidden bg-amber-200 shadow-2xl">
          <img
            data-strk-img-id="brand-story-studio-719e2b"
            data-strk-img="[brand-story-copy] [brand-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora jewelry studio"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="md:pl-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            Our philosophy
          </p>
          <h2 id="brand-story-title" className="mt-4 font-serif text-5xl leading-tight text-stone-950 md:text-7xl">
            Jewelry for the beauty of repetition.
          </h2>
          <p id="brand-story-copy" className="mt-6 text-base leading-8 text-stone-700 md:text-lg">
            Velmora creates demi-fine pieces that feel intimate from the first wear: warm gold finishes, skin-kind materials, and silhouettes made to move from morning light to dinner plans.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex border-b border-amber-700 pb-2 text-xs font-bold uppercase tracking-[0.28em] text-stone-950 transition hover:text-amber-700"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
