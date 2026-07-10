import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { brandStory, getStrkImageSrc } from '@/data/storefront'
import useStrkImages from '@/hooks/useStrkImages.jsx'

function AboutPage() {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef} className="bg-canvas pt-28 sm:pt-32">
      <section className="page-shell grid gap-12 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-16">
        <div className="space-y-5">
          <p className="eyebrow">About Velmora</p>
          <h1 className="font-display text-5xl leading-none text-ink sm:text-6xl">
            Jewelry made for everyday intimacy.
          </h1>
          <p className="text-base leading-8 text-muted">
            {brandStory.description}
          </p>
          <p className="text-base leading-8 text-muted">
            We believe premium feeling jewelry should be accessible, personal, and easy to live in. Every piece is designed to layer into the rhythm of your day and arrive beautifully enough to gift without a second thought.
          </p>
          <Link className="accent-link" to="/shop">
            Explore the collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="overflow-hidden rounded-[2rem] bg-shadow shadow-soft">
          <img
            alt="Velmora founder imagery"
            className="aspect-[4/5] h-full w-full object-cover"
            data-strk-img="[about-copy] [about-title] jewelry founder portrait"
            data-strk-img-id="about-hero-91f"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src={getStrkImageSrc('about-hero-91f')}
          />
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="page-shell grid gap-6 md:grid-cols-3">
          {[
            ['Quiet luxury', 'Warm metals, soft polish, and refined proportions.'],
            ['Gift-ready', 'Every order arrives packaged to delight from the first touch.'],
            ['Made to last', 'Thoughtful plating, hypoallergenic finishes, and easy care.'],
          ].map(([title, copy]) => (
            <article key={title} className="rounded-[1.75rem] border border-border bg-cream p-7 shadow-card">
              <h2 className="font-display text-3xl text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="hidden">
        <h2 id="about-title">About Velmora</h2>
        <p id="about-copy">{brandStory.description}</p>
      </div>
    </div>
  )
}

export default AboutPage
