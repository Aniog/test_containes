const applications = [
  'Architectural metal panels',
  'Roofing and flashing profiles',
  'HVAC and duct components',
  'Cabinet and enclosure parts',
  'Custom sheet metal fabrication',
  'Trim, edging, and industrial panels',
]

export default function ApplicationSection() {
  return (
    <section id="applications" className="bg-graphite py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brass">Applications</p>
            <h2 id="applications-heading" className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Ready for the metal parts your customers ask for every day.
            </h2>
            <p id="applications-desc" className="mt-5 text-lg leading-8 text-white/80">
              ARTITECT machines support workshops and manufacturers producing neat bends, repeatable profiles, and professional sheet metal components.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {applications.map((item) => (
              <div key={item} className="rounded-3xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur">
                <span className="block text-base font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
