const steps = [
  {
    no: "01",
    title: "Share your requirements",
    desc: "Send us product specifications, target price, quantity and any reference samples or photos.",
  },
  {
    no: "02",
    title: "Receive supplier options",
    desc: "Within 3-5 business days you receive a shortlist of vetted factories with quotes and lead times.",
  },
  {
    no: "03",
    title: "Samples and supplier check",
    desc: "We arrange samples, conduct a factory audit and consolidate technical feedback before any deposit.",
  },
  {
    no: "04",
    title: "Production follow-up",
    desc: "Weekly updates on raw materials, production progress and any risk to the agreed lead time.",
  },
  {
    no: "05",
    title: "Quality inspection",
    desc: "On-site QC inspection with AQL sampling, photo and video report sent before final balance payment.",
  },
  {
    no: "06",
    title: "Shipping coordination",
    desc: "We handle export documents, consolidation, sea or air freight booking and delivery to your warehouse or FBA.",
  },
];

const SourcingProcess = () => {
  return (
    <section className="bg-[#EEF2F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1F4E79] mb-3">
            Sourcing Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] tracking-tight">
            A clear 6-step process from inquiry to delivery
          </h2>
          <p className="mt-4 text-[#475569] text-base md:text-lg">
            We follow a documented workflow so every order has the same level
            of supplier vetting, quality control and shipping coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.no}
              className="relative rounded-xl bg-white border border-[#D9E2EC] p-6 md:p-7"
            >
              <span className="text-3xl font-bold text-[#1F4E79]/30">{step.no}</span>
              <h3 className="mt-2 text-lg font-semibold text-[#0B2545]">{step.title}</h3>
              <p className="mt-2 text-sm text-[#475569] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SourcingProcess;
