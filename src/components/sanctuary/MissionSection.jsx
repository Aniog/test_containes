import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { AlertTriangle, TrendingDown, Globe } from 'lucide-react'

const stats = [
  { value: '3,900', label: '野外存活老虎数量', icon: TrendingDown },
  { value: '40%', label: '过去十年种群下降', icon: AlertTriangle },
  { value: '13', label: '老虎分布国家', icon: Globe },
]

export default function MissionSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="mission" ref={containerRef} className="py-20 md:py-28 bg-stone-900 text-white relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="mission-bg-tiger-p7q8r9"
        data-strk-bg="[mission-subtitle] [mission-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-900/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-3 block">
              我们的使命
            </span>
            <h2 id="mission-title" className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              老虎正在消失，
              <br />
              我们必须行动
            </h2>
            <p id="mission-subtitle" className="text-stone-300 text-lg leading-relaxed mb-6">
              一百年前，地球上有超过10万只野生老虎。
              今天，这个数字已不足4,000只。
              栖息地丧失、非法猎杀和人虎冲突，
              正将这一物种推向灭绝的边缘。
            </p>
            <p className="text-stone-400 leading-relaxed mb-8">
              虎缘救护站不仅是一个庇护所，更是一个教育与倡导中心。
              我们相信，只有让更多人了解老虎的处境，
              才能凝聚起保护它们的力量。
            </p>
            <a
              href="#help"
              className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-amber-500/30"
            >
              加入保护行动
            </a>
          </div>

          {/* Stats */}
          <div className="grid gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-5 hover:bg-white/10 transition-colors"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-amber-600/20 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-amber-400" />
                </div>
                <div>
                  <div className="text-4xl font-black text-white">{stat.value}</div>
                  <div className="text-stone-400 text-sm mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
