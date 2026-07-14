import { Zap, Shield, MessageSquare, Clock } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Easy Communication',
    description:
      'Send us a message in seconds. Our contact form is simple, fast, and mobile-friendly.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description:
      'We respond to every inquiry within 24 hours. Your time matters to us.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
  },
  {
    icon: Shield,
    title: 'Your Data is Safe',
    description:
      'We respect your privacy. Your contact information is never shared with third parties.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Zap,
    title: 'Instant Confirmation',
    description:
      'Get immediate feedback when your message is received. No guessing if it went through.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why reach out to us?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We make it easy to connect. Here's what you can expect when you get
            in touch.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bg} mb-4`}
                >
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
