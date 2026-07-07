import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useStockImages } from '@/hooks/useStockImages'

export default function BrandStorySection() {
  const containerRef = useStockImages([])

  return (
    <section id="about" className="section-shell bg-sand/55">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center" ref={containerRef}>
        <div className="overflow-hidden rounded-[2rem] bg-sand shadow-xl shadow-obsidian/10">
          <div
            className="aspect-[4/5] w-full bg-cover bg-center"
            role="img"
            aria-label="Velmora story"
            data-strk-bg-id="brand-story-image"
            data-strk-bg="[brand-story-cue] [brand-story-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="1100"
          />
          <p id="brand-story-cue" className="sr-only">
            close-up editorial still life of gold jewelry on warm fabric with premium packaging
          </p>
        </div>
        <div className="space-y-6 lg:pl-8">
          <p className="eyebrow">The Brand Story</p>
          <h2 id="brand-story-title" className="section-title max-w-xl">
            Thoughtful pieces, softly priced, designed to stay in rotation.
          </h2>
          <p className="section-copy">
            Velmora was imagined for women who want jewelry that feels elevated without feeling unreachable. Each piece is made to bring a warm finishing touch to everyday dressing, meaningful gifting, and the rituals in between.
          </p>
          <Link to="/shop" className="premium-button-secondary gap-2">
            Our Story
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
