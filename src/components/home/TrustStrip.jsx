import Stat from "@/components/shared/Stat";

const stats = [
  { value: "12+ yrs", label: "On the ground", sub: "in Chinese manufacturing" },
  { value: "500+", label: "Factory audits", sub: "across 5 regions" },
  { value: "40+", label: "Buyer markets", sub: "US, EU, AU, ME, JP" },
  { value: "1 bd", label: "Quote reply", sub: "during China business hours" },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-b border-ink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
