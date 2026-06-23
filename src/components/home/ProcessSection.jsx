import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { processSteps } from '../../data/content';

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sourcing process"
          title="A clear, six-step path from inquiry to delivery"
          description="No surprises. We use a structured workflow so you always know what is happening at every stage of your order."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white rounded-xl border border-slate-200 p-6 md:p-7"
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-3xl font-bold text-blue-600">{step.number}</span>
                <span className="h-px flex-1 bg-slate-200"></span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
          >
            Read the full process
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
