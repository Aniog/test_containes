


import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const tournaments = [
  {
    name: '奥运会羽毛球赛',
    desc: '自1992年起成为奥运正式项目，设男单、女单、男双、女双和混双五项金牌。',
    frequency: '每四年一届',
    next: '2028 洛杉矶',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: '世界羽毛球锦标赛',
    desc: 'BWF 最高级别个人赛事，每年举行一次（奥运年除外），汇集全球顶尖选手。',
    frequency: '每年一届',
    next: '2026 待定',
    color: 'from-badminton-500 to-badminton-700',
  },
  {
    name: '全英羽毛球公开赛',
    desc: '历史最悠久的羽毛球赛事，始于1899年，被誉为"羽毛球界的温布尔登"。',
    frequency: '每年一届',
    next: '2027 伯明翰',
    color: 'from-court-500 to-court-700',
  },
  {
    name: '汤姆斯杯 & 尤伯杯',
    desc: '汤姆斯杯为男子团体世界锦标赛，尤伯杯为女子团体世界锦标赛，每两年举办一次。',
    frequency: '每两年一届',
    next: '2026 待定',
    color: 'from-feather-500 to-amber-600',
  },
  {
    name: '苏迪曼杯',
    desc: '世界羽毛球混合团体锦标赛，以印尼羽毛球传奇迪克·苏迪曼命名。',
    frequency: '每两年一届',
    next: '2027 待定',
    color: 'from-shuttle-500 to-purple-600',
  },
  {
    name: 'BWF世界巡回赛',
    desc: '覆盖全球的顶级巡回赛体系，包括中国公开赛、印尼公开赛、马来西亚公开赛等。',
    frequency: '每年多站',
    next: '全年进行',
    color: 'from-sky-500 to-blue-600',
  },
]

export default function TournamentsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="tournaments" ref={containerRef} className="py-24 md:py-32 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-700 text-sm font-semibold rounded-full mb-6">
            赛事资讯
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-display">
            顶级赛事一览
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            羽毛球拥有丰富的国际赛事体系，从奥运会的巅峰对决到全年巡回赛的激烈角逐，每场比赛都精彩纷呈。
          </p>
        </div>

        {/* Tournaments grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tour, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-6 shadow-md shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Color accent top */}
              <div className={`h-1.5 bg-gradient-to-r ${tour.color} rounded-t-2xl absolute top-0 left-0 right-0`}></div>

              <div className="pt-2">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{tour.frequency}</span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r ${tour.color} text-white`}>
                    {tour.next}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-3">{tour.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{tour.desc}</p>

                <div className="flex items-center gap-1 text-badminton-600 text-sm font-medium group-hover:gap-2 transition-all">
                  了解更多
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-20 bg-gradient-to-r from-badminton-600 to-badminton-800 rounded-3xl p-10 md:p-14 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '200+', label: '国家和地区' },
              { number: '2亿+', label: '参与人口' },
              { number: '50+', label: '国际赛事' },
              { number: '30年', label: '奥运历史' },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-feather-400">{stat.number}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


