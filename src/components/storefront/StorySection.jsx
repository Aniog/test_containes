import { ArrowUpRight } from 'lucide-react'
import { imagePlaceholder, story, brandMetrics } from '@/data/storefront'

export default function StorySection() {
  return (
    <section id="story" className="section-shell py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] bg-ink/10">
          <img
            src={imagePlaceholder}
            alt="Velmora editorial jewelry portrait"
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id={`${story.imageId}-split`}
            data-strk-img={`[${story.bodyId}] [${story.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
          />
        </div>

        <div>
          <p className="eyebrow">The brand story</p>
          <h2 id={story.titleId} className="mt-4 font-serif text-4xl leading-none text-ink sm:text-5xl lg:text-6xl">
            {story.title}
          </h2>
          <p id={story.bodyId} className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {story.body}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {brandMetrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-line/60 bg-surface px-5 py-6">
                <p className="text-xs uppercase tracking-button text-muted">{metric.label}</p>
                <p className="mt-3 font-serif text-3xl text-ink">{metric.value}</p>
              </div>
            ))}
          </div>

          <a href="/#story" className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-button text-ink transition hover:text-gold">
            Our Story
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
