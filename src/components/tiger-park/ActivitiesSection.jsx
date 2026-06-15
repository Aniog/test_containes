import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const activities = [
  {
    id: 'feeding',
    title: '老虎喂食体验',
    time: '每日 10:00 & 15:00',
    desc: '在专业饲养员的指导下，近距离观察老虎进食，了解它们的饮食习惯与行为特征。',
    titleId: 'act-feeding-title',
    descId: 'act-feeding-desc',
    imgId: 'act-img-feeding-p7q8r9',
  },
  {
    id: 'night',
    title: '夜间观虎之旅',
    time: '每周五六 19:00',
    desc: '夜幕降临，老虎的活动更加活跃。跟随专业导游，探索老虎在夜间的神秘世界。',
    titleId: 'act-night-title',
    descId: 'act-night-desc',
    imgId: 'act-img-night-s1t2u3',
  },
  {
    id: 'photo',
    title: '专业摄影课程',
    time: '每周末 08:00',
    desc: '与专业摄影师一起，学习如何捕捉老虎最精彩的瞬间，带走属于您的珍贵记忆。',
    titleId: 'act-photo-title',
    descId: 'act-photo-desc',
    imgId: 'act-img-photo-v4w5x6',
  },
]

export default function ActivitiesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 md:py-32" style={{ backgroundColor: '#111111' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-amber-500 text-sm tracking-widest uppercase font-medium">精彩体验</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            特色活动
          </h2>
          <div className="w-16 h-0.5 bg-amber-600 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {activities.map((act) => (
            <article
              key={act.id}
              className="rounded-2xl overflow-hidden border border-neutral-800 hover:border-amber-600/40 transition-all duration-300 group"
              style={{ backgroundColor: '#0a0a0a' }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  alt={act.title}
                  data-strk-img-id={act.imgId}
                  data-strk-img={`[${act.descId}] [${act.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-amber-500 text-xs font-medium mb-2 flex items-center gap-1.5">
                  <span>🕐</span>
                  {act.time}
                </div>
                <h3
                  id={act.titleId}
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Noto Serif SC', serif" }}
                >
                  {act.title}
                </h3>
                <p id={act.descId} className="text-neutral-400 text-sm leading-relaxed">
                  {act.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
