import { AlertTriangle, XCircle, CheckCircle2 } from "lucide-react"

const problems = [
  "Suppliers stop replying after you send payment",
  "Samples look great, but mass production fails",
  "Factories exaggerate certifications or capacity",
  "Quality issues are discovered after shipment",
  "Shipping documents are incorrect or delayed",
]

const solutions = [
  "We verify legitimacy before you pay",
  "We monitor production and inspect before shipment",
  "We conduct on-site audits and check references",
  "We perform pre-shipment inspections at the factory",
  "We coordinate freight and review export paperwork",
]

export default function Problems() {
  return (
    <section className="bg-white py-16 md:py-24" id="problems">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="problems-title" className="section-title">Sourcing Problems We Solve</h2>
          <p id="problems-subtitle" className="section-subtitle">
            Buying directly from China can be risky. Here is how we protect your business.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-red-100 bg-red-50/50 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-red-900">Common sourcing risks</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-green-100 bg-green-50/50 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-green-900">How we handle them</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
