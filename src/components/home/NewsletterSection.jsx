import Button from '@/components/ui/Button.jsx'

export default function NewsletterSection() {
  return (
    <section className="bg-velmora-ivory px-5 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-velmora-obsidian px-6 py-12 text-velmora-ivory shadow-velmora sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-eyebrow text-velmora-gold">
            Newsletter
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-none text-velmora-ivory sm:text-5xl">
            Join for 10% off your first order
          </h2>
          <p className="mt-4 text-base leading-7 text-velmora-ivory/75">
            Receive new drops, gifting edits, and styling notes in a warm, restrained cadence.
          </p>
        </div>

        <form className="mt-8 flex w-full max-w-xl flex-col gap-3 lg:mt-0 lg:flex-row">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            className="h-14 flex-1 rounded-full border border-velmora-mist/20 bg-white/10 px-5 text-sm text-velmora-ivory placeholder:text-velmora-ivory/50 focus:border-velmora-gold focus:outline-none"
            id="newsletter-email"
            placeholder="Enter your email"
            type="email"
          />
          <Button className="h-14 px-7">Join now</Button>
        </form>
      </div>
    </section>
  )
}
