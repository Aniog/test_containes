import { Link } from 'react-router-dom'
import { story } from '@/data/storeData'
import { getStrkImageUrl } from '@/lib/strk-image'

const StorySection = () => {
  const storyImageSrc = getStrkImageUrl('story-image-velmora-71c3d1')

  return (
    <section className="bg-stone-100/80 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-stone-200">
          <img
            alt="Velmora brand story"
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id="story-image-velmora-71c3d1"
            data-strk-img="[story-body] [story-title]"
            data-strk-img-ratio="3x4"
            data-strk-img-width="1000"
            src={storyImageSrc}
          />
        </div>
        <div className="max-w-xl space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-700">Our Story</p>
          <h2 id="story-title" className="font-serif text-4xl leading-tight text-stone-900 md:text-5xl">
            {story.title}
          </h2>
          <p id="story-body" className="text-base leading-8 text-stone-600 md:text-lg">
            {story.body}
          </p>
          <Link
            to="/about"
            className="inline-flex rounded-full border border-stone-400 px-5 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-50"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}

export default StorySection
