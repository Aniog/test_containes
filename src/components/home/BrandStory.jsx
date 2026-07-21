import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden bg-taupe/30 md:aspect-auto md:min-h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba420552259?auto=format&fit=crop&w=1200&q=80"
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20">
            <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Our Story
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-charcoal md:text-4xl lg:text-5xl">
              Made for the modern romantic
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-warmgray">
              Velmora was born from a simple belief: fine-feeling jewelry should be wearable,
              attainable, and made to last. Each piece is designed in-house and finished in 18k
              gold plating, balancing delicate detail with the kind of weight you notice.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-warmgray">
              We create for quiet celebrations, spontaneous self-gifts, and the small rituals
              that make an ordinary day feel special.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-wide text-charcoal transition-colors hover:text-accent"
            >
              Read Our Story
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
