import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useImageLoader } from '@/hooks/useImageLoader.jsx'

function BrandStorySection() {
  const containerRef = useRef(null)
  useImageLoader(containerRef, [])

  return (
    <section className="velmora-container py-16 md:py-24" ref={containerRef}>
      <div className="grid items-center gap-10 rounded-[2rem] bg-velmora-mist/45 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
        <div className="overflow-hidden rounded-[2rem] bg-velmora-ink">
          <img
            alt="Velmora story"
            className="h-full min-h-[420px] w-full object-cover"
            data-strk-img-id="velmora-story-img-2f9k"
            data-strk-img="[story-description] [story-title]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1100"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>

        <div className="max-w-xl">
          <p className="velmora-eyebrow">About Velmora</p>
          <h2 id="story-title" className="mt-4 font-display text-5xl text-velmora-ink sm:text-6xl">
            Jewelry with the softness of a ritual
          </h2>
          <p id="story-description" className="mt-6 text-base leading-8 text-velmora-truffle">
            Velmora was created for women who want the richness of gold, the ease of everyday wear, and the considered feel of a true keepsake. Each piece balances warmth, polish, and a premium finish at an accessible price point.
          </p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-velmora-ink transition hover:text-velmora-gold">
            Our Story
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BrandStorySection
