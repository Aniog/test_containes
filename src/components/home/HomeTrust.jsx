import { Building2, Users, Globe, Award } from "lucide-react";

const stats = [
  { icon: Building2, value: "800+", label: "Verified Suppliers" },
  { icon: Users, value: "350+", label: "Clients Served" },
  { icon: Globe, value: "45", label: "Countries Reached" },
  { icon: Award, value: "12+", label: "Years Experience" },
];

export default function HomeTrust() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Why Choose Us
          </p>
          <h2 className="text-primary mb-4">
            Trusted by Buyers Across the Globe
          </h2>
          <p className="text-slate-600">
            Our track record speaks for itself. We combine deep local knowledge
            with international business standards.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-lg p-6 text-center shadow-sm border border-slate-100"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {s.value}
              </p>
              <p className="text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Local Team, Global Standards",
              desc: "Our staff are based in Shenzhen, Guangzhou, and Yiwu — close to the factories. We operate with ISO-aligned QC processes and English reporting.",
            },
            {
              title: "Transparent Reporting",
              desc: "You receive photos, videos, and written reports at every milestone. No surprises, no hidden fees, no communication gaps.",
            },
            {
              title: "Risk Mitigation First",
              desc: "We verify before you pay. Factory audits, sample approval, and inspection checkpoints protect your investment at every stage.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-slate-100">
              <h4 className="text-base font-semibold text-slate-900 mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
