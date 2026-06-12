import SectionHeader from "@/components/site/SectionHeader";

const STEPS = [
  {
    n: "01",
    title: "Send us your brief",
    desc: "Share your product, target specs, quantity, and budget. NDA available on request.",
  },
  {
    n: "02",
    title: "Supplier shortlist",
    desc: "We identify 3 – 5 suitable factories, screen them, and send you a comparison sheet with quotes.",
  },
  {
    n: "03",
    title: "Factory verification",
    desc: "We visit the chosen factory in person and confirm capacity, certifications, and existing clients.",
  },
  {
    n: "04",
    title: "Samples &amp; approval",
    desc: "We coordinate samples, document changes, and ship approved samples to you for sign-off.",
  },
  {
    n: "05",
    title: "Production &amp; QC",
    desc: "Weekly production updates, in-line checks, and a pre-shipment inspection report before payment is released.",
  },
  {
    n: "06",
    title: "Shipping to your door",
    desc: "Consolidation, export documents, freight booking, and delivery — FOB, CIF, or DDP.",
  },
];

const HomeProcess = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeader
          eyebrow="Sourcing Process"
          title="A clear, step-by-step way to source from China"
          description="No black box, no surprise charges. You always know which step we're on, who we're talking to, and what to expect next."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="relative rounded-xl border border-border-soft bg-white p-6 md:p-7"
            >
              <span className="text-sm font-bold text-accent tracking-wider">
                STEP {step.n}
              </span>
              <h3
                className="mt-2 text-lg md:text-xl font-semibold text-brand"
                dangerouslySetInnerHTML={{ __html: step.title }}
              />
              <p
                className="mt-2 text-sm text-slate-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: step.desc }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProcess;
