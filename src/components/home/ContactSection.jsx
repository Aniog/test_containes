export default function ContactSection() {
  return (
    <section className="bg-stone-950 py-16 text-stone-50 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-xs font-medium uppercase tracking-widest text-amber-300">
                Ready to talk machinery
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-stone-50 md:text-4xl">
                Build a stronger sheet metal workflow with ARTITECT MACHINERY.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-stone-300 md:text-lg">
                If you are comparing a double folder, sheet metal folder, or a full
                metal folding machine setup, ARTITECT MACHINERY gives your team a
                cleaner and more confident starting point.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400">
                    Brand
                  </p>
                  <p className="mt-2 text-lg font-semibold text-stone-50">
                    ARTITECT MACHINERY
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400">
                    Product keywords
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-300">
                    Double folding machine, double folder, sheet metal folder,
                    sheet metal folding machine, metal folder, metal folder machine,
                    metal folding machine.
                  </p>
                </div>
                <a
                  href="#products"
                  className="inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
                >
                  Review products again
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
