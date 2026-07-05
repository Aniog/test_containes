import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { PLACEHOLDERS } from "@/data/products"

export default function AboutPage() {
  return (
    <main className="bg-cream pt-32 pb-20">
      <div className="container-velmora">
        <div className="text-center mb-12 md:mb-16">
          <p className="eyebrow mb-3">Our Story</p>
          <h1 className="display-headline text-4xl md:text-6xl text-ink">
            Crafted to be <span className="italic text-gold">treasured</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] bg-ink overflow-hidden">
              <img src={PLACEHOLDERS.brandStory} alt="Atelier" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-6 space-y-5">
            <p className="text-base md:text-lg text-text-on-light/85 font-light leading-relaxed">
              Velmora began at a small workbench in Porto, with a single question: why is
              well-made gold so often out of reach?
            </p>
            <p className="text-base md:text-lg text-text-on-light/85 font-light leading-relaxed">
              We craft demi-fine jewelry by hand in small batches — pieces substantial enough
              to feel like heirlooms, priced for everyday. 18K gold plating, hypoallergenic
              posts, designed to be worn daily, gifted freely, and loved for years.
            </p>
            <p className="text-base md:text-lg text-text-on-light/85 font-light leading-relaxed">
              Every piece is checked by hand before it ships. We use recycled metals where we
              can, plastic-free packaging always, and we donate 1% of every order to
              organizations supporting women in craft.
            </p>
            <Link to="/shop" className="inline-flex items-center gap-2 mt-6 btn-outline">
              Shop the Collection
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
