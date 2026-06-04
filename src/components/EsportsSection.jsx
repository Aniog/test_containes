import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Trophy, Medal, Users, Globe, ChevronRight } from 'lucide-react'

const regions = [
  { name: 'LPL', fullName: '中国大陆赛区', color: 'text-red-400', borderColor: 'border-red-500/30' },
  { name: 'LCK', fullName: '韩国赛区', color: 'text-blue-400', borderColor: 'border-blue-500/30' },
  { name: 'LEC', fullName: '欧洲赛区', color: 'text-yellow-400', borderColor: 'border-yellow-500/30' },
  { name: 'LCS', fullName: '北美赛区', color: 'text-green-400', borderColor: 'border-green-500/30' },
]

const stats = [
  { icon: Trophy, label: '全球总决赛冠军', value: '13', sub: '届冠军队伍' },
  { icon: Medal, label: '知名选手', value: '800+', sub: '职业选手' },
  { icon: Users, label: '月活玩家', value: '1.5亿+', sub: '全球玩家' },
  { icon: Globe, label: '覆盖地区', value: '12+', sub: '顶级赛区' },
]

export default function EsportsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="esports" ref={containerRef} className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-lol-bg via-lol-bg-light/20 to-lol-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-lol-red text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Esports
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            电竞赛事
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            《英雄联盟》是全球最火爆的电竞项目，每年举办的世界总决赛吸引数百万观众。
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-lol-bg-card/50 backdrop-blur-sm border border-white/5 hover:border-lol-gold/20 transition-all duration-300 group"
              >
                <Icon className="w-8 h-8 text-lol-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
                <div className="text-xs text-white/30 mt-1">{stat.sub}</div>
              </div>
            )
          })}
        </div>

        {/* Regions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">顶级赛区</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {regions.map((region) => (
              <div
                key={region.name}
                className={`p-5 rounded-xl bg-lol-bg-card/40 backdrop-blur-sm border ${region.borderColor} hover:bg-lol-bg-card/60 transition-all duration-300 group cursor-pointer`}
              >
                <div className={`text-3xl font-black ${region.color} mb-1`}>{region.name}</div>
                <div className="text-sm text-white/50">{region.fullName}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-lol-red to-lol-red-dark text-white font-bold text-lg rounded-lg hover:from-lol-red-dark hover:to-lol-red transition-all duration-300 shadow-lg shadow-lol-red/20 hover:shadow-lol-red/40 hover:-translate-y-0.5"
          >
            了解更多赛事信息
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        <span id="esports-section-title" className="hidden">英雄联盟电竞赛事</span>
      </div>
    </section>
  )
}