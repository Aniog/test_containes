import { Shield, Users, Globe, Clock, Award, TrendingUp } from "lucide-react";

const trustPoints = [
  { icon: Users, stat: "200+", label: "Buyers Served" },
  { icon: Globe, stat: "35", label: "Countries" },
  { icon: Shield, stat: "100%", label: "Supplier Verification" },
  { icon: Clock, stat: "10+", label: "Years Experience" },
  { icon: Award, stat: "5,000+", label: "Orders Managed" },
  { icon: TrendingUp, stat: "98%", label: "Client Retention" },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Why Trust Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Built on Transparency & Results
          </h2>
          <p className="text-slate-300 text-lg">
            We have built long-term relationships with buyers who rely on us as an extension of their procurement team.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustPoints.map((point) => (
            <div key={point.label} className="text-center">
              <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mx-auto mb-3">
                <point.icon className="w-6 h-6 text-amber-400" />
              </div>
              <p className="text-2xl md:text-3xl font-extrabold text-white mb-1">{point.stat}</p>
              <p className="text-sm text-slate-400">{point.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
