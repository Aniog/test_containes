import { Award, Users, Globe, FileCheck, Headphones, Lock } from 'lucide-react';

const trustPoints = [
  {
    icon: Globe,
    title: 'Based in China, Serving the World',
    description: 'Our team is on the ground in Guangzhou and Yiwu — the heart of Chinese manufacturing.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Reporting',
    description: 'Every factory audit and QC inspection comes with a detailed written report, photos, and video evidence.',
  },
  {
    icon: Users,
    title: 'Bilingual Team',
    description: 'We communicate fluently in English and Chinese, eliminating misunderstandings with suppliers.',
  },
  {
    icon: Award,
    title: 'No Hidden Fees',
    description: 'Our pricing is clear and upfront. You know exactly what you\'re paying for before we start.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Account Manager',
    description: 'Every client gets a single point of contact who knows your business and your requirements.',
  },
  {
    icon: Lock,
    title: 'Confidentiality Guaranteed',
    description: 'We sign NDAs and never share your product designs or supplier information with third parties.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">Why SSourcing China</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Built on Transparency and Results
          </h2>
          <p className="text-slate-500 text-lg">
            We operate with the same standards we'd expect if we were the buyer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="flex gap-4 p-6 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm mb-1">{point.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{point.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
