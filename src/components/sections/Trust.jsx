import { CheckCircle2, MapPin, Users, FileText } from "lucide-react";

const points = [
  {
    icon: MapPin,
    title: "Local team in Shenzhen",
    desc: "Our staff is physically located in South China — close to the manufacturing hubs of Guangdong, Zhejiang and Fujian.",
  },
  {
    icon: Users,
    title: "Buyer-side only",
    desc: "We represent the buyer, not the supplier. No commissions or kickbacks from factories — only a clear service fee from you.",
  },
  {
    icon: FileText,
    title: "Documented & traceable",
    desc: "Every step is documented: supplier audits, sample specs, inspection reports, packing photos and shipping documents.",
  },
  {
    icon: CheckCircle2,
    title: "Practical, not promotional",
    desc: "We give realistic timelines and quotes. If a request is not feasible at your target price, we'll say so up front.",
  },
];

export default function Trust() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
              Why buyers choose us
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
              A sourcing partner built around trust and accountability
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-muted">
              We work with importers, e-commerce brands, distributors and
              procurement teams that want a long-term sourcing partner in
              China — not a one-off middleman.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl border border-brand-line bg-brand-bg p-6">
              <div>
                <p className="text-2xl font-extrabold text-brand-ink">12+</p>
                <p className="mt-1 text-xs text-brand-muted">Years experience</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-brand-ink">800+</p>
                <p className="mt-1 text-xs text-brand-muted">Verified suppliers</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-brand-ink">1,500+</p>
                <p className="mt-1 text-xs text-brand-muted">Shipments handled</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border border-brand-line bg-white p-6 transition-shadow hover:shadow-md md:p-7"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent-soft text-brand-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-brand-ink md:text-lg">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
