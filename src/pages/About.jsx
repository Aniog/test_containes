import { StrkBackground } from "@/components/ui/StrkImage"
import { useStrkImages } from "@/hooks/useStrkImages"
import Newsletter from "@/components/home/Newsletter"

export default function About() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <StrkBackground
          bgId="about-hero-velmora-7e8f"
          query="[about-intro] [about-title]"
          ratio="16x9"
          width={1920}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative h-full flex items-center justify-center text-center px-5">
          <div className="max-w-2xl text-cream">
            <p className="text-[11px] uppercase tracking-widest2 text-champagne mb-4">
              Our Story
            </p>
            <h1 id="about-title" className="font-serif text-5xl md:text-6xl">
              Made to be lived in
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-5 md:px-8 text-center">
          <p id="about-intro" className="font-serif text-2xl md:text-3xl italic leading-relaxed text-ink">
            Velmora was founded on a simple belief — that fine jewelry should be
            worn, not locked away.
          </p>
          <div className="mt-8 space-y-5 text-muted leading-relaxed text-left">
            <p>
              Each piece is crafted in 18K gold plate over a hypoallergenic
              base, finished by hand, and made to move with you — from morning
              coffee to evening light. We design in small, considered
              collections so every detail earns its place.
            </p>
            <p>
              No noise, no trends — just warm gold, made to treasure. We
              believe luxury is not about logos or loudness, but about the
              quiet confidence of a piece that feels right the moment you put
              it on.
            </p>
            <p>
              Every order ships free, worldwide, in signature Velmora
              packaging — ready to gift, or to keep.
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  )
}
