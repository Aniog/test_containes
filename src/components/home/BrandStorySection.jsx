import { ArrowRight } from 'lucide-react'
import { IMAGE_PLACEHOLDER } from '@/lib/placeholders'

const BrandStorySection = () => {
  return (
    <section id="story" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="overflow-hidden rounded-[36px] bg-stone-100 shadow-[0_22px_60px_rgba(28,25,23,0.1)]">
          <img
            alt="Velmora brand story"
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id="brand-story-image-73bd"
            data-strk-img="[story-kicker] [story-title] [story-description]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src={IMAGE_PLACEHOLDER}
          />
        </div>

        <div className="flex flex-col justify-center rounded-[36px] border border-stone-200 bg-stone-50 p-8 md:p-12">
          <p id="story-kicker" className="text-xs font-medium uppercase tracking-[0.35em] text-amber-700">
            Velmora Fine Jewelry
          </p>
          <h2 id="story-title" className="mt-5 font-serif text-5xl leading-none text-stone-900 md:text-6xl">
            Jewelry that feels heirloom-inspired, never out of reach
          </h2>
          <p id="story-description" className="mt-6 text-base leading-8 text-stone-600">
            Velmora was created for women who want pieces with presence, warmth,
            and polish without saving them for special occasions. Our collections
            balance sculptural shapes, luminous plating, and gift-ready details so
            every purchase feels elevated from the very first wear.
          </p>
          <a
            href="#journal"
            className="mt-8 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-stone-900 transition duration-300 hover:text-amber-800"
          >
            Our Story
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default BrandStorySection
