export default function Shipping() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">Help</p>
        <h1 className="mb-10 font-serif text-4xl text-foreground sm:text-5xl">
          Shipping & Returns
        </h1>

        <div className="space-y-10">
          <section>
            <h2 className="mb-3 font-serif text-2xl text-foreground">Shipping</h2>
            <p className="leading-relaxed text-muted-foreground">
              We offer complimentary worldwide shipping on all orders over $50. Orders under $50 ship for a
              flat rate of $5. All orders are processed within 1–2 business days and delivered in 5–10
              business days depending on your location.
            </p>
          </section>
          <section>
            <h2 className="mb-3 font-serif text-2xl text-foreground">Returns</h2>
            <p className="leading-relaxed text-muted-foreground">
              We accept returns within 30 days of delivery. Items must be unworn and in their original
              packaging. To initiate a return, please contact us at hello@velmora.com with your order
              number.
            </p>
          </section>
          <section>
            <h2 className="mb-3 font-serif text-2xl text-foreground">Exchanges</h2>
            <p className="leading-relaxed text-muted-foreground">
              If you would like to exchange an item for a different style or size, please return the original
              item and place a new order. This ensures the fastest turnaround for your new piece.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
