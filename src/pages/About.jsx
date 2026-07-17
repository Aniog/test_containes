export function About() {
  return (
    <div className="min-h-screen bg-velmora-bg pt-28 pb-20 px-5 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <span className="block mb-4 font-sans text-xs uppercase tracking-[0.25em] text-velmora-accent">
          About Velmora
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-velmora-text">
          Jewelry for Real Life
        </h1>
        <p className="mt-6 text-velmora-muted leading-relaxed">
          Founded with the belief that demi-fine jewelry should feel as special as
          fine jewelry — without the occasion-only price tag — Velmora designs
          pieces in small batches using responsibly sourced materials and 18K
          gold-plated finishes.
        </p>
        <p className="mt-4 text-velmora-muted leading-relaxed">
          Every collection is inspired by art, architecture, and the quiet rituals
          of daily life. We hope our pieces become part of yours.
        </p>
      </div>
    </div>
  );
}
