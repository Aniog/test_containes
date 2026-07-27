import { useStrkImages } from "@/hooks/useStrkImages";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import StockImage from "@/components/shared/StockImage";
import QuoteForm from "@/components/shared/QuoteForm";

const steps = [
  {
    number: "01",
    title: "Submit your request",
    description:
      "Tell us what product you want, including specifications, target price, order quantity, packaging needs, and delivery destination. The more detail you provide, the better we can match you with suitable suppliers.",
    details: ["Product drawings or reference links", "Target price and quantity", "Required certifications or standards", "Delivery location and timeline"],
  },
  {
    number: "02",
    title: "Supplier research & verification",
    description:
      "We search our network and external channels to find qualified factories. Each candidate is screened for licenses, production capability, export experience, and reputation.",
    details: ["License and registration checks", "Factory profile review", "Capability and capacity assessment", "Reference checks where available"],
  },
  {
    number: "03",
    title: "Quotation & sampling",
    description:
      "You receive a comparison of 2-5 suppliers with pricing, MOQ, lead time, and terms. We arrange samples for evaluation and help you choose the right partner.",
    details: ["Side-by-side quotation summary", "Sample coordination and evaluation", "MOQ and term negotiation", "Supplier recommendation report"],
  },
  {
    number: "04",
    title: "Order & production monitoring",
    description:
      "Once you place the order, we monitor production milestones, communicate with the supplier, and keep you updated with progress reports.",
    details: ["Purchase order review", "Production schedule tracking", "Mid-production updates", "Issue escalation and resolution"],
  },
  {
    number: "05",
    title: "Quality inspection & shipping",
    description:
      "We perform pre-shipment inspections, arrange logistics, prepare documentation, and coordinate delivery to your destination.",
    details: ["Pre-shipment inspection", "Loading supervision if required", "Export documentation", "Freight booking and delivery tracking"],
  },
];

export default function HowItWorks() {
  const containerRef = useStrkImages([]);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="How It Works"
        title="A transparent sourcing workflow"
        description="From request to delivery, every step is designed to reduce risk and keep you in control."
        queryId="how-it-works"
        query="[how-header-desc] [how-header-title]"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Five steps to successful sourcing"
            description="Our process is structured to give you visibility, control, and confidence at every stage."
          />
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-xl border border-slate-200 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <StockImage
                    id={`how-step-img-${step.number}`}
                    query={`[how-step-desc-${step.number}] [how-step-title-${step.number}] [how-section-title]`}
                    ratio="4x3"
                    width="700"
                    alt={step.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Communication"
                title="Stay informed throughout your project"
                description="We believe transparency is essential. You receive regular updates, inspection reports, and direct access to your project manager."
              />
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                {[
                  { title: "Shared timelines", desc: "Clear production milestones and deadlines." },
                  { title: "Photo reports", desc: "Visual evidence from factory visits and inspections." },
                  { title: "Issue alerts", desc: "Immediate notification when problems arise." },
                  { title: "Delivery tracking", desc: "Freight updates until goods arrive." },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm">
                    <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
