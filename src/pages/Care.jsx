export default function Care() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">Help</p>
        <h1 className="mb-10 font-serif text-4xl text-foreground sm:text-5xl">
          Jewelry Care
        </h1>

        <div className="space-y-10">
          <section>
            <h2 className="mb-3 font-serif text-2xl text-foreground">Daily Wear</h2>
            <p className="leading-relaxed text-muted-foreground">
              Put your jewelry on last, after applying perfume, lotion, or hairspray. Remove pieces before
              showering, swimming, or exercising to protect the gold finish and keep them looking their best.
            </p>
          </section>
          <section>
            <h2 className="mb-3 font-serif text-2xl text-foreground">Cleaning</h2>
            <p className="leading-relaxed text-muted-foreground">
              Gently wipe your jewelry with a soft, lint-free cloth after each wear. For a deeper clean, use
              a slightly damp cloth and dry immediately. Avoid harsh chemicals or abrasive materials.
            </p>
          </section>
          <section>
            <h2 className="mb-3 font-serif text-2xl text-foreground">Storage</h2>
            <p className="leading-relaxed text-muted-foreground">
              Store each piece separately in a dry pouch or jewelry box to prevent scratching and tangling.
              Keep your jewelry away from direct sunlight and humid environments.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
