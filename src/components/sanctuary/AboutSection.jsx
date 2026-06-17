import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Heart, Shield, TreePine } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: '以爱为本',
    desc: '每一只老虎都是独立的个体，我们尊重它们的天性，给予它们应有的关爱与照料。',
  },
  {
    icon: Shield,
    title: '专业救护',
    desc: '拥有经验丰富的兽医团队和野生动物专家，为老虎提供最专业的医疗与康复服务。',
  },
  {
    icon: TreePine,
    title: '回归自然',
    desc: '我们的终极目标是让有条件的老虎重返野外，守护这片土地上最后的虎踪。',
  },
]

export default function AboutSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                alt="白虎近景特写"
                data-strk-img-id="about-tiger-img-d4e5f6"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-amber-600 text-white rounded-2xl p-5 shadow-xl">
              <div className="text-4xl font-black">12+</div>
              <div className="text-sm font-medium text-amber-100 mt-1">年救护经验</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3 block">
              关于我们
            </span>
            <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 leading-tight">
              为老虎守护最后的家园
            </h2>
            <p id="about-subtitle" className="text-stone-600 text-lg leading-relaxed mb-6">
              虎缘救护站成立于2012年，是中国专注于老虎救护与保育的非营利机构。
              我们收容来自马戏团、非法贸易和栖息地破坏中幸存的老虎，
              为它们提供终身的安全庇护。
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              目前，救护站共照料着 <strong className="text-stone-900">23只老虎</strong>，
              包括珍稀的白虎、东北虎和孟加拉虎。
              每一只老虎背后都有一段令人心碎又充满希望的故事。
            </p>

            <div className="flex flex-col gap-5">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center">
                    <v.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900 mb-1">{v.title}</div>
                    <div className="text-stone-600 text-sm leading-relaxed">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
