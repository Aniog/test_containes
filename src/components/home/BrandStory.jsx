import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export function BrandStory() {
  return (
    <section className="bg-velmora-sand">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2">
          <div className="aspect-[4/5] bg-velmora-stone lg:aspect-auto lg:min-h-[600px]">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-20">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-accent">Our Story</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.15] text-velmora-charcoal sm:text-5xl">
              Jewelry made to live in.
            </h2>
            <p className="mt-6 leading-relaxed text-velmora-charcoal/80">
              Velmora was founded on a simple belief: fine jewelry should feel attainable, and everyday jewelry
              should feel extraordinary. Each piece is designed in small batches using responsibly sourced
              materials and finished with thick 18K gold plating for a warm, lasting glow.
            </p>
            <p className="mt-4 leading-relaxed text-velmora-charcoal/80">
              Whether you are marking a milestone or simply treating yourself, our pieces are crafted to become
              part of your story.
            </p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-velmora-accent hover:text-velmora-charcoal"
            >
              Read Our Story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
