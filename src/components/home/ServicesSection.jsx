import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, CalendarCheck, Ship, ArrowRight, FileText } from 'lucide-react';
import { services } from '@/data/content';

const iconMap = {
  Search,
  ShieldCheck,
  ClipboardCheck,
  CalendarCheck,
  Ship,
};

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-ss-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-ss-text tracking-tight mb-4">
            Our Sourcing Services
          </h2>
          <p className="text-lg text-ss-body max-w-2xl mx-auto">
            End-to-end sourcing support from supplier discovery to final delivery, all managed by our China-based team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || FileText;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-ss-border p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-ss-blue" />
                </div>
                <h3 className="text-lg font-semibold text-ss-text mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-ss-body leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-5">
                  {service.details.slice(0, 4).map((detail, i) => (
                    <li key={i} className="flex items-start text-sm text-ss-body">
                      <span className="w-1.5 h-1.5 bg-ss-blue rounded-full mt-2 mr-2.5 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center text-sm font-medium text-ss-blue hover:text-ss-blue-light transition-colors"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}