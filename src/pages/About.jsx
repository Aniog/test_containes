import { Award, Users, Target, Heart, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const milestones = [
  { year: '2009', event: '羽动天下正式成立，专注羽毛球装备销售' },
  { year: '2012', event: '成为尤尼克斯中国区授权经销商' },
  { year: '2015', event: '获得李宁羽毛球系列官方授权' },
  { year: '2018', event: '线上平台上线，服务全国球友' },
  { year: '2021', event: '累计服务超过50万名球友' },
  { year: '2024', event: '全面升级，提供更专业的装备咨询服务' },
];

const team = [
  {
    name: '陈志远',
    role: '创始人 & CEO',
    desc: '前国家队球员，从事羽毛球运动20年，致力于为每位球友提供最专业的装备建议。',
    avatar: 'https://i.pravatar.cc/120?img=33',
  },
  {
    name: '林晓梅',
    role: '产品总监',
    desc: '资深羽毛球教练，拥有10年装备研究经验，精通各大品牌产品线。',
    avatar: 'https://i.pravatar.cc/120?img=47',
  },
  {
    name: '王浩然',
    role: '客服总监',
    desc: '专业球拍穿线师，擅长根据球员特点推荐最适合的装备组合。',
    avatar: 'https://i.pravatar.cc/120?img=52',
  },
];

const stats = [
  { value: '15+', label: '年专业经验' },
  { value: '50万+', label: '服务球友' },
  { value: '200+', label: '品牌商品' },
  { value: '99%', label: '好评率' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
            关于我们
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">羽动天下</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            专注羽毛球装备15年，用专业与热情，为每一位球友提供最好的装备支持
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-1">{value}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的故事</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                2009年，前国家队球员陈志远怀揣着对羽毛球的热爱，在北京创立了羽动天下。
                起初只是一家小小的实体店，凭借专业的选购建议和真诚的服务态度，
                逐渐赢得了众多球友的信赖。
              </p>
              <p>
                多年来，我们始终坚持"正品保证、专业服务"的经营理念，
                与尤尼克斯、李宁等顶级品牌建立了深度合作关系，
                成为国内最受信赖的羽毛球装备专卖店之一。
              </p>
              <p>
                我们不仅仅是一家装备店，更是球友们的专业顾问。
                我们的每一位员工都是资深球员，能够根据您的技术水平、
                打球风格和预算，为您推荐最适合的装备。
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-6 bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors"
            >
              联系我们
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=300&h=300&fit=crop"
              alt="羽毛球装备"
              className="rounded-2xl w-full aspect-square object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop"
              alt="专业球拍"
              className="rounded-2xl w-full aspect-square object-cover mt-8"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">我们的价值观</h2>
            <p className="text-gray-500">驱动我们前行的核心理念</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Award, title: '品质至上', desc: '只售正品，每件商品都经过严格质检，假一赔十。', color: 'blue' },
              { icon: Users, title: '以客为本', desc: '倾听每位球友的需求，提供个性化的专业建议。', color: 'green' },
              { icon: Target, title: '专业精准', desc: '深耕羽毛球领域15年，专业知识助您做出最佳选择。', color: 'purple' },
              { icon: Heart, title: '热爱运动', desc: '我们是球友，更是同行者，共同享受羽毛球的乐趣。', color: 'red' },
            ].map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                  color === 'blue' ? 'bg-blue-100' : color === 'green' ? 'bg-green-100' : color === 'purple' ? 'bg-purple-100' : 'bg-red-100'
                }`}>
                  <Icon className={`w-7 h-7 ${
                    color === 'blue' ? 'text-blue-600' : color === 'green' ? 'text-green-600' : color === 'purple' ? 'text-purple-600' : 'text-red-600'
                  }`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">发展历程</h2>
          <p className="text-gray-500">15年专注，每一步都是成长</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-blue-100 hidden md:block" />
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={m.year} className={`flex flex-col md:flex-row items-center gap-4 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 inline-block max-w-sm">
                    <div className="text-blue-700 font-bold text-lg mb-1">{m.year}</div>
                    <div className="text-gray-700 text-sm">{m.event}</div>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-700 rounded-full border-4 border-white shadow-md flex-shrink-0 z-10 hidden md:block" />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">核心团队</h2>
            <p className="text-gray-500">专业的人，做专业的事</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
                />
                <h3 className="font-bold text-gray-900 text-lg mb-1">{member.name}</h3>
                <div className="text-blue-700 text-sm font-medium mb-3">{member.role}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">准备好开始了吗？</h2>
          <p className="text-blue-100 mb-6">浏览我们的专业装备，找到最适合你的那一款</p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-xl hover:bg-yellow-300 transition-colors"
          >
            立即选购
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
