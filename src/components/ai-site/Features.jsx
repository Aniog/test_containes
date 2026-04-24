import { Brain, Wand2, BarChart3, Shield, Globe, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Content Generation',
    description: 'Generate high-quality copy, headlines, and blog posts in seconds using our advanced language models.',
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    icon: Wand2,
    title: 'Smart Design Assistant',
    description: 'Let AI suggest layouts, color palettes, and typography that match your brand identity perfectly.',
    gradient: 'from-fuchsia-500 to-pink-500',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Understand visitor behavior and get AI-powered recommendations to boost conversions.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, SOC 2 compliance, and real-time threat detection keep your data safe.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Deploy to 200+ edge locations worldwide for blazing-fast load times no matter where your users are.',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: Zap,
    title: 'One-Click Automation',
    description: 'Automate SEO, social sharing, email campaigns, and more with a single toggle.',
    gradient: 'from-violet-500 to-cyan-500',
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-[#050816] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Features</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              grow faster
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A complete AI-powered toolkit designed to help you build, launch, and scale your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/8 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
