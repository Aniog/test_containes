export default function Newsletter() {
  return (
    <section className="bg-[#F7F1E8] px-5 pb-20 text-[#17110D] md:px-8 md:pb-28">
      <div className="mx-auto max-w-7xl bg-[#17110D] px-6 py-12 text-[#FBF8F2] md:px-14 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B9853B]">The Velmora List</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#FBF8F2] md:text-5xl">Join for 10% off your first order.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#FBF8F2]/75">Receive private launches, styling notes, and thoughtful gift reminders.</p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email address"
              className="min-h-14 flex-1 border border-[#FBF8F2]/25 bg-[#FBF8F2] px-4 text-sm text-[#17110D] placeholder:text-[#8D7463] focus:border-[#B9853B] focus:outline-none"
            />
            <button type="submit" className="min-h-14 bg-[#B9853B] px-7 text-sm font-bold uppercase tracking-[0.18em] text-[#17110D] transition hover:bg-[#E9D8BE]">
              Join
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
