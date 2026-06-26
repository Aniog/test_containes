import { Button } from '@/components/ui/Button'

export function HomeHero() {
  return (
    <section className="relative bg-ink text-ink-fg overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-ink/80" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-36">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-copper" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              Precision Sheet Metal Folding
            </span>
          </div>
          <h1
            id="hero-title"
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6"
          >
            Folding Machinery
            <span className="block text-copper">Built for Precision</span>
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-ink-muted leading-relaxed mb-10 max-w-2xl"
          >
            From double folding machines to flagship CNC metal folders,
            ARTITECT MACHINERY engineers durable, user-friendly equipment that
            delivers accurate bends shift after shift.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/products" variant="accent">
              Explore Products
            </Button>
            <Button to="/contact" variant="outlineLight">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
