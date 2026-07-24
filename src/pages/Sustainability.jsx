export default function Sustainability() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">Company</p>
        <h1 className="mb-10 font-serif text-4xl text-foreground sm:text-5xl">
          Sustainability
        </h1>

        <div className="space-y-10">
          <section>
            <h2 className="mb-3 font-serif text-2xl text-foreground">Thoughtful Materials</h2>
            <p className="leading-relaxed text-muted-foreground">
              We prioritize recycled metals and responsibly sourced materials whenever possible. Our plating
              partners follow strict environmental standards to minimize waste and energy use.
            </p>
          </section>
          <section>
            <h2 className="mb-3 font-serif text-2xl text-foreground">Plastic-Free Packaging</h2>
            <p className="leading-relaxed text-muted-foreground">
              Every Velmora order is shipped in recyclable, plastic-free packaging. Our signature boxes are
              designed to be kept and reused for safe jewelry storage.
            </p>
          </section>
          <section>
            <h2 className="mb-3 font-serif text-2xl text-foreground">Made to Last</h2>
            <p className="leading-relaxed text-muted-foreground">
              We believe the most sustainable jewelry is the kind you wear for years. By focusing on
              timeless design and durable finishes, we help you build a collection that outlasts trends.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
