import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'
import { imagePlaceholder } from '@/lib/media'
import { useStrkImages } from '@/lib/useStrkImages'

export default function StorySection() {
  const containerRef = useRef(null)

  useStrkImages(containerRef, [])

  return (
    <section id="story" ref={containerRef} className="bg-stone-100 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr,0.95fr] lg:px-12">
        <div className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-stone-200 shadow-[0_24px_60px_rgba(28,25,23,0.08)]">
          <img
            alt="Velmora brand story editorial image"
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id="velmora-story-hero-c9a82d"
            data-strk-img="[story-body] [story-title] [velmora-editorial-jewelry]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1000"
            src={imagePlaceholder}
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.36em] text-stone-500">Our Story</p>
          <h2 id="story-title" className="mt-4 font-[Cormorant_Garamond] text-5xl leading-none text-stone-950 sm:text-6xl">
            Jewelry that feels intimate, modern, and ready to become a ritual.
          </h2>
          <p id="story-body" className="mt-6 text-base leading-8 text-stone-700">
            Velmora was imagined for the in-between space where premium design meets real-life wearability. Our pieces are rooted in soft sculptural forms, warm finishes, and a price point that makes self-gifting feel easy.
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700">
            Every order arrives with elevated packaging, thoughtful details, and silhouettes that move effortlessly from workday minimalism to evening polish.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-stone-950 transition hover:text-amber-700"
          >
            Our Story <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
