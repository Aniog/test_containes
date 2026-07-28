import { AlertTriangle, Search, DollarSign, Clock, XCircle, Languages } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    desc: 'Stop dealing with middlemen posing as factories. We verify every supplier on-site before you commit.',
  },
  {
    icon: Search,
    title: 'Lack of Market Knowledge',
    desc: 'Don\'t waste time searching Alibaba blindly. We know the industrial clusters and find the right manufacturers.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs & Overpricing',
    desc: 'Avoid inflated quotes for foreign buyers. We negotiate local prices and ensure transparent billing.',
  },
  {
    icon: XCircle,
    title: 'Quality Issues',
    desc: 'Prevent defective shipments. Our QC inspectors check your products at every critical production stage.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    desc: 'No more missed deadlines. We follow up production weekly and report real-time progress to you.',
  },
  {
    icon: Languages,
    title: 'Communication Barriers',
    desc: 'Bridge the language gap. Our bilingual team ensures nothing gets lost in translation with factories.',
  },
];

const ProblemsWeSolve = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-heading">Problems We Solve</h2>
          <p className="section-subheading">
            Sourcing from China comes with real challenges. We eliminate the risks so you can import with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-200 hover:shadow-md transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                <problem.icon className="w-5 h-5 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">{problem.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{problem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsWeSolve;
