import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function BrandStorySection() {
  return (
    <section className="py-16 md:py-28 bg-velvet">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-velvet-secondary">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba420552259?auto=format&fit=crop&w=1200&q=85"
              alt="Velmora jewelry craftsmanship"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-8">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-accent mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream leading-tight">
              Designed for the Modern Heirloom
            </h2>
            <div className="mt-6 space-y-5 text-warm-gray text-sm md:text-base leading-relaxed">
              <p>
                Velmora was born from a simple belief: fine jewelry should feel attainable,
                wearable, and meaningful. We work with skilled artisans to create demi-fine
                pieces in 18K gold plate, using hypoallergenic materials you can wear every day.
              </p>
              <p>
                Each design balances classic silhouette with quiet modernity — pieces that
                complement your essentials and become signatures over time.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.16em] text-cream hover:text-accent transition-colors border-b border-current pb-0.5"
            >
              Read Our Story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
