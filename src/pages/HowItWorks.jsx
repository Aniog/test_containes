import useDocumentTitle from "@/hooks/useDocumentTitle"
import PageHeader from "@/components/PageHeader"
import SectionHeader from "@/components/ui/SectionHeader"
import CTASection from "@/components/sections/CTASection"

const steps = [
  {
    number: "01",
    title: "Submit your inquiry",
    description:
      "Tell us what product you need, the quantity, target price, certifications, and destination market. You can use our inquiry form or email us directly.",
  },
  {
    number: "02",
    title: "Receive a sourcing plan",
    description:
      "We review your request, confirm specifications, and send a clear proposal covering estimated timeline, service fee, and next steps.",
  },
  {
    number: "03",
    title: "Supplier search & verification",
    description:
      "We identify potential suppliers, verify factory credentials, and collect initial quotes and samples for your review.",
  },
  {
    number: "04",
    title: "Negotiate and place the order",
    description:
      "Once you choose a supplier, we help negotiate terms, confirm payment schedules, and draft the purchase contract.",
  },
  {
    number: "05",
    title: "Monitor production",
    description:
      "We track production milestones, confirm materials, review samples, and provide regular status updates with photos.",
  },
  {
    number: "06",
    title: "Quality inspection & shipping",
    description:
      "Pre-shipment inspection is completed before balance payment. We then coordinate booking, loading, and documentation.",
  },
]

const expectations = [
  {
    title: "Clear communication",
    description: "A bilingual project manager is your single point of contact throughout the order.",
  },
  {
    title: "Transparent pricing",
    description: "No hidden fees. You know the service cost before work begins.",
  },
  {
    title: "Regular reporting",
    description: "Receive written updates, inspection photos, and timeline dashboards.",
  },
  {
    title: "Buyer protection",
    description: "We structure payments and contracts to reduce your exposure.",
  },
]

export default function HowItWorks() {
  useDocumentTitle("How It Works | SSourcing China")

  return (
    <>
      <PageHeader
        badge="How It Works"
        title="Our sourcing process, step by step"
        description="A transparent workflow designed to reduce risk and keep you in control of every order."
      />

      <section className="section bg-white">
        <div className="container-main">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200 md:left-1/2" />
            <div className="space-y-12">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0
                return (
                  <div
                    key={step.number}
                    className={`relative flex flex-col md:flex-row md:items-center ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex-1 md:px-12" />
                    <div className="absolute left-4 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-sm font-bold text-white md:left-1/2">
                      {step.number}
                    </div>
                    <div className="flex-1 pl-12 md:px-12 md:pl-0">
                      <div className="card p-6">
                        <h3 className="text-lg font-semibold text-slate-900">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <SectionHeader
            title="What to expect when working with us"
            description="Consistency and clarity are built into how we manage every project."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {expectations.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
