import { Globe, Users, FileCheck, Clock, CheckCircle } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"

const stats = [
  { icon: Globe, value: "30+", label: "Countries served" },
  { icon: Users, value: "500+", label: "Verified suppliers" },
  { icon: FileCheck, value: "2,000+", label: "Inspections completed" },
  { icon: Clock, value: "12+", label: "Years in China sourcing" },
]

const trustPoints = [
  "Local bilingual team in Shenzhen and Ningbo",
  "Transparent pricing with no hidden commissions",
  "Detailed photo and video reports for every audit",
  "Secure payment handling and contract review",
  "ISO-aligned inspection standards",
]

export default function Trust() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-site">
        <SectionHeader
          label="Trust & Experience"
          title="Built on local presence and transparency"
          description="We combine on-the-ground expertise with clear communication, so you can source with confidence."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-extrabold text-navy-900">{stat.value}</div>
              <div className="mt-1 text-sm font-medium text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-xl bg-white p-6 shadow-sm md:p-8">
          <h3 className="mb-6 text-center text-xl font-bold text-navy-900">Why buyers trust SSourcing China</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <span className="text-slate-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
