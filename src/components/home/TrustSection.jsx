import { Shield, Clock, Globe, Users, Award, MessageCircle } from "lucide-react";

const stats = [
  { icon: Globe, value: "40+", label: "Countries served" },
  { icon: Users, value: "500+", label: "Buyers supported" },
  { icon: Award, value: "98%", label: "Client satisfaction" },
  { icon: Clock, value: "24h", label: "Average response time" },
];

const trustPoints = [
  {
    icon: Shield,
    title: "Local Presence",
    desc: "Our team is based in Shenzhen, Guangzhou, and Yiwu — close to the major manufacturing hubs.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "First supplier shortlist within 3-5 business days. Inspection reports within 24 hours of the visit.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    desc: "Bilingual project managers who understand both Western business expectations and Chinese factory culture.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Buyers Trust SSourcing China
          </h2>
          <p className="text-lg text-slate-600">
            We have built our reputation on transparency, consistency, and
            results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center rounded-xl border border-slate-200 bg-slate-50 p-6"
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-3">
                <s.icon className="w-5 h-5 text-brand-800" />
              </div>
              <p className="text-2xl md:text-3xl font-extrabold text-slate-900">
                {s.value}
              </p>
              <p className="text-sm text-slate-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {trustPoints.map((t) => (
            <div
              key={t.title}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-800 flex items-center justify-center mb-4">
                <t.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {t.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
