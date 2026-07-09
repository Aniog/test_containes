import Button from '@/components/ui/Button'

const NewsletterSection = () => (
  <section className="bg-velmora-ivory py-16 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-[2.5rem] bg-velmora-noir px-6 py-10 text-velmora-ivory shadow-soft sm:px-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-velmora-gold">
              Join the list
            </p>
            <h2 className="mt-4 font-display text-5xl leading-none sm:text-6xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-velmora-ivory/78 sm:text-base">
              Be first to see new drops, styling notes, and gift-worthy edits curated for everyday luxury.
            </p>
          </div>
          <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="h-12 rounded-full border border-white/15 bg-white/8 px-5 text-sm text-velmora-ivory outline-none transition placeholder:text-velmora-ivory/55 focus:border-velmora-gold"
            />
            <Button className="h-12">Join now</Button>
          </form>
        </div>
      </div>
    </div>
  </section>
)

export default NewsletterSection
