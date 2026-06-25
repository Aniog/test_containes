const HomeContactPanel = () => {
  return (
    <section id="contact" className="px-6 pb-16 pt-12 md:px-8 md:pb-24 md:pt-16">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-amber-200 bg-amber-50 p-8 md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-amber-700">
              Contact invitation
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Ready to position ARTITECT MACHINERY as a premium folding machine brand?
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700">
              This landing page introduces your double folding machine and sheet metal
              folding machine range in a way that feels professional, approachable,
              and easy for visitors to understand.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="mailto:sales@artitectmachinery.com"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              sales@artitectmachinery.com
            </a>
            <a
              href="#machines"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
            >
              Revisit products
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeContactPanel
