import { Brain, Wand2, BarChart3, Globe, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Design',
    description:
      'Our AI analyzes your brand and industry to generate beautiful, conversion-optimized layouts tailored just for you.',
    color: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-900/40',
  },
  {
    icon: Wand2,
    title: 'Smart Content Generation',
    description:
      'Generate compelling copy, headlines, and CTAs instantly. The AI writes in your brand voice and adapts to your audience.',
    color: 'from-indigo-500 to-blue-600',
    glow: 'shadow-indigo-900/40',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description:
      'Track visitor behavior, conversions, and engagement with AI-driven insights that tell you exactly what to improve.',
    color: 'from-purple-500 to-pink-600',
    glow: 'shadow-purple-900/40',
  },
  {
    icon: Globe,
    title: 'Global SEO Optimization',
    description:
      'Automatically optimize your site for search engines in any language. Rank higher with AI-generated meta tags and structure.',
    color: 'from-cyan-500 to-teal-600',
    glow: 'shadow-cyan-900/40',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Bank-grade encryption, automatic backups, and AI-powered threat detection keep your site and data safe 24/7.',
    color: 'from-emerald-500 to-green-600',
    glow: 'shadow-emerald-900/40',
  },
  {
    icon: Zap,
    title: 'Lightning Performance',
    description:
      'AI-optimized assets, smart caching, and edge delivery ensure your site loads in under a second, anywhere in the world.',
    color: 'from-amber-500 to-orange-600',
    glow: 'shadow-amber-900/40',
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-gray-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            AI Site combines powerful AI tools into one seamless platform — so you can focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description, color, glow }) => (
            <div
              key={title}
              className="group bg-gray-900 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg ${glow}`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
