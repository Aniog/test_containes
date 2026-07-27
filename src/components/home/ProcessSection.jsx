import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description: "Share product specifications, target price, order volume, and destination market.",
  },
  {
    number: "02",
    title: "We Find & Verify Suppliers",
    description: "Our team shortlists factories, checks licenses, and conducts on-site or remote verification.",
  },
  {
    number: "03",
    title: "Sampling & Negotiation",
    description: "We coordinate samples, compare quotes, and help negotiate terms before you place an order.",
  },
  {
    number: "04",
    title: "Production & QC",
    description: "We follow production milestones and carry out inspections at key stages.",
  },
  {
    number: "05",
    title: "Shipping & Delivery",
    description: "We assist with logistics, documentation, and tracking until goods reach you.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="How It Works"
          title="A Simple, Transparent Sourcing Process"
          description="Our workflow is designed to reduce risk and give you visibility at every stage."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                data-strk-img-id="process-main-img"
                data-strk-img="[process-title] [process-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Sourcing specialist discussing production timeline with factory manager"
                className="w-full h-auto object-cover"
              />
            </div>
            <h2 id="process-title" className="sr-only">China Sourcing Process</h2>
            <p id="process-subtitle" className="sr-only">From inquiry to delivery, we manage supplier identification, verification, sampling, production, quality control, and shipping.</p>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
