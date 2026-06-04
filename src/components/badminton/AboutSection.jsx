
import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const highlights = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: '极速运动',
    desc: '羽毛球是世界上最快的球拍运动，扣杀速度可超过时速 300 公里',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
      </svg>
    ),
    title: '历史悠久',
    desc: '现代羽毛球起源于19世纪的英国，但类似运动可追溯至古代文明',
    color: 'from-badminton-400 to-badminton-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    title: '全民运动',
    desc: '全球超过 2 亿人参与羽毛球运动，是参与度最高的运动之一',
    color: 'from-sky-400 to-blue-500',
  },
]

export default function AboutSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-badminton-100 text-badminton-700 text-sm font-semibold rounded-full mb-6">
            了解羽毛球
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-display">
            关于羽毛球运动
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            羽毛球是一项集速度、力量、技巧和策略于一体的精彩运动。无论您是初学者还是资深选手，
            都能在这项运动中找到无穷的乐趣和挑战。
          </p>
        </div>

        {/* Info cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} text-white mb-6 shadow-lg`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* History timeline */}
        <div className="bg-gradient-to-br from-badminton-50 to-badminton-100 rounded-3xl p-10 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-badminton-900 mb-6 font-display">
                羽毛球的演变历程
              </h3>
              <div className="space-y-6">
                {[
                  { year: '1860s', event: '现代羽毛球诞生于英国，源自印度普纳的"普纳"游戏' },
                  { year: '1873', event: '巴德明顿公爵在庄园中推广，运动因此得名"Badminton"' },
                  { year: '1934', event: '国际羽毛球联合会(IBF)成立，后更名为世界羽联(BWF)' },
                  { year: '1992', event: '羽毛球正式成为巴塞罗那奥运会比赛项目' },
                  { year: '至今', event: '全球职业赛事体系完善，亚洲选手占据主导地位' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-badminton-500 rounded-full group-hover:scale-125 transition-transform" />
                      {idx < 4 && <div className="w-0.5 h-8 bg-badminton-200" />}
                    </div>
                    <div className="flex-1">
                      <span className="font-bold text-badminton-600">{item.year}</span>
                      <p className="text-slate-600 mt-1">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="relative rounded-2xl overflow-hidden h-80"
              data-strk-bg-id="about-history-8d4f2b"
              data-strk-bg="[about-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            >
              <div className="absolute inset-0 bg-badminton-800/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

