import SectionHeading from '@/components/ui/SectionHeading'
import { trustPoints } from '@/data/site'

export default function HomeTrust() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-md">
              <img
                alt="Quality inspection on a Chinese factory production line"
                data-strk-img-id="trust-img-2b8d1e"
                data-strk-img="[trust-img-desc] [trust-heading]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -right-6 w-44 rounded-xl bg-brand-navy p-5 text-white shadow-lg">
              <p className="text-3xl font-bold">100%</p>
              <p className="mt-1 text-xs text-slate-300">
                Inspections include photo & video evidence
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Why Buyers Trust Us"
              title="On the ground in China, working only for you"
            />
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {trustPoints.map((t) => {
                const Icon = t.icon
                return (
                  <div key={t.id} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-slate text-brand-blue">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3
                        id="trust-heading"
                        className="text-base font-bold text-brand-ink"
                      >
                        {t.title}
                      </h3>
                      <p
                        id="trust-img-desc"
                        className="mt-1 text-sm leading-relaxed text-brand-muted"
                      >
                        {t.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
