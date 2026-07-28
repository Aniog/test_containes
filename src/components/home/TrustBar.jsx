import { complianceBadges } from "@/data/content.js";

const TrustBar = () => {
  return (
    <section className="border-b border-ink-200 bg-ink-50">
      <div className="container-page py-10">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-semibold uppercase tracking-widest text-ink-500">
            Familiar with the standards your buyers care about
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {complianceBadges.map((b) => (
              <span
                key={b}
                className="text-sm font-semibold text-ink-700"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
