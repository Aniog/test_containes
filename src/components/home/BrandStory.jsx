import { Link } from 'react-router-dom'
import { StrkImg } from '@/components/Image'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-bg">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="aspect-[4/5] md:aspect-square overflow-hidden bg-velmora-bg-alt">
            <StrkImg
              id="brand-story-img"
              query="gold jewelry making hands artisan workshop warm light editorial"
              ratio="1x1"
              width={900}
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:py-8">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-ink-muted mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-velmora-ink leading-[1.1] mb-6">
              Designed for the Women Who Wear Us
            </h2>
            <p className="font-sans text-velmora-ink-muted leading-relaxed mb-4">
              Velmora was born from a simple belief: fine jewelry should feel
              attainable, not intimidating. Each piece is designed in-house and
              finished in 18k gold plate, balancing timeless silhouettes with
              the details that make you look twice.
            </p>
            <p className="font-sans text-velmora-ink-muted leading-relaxed mb-8">
              We create for quiet moments of confidence — the morning coffee,
              the evening out, the gift that says exactly what you mean.
            </p>
            <Link
              to="/about"
              className="inline-block font-sans text-xs uppercase tracking-[0.18em] text-velmora-ink border-b border-velmora-ink pb-1 hover:text-velmora-accent hover:border-velmora-accent transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
