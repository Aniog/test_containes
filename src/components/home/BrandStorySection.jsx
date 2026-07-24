import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const BrandStorySection = () => {
  return (
    <section id="story" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-velmora-line bg-velmora-pearl/70 p-5 shadow-velmora lg:grid-cols-[1.15fr_0.85fr] lg:p-8">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-velmora-cloud">
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
            alt="Velmora atelier story"
            data-strk-img-id="story-image-velmora-3h7k2m"
            data-strk-img="[story-description] [story-title] [story-eyebrow]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-2 py-4 lg:px-6">
          <p id="story-eyebrow" className="text-xs font-medium uppercase tracking-[0.32em] text-velmora-mist">Our world</p>
          <h2 id="story-title" className="mt-5 font-display text-5xl leading-none text-velmora-ink sm:text-6xl">
            Thoughtfully made for the moments you keep returning to.
          </h2>
          <p id="story-description" className="mt-6 text-sm leading-8 text-velmora-mist sm:text-base">
            Velmora was created for women who want everyday jewelry to feel elevated yet approachable — pieces that gift beautifully, layer effortlessly, and stay in constant rotation.
          </p>
          <Link
            to="/#story"
            className="mt-8 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-velmora-ink transition hover:text-velmora-bronze"
          >
            Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BrandStorySection
