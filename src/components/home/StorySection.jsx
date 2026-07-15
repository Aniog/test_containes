import { Link } from 'react-router-dom'
import { brandStory } from '@/data/store'

const StorySection = () => (
  <section className="bg-white py-16 sm:py-20 lg:py-24">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
      <div className="overflow-hidden rounded-[2rem] bg-stone-200 shadow-[0_20px_60px_rgba(28,25,23,0.08)]">
        <span className="sr-only" id="brand-story-image-caption">
          Warm editorial jewelry styling portrait with gold pieces and neutral tailoring.
        </span>
        <img
          alt="Velmora brand story"
          className="aspect-[4/5] w-full object-cover"
          data-strk-img-id={brandStory.imageId}
          data-strk-img="[brand-story-image-caption] [brand-story-title] [brand-story-body]"
          data-strk-img-ratio="4x3"
          data-strk-img-width="1000"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
      </div>

      <div className="max-w-xl">
        <p className="text-xs uppercase tracking-[0.34em] text-stone-500">
          {brandStory.eyebrow}
        </p>
        <h2
          className="mt-4 font-['Cormorant_Garamond'] text-4xl leading-tight text-stone-950 sm:text-5xl"
          id="brand-story-title"
        >
          {brandStory.title}
        </h2>
        <p className="mt-5 text-sm leading-8 text-stone-600 sm:text-base" id="brand-story-body">
          {brandStory.body}
        </p>
        <Link
          className="mt-8 inline-flex text-xs uppercase tracking-[0.3em] text-stone-900 transition duration-300 hover:text-stone-600"
          to="/about"
        >
          Our Story
        </Link>
      </div>
    </div>
  </section>
)

export default StorySection
