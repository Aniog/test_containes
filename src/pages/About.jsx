import StrkImage from '@/components/ui/StrkImage';

export default function About() {
  return (
    <div className="min-h-screen bg-cream pb-20 pt-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
          About Velmora
        </p>
        <h1 className="mt-3 font-serif text-4xl font-light text-charcoal md:text-5xl">
          Jewelry With Intention
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-warm-gray">
          Velmora is a demi-fine jewelry brand for women who appreciate the quiet
          confidence of well-made things. We design pieces that move easily from
          morning coffee to evening candlelight — always refined, never overdone.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="aspect-[21/9] overflow-hidden bg-charcoal">
          <StrkImage
            id="about-hero"
            query="[about-title] [about-subtitle]"
            ratio="21x9"
            width={1400}
            alt="Velmora studio"
          />
        </div>
        <div className="grid gap-10 pt-14 md:grid-cols-3">
          <div className="text-center">
            <h3
              id="about-title"
              className="font-serif text-xl font-medium uppercase tracking-widest text-charcoal"
            >
              Thoughtful Materials
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-warm-gray">
              18k gold-plated brass, nickel-free finishes, and hypoallergenic posts
              chosen for everyday comfort.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-serif text-xl font-medium uppercase tracking-widest text-charcoal">
              Small-Batch Production
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-warm-gray">
              We produce in limited runs to reduce waste and ensure every piece
              meets our standards.
            </p>
          </div>
          <div className="text-center">
            <h3
              id="about-subtitle"
              className="font-serif text-xl font-medium uppercase tracking-widest text-charcoal"
            >
              Gift-Ready Packaging
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-warm-gray">
              Every order arrives in a signature Velmora pouch or box, perfect for
              gifting or keeping.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
