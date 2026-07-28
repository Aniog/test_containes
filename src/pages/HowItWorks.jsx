import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import SectionHeader from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"
import CTABanner from "@/components/CTABanner"
import strkImgConfig from "@/strk-img-config.json"

const steps = [
  {
    number: "01",
    title: "Send your inquiry",
    description: "Share product details, specs, target price, quantity, certifications, and destination. The more detail, the better we can match suppliers.",
  },
  {
    number: "02",
    title: "Receive a sourcing plan",
    description: "We review your request, confirm feasibility, and propose a clear plan with timeline, service scope, and estimated costs.",
  },
  {
    number: "03",
    title: "Supplier shortlist & quotes",
    description: "We research the market and present 3–5 qualified manufacturers with quotes, MOQs, lead times, and factory profiles.",
  },
  {
    number: "04",
    title: "Audit & sample validation",
    description: "We verify top candidates and arrange samples. You review sample quality and audit reports before choosing a supplier.",
  },
  {
    number: "05",
    title: "Contract & production",
    description: "We help negotiate terms, review contracts, and place the purchase order. Production monitoring begins immediately.",
  },
  {
    number: "06",
    title: "Inspection & shipping",
    description: "Final QC, container loading supervision, and export documents are handled before goods leave China.",
  },
]

const expectations = [
  { title: "Transparent reporting", description: "Photo and video updates at every key stage." },
  { title: "No hidden factory commissions", description: "We disclose fees and work for you, not the factory." },
  { title: "Flexible engagement", description: "Use us for a single audit or manage your entire supply chain." },
  { title: "Fast response", description: "We aim to reply to all inquiries within one business day." },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-16 md:py-24">
          <div className="container-site">
            <SectionHeader
              label="How It Works"
              title="A simple, transparent sourcing process"
              description="From your first message to the final shipment, here is exactly how we work with overseas buyers."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((step) => (
                <Card key={step.number} className="relative overflow-hidden">
                  <span className="absolute -right-4 -top-6 text-8xl font-extrabold text-slate-100">
                    {step.number}
                  </span>
                  <div className="relative">
                    <span className="mb-3 inline-block text-sm font-bold text-blue-600">Step {step.number}</span>
                    <h3 className="text-xl font-bold text-navy-900">{step.title}</h3>
                    <p className="mt-2 text-slate-600">{step.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <SectionHeader
                  label="What to Expect"
                  title="Working with SSourcing China"
                  centered={false}
                  className="mb-8"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {expectations.map((item) => (
                    <div key={item.title} className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                      <h3 className="font-bold text-navy-900">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  data-strk-img-id="how-it-works-team"
                  data-strk-img="[section-title] [section-description]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Sourcing team reviewing supplier reports"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          title="Start your sourcing project today"
          description="Send us your product requirements and we will outline the next steps."
        />
    </div>
  )
}
