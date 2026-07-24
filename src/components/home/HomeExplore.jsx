import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Clock } from 'lucide-react';

const sections = [
  {
    icon: Users,
    title: '获奖者名单',
    desc: '浏览历届菲尔兹奖得主，了解他们的研究领域与杰出成就。',
    to: '/laureates',
    label: '查看名单',
  },
  {
    icon: Clock,
    title: '历史沿革',
    desc: '从1936年首届颁奖至今，菲尔兹奖走过了近九十年的辉煌历程。',
    to: '/history',
    label: '了解历史',
  },
  {
    icon: Award,
    title: '奖章介绍',
    desc: '精美的金质奖章背后，蕴含着深刻的数学意象与人文精神。',
    to: '/medal',
    label: '探索奖章',
  },
  {
    icon: BookOpen,
    title: '数学领域',
    desc: '代数几何、数论、拓扑学……菲尔兹奖涵盖了数学的广阔疆域。',
    to: '/laureates',
    label: '探索领域',
  },
];

export default function HomeExplore() {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-3">Explore</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
            深入探索
          </h2>
          <p className="text-navy/60 max-w-xl mx-auto">
            从多个维度了解菲尔兹奖的方方面面
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map(({ icon: Icon, title, desc, to, label }) => (
            <div
              key={title}
              className="group p-6 rounded-xl border border-amber-200/40 bg-ivory-light hover:border-gold/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif font-bold text-navy text-lg mb-3">{title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed mb-5">{desc}</p>
              <Link
                to={to}
                className="text-gold text-sm font-semibold hover:text-gold-light transition-colors inline-flex items-center gap-1"
              >
                {label} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
