import { AlertTriangle, ShieldCheck, CheckCircle } from 'lucide-react';

const problems = [
  {
    problem: 'Unverified suppliers deliver poor quality or disappear with your deposit.',
    solution: 'We audit every factory in person before you place an order.',
  },
  {
    problem: 'Language barriers and cultural differences lead to costly misunderstandings.',
    solution: 'Our bilingual team bridges the gap with clear, accurate communication.',
  },
  {
    problem: 'No one is checking quality during production—defects are only found after shipping.',
    solution: 'We conduct in-line QC inspections at every critical production stage.',
  },
  {
    problem: 'Complex logistics, customs paperwork, and unexpected shipping costs eat into margins.',
    solution: 'We coordinate door-to-door shipping with transparent, all-in pricing.',
  },
  {
    problem: 'You lack the time or resources to travel to China and manage production on-site.',
    solution: 'We act as your on-the-ground team, sending weekly updates with photos and reports.',
  },
  {
    problem: 'Unclear contracts and weak IP protection put your designs and payments at risk.',
    solution: 'We structure secure agreements with NNN clauses, clear milestones, and escrow options.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-navy-900 to-navy-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-red-400/30 bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-300 mb-4">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Common Sourcing Challenges
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
            We Solve the Hardest Parts of China Sourcing
          </h2>
          <p className="mt-4 text-lg text-steel-400 leading-relaxed">
            Sourcing from China has real risks. Here is how we eliminate them.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((item, idx) => (
            <div key={idx} className="flex gap-4 rounded-xl bg-white/5 border border-white/10 p-5">
              <div className="shrink-0 mt-0.5">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-red-300 font-medium">{item.problem}</p>
                <div className="flex items-start gap-2 mt-3 pt-3 border-t border-white/10">
                  <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-emerald-300">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
