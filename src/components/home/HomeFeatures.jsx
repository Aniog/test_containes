import { Shield, Zap, Award, Users, BookOpen, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: '服从训练赛',
    desc: '考验犬只对指令的精准执行，展示人犬之间深度信任与默契配合。',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Zap,
    title: '敏捷障碍赛',
    desc: '速度与精准的完美结合，犬只在复杂障碍场地中展现超凡运动能力。',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: Award,
    title: '护卫工作犬赛',
    desc: '模拟真实工作场景，评估犬只的保护本能、追踪能力与服从性。',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Users,
    title: '团队协作赛',
    desc: '多犬协同完成任务，考验驯犬师的团队指挥与犬只间的协调配合。',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: BookOpen,
    title: '幼犬培育赛',
    desc: '专为6-18月龄幼犬设计，鼓励科学早期训练，发掘潜力新星。',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Globe,
    title: '国际邀请赛',
    desc: '邀请亚太地区顶尖选手同台竞技，与国际接轨，提升整体水平。',
    color: 'bg-red-50 text-red-600',
  },
];

export default function HomeFeatures() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">赛事项目</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
            多元竞技项目，全面考验人犬默契
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            我们提供覆盖各年龄段、各犬种的专业竞技项目，无论您是初学者还是资深驯犬师，都能找到适合的舞台。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
              >
                <div className={`inline-flex p-3 rounded-xl ${f.color} mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
