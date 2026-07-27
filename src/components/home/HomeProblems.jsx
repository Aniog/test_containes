import { AlertTriangle, Clock, Search, ShieldOff, DollarSign, Globe } from 'lucide-react';

const problems = [
  {
    icon: Search,
    problem: 'Can\'t find reliable suppliers',
    solution:
      'We maintain a vetted network of manufacturers across China and conduct due diligence before making any introduction.',
  },
  {
    icon: ShieldOff,
    problem: 'Worried about factory fraud',
    solution:
      'Our on-site factory audits verify business registration, production capacity, and compliance before you place an order.',
  },
  {
    icon: AlertTriangle,
    problem: 'Received poor-quality goods',
    solution:
      'Our QC team inspects products against your specifications at multiple stages — before, during, and after production.',
  },
  {
    icon: Clock,
    problem: 'Production delays and missed deadlines',
    solution:
      'We follow up with factories at every milestone and escalate issues early so your timeline stays on track.',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying due to language barriers',
    solution:
      'Our bilingual team negotiates directly with suppliers in Mandarin to secure competitive pricing and fair terms.',
  },
  {
    icon: Globe,
    problem: 'No visibility into the supply chain',
    solution:
      'We provide regular written updates, photos, and reports so you always know the status of your order.',
  },
];

export default function HomeProblems() {
  return (
    <section className="section-padding bg-brand-light">
      <div className="container-xl">
        <div className="text-center mb-12">
          <span className="section-label">Why Buyers Work With Us</span>
          <h2 className="section-heading">Problems We Help You Avoid</h2>
          <p className="section-subtext max-w-2xl mx-auto">
            Sourcing from China without local support carries real risks. Here's how we address the most common challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map(({ icon: Icon, problem, solution }) => (
            <div key={problem} className="bg-white rounded-xl p-6 border border-brand-border">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand-red" />
                </div>
                <h3 className="font-semibold text-brand-dark text-sm leading-snug pt-1.5">{problem}</h3>
              </div>
              <div className="pl-12">
                <p className="text-brand-mid text-sm leading-relaxed">{solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
