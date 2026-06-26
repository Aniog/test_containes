import { Shield, Globe, Users, TrendingUp, Award, Headphones } from "lucide-react";

const stats = [
  { icon: Globe, value: "12+", label: "Years in Sourcing" },
  { icon: Users, value: "850+", label: "Buyers Served" },
  { icon: Shield, value: "3,200+", label: "Factory Audits" },
  { icon: TrendingUp, value: "$120M+", label: "Goods Sourced" },
];

const trustPoints = [
  {
    icon: Shield,
    title: "On-the-Ground Team",
    description:
      "Our bilingual staff is physically located in Shanghai, Guangzhou, and Yiwu, visiting factories weekly.",
  },
  {
    icon: Award,
    title: "Industry Experience",
    description:
      "Over a decade of experience across electronics, textiles, machinery, packaging, and consumer goods.",
  },
  {
    icon: Headphones,
    title: "Dedicated Account Manager",
    description:
      "Every client gets a single point of contact who understands your product and timeline.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Why Buyers Trust Us
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            We have built long-term relationships with buyers across North America, Europe, and Australia.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-surface border border-border-light"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <div className="text-2xl lg:text-3xl font-extrabold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="p-6 rounded-xl bg-surface border border-border-light"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
