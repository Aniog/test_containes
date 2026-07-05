import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

function BrandStory() {
  return (
    <section id="story" className="bg-ivory py-16 md:py-24">
      <div className="section-shell grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-12">
        <div className="overflow-hidden rounded-[32px] border border-line bg-pearl shadow-card">
          <img
            alt="Velmora brand story"
            className="aspect-[4/5] h-full w-full object-cover"
            data-strk-img-id="brand-story-image-velmora"
            data-strk-img="[brand-story-copy] [brand-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1100"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>

        <div className="rounded-[32px] border border-line bg-pearl p-7 shadow-card md:p-10">
          <SectionHeading
            eyebrow="Our story"
            title="Refined essentials inspired by heirlooms, made for right now"
          />
          <p id="brand-story-copy" className="mt-5 text-base leading-8 text-truffle md:text-lg">
            Velmora was created for women who want jewelry to feel considered, luminous, and easy to wear often. We focus on demi-fine finishes, softly sculpted shapes, and gift-ready details that bring a sense of ceremony to everyday dressing.
          </p>
          <a
            href="#journal"
            className="mt-7 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-ink transition duration-300 hover:text-champagne-deep"
          >
            <span id="brand-story-title">Read Our Story</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
