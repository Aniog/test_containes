import { AlertTriangle, Eye, Handshake, Clock } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    desc: 'Many overseas buyers struggle to identify trustworthy Chinese suppliers and end up working with middlemen or unqualified factories.',
  },
  {
    icon: Eye,
    title: 'No Visibility',
    desc: 'Without someone on the ground, it is difficult to verify factory conditions, monitor production, or catch quality issues early.',
  },
  {
    icon: Handshake,
    title: 'Communication Barriers',
    desc: 'Language differences, time zones, and cultural gaps create misunderstandings that lead to delays, defects, and disputes.',
  },
  {
    icon: Clock,
    title: 'Wasted Time & Cost',
    desc: 'Sourcing without local expertise leads to long lead times, unexpected costs, rework, and supply chain disruptions.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-wide rounded-full mb-4">
              Common Challenges
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Sourcing from China Is Hard Without Local Help
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We have seen the same problems cost businesses time, money, and
              reputation. Here is how we solve them.
            </p>

            <div className="space-y-6">
              {problems.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                    <p.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy mb-1">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-navy rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white mb-6">
              How We Solve These Problems
            </h3>
            <div className="space-y-5">
              {[
                {
                  title: 'Verified Supplier Network',
                  desc: 'We maintain relationships with pre-vetted factories across multiple industries.',
                },
                {
                  title: 'On-the-Ground Presence',
                  desc: 'Our team visits factories in person, conducts audits, and monitors production directly.',
                },
                {
                  title: 'Bilingual Communication',
                  desc: 'Fluent in English and Chinese, we bridge language and cultural gaps seamlessly.',
                },
                {
                  title: 'Structured Process',
                  desc: 'Our 7-step workflow minimizes surprises and keeps your project on track.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-6 h-6 bg-brand/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-brand rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
