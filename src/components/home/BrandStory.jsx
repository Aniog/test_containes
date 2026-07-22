import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { StrkImage } from "@/components/StrkImage"
import { Reveal } from "@/components/Reveal"

export function BrandStory() {
  return (
    <section className="border-t border-line py-16 md:py-24">
      <div className="container grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-cream">
              <StrkImage
                imgId="brand-story-atelier-7d21"
                query="[story-text] [story-heading] jeweler hands crafting a gold earring at a warm-lit atelier workbench, macro editorial"
                ratio="4x3"
                width={900}
                alt="The Velmora atelier"
                className="transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 hidden bg-ivory px-6 py-4 shadow-[0_8px_30px_rgba(38,32,26,0.10)] md:block">
              <p className="font-serif text-3xl font-medium text-bronze">2021</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-ink-soft">Est. in Lisbon</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-bronze md:text-[11px]">Our Story</p>
          <h2 id="story-heading" className="mt-3 font-serif text-3xl font-medium leading-tight text-ink md:text-5xl">
            Jewelry that remembers who you were — and who you're becoming
          </h2>
          <p id="story-text" className="mt-6 text-sm leading-relaxed text-ink-soft md:text-base">
            Velmora began at a single workbench in Lisbon, with one belief: the pieces you wear every day should be
            made with the same care as the ones you save for special occasions. We work in small batches, plate in
            18K gold over recycled brass, and finish every piece by hand — so your jewelry feels personal from the
            first wear, and stays beautiful for years.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-[11px] font-medium uppercase tracking-[0.25em] text-ink transition-colors hover:border-bronze hover:text-bronze"
          >
            Our Story
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
