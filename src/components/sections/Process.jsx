const steps = [
  {
    n: "01",
    title: "Share your requirements",
    desc: "Send us product details, specifications, target price, quantity and timeline. We'll reply within 1 business day with clarifying questions and a sourcing plan.",
  },
  {
    n: "02",
    title: "Supplier shortlist & quotation",
    desc: "We screen factories from our verified database and the wider market, request quotes, compare prices and MOQ, and recommend 2–3 best-fit suppliers.",
  },
  {
    n: "03",
    title: "Factory verification & samples",
    desc: "We visit the shortlisted factories in person, audit capability and compliance, then arrange samples for your approval before any deposit is paid.",
  },
  {
    n: "04",
    title: "Order placement & production",
    desc: "We negotiate final terms, manage the contract and deposit, then follow production weekly with photo and video updates from the line.",
  },
  {
    n: "05",
    title: "Quality inspection",
    desc: "Independent pre-shipment inspection following AQL standards. You receive a detailed report and approve shipment only when quality meets the spec.",
  },
  {
    n: "06",
    title: "Shipping & delivery",
    desc: "We coordinate booking, export documents, customs and door-to-door logistics — by sea, air or express — until the goods arrive at your warehouse.",
  },
];

export default function Process() {
  return (
    <section className="bg-brand-bg py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            Our sourcing process
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
            A clear, step-by-step path from inquiry to delivery
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            Same process for a first prototype or a full container — transparent
            milestones, fixed deliverables, and no surprises.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-brand-line bg-white p-6 md:p-8"
            >
              <span className="text-sm font-bold tracking-widest text-brand-accent">
                STEP {s.n}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-brand-ink md:text-xl">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
