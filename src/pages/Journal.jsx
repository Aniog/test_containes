export function Journal() {
  return (
    <div className="container-vel py-16 md:py-24">
      <p className="mb-2 text-xs font-medium uppercase tracking-widest text-vel-accent">
        Notes on Style
      </p>
      <h1 className="heading-serif mb-8 text-4xl md:text-5xl">The Journal</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {[1, 2, 3, 4].map((i) => (
          <article
            key={i}
            className="group border-b border-vel-border pb-8"
          >
            <div className="mb-4 aspect-[16/10] bg-vel-cream" />
            <p className="mb-2 text-xs uppercase tracking-widest text-vel-muted">
              Style Guide
            </p>
            <h2 className="font-serif text-2xl font-light text-vel-base transition-colors group-hover:text-vel-accent">
              How to Layer Gold Jewelry Like an Editor
            </h2>
          </article>
        ))}
      </div>
    </div>
  )
}
