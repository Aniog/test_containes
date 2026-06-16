const stats = [
  { value: 'Elegant', label: 'brand experience designed to feel premium and easy to navigate' },
  { value: 'Practical', label: 'product communication for real fabrication needs and buying decisions' },
  { value: 'Focused', label: 'messaging centered on folding machinery and sheet metal performance' },
]

const PrecisionStrip = () => {
  return (
    <section id="capabilities" className="border-b border-slate-200 bg-slate-100">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-slate-500">
            Capability positioning
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            A product presentation that speaks with industrial confidence.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
            The brand story is organized to communicate precision, reliability, and ease of use without overwhelming the visitor. That balance makes the site feel elegant while staying user friendly.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.value} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-semibold tracking-tight text-slate-950">{stat.value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PrecisionStrip
