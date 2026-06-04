

import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const rules = [
  {
    title: '计分规则',
    items: [
      '每场比赛采用三局两胜制',
      '每局比赛先得 21 分者获胜',
      '20 平后需连续领先 2 分方可获胜',
      '29 平后先得 30 分者获胜',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    bg: 'from-emerald-500 to-badminton-600',
  },
  {
    title: '发球规则',
    items: [
      '发球时拍框必须指向下方（低于腰部）',
      '发球须发至对方发球区内',
      '双打发球区域比分区域略短',
      '得分方获得下一回合发球权',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    bg: 'from-court-500 to-court-600',
  },
  {
    title: '场地规则',
    items: [
      '单打场地尺寸：13.40m x 5.18m',
      '双打场地尺寸：13.40m x 6.10m',
      '网高：网柱处 1.55m，中心 1.524m',
      '场地线宽 40mm，使用白色或黄色标记',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    bg: 'from-purple-500 to-shuttle-600',
  },
]

export default function RulesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="rules" ref={containerRef} className="py-24 md:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-feather-100 text-feather-700 text-sm font-semibold rounded-full mb-6">
            规则指南
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-display">
            比赛基本规则
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            了解羽毛球的基本规则是参与这项运动的第一步。以下是你需要知道的比赛核心规则。
          </p>
        </div>

        {/* Rules grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {rules.map((rule, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${rule.bg} text-white mb-6 shadow-lg`}>
                {rule.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-5">{rule.title}</h3>
              <ul className="space-y-3">
                {rule.items.map((item, ii) => (
                  <li key={ii} className="flex items-start gap-3 text-slate-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-badminton-400 rounded-full mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Extra tips */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200">
          <div className="flex items-start gap-4">
            <svg className="w-6 h-6 text-badminton-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">裁判手势</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                在正式比赛中，裁判使用标准手势来宣判得分、出界、发球违例等情况。
                比赛中若对裁判判罚有异议，可以提出挑战（国际顶级赛事使用鹰眼系统）。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




