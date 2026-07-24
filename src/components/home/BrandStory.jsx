import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useImageLoader } from '@/hooks/useImageLoader'
import { Button } from '@/components/ui/Button'

export default function BrandStory() {
  const containerRef = useImageLoader()

  return (
    <section ref={containerRef} className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-background lg:aspect-square">
            <img
              data-strk-img="[story-title] [story-text]"
              data-strk-img-id="brand-story-img"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">
              Our Philosophy
            </p>
            <h2 id="story-title" className="font-serif text-3xl text-foreground sm:text-4xl lg:text-5xl">
              Designed for the Modern Muse
            </h2>
            <p id="story-text" className="mt-6 text-base leading-relaxed text-muted-foreground">
              Velmora was born from a simple belief: fine jewelry should feel effortless. Each piece is sculpted in 18k gold-plated brass and finished by hand, balancing timeless silhouettes with the quiet confidence of everyday wear. Whether gifted or kept, Velmora pieces are made to be treasured.
            </p>
            <div className="mt-8">
              <Button variant="outline" asChild className="group">
                <Link to="/about">
                  Our Story
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
