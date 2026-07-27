import SectionHeader from "@/components/shared/SectionHeader";
import { MapPin, Users, FileCheck, Globe2, Headphones, Clock } from "lucide-react";

const trustPoints = [
  { icon: MapPin, title: "On the Ground in China", description: "Based in Shenzhen with team members across major manufacturing hubs." },
  { icon: Users, title: "Bilingual Specialists", description: "Native Chinese speakers fluent in English to bridge communication." },
  { icon: FileCheck, title: "Detailed Reporting", description: "Photos, checklists, and written reports for every verification and inspection." },
  { icon: Globe2, title: "Global Client Base", description: "We have served buyers from North America, Europe, Australia, and the Middle East." },
  { icon: Headphones, title: "Responsive Support", description: "Direct point of contact and regular updates throughout your project." },
  { icon: Clock, title: "Flexible Engagement", description: "One-time sourcing or ongoing partnership models to fit your needs." },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why Trust Us"
          title="Built for Reliable Overseas Procurement"
          description="Our structure, experience, and communication standards are designed to give you confidence in every order."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {trustPoints.map((point) => (
            <div key={point.title} className="bg-white rounded-xl p-6 md:p-8 border border-slate-100 shadow-sm">
              <div className="w-11 h-11 rounded-lg bg-teal-50 flex items-center justify-center mb-5">
                <point.icon className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{point.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
