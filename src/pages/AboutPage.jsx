export function AboutPage() {
  return (
    <main className="bg-cream pb-20 pt-28 md:pt-36">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold">About</p>
        <h1 className="font-serif text-4xl text-espresso md:text-5xl">
          Our Story
        </h1>
        <p className="mt-8 leading-relaxed text-warm-gray">
          Velmora Fine Jewelry was founded on a simple idea: luxury should feel
          personal, not out of reach. We design demi-fine pieces in small
          batches, using 18K gold plating, sterling silver, and ethically sourced
          crystals. Every collection is shaped by the belief that the best
          jewelry is the kind you never want to take off.
        </p>
        <p className="mt-6 leading-relaxed text-warm-gray">
          From our studio to your jewelry box, we pay attention to the details —
          the weight of a clasp, the glow of a finish, the way a piece catches
          candlelight. This is jewelry for the everyday and the extraordinary.
        </p>
      </div>
    </main>
  );
}

export default AboutPage;
