import { trustPoints } from "@/data/siteData"

export function TrustSection() {
  return (
    <section className="py-16 bg-primary-light">
      <div className="container-main">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div
              key={point.label}
              className="text-center"
            >
              <div className="text-4xl font-extrabold text-primary">
                {point.value}
              </div>
              <div className="mt-1 text-sm font-medium text-slate-700">
                {point.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
