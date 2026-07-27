import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHero from "@/components/sections/PageHero"
import SectionHeader from "@/components/sections/SectionHeader"
import CtaBanner from "@/components/layout/CtaBanner"
import { process } from "@/data/content"

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="How it works"
        title="How we take you from idea to delivery"
        description="A transparent, step-by-step process that keeps your project on schedule and your quality under control."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ol className="relative border-l border-slate-200">
            {process.map((p) => (
              <li key={p.step} className="mb-10 ml-6 last:mb-0">
                <span className="absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full bg-[#0f2a4a] text-xs font-bold text-white ring-4 ring-white">
                  {p.step}
                </span>
                <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What you get"
            title="Clear deliverables at every stage"
            description="You always know where your project stands and what you are paying for."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: "Supplier comparison", desc: "A transparent shortlist with price, MOQ, lead time, and factory capability side by side." },
              { title: "Audit reports", desc: "Written factory audit reports with photos so you can see the supplier for yourself." },
              { title: "QC inspection reports", desc: "Detailed inspection reports with images and pass/fail results before shipment." },
              { title: "Production updates", desc: "Scheduled progress updates with milestones and any issues flagged early." },
              { title: "Shipping documents", desc: "Complete, accurate shipping and customs documents prepared for you." },
              { title: "One point of contact", desc: "A dedicated bilingual project manager handling suppliers on your behalf." },
            ].map((d) => (
              <div key={d.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-slate-900">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
