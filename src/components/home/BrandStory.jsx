import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const BrandStory = () => {
  return (
    <section
      id="about"
      className="grid gap-10 overflow-hidden rounded-[2rem] bg-white/70 p-6 shadow-card md:grid-cols-[1.05fr_0.95fr] md:p-8 lg:p-10"
    >
      <div className="overflow-hidden rounded-[1.75rem] bg-velmora-cacao">
        <img
          alt="Velmora atelier mood"
          className="aspect-[4/5] w-full object-cover"
          data-strk-img-id="brand-story-image-b71d5f"
          data-strk-img="[brand-story-copy] [brand-story-title]"
          data-strk-img-ratio="3x4"
          data-strk-img-width="1000"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
      </div>
      <div className="flex flex-col justify-center space-y-6 py-2 md:px-4">
        <p className="text-xs uppercase tracking-[0.32em] text-velmora-mist">
          Our World
        </p>
        <div className="space-y-5">
          <h2 id="brand-story-title" className="font-display text-5xl leading-none text-velmora-ink md:text-6xl">
            Jewelry designed to feel intimate, never excessive
          </h2>
          <p id="brand-story-copy" className="text-base leading-8 text-velmora-rose">
            Velmora was created for women who want pieces that slip effortlessly into daily life yet still feel meaningful enough to gift. We focus on warm finishes, comfortable wear, and elegant silhouettes that stay beautiful long after the moment they were chosen.
          </p>
        </div>
        <Link
          to="/shop"
          className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.24em] text-velmora-ink transition hover:text-velmora-bronze"
        >
          Our Story
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

export default BrandStory
