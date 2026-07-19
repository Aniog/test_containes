import React from "react"
import { Link } from "react-router-dom"
import Button from "@/components/ui/Button"
import { getStrkImageUrl } from "@/lib/strkImage"

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-pearl px-5 py-16 text-velmora-espresso sm:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-[2rem] bg-velmora-smoke shadow-soft">
          <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-velmora-champagne/25 blur-3xl" />
          <img
            alt="Velmora fine jewelry atelier"
            className="aspect-[4/5] h-full w-full object-cover"
            data-strk-img-id="brand-story-atelier-q2m8v6"
            data-strk-img="[brand-story-copy] [brand-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src={getStrkImageUrl("brand-story-atelier-q2m8v6")}
          />
        </div>
        <div className="lg:pl-12">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-velmora-clay">Our Story</p>
          <h2 id="brand-story-title" className="font-serif text-5xl font-medium leading-none text-velmora-espresso md:text-7xl">
            Jewelry that keeps close to the skin.
          </h2>
          <p id="brand-story-copy" className="mt-7 max-w-xl text-base leading-8 text-velmora-taupe md:text-lg">
            Velmora was created for the space between precious and practical: warm gold pieces with a fine-jewelry eye, made accessible for the rituals of everyday dressing.
          </p>
          <div className="mt-8 grid gap-5 border-y border-velmora-espresso/10 py-7 sm:grid-cols-3">
            {[
              ["18K", "gold-plated finish"],
              ["30", "day returns"],
              ["$30–$120", "premium-accessible"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-serif text-4xl font-semibold text-velmora-espresso">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-velmora-taupe">{label}</p>
              </div>
            ))}
          </div>
          <Button as={Link} to="/shop" variant="outline" className="mt-8">
            Our Story
          </Button>
        </div>
      </div>
    </section>
  )
}
