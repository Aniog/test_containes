export default function NewsletterSignup() {
  return (
    <section className="rounded-[2.5rem] bg-velmora-bronze px-6 py-12 text-velmora-ivory shadow-luxe sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-velmora-gold-soft">
          Join the list
        </p>
        <h2 className="mt-4 font-display text-4xl leading-none text-velmora-ivory sm:text-5xl">
          Join for 10% off your first order
        </h2>
        <p className="mt-4 max-w-xl text-base leading-8 text-velmora-ivory/80">
          Receive styling notes, early access drops, and a gentle welcome offer for your first Velmora piece.
        </p>
      </div>

      <form className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row lg:mt-0 lg:ml-10">
        <input
          type="email"
          placeholder="Email address"
          className="h-14 flex-1 rounded-full border border-velmora-ivory/25 bg-velmora-ivory px-6 text-sm text-velmora-cocoa placeholder:text-velmora-stone focus:border-velmora-gold focus:outline-none"
        />
        <button
          type="submit"
          className="h-14 rounded-full border border-velmora-gold bg-velmora-gold px-7 text-xs uppercase tracking-[0.26em] text-velmora-cocoa transition hover:bg-velmora-gold-soft"
        >
          Subscribe
        </button>
      </form>
    </section>
  )
}
