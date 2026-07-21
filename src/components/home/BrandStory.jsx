import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'

const BrandStory = () => {
  return (
    <section id="story" className="bg-mist py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div className="overflow-hidden rounded-[2rem] bg-noir shadow-card">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora Fine Jewelry story"
            data-strk-img-id="brand-story-image-91de"
            data-strk-img="[story-copy] [story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            className="aspect-[4/5] h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center">
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="Our philosophy"
              title="A softer kind of statement"
              description="Velmora pieces are designed to feel intimate: luminous enough to notice, refined enough to wear every day."
            />
            <p id="story-title" className="sr-only">
              Velmora Fine Jewelry story image
            </p>
            <p id="story-copy" className="mt-6 text-base leading-8 text-taupe">
              Born from the idea that fine-feeling jewelry should be accessible, Velmora pairs editorial warmth with enduring wearability. Each piece is styled for the quiet rituals that matter most: the getting-ready moment, the thoughtful gift, the finishing touch before an evening out.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center rounded-full border border-noir/10 px-6 py-3 text-sm uppercase tracking-brand text-noir transition hover:border-gold hover:bg-white"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
