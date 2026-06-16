const certifications = [
  { id: 'ce', label: 'CE' },
  { id: 'iso9001', label: 'ISO 9001' },
  { id: 'ul', label: 'UL Listed' },
  { id: 'csa', label: 'CSA' },
  { id: 'rohs', label: 'RoHS' },
  { id: 'ped', label: 'PED' },
]

export default function TrustStrip() {
  return (
    <section
      className="border-y border-line bg-ink-2 py-8"
      aria-label="Certifications"
    >
      <div className="container-page">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
          <p className="text-xs font-medium uppercase tracking-eyebrow text-steel">
            Engineered, certified, and trusted by fabricators in 52 countries
          </p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {certifications.map((cert) => (
              <li
                key={cert.id}
                className="text-sm font-semibold tracking-[0.2em] text-white/70"
              >
                {cert.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
