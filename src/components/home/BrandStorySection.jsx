import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { story } from '@/data/store.js'

export default function BrandStorySection() {
  return (
    <section className="bg-stone-100 py-20 text-stone-900 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-200 shadow-xl shadow-stone-950/10">
          <p id="story-image-description" className="hidden">{story.imageDescription}</p>
          <img alt={story.heading} className="aspect-[4/5] h-full w-full object-cover" data-strk-img-id="story-image" data-strk-img="[story-image-description] [story-heading] [story-eyebrow]" data-strk-img-ratio="4x3" data-strk-img-width="1100" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
        </div>
        <div className="space-y-6 lg:pl-8">
          <p id="story-eyebrow" className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">{story.eyebrow}</p>
          <div className="space-y-5">
            <h2 id="story-heading" className="font-display text-5xl leading-tight text-stone-950 sm:text-6xl">
              {story.heading}
            </h2>
            <p className="max-w-xl text-base leading-8 text-stone-600 sm:text-lg">{story.body}</p>
          </div>
          <Link to="/about" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.24em] text-stone-900 transition hover:text-amber-700">
            {story.linkLabel}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
