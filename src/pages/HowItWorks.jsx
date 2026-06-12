import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";

const STEPS = [
  {
    n: "01",
    title: "Send us your brief",
    desc: "Share your product idea, target specs, quantity, budget, and timeline. We'll return a short clarification email so we both start with the same understanding. NDA available on request.",
    deliverables: ["Project brief acknowledged", "Clarification questions answered", "Optional NDA signed"],
  },
  {
    n: "02",
    title: "Supplier shortlist",
    desc: "Within 5 – 7 working days, we send you a comparison sheet of 3 – 5 vetted factories with quotes, MOQs, lead times, certifications, and our recommendation.",
    deliverables: ["Supplier comparison sheet", "Standardized RFQs", "Cost breakdown per supplier"],
  },
  {
    n: "03",
    title: "Factory verification",
    desc: "We visit the chosen factory in person and confirm capacity, equipment, and certifications. You receive a written audit report with photos.",
    deliverables: ["On-site audit report", "Photo and video evidence", "Risk and compliance summary"],
  },
  {
    n: "04",
    title: "Samples & approval",
    desc: "We coordinate samples (golden samples + revisions), document changes, and ship approved samples to you for sign-off before mass production.",
    deliverables: ["Sample tracking sheet", "Revision change log", "Signed-off golden sample"],
  },
  {
    n: "05",
    title: "Production & QC",
    desc: "Weekly production updates, in-line inspections at key milestones, and a pre-shipment AQL inspection report before your final balance is paid.",
    deliverables: ["Weekly production updates", "In-line inspection notes", "Pre-shipment AQL report"],
  },
  {
    n: "06",
    title: "Shipping & delivery",
    desc: "We consolidate goods, prepare export documents, and book freight on FOB, CIF, or DDP terms — to your warehouse or 3PL.",
    deliverables: ["Booking confirmation", "Full export document pack", "Tracking and arrival updates"],
  },
];

const HowItWorks = () => {
  return (
    <div>
      <PageHero
        eyebrow="How It Works"
        title="A clear, six-step path from brief to delivery"
        description="Our process is designed to remove guesswork. Every step has named deliverables, so you always know what you'll get and when."
      />

      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="space-y-6 md:space-y-8">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className="bg-white rounded-xl border border-border-soft shadow-sm overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 p-6 md:p-8">
                  <div className="md:col-span-3 flex md:flex-col gap-4 items-start">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand text-white text-lg font-bold">
                      {i + 1}
                    </span>
                    <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                      Step {s.n}
                    </p>
                  </div>
                  <div className="md:col-span-6">
                    <h2 className="text-xl md:text-2xl font-semibold text-brand">{s.title}</h2>
                    <p className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-xs uppercase tracking-wider text-muted font-semibold">
                      Deliverables
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-700">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};

export default HowItWorks;
