import SectionHeader from "./SectionHeader";

const STEPS = [
  {
    n: "01",
    title: "Tell us what you need",
    description:
      "Share your product specs, target price, quantity and timeline through our inquiry form. No commitment.",
  },
  {
    n: "02",
    title: "We shortlist factories",
    description:
      "Within 3–5 business days we send a comparison of 3–5 verified suppliers with quotations and lead times.",
  },
  {
    n: "03",
    title: "Samples & approval",
    description:
      "We order, compare, and ship samples. You approve the supplier and lock specifications in writing.",
  },
  {
    n: "04",
    title: "Production & inspection",
    description:
      "We follow production weekly and run AQL inspections during and before shipment. You get full reports and photos.",
  },
  {
    n: "05",
    title: "Shipping to your door",
    description:
      "We arrange export documents and ship via sea, air or DDP — or send straight to your Amazon FBA warehouse.",
  },
];

export default function ProcessSteps({ withHeader = true }) {
  return (
    <section className="py-16 md:py-24 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {withHeader && (
          <SectionHeader
            eyebrow="Sourcing Process"
            title="A clear, five-step process"
            description="No black box. You see what we are doing, who we are talking to, and what the next milestone is — every week."
          />
        )}

        <ol className="mt-14 grid gap-6 md:gap-7 md:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="relative rounded-2xl bg-surface border border-line p-6 shadow-sm"
            >
              <span className="inline-flex items-center justify-center rounded-lg bg-brand text-white text-xs font-bold px-2.5 py-1 tracking-wider">
                STEP {step.n}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
