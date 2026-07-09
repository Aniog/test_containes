import { Link } from 'react-router-dom'
import { imagePlaceholder, storyBlock } from '@/data/storefront'

export default function StorySection() {
  return (
    <section id="story" className="grid items-center gap-8 rounded-[2rem] border border-velmora-sand/60 bg-velmora-cream p-5 shadow-velmora md:grid-cols-[1.1fr_0.9fr] md:p-8">
      <div className="overflow-hidden rounded-[1.6rem] bg-velmora-sand/30">
        <span id="story-image-scene" className="sr-only">
          {storyBlock.imageScene}
        </span>
        <img
          alt="Velmora brand story"
          className="aspect-[4/5] h-full w-full object-cover"
          data-strk-img-id="story-image-main"
          data-strk-img="[story-copy] [story-title] [story-image-scene]"
          data-strk-img-ratio="4x3"
          data-strk-img-width="1000"
          src={imagePlaceholder}
        />
      </div>
      <div className="space-y-6 px-2 md:px-4">
        <p className="velmora-kicker">Brand story</p>
        <h2 id="story-title" className="font-display text-4xl text-velmora-ink md:text-5xl">
          {storyBlock.title}
        </h2>
        <p id="story-copy" className="text-base leading-8 text-velmora-cocoa/80">
          {storyBlock.copy}
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center rounded-full border border-velmora-sand px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-velmora-ink transition hover:border-velmora-bronze hover:bg-velmora-bronze/10"
        >
          Our Story
        </Link>
      </div>
    </section>
  )
}
