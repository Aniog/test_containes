import { AlertTriangle } from "lucide-react"
import SectionHeader from "@/components/sections/SectionHeader"
import { problems } from "@/data/content"

export default function ProblemsSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Problems we solve"
          title="Common risks when buying from China, handled"
          description="Sourcing internationally comes with real risks. Here is how we address the ones buyers run into most often."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-[#f59e0b]">
                <AlertTriangle className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
