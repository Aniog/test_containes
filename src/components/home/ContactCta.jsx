const ContactCta = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-r from-slate-950 to-slate-800 px-8 py-10 text-white md:px-12 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-400">Next step</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">Let buyers discover the right folding machine with confidence.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">Use this polished brand presence to introduce your machinery range, start sales conversations, and present ARTITECT MACHINERY as a dependable manufacturing partner.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Suggested contact details</p>
              <div className="mt-5 space-y-3 text-base text-white">
                <p>Sales consultation for double folding and metal folder solutions</p>
                <p>Email: sales@artitectmachinery.com</p>
                <p>Phone: +00 123 456 789</p>
              </div>
              <a href="mailto:sales@artitectmachinery.com" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-stone-100">Contact ARTITECT MACHINERY</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCta
