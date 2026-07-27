import SectionHeader from "@/components/sections/SectionHeader"
import { trustPoints, stats } from "@/data/content"

export default function TrustSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why buyers trust us"
          title="A local team that works for you, not the factory"
          description="We are based in China and represent your interests throughout the sourcing process."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((t) => {
            const Icon = t.icon
            return (
              <div key={t.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0f2a4a] text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{t.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{t.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 rounded-2xl bg-[#0f2a4a] p-8 md:grid-cols-4 md:p-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-white sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-slate-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
