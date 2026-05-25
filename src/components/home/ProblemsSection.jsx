import { AlertTriangle, CheckCircle } from 'lucide-react';

const problems = [
  {
    problem: 'Receiving goods that don\'t match the sample',
    solution: 'We conduct pre-shipment inspections and mid-production checks against your approved sample.',
  },
  {
    problem: 'Dealing with unreliable or fraudulent suppliers',
    solution: 'Every supplier goes through our factory audit process before we recommend them to you.',
  },
  {
    problem: 'Language and communication barriers',
    solution: 'Our bilingual team handles all supplier communication in Chinese and English on your behalf.',
  },
  {
    problem: 'Delayed shipments and missed deadlines',
    solution: 'We monitor production timelines and escalate issues early to keep your orders on schedule.',
  },
  {
    problem: 'Overpaying due to lack of market knowledge',
    solution: 'We negotiate pricing using our local market knowledge and long-term supplier relationships.',
  },
  {
    problem: 'Confusion around customs, duties, and shipping',
    solution: 'We coordinate with freight forwarders and prepare all required documentation for smooth customs clearance.',
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Why Use a Sourcing Agent</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-3">
            Problems We Solve for Importers
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-5" />
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Importing from China comes with real risks. Here's how we protect your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((item, i) => (
            <div key={i} className="bg-bg-light rounded-xl border border-border p-6">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-text-primary font-semibold text-sm">{item.problem}</p>
              </div>
              <div className="flex items-start gap-3 pl-8">
                <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                <p className="text-text-secondary text-sm leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
