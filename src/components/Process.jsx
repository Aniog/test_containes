const steps = [
  {
    n: '01',
    title: 'Consult & specify',
    desc: 'We walk your workshop, study your sheet sizes, profiles and throughput, and recommend the right folder configuration.',
  },
  {
    n: '02',
    title: 'Engineer & build',
    desc: 'Your machine is assembled in our workshop on a stress-relieved steel frame, then calibrated on real production parts.',
  },
  {
    n: '03',
    title: 'Install & train',
    desc: 'Our technicians install on site, level the frame, commission the CNC, and train your operators until the first run passes QC.',
  },
  {
    n: '04',
    title: 'Support & uptime',
    desc: 'Remote diagnostics, scheduled service, and a parts library that ships within 48 hours. We measure success in years of uptime.',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-stone-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p
            id="process-eyebrow"
            className="text-xs uppercase tracking-[0.25em] font-medium text-amber-600 mb-4"
          >
            How we work
          </p>
          <h2
            id="process-title"
            className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.05]"
          >
            A patient, four-step partnership.
          </h2>
          <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
            We don't sell folders off a shelf. Every ARTITECT installation is
            specified, built and supported around the work you actually do.
          </p>

          <div className="mt-10 hidden lg:block">
            <img
              alt="Engineers calibrating a metal folding machine"
              data-strk-img-id="process-image-7e2b4d"
              data-strk-img="[process-title] [process-eyebrow]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-auto rounded-2xl border border-neutral-200"
            />
          </div>
        </div>

        <ol className="lg:col-span-7 space-y-3 md:space-y-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="rounded-2xl border border-neutral-200 bg-white p-7 md:p-8 hover:border-neutral-300 transition-colors"
            >
              <div className="flex items-start gap-6">
                <span className="font-serif text-3xl md:text-4xl text-amber-600 leading-none mt-1">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-neutral-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-base text-neutral-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
