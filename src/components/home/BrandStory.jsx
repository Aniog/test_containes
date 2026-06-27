import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="bg-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]">
            <img
              src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3Crect fill='%23EDE8E0' width='3' height='4'/%3E%3Ccircle cx='1.5' cy='2' r='0.8' fill='%23B8935F' opacity='0.3'/%3E%3Ccircle cx='1.2' cy='1.6' r='0.4' fill='%23C9A876' opacity='0.2'/%3E%3Ccircle cx='1.8' cy='2.3' r='0.3' fill='%23B8935F' opacity='0.25'/%3E%3C/svg%3E`}
              alt="Velmora craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="py-4 md:py-0">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-velmora-gold">
              Our Story
            </p>
            <h2 className="font-serif text-3xl font-light leading-snug tracking-wide text-velmora-espresso md:text-4xl lg:text-[2.75rem]">
              Designed with intention,
              <br />
              <span className="font-medium italic">worn with confidence</span>
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-velmora-warm-gray md:text-base">
              <p>
                Velmora was born from a belief that fine jewelry should not be reserved for special
                occasions alone. Every piece in our collection is designed to elevate the everyday —
                to make you feel polished, powerful, and unapologetically yourself.
              </p>
              <p>
                We work with master artisans who specialize in 18K gold plating and hypoallergenic
                materials, ensuring each design is as enduring as it is beautiful. From sketch to
                finishing, our process honors the tradition of fine jewelry while embracing modern
                wearability.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-velmora-espresso transition-colors hover:text-velmora-gold"
            >
              Read Our Story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
