import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const StorySection = () => {
  return (
    <section id="story" className="px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-sand/50 shadow-soft">
          <div
            className="absolute inset-0"
            data-strk-bg-id="velmora-story-bg-z33m51"
            data-strk-bg="[story-copy] [story-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="1200"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent" />
        </div>

        <div className="rounded-[2rem] border border-sand/50 bg-pearl p-8 shadow-card md:p-12">
          <p className="text-xs uppercase tracking-brand text-taupe">Our Story</p>
          <h2 id="story-title" className="mt-4 font-display text-5xl leading-none text-obsidian md:text-6xl">
            Modern keepsakes with a warm, collected spirit.
          </h2>
          <p id="story-copy" className="mt-6 text-sm leading-8 text-truffle md:text-base">
            Velmora Fine Jewelry was imagined for women who want heirloom energy without the heirloom price. Each piece is designed to feel thoughtful, giftable, and enduring — whether worn on a quiet workday or saved for an evening out.
          </p>
          <p className="mt-5 text-sm leading-8 text-truffle md:text-base">
            Our silhouettes take cues from vintage jewelry boxes, candlelit dinners, and the kind of personal style that never chases a trend. The result is premium demi-fine jewelry made to be part of your daily ritual.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-obsidian transition duration-300 hover:text-champagne"
          >
            Our Story
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default StorySection
