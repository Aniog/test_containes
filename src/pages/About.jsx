import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <section className="bg-velmora-cream px-4 py-32 md:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-sans text-xs uppercase tracking-widest text-velmora-gold">
          Our Story
        </p>
        <h1 className="mt-4 font-serif text-4xl text-velmora-espresso md:text-6xl">
          Designed to be Treasured
        </h1>
        <p className="mt-8 leading-relaxed text-velmora-mocha">
          Velmora was born from a simple belief: fine jewelry should feel
          personal, not precious. We design demi-fine pieces in 18k gold plating
          — elegant enough for evenings, durable enough for every day. Every
          curve, clasp, and crystal is chosen to make you feel quietly radiant.
        </p>
        <p className="mt-6 leading-relaxed text-velmora-mocha">
          Based in New York, shipped worldwide. Made for the moments that matter
          most.
        </p>
        <Button asChild variant="accent" className="mt-10 uppercase tracking-label">
          <Link to="/shop">Explore the Collection</Link>
        </Button>
      </div>
    </section>
  )
}
