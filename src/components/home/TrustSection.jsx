import { MapPin, Award, Building2, BadgeCheck, Eye, UserCheck, FileText } from 'lucide-react';
import { trustPoints } from '@/data/content';

const iconMap = {
  MapPin, Award, Building2, BadgeCheck, Eye, UserCheck,
};

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-ss-blue-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Why Work With SSourcing China
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            We build long-term partnerships based on trust, transparency, and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => {
            const Icon = iconMap[point.icon] || FileText;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-blue-200 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}