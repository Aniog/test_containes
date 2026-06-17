import { AlertTriangle, CheckCircle } from 'lucide-react';

const problems = [
  {
    problem: 'Received goods that don\'t match the sample',
    solution: 'Pre-shipment inspection with detailed photo/video reports before payment release.',
  },
  {
    problem: 'Supplier disappeared after deposit',
    solution: 'We only work with verified factories and use milestone-based payment structures.',
  },
  {
    problem: 'No visibility into production progress',
    solution: 'Regular production updates and on-site follow-up visits keep you informed.',
  },
  {
    problem: 'Delayed shipments with no explanation',
    solution: 'Proactive timeline management and direct communication with factory floor teams.',
  },
  {
    problem: 'Language and cultural barriers',
    solution: 'Our bilingual team handles all supplier communication in Chinese on your behalf.',
  },
  {
    problem: 'Overpaying due to lack of market knowledge',
    solution: 'We benchmark prices across multiple suppliers and negotiate competitive terms.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="section-padding bg-brand-bg-alt">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-brand-red text-sm font-semibold uppercase tracking-widest">Why Work With Us</span>
          <h2 className="section-title mt-2">Problems We Solve</h2>
          <p className="section-subtitle">
            Importing from China comes with real risks. Here's how SSourcing China protects your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((item, i) => (
            <div key={i} className="card-base p-6">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 font-medium text-sm">{item.problem}</p>
              </div>
              <div className="flex items-start gap-3 pl-8">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600 text-sm leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
