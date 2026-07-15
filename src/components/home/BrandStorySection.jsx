import { Link } from 'react-router-dom'
import StoreImage from '@/components/shared/StoreImage'

const BrandStorySection = () => {
  return (
    <section className="bg-stone-950 py-16 text-stone-50 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-stone-800 bg-stone-900 shadow-[0_22px_60px_rgba(0,0,0,0.24)]">
          <div className="aspect-[4/5] overflow-hidden">
            <StoreImage
              alt="Velmora story"
              imgId="velmora-story-image-d42kp1"
              query="[story-description] [story-title]"
              ratio="4x3"
              width="1000"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.32em] text-amber-200">Brand Story</p>
          <h2 id="story-title" className="mt-4 font-serif text-4xl leading-tight text-stone-50 md:text-5xl">
            Jewelry for the quiet ritual of getting ready
          </h2>
          <p id="story-description" className="mt-5 text-base leading-8 text-stone-300 md:text-lg">
            Velmora Fine Jewelry was imagined as a softer alternative to trend-led accessories: warm gold finishes, refined proportions, and pieces that feel special without feeling precious. Each design is created to move easily between self-purchase and gifting.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center rounded-full border border-amber-200/50 px-6 py-3 text-sm font-medium text-amber-100 transition-all duration-300 hover:border-amber-200 hover:bg-amber-200/10"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BrandStorySection
