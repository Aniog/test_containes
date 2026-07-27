import { TRUST_POINTS, TRUST_FEATURES } from "@/data/content"
import { SectionHeading } from "@/components/ui/section-heading"

export function HomeTrust() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why buyers trust us"
          title="On the ground in China, working for you"
          description="We are an independent team based in China. We verify what we are told, document what we see, and report honestly."
        />

        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {TRUST_POINTS.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
              >
                <Icon className="mx-auto h-8 w-8 text-brand-600" />
                <p className="mt-3 text-3xl font-extrabold text-brand-900">
                  {point.stat}
                </p>
                <p className="mt-1 text-sm text-slate-600">{point.label}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {TRUST_FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeTrust
