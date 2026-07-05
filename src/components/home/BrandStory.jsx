import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { PLACEHOLDERS } from "@/data/products"

export default function BrandStory() {
  return (
    <section className="bg-cream py-20 md:py-32">
      <div className="container-velmora">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="md:col-span-6 reveal">
            <div className="relative aspect-[4/5] bg-ink overflow-hidden">
              <img
                src={PLACEHOLDERS.brandStory}
                alt="A hand holding a Velmora necklace"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-light mt-3 text-center md:text-left">
              The Velmora Atelier, Portugal
            </p>
          </div>

          {/* Text */}
          <div className="md:col-span-6 reveal">
            <p className="eyebrow mb-4 md:mb-5">Our Story</p>
            <h2 className="display-headline text-3xl md:text-5xl text-ink mb-6 md:mb-8 leading-[1.1]">
              Gold that
              <br />
              <span className="italic text-gold">lives with you.</span>
            </h2>
            <div className="space-y-5 text-base md:text-lg text-text-on-light/80 font-light leading-relaxed max-w-lg">
              <p>
                Velmora began at a small workbench in Porto, with a single question: why is
                well-made gold so often out of reach?
              </p>
              <p>
                We craft demi-fine jewelry by hand in small batches — pieces substantial enough
                to feel like heirlooms, priced for everyday. 18K gold plating, hypoallergenic
                posts, designed to be worn daily, gifted freely, and loved for years.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 md:mt-10 text-[11px] font-sans uppercase tracking-[0.25em] text-ink hover:text-gold transition-colors group"
            >
              Read Our Story
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
