import { sourcingProcess } from "@/data/siteData"

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container-main">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            How It Works
          </span>
          <h2 className="mt-2 section-title">A clear sourcing process</h2>
          <p className="section-subtitle">
            We keep every step transparent so you know where your order stands
            and what comes next.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {sourcingProcess.map((item, index) => (
            <div key={item.step} className="relative">
              {index < sourcingProcess.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-slate-200 -translate-x-4" />
              )}
              <div className="rounded-xl border border-slate-200 bg-white p-6 text-center h-full">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
