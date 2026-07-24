export default function About() {
  return (
    <main className="bg-cream min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <p className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-accent mb-4">
          Our Story
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-wide leading-[1.1]">
          Designed for the Woman Who Knows
        </h1>
        <div className="mt-8 space-y-5 text-warm-gray font-sans text-sm sm:text-base leading-relaxed text-left">
          <p>
            Velmora was born from a simple belief: fine jewelry should not be reserved for special occasions. Every piece is crafted in small batches using 18K gold plating and hypoallergenic materials — so you can wear them every day, everywhere.
          </p>
          <p>
            Our designs balance vintage romance with modern minimalism. Each collection is inspired by art, architecture, and the quiet confidence of women who wear what they love.
          </p>
          <p>
            We work with family-run ateliers who have perfected their craft over generations. Every stone is hand-set, every clasp is tested, and every piece is inspected before it reaches you.
          </p>
        </div>
      </div>
    </main>
  );
}
