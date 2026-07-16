import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { IMAGE_PLACEHOLDER } from '@/data/site'

export default function BrandStorySection() {
  return (
    <section id="story" className="section-shell py-20 sm:py-24">
      <div className="grid items-center gap-10 rounded-[2rem] border border-champagne bg-surface p-6 shadow-soft sm:p-8 lg:grid-cols-2 lg:p-12">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={IMAGE_PLACEHOLDER}
            alt="Velmora brand story"
            className="aspect-editorial h-full w-full object-cover"
            data-strk-img-id="brand-story-img-a1"
            data-strk-img="[story-copy] [story-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
          />
        </div>
        <div className="space-y-6">
          <span className="eyebrow">Brand story</span>
          <h2 id="story-title" className="font-serif text-4xl leading-none text-espresso sm:text-5xl">
            Jewelry with the ease of everyday wear and the feeling of a keepsake
          </h2>
          <p id="story-copy" className="text-base leading-8 text-mocha">
            Velmora Fine Jewelry was created for women who want elevated pieces they can actually live in. We design around warm gold finishes, thoughtful details, and premium presentation so each piece feels indulgent without becoming unreachable.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-espresso transition duration-300 hover:text-gold"
          >
            Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
