export default function HomeProcess() {
  const steps = [
    {
      n: '01',
      title: 'Consult',
      text: 'We start with your material, sheet sizes, and production goals — not our catalogue.',
    },
    {
      n: '02',
      title: 'Configure',
      text: 'Choose bed length, drive system, and tooling. Every machine is built to your line.',
    },
    {
      n: '03',
      title: 'Commission',
      text: 'On-site installation, operator training, and a precision calibration before first fold.',
    },
    {
      n: '04',
      title: 'Sustain',
      text: 'Genuine parts, predictive maintenance, and decades-long service from our engineers.',
    },
  ]

  return (
    <section
      className="relative py-24 md:py-32 text-paper bg-graphite overflow-hidden isolate"
    >
      <div
        className="absolute inset-0 z-0 opacity-25"
        data-strk-bg-id="home-process-bg-9c2d"
        data-strk-bg="[home-process-subtitle] [home-process-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-graphite/95 via-graphite/85 to-graphite/95" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-ember" />
            <span className="text-xs uppercase tracking-[0.3em] text-ember font-medium">How We Work</span>
          </div>
          <h2 id="home-process-title" className="font-serif text-4xl md:text-5xl font-light leading-tight">
            From specification to steady production.
          </h2>
          <p id="home-process-subtitle" className="mt-6 text-lg text-silver leading-relaxed">
            Buying a folding machine should feel like commissioning a piece of architecture.
            Considered, collaborative, and built to outlast the trend cycle.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-paper/20 pt-6">
              <div className="text-xs uppercase tracking-[0.3em] text-ember">{s.n}</div>
              <h3 className="mt-3 font-serif text-2xl text-paper font-medium">{s.title}</h3>
              <p className="mt-3 text-silver leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
