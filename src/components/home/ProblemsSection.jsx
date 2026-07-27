import { Link } from 'react-router-dom';
import { AlertTriangle, XCircle, DollarSign, Clock, Shield, CheckCircle2 } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    desc: 'Fake factories, middlemen posing as manufacturers, and suppliers who disappear after payment.',
  },
  {
    icon: XCircle,
    title: 'Quality Issues',
    desc: 'Products that don\'t match samples, substandard materials, and inconsistent production batches.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    desc: 'Unexpected fees, inflated shipping charges, and unclear pricing from unverified suppliers.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    desc: 'Missed deadlines, poor communication, and no visibility into production status.',
  },
];

const solutions = [
  'Factory audits before you commit',
  'Professional quality inspections',
  'Transparent pricing, no hidden fees',
  'Weekly production updates with photos',
];

export default function ProblemsSection() {
  return (
    <section className="py-20 bg-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Problems We Solve</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Sourcing from China comes with real risks. We eliminate them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-red-400 flex items-center gap-2 mb-6">
              <AlertTriangle className="w-5 h-5" />
              Common Challenges Without an Agent
            </h3>
            {problems.map((item) => (
              <div key={item.title} className="flex gap-4 bg-brand-800/50 rounded-lg p-4 border border-brand-700">
                <item.icon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-green-400 flex items-center gap-2 mb-6">
              <Shield className="w-5 h-5" />
              How SSourcing China Protects You
            </h3>
            {solutions.map((item) => (
              <div key={item} className="flex gap-4 bg-brand-800/50 rounded-lg p-4 border border-brand-700">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-white text-sm font-medium">{item}</p>
              </div>
            ))}

            <div className="bg-gradient-to-r from-brand-600 to-brand-500 rounded-xl p-6 mt-6">
              <h4 className="text-white font-semibold text-lg mb-2">Ready to source with confidence?</h4>
              <p className="text-brand-100 text-sm mb-4">Tell us about your product requirements and receive a free consultation within 24 hours.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-brand-600 font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-50 transition-colors text-sm">
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
