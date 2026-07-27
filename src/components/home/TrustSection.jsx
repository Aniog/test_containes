import { Globe, Users, Award, Clock } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const stats = [
  { icon: Globe, value: "30+", label: "Countries served" },
  { icon: Users, value: "1,200+", label: "Suppliers verified" },
  { icon: Award, value: "12+", label: "Years in sourcing" },
  { icon: Clock, value: "48h", label: "Initial quote turnaround" },
];

const trustPoints = [
  "Independent, on-the-ground team in Shenzhen and Yiwu",
  "No hidden commissions or factory kickbacks",
  "Clear reporting with photos, videos, and documents",
  "Customized sourcing plans for startups to enterprise buyers",
];

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose SSourcing China"
          title="A partner you can rely on"
          description="Our team works directly from China, giving you the local presence and oversight that remote buying cannot match."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center border border-slate-200 shadow-sm">
              <stat.icon className="w-8 h-8 text-blue-700 mx-auto mb-3" />
              <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
              <p className="text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                {index + 1}
              </div>
              <p className="text-slate-700 font-medium">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
