const stats = [
  { value: "300+", label: "Factory audits completed" },
  { value: "1,200+", label: "Quality inspections per year" },
  { value: "12+ yrs", label: "Combined sourcing experience in China" },
  { value: "20+", label: "Countries we ship to" },
]

export default function TrustStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="container-x py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-bold text-brand-800 tracking-tight">
                {s.value}
              </p>
              <p className="mt-1.5 text-sm text-slate-600 leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
