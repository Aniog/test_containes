import * as React from "react"
import SectionTitle from "@/components/shared/SectionTitle"
import { Users, Globe, Award, Clock } from "lucide-react"

const stats = [
  { icon: Globe, value: "40+", label: "Countries served" },
  { icon: Users, value: "2,400+", label: "Verified suppliers" },
  { icon: Award, value: "12+", label: "Years of experience" },
  { icon: Clock, value: "24h", label: "Response time" },
]

const trustPoints = [
  "Bilingual sourcing team based in Shenzhen and Yiwu",
  "On-the-ground factory visits and audits",
  "AQL-based quality inspections with photo reports",
  "Transparent quotes with no hidden commissions",
  "Long-term client relationships across North America, Europe, and Australia",
]

export default function TrustSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <SectionTitle
          eyebrow="Why choose us"
          title="Built on transparency, experience, and results"
          description="We combine local expertise with international standards to protect your investment at every step."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm">
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="mt-4 text-3xl font-bold text-slate-900">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-2 items-center">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <img
              data-strk-img-id="trust-team-img-7a1b2c"
              data-strk-img="[trust-title] [trust-desc]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="SSourcing China team at factory"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 id="trust-title" className="text-2xl font-bold text-slate-900 md:text-3xl">A partner you can rely on</h3>
            <p id="trust-desc" className="mt-4 text-slate-600 leading-relaxed">
              Our team lives where your products are made. We visit factories, inspect goods, and resolve issues before they become expensive problems.
            </p>
            <ul className="mt-6 space-y-3">
              {trustPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
