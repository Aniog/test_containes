import { AlertTriangle, XCircle } from 'lucide-react';

const problems = [
  'Finding trustworthy suppliers among thousands of options',
  'Language barriers and slow communication with factories',
  'No way to verify factory credentials or production capacity',
  'Quality issues discovered only after goods arrive',
  'Production delays that hurt your inventory planning',
  'Hidden costs and unexpected fees throughout the process',
  'Complicated customs and shipping paperwork',
  'Difficulty resolving disputes from overseas',
];

export default function ProblemsSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              Common sourcing challenges
            </div>
            <h2 id="problems-title" className="text-3xl lg:text-4xl font-bold text-white mb-6">
              The Problems We Solve for Buyers
            </h2>
            <p id="problems-subtitle" className="text-white/70 text-lg leading-relaxed">
              Sourcing from China can be risky without local expertise. We eliminate the common pain points that cost buyers time, money, and reputation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/5 rounded-lg p-4 border border-white/10"
              >
                <XCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-white/80 leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
