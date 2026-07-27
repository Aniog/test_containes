import { AlertTriangle, CheckCircle } from 'lucide-react';

const problems = [
  {
    problem: 'Receiving goods that don\'t match the sample',
    solution: 'We conduct pre-shipment inspections and mid-production checks to catch quality issues before goods leave the factory.',
  },
  {
    problem: 'Dealing with unreliable or fraudulent suppliers',
    solution: 'Every supplier in our network is verified through on-site audits, license checks, and reference reviews.',
  },
  {
    problem: 'Communication barriers and time zone differences',
    solution: 'Our bilingual team handles all supplier communication in Chinese, ensuring nothing gets lost in translation.',
  },
  {
    problem: 'Unexpected delays and missed deadlines',
    solution: 'We monitor production schedules and provide regular status updates so you always know where your order stands.',
  },
  {
    problem: 'Overpaying due to lack of market knowledge',
    solution: 'We negotiate pricing based on deep knowledge of Chinese manufacturing costs and supplier benchmarks.',
  },
  {
    problem: 'Complex shipping and customs documentation',
    solution: 'We coordinate with freight forwarders and prepare all required export documents to ensure smooth customs clearance.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">Why Use a Sourcing Agent</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mt-2 mb-4">
            Common Sourcing Problems We Solve
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Importing from China without local support carries real risks. Here's how we help you avoid the most common pitfalls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-brand-border shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                </div>
                <p className="text-brand-text font-medium text-sm leading-relaxed">{item.problem}</p>
              </div>
              <div className="flex items-start gap-4 pl-0 border-t border-brand-border pt-4">
                <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-brand-muted text-sm leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
