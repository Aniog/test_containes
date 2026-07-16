import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const StorySection = () => {
  return (
    <section id="story" className="bg-velmora-ink py-16 text-velmora-ivory lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[1.08fr,0.92fr] lg:px-8 lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-velmora">
          <img
            alt="Velmora artisan story"
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id="story-image-velmora-d5e6f7"
            data-strk-img="[story-body] [story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-velmora-gold">Our story</p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl leading-none text-velmora-ivory md:text-6xl">
            Jewelry that slips into daily life with ease
          </h2>
          <p id="story-body" className="mt-6 max-w-xl text-base leading-8 text-velmora-mist">
            Velmora was created for women who want their jewelry to feel intentional, warm, and beautifully finished without drifting into occasion-only territory. Every piece is designed to layer softly, gift well, and earn a place in the everyday.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-velmora-ivory transition-colors duration-300 hover:text-velmora-gold"
          >
            Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default StorySection
