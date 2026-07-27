import { XCircle, CheckCircle } from "lucide-react"
import SectionHeader from "@/components/shared/SectionHeader"

const problems = [
  "Suppliers that stop replying after payment",
  "Quality that does not match the sample",
  "Hidden costs and unclear shipping terms",
  "Production delays with no advance warning",
  "Language barriers and miscommunicated specs",
]

const solutions = [
  "Verified factories with documented due diligence",
  "On-site inspections at every critical stage",
  "Clear quotes and milestone-based payments",
  "Regular reporting so delays are flagged early",
  "Bilingual project managers on the ground",
]

export default function ProblemsSection() {
  return (
    <section className="bg-slate-900 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why Clients Choose Us"
          title="We solve the problems buyers face in China"
          description="Sourcing from overseas carries real risk. Our process is built to reduce it."
          centered
        />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-slate-800 p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white mb-6">Common sourcing risks</h3>
            <ul className="space-y-4">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300">
                  <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-brand/10 p-6 md:p-8 border border-brand/20">
            <h3 className="text-lg font-semibold text-white mb-6">How we address them</h3>
            <ul className="space-y-4">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-200">
                  <CheckCircle className="h-5 w-5 text-teal-light shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
