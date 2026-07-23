import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const StorySection = () => {
  return (
    <section id="our-story" className="page-shell py-20 sm:py-24">
      <div className="grid gap-8 overflow-hidden rounded-[32px] border border-velmora-sand/70 bg-white/60 shadow-velmora lg:grid-cols-2">
        <div className="overflow-hidden bg-velmora-rose/50">
          <img
            alt="Velmora story portrait"
            className="aspect-[4/5] h-full w-full object-cover"
            data-strk-img-id="story-image-9a8b7c"
            data-strk-img="[story-body] [story-title]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1000"
          />
        </div>
        <div className="flex items-center px-6 py-10 sm:px-10 lg:px-12">
          <div className="max-w-xl">
            <p className="eyebrow-label mb-3">Our story</p>
            <h2 id="story-title" className="text-4xl leading-none text-velmora-ink sm:text-5xl">
              Jewelry that feels heirloom-inspired, yet made for now
            </h2>
            <p id="story-body" className="mt-6 text-base leading-8 text-velmora-mocha sm:text-lg">
              Velmora was created for women who want the polish of fine jewelry without waiting for a special occasion. Every piece is designed with warm light, clean lines, and gift-worthy presentation in mind, so opening the box feels just as good as wearing it.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-velmora-ink transition duration-300 hover:text-velmora-gold"
            >
              Our Story
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StorySection
