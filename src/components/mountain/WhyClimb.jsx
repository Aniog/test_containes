import { Heart, Brain, Users, Compass, Sunrise, Shield } from 'lucide-react';

const reasons = [
  {
    icon: Heart,
    title: 'Physical Fitness',
    description: 'Climbing builds extraordinary cardiovascular endurance, leg strength, and full-body conditioning that no gym can replicate.',
    color: 'text-red-400',
    bg: 'bg-red-400/10',
  },
  {
    icon: Brain,
    title: 'Mental Resilience',
    description: 'The mountains teach patience, focus, and the ability to stay calm under pressure — skills that transform every area of your life.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
  {
    icon: Compass,
    title: 'Adventure & Exploration',
    description: 'Every mountain is a new world. Discover remote landscapes, ancient glaciers, and views that fewer than 1% of people will ever witness.',
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
  },
  {
    icon: Users,
    title: 'Community & Bonds',
    description: 'The climbing community is one of the most welcoming and supportive in the world. Shared hardship creates lifelong friendships.',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
  },
  {
    icon: Sunrise,
    title: 'Perspective & Clarity',
    description: 'Standing on a summit resets your perspective. The world\'s problems shrink, and what truly matters becomes crystal clear.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
  {
    icon: Shield,
    title: 'Self-Reliance',
    description: 'In the mountains, you learn to trust yourself completely. Problem-solving, navigation, and survival skills become second nature.',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
  },
];

const WhyClimb = () => (
  <section id="why" className="py-20 md:py-28 px-6 bg-slate-950 border-t border-slate-800">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="inline-block bg-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-sky-500/30">
          The Why
        </span>
        <h2 className="font-bold text-3xl md:text-4xl text-white mb-4">
          Why People Climb Mountains
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
          "Because it's there." — George Mallory. But there are many more reasons to answer the mountain's call.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason) => {
          const Icon = reason.icon;
          return (
            <div
              key={reason.title}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-sky-500 transition-colors"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${reason.bg} mb-4`}>
                <Icon className={`w-6 h-6 ${reason.color}`} />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">{reason.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyClimb;
