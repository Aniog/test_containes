import { Link } from 'react-router-dom'
import { story } from '@/data/products'

export default function BrandStorySection() {
  return (
    <section id="our-story" className="bg-velmora-ivory px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-14">
        <div className="overflow-hidden rounded-[2.25rem] border border-velmora-line bg-velmora-sand shadow-velmora-sm">
          <img
            alt="Velmora brand story"
            className="h-full min-h-[460px] w-full object-cover"
            data-strk-img-id={story.slotId}
            data-strk-img="[brand-story-desc] [brand-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>

        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-velmora-bronze">
            Our story
          </p>
          <h2 id="brand-story-title" className="mt-4 font-serif text-5xl leading-none text-velmora-espresso">
            {story.title}
          </h2>
          <p id="brand-story-desc" className="mt-6 text-sm leading-8 text-velmora-ink/72 md:text-base">
            {story.description}
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center rounded-full border border-velmora-line px-6 py-3 text-sm font-medium text-velmora-espresso transition hover:border-velmora-bronze hover:text-velmora-bronze"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
