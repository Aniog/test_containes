import SectionHeading from "@/components/shared/SectionHeading";
import StockImage from "@/components/shared/StockImage";

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description: "Share product specifications, target pricing, order volume, and preferred delivery window.",
  },
  {
    number: "02",
    title: "We source & verify suppliers",
    description: "Our team shortlists 2-5 qualified manufacturers and verifies credentials, capacity, and compliance.",
  },
  {
    number: "03",
    title: "Samples & quotation",
    description: "You receive clear quotations, samples for evaluation, and our negotiation recommendations.",
  },
  {
    number: "04",
    title: "Order & quality control",
    description: "We monitor production, perform inspections, and address issues before shipment.",
  },
  {
    number: "05",
    title: "Shipping & delivery",
    description: "We coordinate logistics, customs documentation, and final delivery to your door.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="A clear sourcing process you can track"
          description="Our five-step workflow keeps your project transparent, on budget, and on schedule."
        />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <StockImage
              id="process-overview-img-3b7e1d"
              query="[process-section-desc] [process-section-title]"
              ratio="4x3"
              width="800"
              alt="Sourcing process"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
