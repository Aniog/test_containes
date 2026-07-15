import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-cream px-5 py-16 text-velmora-ink md:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div
          className="min-h-[420px] bg-velmora-parchment shadow-glow md:min-h-[620px]"
          data-strk-bg-id="brand-story-bg-ff34bd"
          data-strk-bg="[story-copy] [story-title]"
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="1000"
        />
        <div className="mx-auto max-w-xl lg:pl-10">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-brass">Our point of view</p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl font-semibold leading-tight text-velmora-ink md:text-7xl">
            Jewelry for the rituals you return to.
          </h2>
          <p id="story-copy" className="mt-7 text-base leading-8 text-velmora-ink/72">
            Velmora is designed in small, considered capsules: warm gold tones, refined silhouettes, and tactile details that feel personal from the first wear. Premium without pretense, made to be reached for often.
          </p>
          <Link to="/#story" className="mt-8 inline-flex border-b border-velmora-brass pb-1 text-xs font-bold uppercase tracking-[0.2em] text-velmora-brass transition hover:text-velmora-ink">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
