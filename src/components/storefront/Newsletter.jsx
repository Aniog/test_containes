export default function Newsletter() {
  return (
    <section id="newsletter" className="rounded-[2.25rem] bg-[#b78b54] px-6 py-10 text-[#221c1f] shadow-[0_18px_48px_rgba(183,139,84,0.22)] md:px-10 md:py-12">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end md:gap-10">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#3f3022]">Join the list</p>
          <h2 className="mt-3 font-['Cormorant_Garamond'] text-4xl md:text-5xl">
            Join for 10% off your first order
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#3f3022]">
            Early access to drops, gifting edits, and styling notes from Velmora.
          </p>
        </div>
        <form className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
          <input
            type="email"
            placeholder="Email address"
            className="h-14 rounded-full border border-[#8c673f] bg-[#f6f0ea] px-5 text-sm text-[#241d1f] outline-none placeholder:text-[#7a6355] focus:border-[#221c1f]"
          />
          <button
            type="submit"
            className="h-14 rounded-full bg-[#221c1f] px-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#f6f0ea] transition hover:bg-[#3a3034]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
