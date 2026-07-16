import { Link } from 'react-router-dom'

export default function StorySection() {
  return (
    <section id="story" className="bg-velmora-ivory px-4 py-20 text-velmora-espresso sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative overflow-hidden rounded-t-full rounded-b-3xl bg-velmora-linen shadow-soft">
          <div
            className="aspect-[4/5] bg-cover bg-center"
            data-strk-bg-id="brand-story-workbench-a18b93"
            data-strk-bg="[story-copy] [story-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="900"
          />
        </div>
        <div className="mx-auto max-w-xl lg:mx-0">
          <p className="mb-4 text-xs font-semibold uppercase tracking-refined text-velmora-gold">Our approach</p>
          <h2 id="story-title" className="font-display text-5xl font-medium leading-tight text-velmora-espresso md:text-6xl">Jewelry for the rituals you keep.</h2>
          <p id="story-copy" className="mt-6 text-lg leading-8 text-velmora-taupe">
            Velmora was created around a simple belief: gold jewelry should feel considered, enduring, and attainable. We design demi-fine pieces with warm plating, skin-friendly finishes, and silhouettes that move easily from weekday coffee to candlelit dinners.
          </p>
          <Link to="/shop" className="mt-8 inline-flex rounded-full border border-velmora-gold px-7 py-3 text-xs font-bold uppercase tracking-refined text-velmora-espresso transition hover:bg-velmora-gold">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
