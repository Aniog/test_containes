import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const testimonials = [
  {
    id: 'test1',
    quote: '参观虎缘救护站是我今年最难忘的经历。看到白玉在草地上奔跑，我流下了眼泪。这里的工作人员对每一只老虎都充满了爱。',
    name: '李晓梅',
    role: '长期捐助者',
    imgId: 'testimonial-img-1-s1t2u3',
    titleId: 'test1-name',
    descId: 'test1-role',
  },
  {
    id: 'test2',
    quote: '我认养了雪松已经两年了，每个月收到它的成长报告让我感到无比欣慰。这是我做过最有意义的事情之一。',
    name: '王建国',
    role: '老虎认养人',
    imgId: 'testimonial-img-2-v4w5x6',
    titleId: 'test2-name',
    descId: 'test2-role',
  },
  {
    id: 'test3',
    quote: '作为一名野生动物摄影师，我见过太多悲剧。但虎缘救护站让我看到了希望——只要有人在乎，改变就会发生。',
    name: '张明远',
    role: '野生动物摄影师',
    imgId: 'testimonial-img-3-y7z8a9',
    titleId: 'test3-name',
    descId: 'test3-role',
  },
]

export default function TestimonialsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3 block">
            支持者的声音
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
            他们选择了守护
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-stone-50 border border-stone-200 rounded-3xl p-7 shadow-md hover:shadow-xl transition-all"
            >
              {/* Quote marks */}
              <div className="text-5xl text-amber-300 font-serif leading-none mb-4">"</div>
              <p className="text-stone-700 leading-relaxed mb-6 text-sm">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-stone-200 flex-shrink-0">
                  <img
                    alt={t.name}
                    data-strk-img-id={t.imgId}
                    data-strk-img={`[${t.descId}] [${t.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="100"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div id={t.titleId} className="font-semibold text-stone-900 text-sm">{t.name}</div>
                  <div id={t.descId} className="text-stone-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
