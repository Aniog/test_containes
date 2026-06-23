import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { services } from '../../data/content';

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="End-to-end sourcing services from China"
          description="From the first supplier search to the final shipment, we cover every step so you can focus on growing your business."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.summary}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
          >
            See all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
