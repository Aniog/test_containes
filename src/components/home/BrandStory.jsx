import { Link } from 'react-router-dom'
import SectionHeading from '@/components/ui/SectionHeading.jsx'

export default function BrandStory() {
  return (
    <section className="bg-velmora-porcelain px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
        <div className="overflow-hidden rounded-[2.5rem] shadow-velmora">
          <img
            alt="Velmora brand story"
            className="h-full min-h-[30rem] w-full object-cover"
            data-strk-img="[story-body] [story-title]"
            data-strk-img-id="velmora-story-image-41ca2d"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Our world"
            title="Jewelry designed to feel intimate, not excessive"
            description="Velmora was imagined as a direct-to-consumer house for women who want pieces that feel elevated, wearable, and gift-worthy without entering fine-jewelry territory."
          />
          <div id="story-body" className="space-y-5 text-base leading-8 text-velmora-taupe">
            <p>
              Every silhouette is refined to sit close to the skin, flatter warm metal tones, and move naturally between day and evening. The result is jewelry that feels polished from the first styling moment.
            </p>
            <p>
              We focus on demi-fine finishes, a considered palette, and unboxing details that make each order feel quietly special.
            </p>
          </div>
          <Link
            className="inline-flex border-b border-velmora-gold pb-2 text-xs uppercase tracking-eyebrow text-velmora-gold"
            id="story-title"
            to="/about"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
