import { Link } from 'react-router-dom'
import { story } from '../../data/storefront.js'

export default function StorySection() {
  return (
    <section id="about" className="bg-[var(--velmora-cream)] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] bg-stone-100 shadow-velmora">
          <img
            alt="Velmora brand story"
            className="aspect-[4/5] h-full w-full object-cover"
            data-strk-img-id={story.imageId}
            data-strk-img="[story-body] [story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>

        <div className="space-y-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Our story</p>
          <h2 id="story-title" className="max-w-xl text-5xl leading-none text-[var(--velmora-ink)] md:text-6xl">
            {story.title}
          </h2>
          <p id="story-body" className="max-w-xl text-base leading-8 text-stone-600">
            {story.body}
          </p>
          <Link to="/shop" className="inline-flex text-xs uppercase tracking-[0.24em] text-[var(--velmora-gold)] transition hover:text-[var(--velmora-ink)]">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
