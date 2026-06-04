


import React from 'react'

const benefits = [
  {
    title: '提升心肺功能',
    desc: '羽毛球是一项高心肺要求的有氧运动，持续30分钟的比赛可消耗约300-400卡路里。',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: '增强身体协调',
    desc: '羽毛球需要手眼协调、快速反应和多方向移动，全面提升运动神经的灵敏性。',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
      </svg>
    ),
  },
  {
    title: '释放压力',
    desc: '激烈的对抗和快速跑动有助于释放工作与生活中的压力，让身心重获活力。',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    title: '社交互动',
    desc: '双打和俱乐部活动提供了绝佳的社交机会，与朋友或新伙伴一起享受运动乐趣。',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: '提高专注力',
    desc: '快节奏的对抗要求高度集中注意力，长期训练可显著提升思维敏锐度。',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
  {
    title: '终身运动',
    desc: '羽毛球适合各个年龄段的人参与，可以从青少年打到老年，是真正的终身运动。',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function BenefitsSection() {
  return (
    <section className="py-24 md:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-6">
            运动益处
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-display">
            为什么选择羽毛球
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            羽毛球不仅是一项竞技运动，更是一种全面提高生活品质的健康生活方式。
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group flex gap-5 p-6 rounded-2xl bg-slate-50 hover:bg-gradient-to-br hover:from-badminton-50 hover:to-badminton-100 border border-slate-100 hover:border-badminton-200 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-white text-badminton-600 shadow-sm group-hover:bg-badminton-600 group-hover:text-white transition-all duration-300">
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-badminton-700 transition-colors">{benefit.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 font-display">
            开始你的羽球之旅
          </h3>
          <p className="text-slate-500 mb-8 max-w-xl mx-auto">
            寻找附近的羽毛球场馆、加入俱乐部或报名课程，迈出成为羽球高手的第一步！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-badminton-600 hover:bg-badminton-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-badminton-600/25 text-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              查找附近场馆
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-badminton-300 hover:text-badminton-600 transition-all duration-300 text-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              了解更多
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


