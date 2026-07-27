import { TRUST_POINTS } from "@/data/content"
import SectionHeading from "@/components/common/SectionHeading"

export default function HomeTrust() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-xl bg-slate-100">
            <img
              alt="Quality inspection on a Chinese factory production line"
              className="h-full w-full object-cover"
              data-strk-img-id="trust-img-3d9c1a"
              data-strk-img="[trust-img-caption] [trust-eyebrow] [trust-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="Why buyers trust us"
              title="A local team that verifies, not just relays"
              description="We do the work on the ground. Our auditors and inspectors visit factories and production lines directly, so decisions are based on evidence."
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {TRUST_POINTS.map((point) => {
                const Icon = point.icon
                return (
                  <div key={point.id} className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-ink">
                        {point.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {point.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <span id="trust-eyebrow" className="hidden">
          Why buyers trust us
        </span>
        <span id="trust-title" className="hidden">
          A local team that verifies, not just relays
        </span>
        <span id="trust-img-caption" className="hidden">
          Quality inspection on a Chinese factory production line
        </span>
      </div>
    </section>
  )
}
