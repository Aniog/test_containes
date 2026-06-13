function ContactBanner() {
  return (
    <section id="contact" className="bg-white py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="rounded-[2rem] bg-slate-950 px-8 py-10 text-slate-100 md:px-12 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
                Talk with ARTITECT MACHINERY
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Ready to choose a better folding machine for your production line?
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">
                Let us help you identify the right double folding machine, sheet metal
                folder, or metal folding solution for your workflow.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="mailto:sales@artitectmachinery.com"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                sales@artitectmachinery.com
              </a>
              <a
                href="tel:+18005551234"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                +1 (800) 555-1234
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactBanner
