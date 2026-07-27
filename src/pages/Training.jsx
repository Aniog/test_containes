import { useEffect, useRef, useState } from 'react';
import { Clock, Users, BarChart2, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const levels = [
  {
    id: 'level-beginner',
    label: '初学者',
    color: 'bg-green-100 text-green-700 border-green-200',
    activeColor: 'bg-forest text-white',
  },
  {
    id: 'level-intermediate',
    label: '中级',
    color: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    activeColor: 'bg-gold text-forest-dark',
  },
  {
    id: 'level-advanced',
    label: '高级',
    color: 'bg-red-100 text-red-700 border-red-200',
    activeColor: 'bg-forest-dark text-gold',
  },
];

const plans = {
  'level-beginner': {
    title: '初学者训练计划',
    duration: '8周',
    sessions: '每周3次',
    goal: '掌握基本姿势和射箭流程',
    weeks: [
      {
        week: '第1-2周',
        focus: '基础姿势',
        tasks: ['学习正确站姿', '练习握弓方式', '无箭干拉练习', '了解安全规则'],
      },
      {
        week: '第3-4周',
        focus: '搭箭与拉弓',
        tasks: ['学习搭箭技巧', '练习拉弓动作', '建立锚点意识', '短距离射击（10米）'],
      },
      {
        week: '第5-6周',
        focus: '瞄准与撒放',
        tasks: ['学习瞄准方法', '练习自然撒放', '增加射击距离（18米）', '记录成绩'],
      },
      {
        week: '第7-8周',
        focus: '综合练习',
        tasks: ['完整流程练习', '提高一致性', '参加入门比赛', '制定进阶计划'],
      },
    ],
    imgId: 'plan-beginner-img-4a2c8f',
    titleId: 'plan-beginner-title',
    descId: 'plan-beginner-desc',
  },
  'level-intermediate': {
    title: '中级训练计划',
    duration: '12周',
    sessions: '每周4次',
    goal: '提升精准度和稳定性',
    weeks: [
      {
        week: '第1-3周',
        focus: '技术精化',
        tasks: ['分析射箭视频', '纠正技术缺陷', '增强背部肌肉', '30米距离训练'],
      },
      {
        week: '第4-6周',
        focus: '距离提升',
        tasks: ['50米距离训练', '风向判断练习', '调整瞄准器', '提高射击节奏'],
      },
      {
        week: '第7-9周',
        focus: '心理训练',
        tasks: ['压力下射击练习', '模拟比赛环境', '呼吸控制训练', '专注力训练'],
      },
      {
        week: '第10-12周',
        focus: '赛前准备',
        tasks: ['70米距离训练', '参加地区比赛', '总结技术问题', '制定高级计划'],
      },
    ],
    imgId: 'plan-intermediate-img-7e3b1d',
    titleId: 'plan-intermediate-title',
    descId: 'plan-intermediate-desc',
  },
  'level-advanced': {
    title: '高级训练计划',
    duration: '16周',
    sessions: '每周5-6次',
    goal: '冲击竞技水平，备战重要赛事',
    weeks: [
      {
        week: '第1-4周',
        focus: '体能强化',
        tasks: ['专项体能训练', '核心力量训练', '柔韧性训练', '技术细节优化'],
      },
      {
        week: '第5-8周',
        focus: '高强度训练',
        tasks: ['大量程训练', '不同天气条件练习', '心理韧性训练', '数据分析'],
      },
      {
        week: '第9-12周',
        focus: '赛事模拟',
        tasks: ['完整比赛流程模拟', '参加多场比赛', '与高水平选手交流', '调整竞技状态'],
      },
      {
        week: '第13-16周',
        focus: '巅峰备战',
        tasks: ['减量训练', '保持最佳状态', '心理调适', '目标赛事冲刺'],
      },
    ],
    imgId: 'plan-advanced-img-2f6c9a',
    titleId: 'plan-advanced-title',
    descId: 'plan-advanced-desc',
  },
};

const tips = [
  {
    icon: Clock,
    title: '坚持规律训练',
    desc: '每次训练保持固定时长，避免过度疲劳，规律性比强度更重要。',
  },
  {
    icon: Users,
    title: '寻找专业教练',
    desc: '专业教练能及时发现并纠正技术问题，避免形成错误习惯。',
  },
  {
    icon: BarChart2,
    title: '记录训练数据',
    desc: '记录每次训练的成绩和感受，通过数据分析找到提升空间。',
  },
  {
    icon: CheckCircle,
    title: '注重恢复',
    desc: '充足的休息和恢复是提升成绩的重要组成部分，避免过度训练。',
  },
];

const Training = () => {
  const containerRef = useRef(null);
  const [activeLevel, setActiveLevel] = useState('level-beginner');

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeLevel]);

  const plan = plans[activeLevel];

  return (
    <main ref={containerRef} className="bg-surface min-h-screen">
      <section className="relative py-32 px-4 md:px-8 bg-forest-dark overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-30"
          data-strk-bg-id="training-hero-bg-9b4e2c"
          data-strk-bg="[training-hero-subtitle] [training-hero-title] archery training practice"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 z-10 bg-forest-dark/70" />
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">训练指南</span>
          <h1 id="training-hero-title" className="font-serif text-4xl md:text-6xl font-bold text-text-light mt-4 mb-6">
            从零到精通
          </h1>
          <p id="training-hero-subtitle" className="text-text-light/80 text-lg leading-relaxed max-w-2xl mx-auto">
            无论你是刚接触射箭的新手，还是寻求突破的专业选手，这里都有适合你的训练计划
          </p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-4">分级训练计划</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-8" />

            <div className="flex flex-wrap justify-center gap-3">
              {levels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setActiveLevel(level.id)}
                  className={`px-8 py-3 rounded-full font-semibold text-sm border transition-all duration-200 ${
                    activeLevel === level.id ? level.activeColor + ' border-transparent shadow-md' : level.color
                  }`}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl overflow-hidden border border-border-green shadow-md">
                <div className="h-52 overflow-hidden">
                  <img
                    alt={plan.title}
                    data-strk-img-id={plan.imgId}
                    data-strk-img={`[${plan.descId}] [${plan.titleId}] archery training`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={plan.titleId} className="font-serif text-xl font-bold text-text-primary mb-4">
                    {plan.title}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="text-text-secondary text-sm">训练周期：{plan.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="text-text-secondary text-sm">训练频率：{plan.sessions}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      <span id={plan.descId} className="text-text-secondary text-sm">目标：{plan.goal}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {plan.weeks.map((week, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-border-green shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-gold font-bold text-xs">{i + 1}</span>
                    </div>
                    <div>
                      <div className="text-xs text-text-secondary">{week.week}</div>
                      <div className="font-semibold text-text-primary text-sm">{week.focus}</div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {week.tasks.map((task, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-forest">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-light mb-4">训练小贴士</h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, i) => {
              const Icon = tip.icon;
              return (
                <div
                  key={i}
                  className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-text-light mb-3">{tip.title}</h3>
                  <p className="text-text-light/70 text-sm leading-relaxed">{tip.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Training;
