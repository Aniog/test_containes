import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getStrkImageUrl } from '@/lib/strkImages'

const storyImageId = 'brand-story-velmora-f913'

const BrandStory = () => {
  return (
    <section className="grid gap-10 rounded-[2.5rem] border border-stone-200/80 bg-white/70 p-5 shadow-card backdrop-blur-sm lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
      <div className="overflow-hidden rounded-[2rem] bg-brand-surface/40">
        <img
          src={getStrkImageUrl(storyImageId)}
          alt="Velmora atelier story"
          className="aspect-[4/5] w-full object-cover"
          data-strk-img-id="brand-story-velmora-f913"
          data-strk-img="[brand-story-copy] [brand-story-title]"
          data-strk-img-ratio="4x3"
          data-strk-img-width="1200"
        />
      </div>
      <div className="flex items-center">
        <div className="max-w-xl space-y-6">
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-brand-gold">
            Velmora World
          </span>
          <h2 id="brand-story-title" className="font-serif text-5xl leading-none text-brand-text sm:text-6xl">
            Jewelry with a softer kind of statement
          </h2>
          <p id="brand-story-copy" className="text-base leading-8 text-stone-600">
            We design demi-fine pieces to feel elevated, wearable, and emotionally giftable. Every Velmora style is shaped around warm metallic finishes, lightweight comfort, and silhouettes that feel as polished at brunch as they do at a wedding weekend.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.24em] text-brand-text transition hover:text-brand-gold"
          >
            Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
