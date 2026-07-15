import { Link } from "react-router-dom"
import { useStrkImages } from "@/components/ui/StrkImage"

export default function BrandStory() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-ink text-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative aspect-[4x5] overflow-hidden">
          <img
            alt="Velmora atelier crafting gold jewelry"
            data-strk-img-id="story-img-velmora-2b8e1f"
            data-strk-img="[story-body] [story-title] gold jewelry making atelier hands warm"
            data-strk-img-ratio="4x5"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest3 text-gold-soft mb-4">Our Story</p>
          <h2
            id="story-title"
            className="font-serif text-4xl md:text-5xl font-light leading-tight"
          >
            Quiet luxury, <br />
            <span className="italic text-gold-soft">made to last.</span>
          </h2>
          <p
            id="story-body"
            className="mt-6 text-cream/80 leading-relaxed font-light"
          >
            Velmora began with a simple belief: fine-feeling jewelry shouldn't
            demand a fine-jewelry price. Each piece is hand-finished in 18K gold
            over a durable core, hypoallergenic by design, and made to be worn —
            really worn — through every ordinary, extraordinary day.
          </p>
          <p className="mt-4 text-cream/80 leading-relaxed font-light">
            From the first sketch to the final polish, we obsess over the
            details you feel but rarely see: the weight in your hand, the catch
            of light, the clasp that never fails.
          </p>
          <Link
            to="/about"
            className="inline-block mt-8 border border-cream/40 text-cream text-xs uppercase tracking-widest2 px-10 py-4 rounded-full hover:bg-cream hover:text-ink transition-colors duration-300"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
