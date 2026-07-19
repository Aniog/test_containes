const Newsletter = () => (
  <section id="journal" className="bg-velmora-ivory px-5 pb-20 text-velmora-ink md:px-8 lg:pb-28">
    <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-velmora-rose text-velmora-espresso shadow-editorial">
      <div className="grid gap-8 px-6 py-12 md:px-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-16 lg:py-16">
        <div>
          <p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-velmora-espresso/75">The private list</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold leading-tight text-velmora-espresso md:text-6xl">Join for 10% off your first order</h2>
        </div>
        <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
          <label className="sr-only" htmlFor="newsletter-email">Email address</label>
          <input id="newsletter-email" type="email" placeholder="Email address" className="min-h-14 flex-1 rounded-full border border-velmora-espresso/20 bg-velmora-ivory px-6 font-sans text-sm text-velmora-ink placeholder:text-velmora-taupe focus:border-velmora-espresso focus:outline-none" />
          <button className="rounded-full bg-velmora-espresso px-8 py-4 font-sans text-xs font-bold uppercase tracking-[0.24em] text-velmora-ivory transition hover:bg-velmora-gold-deep">
            Join
          </button>
        </form>
      </div>
    </div>
  </section>
)

export default Newsletter
