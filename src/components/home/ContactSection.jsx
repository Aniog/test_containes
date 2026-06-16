const ContactSection = () => {
  return (
    <section id="contact" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-16">
        <div className="rounded-[2rem] border border-slate-300 bg-white p-8 text-slate-950 shadow-sm md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Ready to discuss the right folding machine for your operation?
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 md:text-lg">
            If you are comparing a double folding machine, metal folding machine, or sheet metal folding machine for your workflow, ARTITECT MACHINERY can help you move toward a precise and practical solution.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="mailto:sales@artitectmachinery.com" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
              sales@artitectmachinery.com
            </a>
            <a href="tel:+10000000000" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
              +1 (000) 000-0000
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
