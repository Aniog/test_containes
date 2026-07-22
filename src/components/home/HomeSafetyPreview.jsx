import { Link } from 'react-router-dom';

const tips = [
  { icon: '📦', title: '提前储备物资', desc: '准备3天以上的食物、饮水和急救药品' },
  { icon: '📱', title: '关注气象预报', desc: '及时获取台风路径和强度最新信息' },
  { icon: '🏠', title: '加固门窗', desc: '检查并加固房屋门窗，清理阳台杂物' },
  { icon: '🚗', title: '避免外出', desc: '台风来临时尽量留在室内，避免驾车出行' },
];

export default function HomeSafetyPreview() {
  return (
    <section className="py-20 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-br from-[#112240] to-[#0d1b2a] border border-[#00b4d8]/20 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#e63946]/10 border border-[#e63946]/30 rounded-full px-3 py-1 mb-4">
                <span className="text-[#e63946] text-xs font-semibold">⚠ 防灾提示</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">台风来临前必做</h2>
              <p className="text-slate-400 text-lg">提前做好准备，将损失降到最低</p>
            </div>
            <Link
              to="/safety"
              className="shrink-0 bg-[#00b4d8] hover:bg-[#0096c7] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#00b4d8]/30 text-center"
            >
              查看完整指南
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tips.map((tip, i) => (
              <div
                key={i}
                className="bg-[#0a0f1e]/60 border border-slate-700/50 rounded-xl p-5 hover:border-[#00b4d8]/40 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h3 className="text-white font-semibold mb-2">{tip.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
