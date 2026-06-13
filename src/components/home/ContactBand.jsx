const ContactBand = () => {
  return (
    <section id="contact" className="bg-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-12">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-slate-950 shadow-sm shadow-slate-950/5 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-600">
                Start the conversation
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Looking for an elegant, user-friendly metal folding machine solution?
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
                ARTITECT MACHINERY is ready to support your next production upgrade with machinery built for precision, usability, and professional presentation.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="mailto:sales@artitect-machinery.com"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                sales@artitect-machinery.com
              </a>
              <a
                href="tel:+10000000000"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                +1 (000) 000-0000
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactBand
