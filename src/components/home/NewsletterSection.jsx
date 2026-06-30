import Button from '@/components/ui/Button'

const NewsletterSection = () => (
  <section className="section-space bg-stone-50">
    <div className="page-shell">
      <div className="rounded-[2.5rem] bg-amber-200 px-6 py-12 text-stone-900 sm:px-10 lg:px-16 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-stone-700">Velmora Notes</p>
            <h2 className="mt-4 font-serif text-4xl leading-none sm:text-5xl">
              Join for 10% off your first order
            </h2>
          </div>
          <form className="grid gap-4 sm:grid-cols-[1fr_auto]" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="h-12 rounded-full border border-amber-300 bg-stone-50 px-5 text-sm text-stone-900 outline-none transition focus:border-stone-900"
            />
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Join Now
            </Button>
          </form>
        </div>
      </div>
    </div>
  </section>
)

export default NewsletterSection
