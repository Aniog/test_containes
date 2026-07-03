import TrustBar from "@/components/home/TrustBar"

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <div
          className="absolute inset-0 h-full w-full"
          data-strk-bg-id="about-hero-velmora-3d4e5f"
          data-strk-bg="[about-hero-sub] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-espresso/50" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
          <h1
            id="about-hero-title"
            className="font-serif text-4xl font-light text-ivory md:text-6xl"
          >
            Our Story
          </h1>
          <p
            id="about-hero-sub"
            className="mt-4 max-w-md font-sans text-sm text-ivory/80"
          >
            Demi-fine gold jewelry, designed in studio and made to be treasured.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
          Est. 2024
        </p>
        <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-ink md:text-4xl">
          Jewelry that earns its place in your everyday
        </h2>
        <div className="mt-6 h-px w-12 bg-gold" />
        <div className="mt-8 space-y-6 font-sans text-sm leading-relaxed text-taupe">
          <p>
            Velmora was born from a simple belief: that fine-quality gold jewelry
            should be felt, not flaunted. We design demi-fine pieces that sit
            quietly on the skin — warm, tactile, and made to be worn from morning
            to night.
          </p>
          <p>
            Each piece is crafted in 18K gold plating over a solid brass base,
            hypoallergenic and nickel-free. We work in small, considered runs so
            every detail — the weight of a huggie, the catch of a clasp, the glow
            of the gold — is exactly right.
          </p>
          <p>
            We believe luxury isn't about logos or loudness. It's about the way a
            piece makes you feel when you put it on, and the way it stays with you,
            day after day. That's the standard we hold ourselves to.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-sand pt-10 text-center">
          <div>
            <p className="font-serif text-3xl text-gold">18K</p>
            <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.15em] text-taupe">
              Gold Plated
            </p>
          </div>
          <div>
            <p className="font-serif text-3xl text-gold">100%</p>
            <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.15em] text-taupe">
              Hypoallergenic
            </p>
          </div>
          <div>
            <p className="font-serif text-3xl text-gold">30</p>
            <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.15em] text-taupe">
              Day Returns
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
