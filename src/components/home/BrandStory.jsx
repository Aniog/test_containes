import { Link } from "react-router-dom"

export default function BrandStory() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-stretch md:grid-cols-2">
        {/* Image */}
        <div
          className="relative min-h-[420px] md:min-h-[600px]"
          data-strk-bg-id="story-bg-velmora-7f8e9d"
          data-strk-bg="[story-body] [story-heading]"
          data-strk-bg-ratio="4x5"
          data-strk-bg-width="900"
        />

        {/* Text */}
        <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-24">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
            Our Story
          </p>
          <h2
            id="story-heading"
            className="mt-4 font-serif text-4xl font-light leading-tight text-ink md:text-5xl"
          >
            Quiet luxury,
            <br />
            made to last
          </h2>
          <div className="mt-6 h-px w-12 bg-gold" />
          <p
            id="story-body"
            className="mt-6 max-w-md font-sans text-sm leading-relaxed text-taupe"
          >
            Velmora was born from a simple belief: that fine-quality gold jewelry
            should be felt, not flaunted. Each piece is designed in our studio and
            crafted in 18K gold plating over a solid brass base — hypoallergenic,
            nickel-free, and made to be worn from morning to night. We make
            demi-fine jewelry that earns its place in your everyday.
          </p>
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:text-gold"
            >
              Read Our Story
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
