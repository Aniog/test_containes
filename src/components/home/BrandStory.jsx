import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import StrkImage from "@/components/StrkImage"

export default function BrandStory() {
  return (
    <section className="py-20 md:py-32">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6 order-1 md:order-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface">
              <div
                data-strk-bg-id="brand-story-img"
                data-strk-bg="[brand-story-body] [brand-story-eyebrow] gold jewelry artisan hands editorial atelier"
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="1400"
                className="absolute inset-0"
              />
            </div>
          </div>
          <div className="md:col-span-6 order-2 md:order-2 md:pl-8">
            <p
              className="eyebrow"
              id="brand-story-eyebrow"
            >
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="display text-3xl md:text-5xl mt-4"
            >
              Made with intention.{" "}
              <span className="text-accent italic">Worn with meaning.</span>
            </h2>
            <p
              id="brand-story-body"
              className="mt-6 text-ink-secondary text-base md:text-lg leading-relaxed max-w-xl"
            >
              Velmora began with a simple idea: demi-fine jewelry should feel as
              considered as the moments you wear it. Each piece is designed in
              our small studio, hand-finished in 18K gold plating, and built to
              be lived in — shower to dinner, weekday to wedding, for years to
              come.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center text-[12px] uppercase tracking-name font-medium text-ink-primary accent-underline"
            >
              Our Story
              <ArrowRight className="ml-2 h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
