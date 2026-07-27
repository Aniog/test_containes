import { PageContainer } from "@/components/shared/PageContainer"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"
import { StockImage } from "@/components/shared/StockImage"

const steps = [
  {
    id: "brief",
    step: "01",
    title: "Submit your sourcing brief",
    desc: "Share product specifications, target price, quantity, preferred Incoterms, and any supplier requirements. Photos, drawings, and reference samples help us move faster.",
  },
  {
    id: "search",
    step: "02",
    title: "Supplier search & verification",
    desc: "We identify potential suppliers, verify licenses and capabilities, and shortlist the best matches. On-site audits are available for higher-risk or larger orders.",
  },
  {
    id: "quote",
    step: "03",
    title: "Quotes, samples & negotiation",
    desc: "We collect quotations, coordinate samples, and negotiate pricing, payment terms, and lead times on your behalf.",
  },
  {
    id: "order",
    step: "04",
    title: "Order placement & production monitoring",
    desc: "Once you approve a supplier, we help finalize the purchase order and monitor production milestones with regular updates.",
  },
  {
    id: "qc",
    step: "05",
    title: "Quality control & inspection",
    desc: "We perform pre-shipment or inline inspections based on your standards, document findings, and manage rework if needed.",
  },
  {
    id: "ship",
    step: "06",
    title: "Shipping & delivery",
    desc: "We coordinate booking, loading supervision, export documents, and track the shipment until it reaches your warehouse.",
  },
]

export default function HowItWorks() {
  return (
    <PageContainer>
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <SectionLabel>Process</SectionLabel>
          <h1 className="text-4xl font-bold sm:text-5xl">How It Works</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            A clear, six-step process designed to reduce risk and keep you in
            control.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((s, idx) => {
              const titleId = `step-${s.id}-title`
              const descId = `step-${s.id}-desc`
              const isEven = idx % 2 === 1
              return (
                <div
                  key={s.id}
                  className={`grid items-center gap-8 lg:grid-cols-2 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={isEven ? "lg:order-2" : ""}>
                    <span className="text-6xl font-extrabold text-slate-100">
                      {s.step}
                    </span>
                    <h2
                      id={titleId}
                      className="mt-2 text-2xl font-bold text-slate-900"
                    >
                      {s.title}
                    </h2>
                    <p id={descId} className="mt-4 text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className={isEven ? "lg:order-1" : ""}>
                    <StockImage
                      imgId={`step-img-${s.id}-g7h8i9`}
                      query={`[${descId}] [${titleId}]`}
                      ratio="4x3"
                      width="700"
                      alt={s.title}
                      className="w-full rounded-2xl object-cover shadow-sm"
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link to="/contact">Start Your Sourcing Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageContainer>
  )
}
