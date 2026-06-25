const ContactSection = () => {
  return (
    <section id="contact" className="bg-stone-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-amber-200 bg-white shadow-[0_20px_60px_-40px_rgba(15,23,42,0.5)]">
          <div className="grid gap-10 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Let&apos;s match the right folding machine to your workflow.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                If you are sourcing a double folding machine, sheet metal folder, or
                metal folding machine, ARTITECT MACHINERY is positioned to start the
                conversation with clarity and confidence.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white md:p-8">
              <p className="text-sm font-medium text-slate-300">Preferred contact path</p>
              <a
                href="mailto:sales@artitect-machinery.com"
                className="mt-3 block text-2xl font-semibold tracking-tight text-white"
              >
                sales@artitect-machinery.com
              </a>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Share your material range, production targets, and preferred machine type.
                We&apos;ll help frame the most suitable solution.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {['Double folding machine', 'Sheet metal folder', 'Metal folding machine'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
