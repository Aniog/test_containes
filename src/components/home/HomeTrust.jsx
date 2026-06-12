import { ShieldCheck, Globe2, Users, FileCheck2 } from "lucide-react";

const POINTS = [
  {
    icon: Users,
    label: "Local team in China",
    desc: "Sourcing managers based in Yiwu, Shenzhen, and Ningbo with on-the-ground factory access.",
  },
  {
    icon: ShieldCheck,
    label: "Independent QC",
    desc: "Inspections by our own QC team — separate from suppliers, with photo and video evidence.",
  },
  {
    icon: FileCheck2,
    label: "Transparent pricing",
    desc: "Fixed sourcing fees and clear inspection rates. No commissions taken from suppliers.",
  },
  {
    icon: Globe2,
    label: "International experience",
    desc: "We work with buyers in North America, Europe, the Middle East, Latin America, and Australia.",
  },
];

const STATS = [
  { value: "10+", label: "Years in China sourcing" },
  { value: "300+", label: "Buyers served globally" },
  { value: "1,200+", label: "QC inspections completed" },
  { value: "60+", label: "Product categories" },
];

const HomeTrust = () => {
  return (
    <section className="bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              Why buyers work with us
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-brand">
              An accountable partner on the ground in China
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
              We don't promise the lowest price. We promise that what you order
              is what you get — verified, inspected, and shipped without the
              usual surprises.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-5">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-lg bg-white border border-border-soft px-4 py-4">
                  <dt className="text-xs uppercase tracking-wider text-muted">{s.label}</dt>
                  <dd className="mt-1 text-2xl md:text-3xl font-bold text-brand">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {POINTS.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="rounded-xl border border-border-soft bg-white p-6"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base md:text-lg font-semibold text-brand">{label}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTrust;
