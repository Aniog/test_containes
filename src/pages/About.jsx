import { Link } from "react-router-dom"
import { useStrkImages } from "@/hooks/useStrkImages"
import Button from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

export default function About() {
  const ref = useStrkImages([])

  return (
    <div ref={ref}>
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-3f1c"
          data-strk-bg="[about-subtitle] [about-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/45" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-ivory/80">
            Our Story
          </p>
          <h1
            id="about-title"
            className="mt-4 font-serif text-5xl text-ivory md:text-7xl"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="about-subtitle"
            className="mt-5 max-w-xl text-base leading-relaxed text-ivory/85"
          >
            A studio rooted in the belief that fine jewelry should feel
            personal, not precious.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
          The Velmora Philosophy
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-espresso md:text-5xl">
          Quiet luxury, made to be lived in.
        </h2>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-stone">
          <p>
            Velmora began with a simple belief: that fine jewelry should feel
            personal, not precious. Each piece is hand-finished in 18K gold
            plate over sterling silver — hypoallergenic, tarnish-resistant, and
            made to move with you from morning coffee to candlelit dinners.
          </p>
          <p>
            We design in small, considered collections, so every detail earns
            its place. No noise. No compromise. Just gold, worn your way. Our
            pieces are priced to be accessible without ever feeling ordinary,
            because we believe everyday luxury should be just that — everyday.
          </p>
          <p>
            From our studio to your jewelry box, every Velmora piece arrives in
            signature packaging, ready to be worn or gifted. This is jewelry
            made to be treasured, and made to be lived in.
          </p>
        </div>
        <div className="mt-10">
          <Button as={Link} to="/shop">
            Explore the Collection
            <ArrowRight size={15} />
          </Button>
        </div>
      </section>
    </div>
  )
}
