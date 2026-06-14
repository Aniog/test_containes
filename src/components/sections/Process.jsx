import React from 'react'

const STEPS = [
  {
    n: '01',
    title: 'Application review',
    body: 'Send us your part drawings, materials, and target tolerances. Our applications team responds within one business day.',
  },
  {
    n: '02',
    title: 'Machine match',
    body: 'We shortlist two or three machines from the lineup, run a bend-feasibility analysis, and recommend tooling.',
  },
  {
    n: '03',
    title: 'On-site trial',
    body: 'Visit our Pittsburgh demo floor or have a field engineer bring a portable unit to your shop for a live trial.',
  },
  {
    n: '04',
    title: 'Install & train',
    body: 'Our commissioning team installs, calibrates, and trains your operators until the first part passes inspection.',
  },
  {
    n: '05',
    title: 'Lifetime support',
    body: 'Remote diagnostics, scheduled maintenance, and a 48-hour parts guarantee keep your line bending for decades.',
  },
]

const Process = () => {
  return (
    <section
      id="process"
      className="relative isolate overflow-hidden bg-slate text-bg py-20 md:py-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        data-strk-bg-id="process-bg-7c2e"
        data-strk-bg="[process-section-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-slate via-slate/95 to-slate"
      />
      <div aria-hidden className="absolute inset-0 -z-10 grid-lines opacity-30" />

      <div className="container-x">
        <div className="max-w-3xl">
          <p className="eyebrow text-accent">How we work</p>
          <h2
            id="process-section-title"
            className="mt-4 font-display text-3xl md:text-5xl leading-[1.1] tracking-tight text-bg text-balance"
          >
            A clear, five-step path from your drawing to a finished bend.
          </h2>
        </div>

        <ol className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="bg-slate/85 backdrop-blur p-7 md:p-8 hover:bg-slate-soft/80 transition-colors"
            >
              <span className="font-display text-3xl text-accent tabular-nums">
                {s.n}
              </span>
              <h3 className="mt-5 font-display text-xl text-bg leading-snug">
                {s.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-bg/70">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process
