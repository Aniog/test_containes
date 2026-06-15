import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const facts = [
  { number: '12+', label: '老虎品种', icon: '🐯' },
  { number: '50亩', label: '园区面积', icon: '🌿' },
  { number: '30万+', label: '年访客量', icon: '👥' },
  { number: '20年', label: '保护经验', icon: '🏆' },
]

export default function AboutSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#111111' }}>
      {/* Decorative background stripe */}
      <div
        className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(-45deg, #d97706 0px, #d97706 4px, transparent 4px, transparent 24px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4x3] shadow-2xl shadow-black/60">
              <img
                alt="老虎公园"
                data-strk-img-id="about-img-tiger-m4n5o6"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-amber-600/30 -z-10" />
          </div>

          {/* Text */}
          <div>
            <span className="text-amber-500 text-sm tracking-widest uppercase font-medium">关于我们</span>
            <h2
              id="about-title"
              className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 leading-tight"
              style={{ fontFamily: "'Noto Serif SC', serif" }}
            >
              守护地球上<br />最美丽的猎手
            </h2>
            <p id="about-desc" className="text-neutral-400 text-base leading-relaxed mb-6">
              老虎公园成立于2004年，是中国最具影响力的老虎保护与展示基地之一。我们致力于通过科学研究、公众教育和栖息地保护，为濒危老虎物种的延续贡献力量。
            </p>
            <p className="text-neutral-400 text-base leading-relaxed mb-8">
              在这里，每一只老虎都有独特的名字和故事。我们的专业团队全年无休地照料这些壮丽的生命，确保它们在接近自然的环境中健康生活。
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5 bg-amber-600" />
              <span className="text-amber-500 text-sm font-medium">保护 · 教育 · 传承</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="text-center p-6 rounded-2xl border border-neutral-800 hover:border-amber-600/30 transition-colors"
              style={{ backgroundColor: '#0a0a0a' }}
            >
              <div className="text-3xl mb-2">{fact.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-1">{fact.number}</div>
              <div className="text-neutral-500 text-sm">{fact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
