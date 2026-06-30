import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function BrandStory() {
  return (
    <section className="bg-cream-deep section-pad">
      <div className="mx-auto max-w-page px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
            <div className="relative aspect-product overflow-hidden">
              <img
                alt="A hand setting a fine crystal on a gold piece in the Velmora atelier"
                data-strk-img-id="brand-story-img"
                data-strk-img="[brand-story-name] [brand-story-tagline]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 order-1 md:order-2">
            <p
              id="brand-story-tagline"
              className="kicker"
            >
              Our story
            </p>
            <h2
              id="brand-story-name"
              className="mt-4 headline-lg text-espresso"
            >
              Jewelry made to be lived in
            </h2>
            <div className="mt-6 space-y-4 max-w-md editorial-body">
              <p>
                Velmora began with a simple belief: fine jewelry shouldn't live in a box. We finish each piece by hand in 18K gold plating — quiet, warm, and made to wear every day.
              </p>
              <p>
                Designed in our studio, set in our atelier, and delivered to your door. No markups, no noise.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex underline-link"
            >
              Read our story
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
