import SectionHeader from "@/components/sections/SectionHeader"
import { process } from "@/data/content"

export default function ProcessSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="A clear process from request to delivery"
          description="Six structured steps keep your project on track, with no guesswork and no surprises along the way."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {process.map((p) => (
            <div key={p.step} className="relative">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0f2a4a] text-base font-bold text-white">
                  {p.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
              </div>
              <p className="mt-3 pl-[60px] text-sm leading-relaxed text-slate-600">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
