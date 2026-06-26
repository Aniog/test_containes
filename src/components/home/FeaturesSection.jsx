import { Settings, Zap, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Precision Engineering",
    description:
      "Advanced CNC-controlled folding mechanisms ensure every bend meets exact specifications with micron-level accuracy.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Hydraulic and servo-electric drives deliver rapid cycle times without compromising on quality or consistency.",
  },
  {
    icon: Clock,
    title: "Built to Last",
    description:
      "Heavy-duty steel frames and premium components provide decades of reliable operation in demanding industrial environments.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description:
      "Our global service network ensures quick response times, on-site training, and comprehensive maintenance programs.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold-600 text-sm font-semibold tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3">
            Engineering Excellence in Every Machine
          </h2>
          <p className="text-slate-500 mt-4 leading-relaxed">
            Our commitment to quality, innovation, and customer satisfaction sets us apart in the sheet metal machinery industry.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl border border-slate-100 hover:border-gold-300 hover:shadow-lg transition-all duration-300 bg-slate-50/50"
            >
              <div className="w-12 h-12 rounded-lg bg-navy-900 flex items-center justify-center mb-5 group-hover:bg-gold-500 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-gold-400 group-hover:text-navy-900 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
