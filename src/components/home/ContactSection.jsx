const contactDetails = [
  'Double folding machine consultations',
  'Application-based machine recommendations',
  'Responsive support for fabrication buyers',
]

const ContactSection = () => {
  return (
    <section id="contact" className="bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:px-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-amber-300">Start the conversation</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Let’s find the right sheet metal folding machine for your business.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
            Tell us about your operation and our team will help you compare the right machinery options for output, workflow, and finish quality.
          </p>

          <div className="mt-8 space-y-3">
            {contactDetails.map((detail) => (
              <div key={detail} className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-sm text-slate-200">
                {detail}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white p-8 text-slate-900 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Contact ARTITECT MACHINERY</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm text-slate-500">Email</p>
              <p className="mt-2 text-xl font-semibold text-slate-950">sales@artitect-machinery.com</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Phone</p>
              <p className="mt-2 text-xl font-semibold text-slate-950">+86 400 880 2268</p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-sm text-slate-500">Main focus</p>
              <p className="mt-2 text-base leading-7 text-slate-700">
                Double folders, metal folder machines, and elegant fabrication solutions for industrial buyers.
              </p>
            </div>
          </div>

          <a
            href="mailto:sales@artitect-machinery.com"
            className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Email our sales team
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
