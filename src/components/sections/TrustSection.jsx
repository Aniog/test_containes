import { SectionHeading } from "@/components/ui/section-heading"
import { trustPoints, trustFeatures } from "@/data/content"

export default function TrustSection() {
  return (
    <section className="bg-brand-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Why Buyers Trust Us"
          title="A local team you can rely on"
          description="We act as your eyes and ears on the ground in China, with transparent reporting and independent quality control."
          light
        />

        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {trustPoints.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <p className="text-3xl font-bold text-white md:text-4xl">{t.value}</p>
              <p className="mt-2 text-sm text-slate-300">{t.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustFeatures.map((f) => (
            <div key={f.id} className="flex flex-col items-start">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-white">{f.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
