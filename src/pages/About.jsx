import { useImageLoader } from '@/hooks/useImageLoader';

export default function About() {
  const containerRef = useImageLoader();

  return (
    <div ref={containerRef} className="bg-background pt-[88px] md:pt-[104px]">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] min-h-[360px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="about-hero-9x2a7b"
          data-strk-bg="[about-hero-title] [about-hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="relative h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-center items-center text-center">
          <p
            id="about-hero-subtitle"
            className="text-xs uppercase tracking-extra-wide text-background/80 mb-4"
          >
            Our Story
          </p>
          <h1
            id="about-hero-title"
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-background max-w-3xl"
          >
            Designed to be Treasured
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-[900px] mx-auto px-6 md:px-10 py-16 md:py-24 text-center">
        <p className="text-xs uppercase tracking-extra-wide text-muted mb-6">Velmora Fine Jewelry</p>
        <h2 className="font-serif text-2xl md:text-4xl font-light text-foreground mb-8">
          Quiet luxury for everyday moments
        </h2>
        <div className="space-y-6 text-muted leading-relaxed">
          <p>
            Velmora was born from a simple belief: the jewelry you wear every day should feel
            special. Our demi-fine pieces are crafted in small batches using responsibly sourced
            materials, 18K gold plating, and hypoallergenic finishes.
          </p>
          <p>
            From delicate huggies to statement earrings and layered necklaces, every design is made
            to move with you — from morning coffee to evening plans, from work to weekends away.
          </p>
          <p>
            We design for the woman who buys herself flowers, who celebrates small wins, and who
            knows that the best gifts are the ones that last.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface border-y border-hairline">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center">
            <div>
              <h3 className="font-serif text-xl text-foreground mb-3">Thoughtful Materials</h3>
              <p className="text-sm text-muted leading-relaxed">
                18K gold plating, sterling silver bases, and crystal accents chosen for longevity and
                glow.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground mb-3">Small-Batch Production</h3>
              <p className="text-sm text-muted leading-relaxed">
                Limited runs mean less waste and pieces that feel personal, not mass-produced.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground mb-3">Gift-Ready Packaging</h3>
              <p className="text-sm text-muted leading-relaxed">
                Every order arrives in a soft-touch Velmora box, ready for gifting or unboxing
                yourself.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
