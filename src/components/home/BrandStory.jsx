import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                data-strk-img-id="brand-story-img"
                data-strk-img="[brand-story-title] [brand-story-body]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora jewelry making"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="md:py-8">
              <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
                Our Atelier
              </p>
              <h2
                id="brand-story-title"
                className="font-serif text-4xl md:text-5xl font-light text-primary leading-tight mb-6"
              >
                Designed for the Modern Heirloom
              </h2>
              <p
                id="brand-story-body"
                className="text-base md:text-lg leading-relaxed text-secondary mb-8"
              >
                Velmora was born from a belief that fine-looking jewelry should
                feel attainable. Each piece is cast in small batches, plated in
                18k gold, and finished by hand — so you can wear it every day and
                keep it for years.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.15em] text-primary hover:text-accent transition-colors group"
              >
                Our Story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}
