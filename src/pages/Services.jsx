import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { services } from '../data/content';

const Services = () => {
  return (
    <>
      <PageHeader
        breadcrumb="Services"
        eyebrow="Services"
        title="A full sourcing service for global B2B buyers"
        description="Use the services you need, when you need them. We work as your extended team in China — from supplier search to door-to-door delivery."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  id={s.id}
                  className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-slate-900">{s.title}</h2>
                      <p className="mt-2 text-base text-slate-600 leading-relaxed">{s.summary}</p>
                      <ul className="mt-4 space-y-2">
                        {s.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Need a custom sourcing plan?
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed">
            Tell us your category, target price, and quantity. We will scope a service plan that fits your project.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
