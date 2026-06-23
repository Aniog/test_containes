import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const BrandStorySection = () => {
  return (
    <section id="story" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[2.5rem] border border-hairline-dark bg-base-muted lg:grid-cols-[1.05fr_0.95fr]">
        <div
          className="min-h-[380px] lg:min-h-full"
          data-strk-bg-id="story-bg-velmora-1cc28d"
          data-strk-bg="[story-copy] [story-title]"
          data-strk-bg-ratio="4x3"
          data-strk-bg-width="1200"
        />
        <div className="flex items-center px-6 py-10 sm:px-10 lg:px-14 lg:py-16">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">Our Story</p>
            <h2 id="story-title" className="text-balance text-4xl text-foreground-strong sm:text-5xl">
              Designed with warmth, finished with intention
            </h2>
            <p id="story-copy" className="max-w-xl text-sm leading-7 text-muted sm:text-base">
              Velmora was imagined for women who want jewelry that feels refined without feeling unreachable. Every piece is designed to slip effortlessly into daily life while still carrying the quiet pleasure of something beautifully made.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-accent transition hover:text-accent-soft"
            >
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStorySection
