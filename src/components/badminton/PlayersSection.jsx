

import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const players = [
  {
    name: '林丹',
    title: '超级丹',
    country: '中国',
    achievements: ['2届奥运金牌', '5届世锦赛冠军', '6届全英赛冠军'],
    desc: '被广泛认为是历史上最伟大的羽毛球运动员，实现了羽毛球史上首个"全满贯"。',
  },
  {
    name: '李宗伟',
    title: '拿督',
    country: '马来西亚',
    achievements: ['3届奥运银牌', '4届世锦赛亚军', '46个超级系列赛冠军'],
    desc: '马来西亚羽毛球传奇，长期占据世界第一排名，以其优雅的技术和顽强意志著称。',
  },
  {
    name: '谌龙',
    title: '王者龙',
    country: '中国',
    achievements: ['2016奥运金牌', '2届世锦赛冠军', '2021奥运银牌'],
    desc: '中国男单新一代领军人物，以稳健的防守反击战术闻名于世。',
  },
]

export default function PlayersSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="players" ref={containerRef} className="py-24 md:py-32 px-4 bg-gradient-to-b from-slate-900 to-badminton-950 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/20 mb-6">
            传奇人物
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            羽坛巨星
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            羽毛球历史上涌现出众多传奇运动员，他们用精湛的技艺和不懈的努力推动了这项运动的发展。
          </p>
        </div>

        {/* Players grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {players.map((player, idx) => (
            <div
              key={idx}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image area */}
              <div
                className="h-56 bg-gradient-to-br from-badminton-700/50 to-badminton-900/50 relative overflow-hidden"
                data-strk-bg-id={`player-${idx}-bg-2k${idx}7`}
                data-strk-bg={`[player-name-${idx}] [player-title-${idx}]`}
                data-strk-bg-ratio="3x2"
                data-strk-bg-width="600"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs border border-white/20">
                    {player.country}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 id={`player-name-${idx}`} className="text-xl font-bold mb-1">{player.name}</h3>
                <p id={`player-title-${idx}`} className="text-sm text-feather-400 mb-4 font-medium">{player.title}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-5">{player.desc}</p>

                <div className="space-y-2">
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">主要成就</p>
                  {player.achievements.map((a, ai) => (
                    <div key={ai} className="flex items-center gap-2 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-feather-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



