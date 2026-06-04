import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const regions = [
  {
    id: 'demacia',
    name: '德玛西亚',
    desc: '一个崇尚正义与秩序的王国，以强大的禁魔石和骑士精神闻名。德玛西亚的人民生活在一片祥和之中，但暗流涌动。',
    color: 'from-blue-600/20 to-blue-600/5',
    borderColor: 'border-blue-500/20',
    textColor: 'text-blue-400',
    imgId: 'region-demacia-1a2b3c',
    titleId: 'region-demacia-title',
    descId: 'region-demacia-desc',
  },
  {
    id: 'noxus',
    name: '诺克萨斯',
    desc: '一个强大而扩张主义的帝国，信奉力量至上。诺克萨斯接纳任何愿意为其效力的人，不论出身。',
    color: 'from-red-600/20 to-red-600/5',
    borderColor: 'border-red-500/20',
    textColor: 'text-red-400',
    imgId: 'region-noxus-2b3c4d',
    titleId: 'region-noxus-title',
    descId: 'region-noxus-desc',
  },
  {
    id: 'ionia',
    name: '艾欧尼亚',
    desc: '一个与自然和谐共存的魔法之地，人民追求精神与身体的平衡。这里诞生了无数武学大师。',
    color: 'from-green-600/20 to-green-600/5',
    borderColor: 'border-green-500/20',
    textColor: 'text-green-400',
    imgId: 'region-ionia-3c4d5e',
    titleId: 'region-ionia-title',
    descId: 'region-ionia-desc',
  },
  {
    id: 'piltover',
    name: '皮尔特沃夫',
    desc: '科技与进步的灯塔，富饶的海上贸易城市。海克斯科技在此诞生，引领着符文之地的科技革命。',
    color: 'from-yellow-600/20 to-yellow-600/5',
    borderColor: 'border-yellow-500/20',
    textColor: 'text-yellow-400',
    imgId: 'region-piltover-4d5e6f',
    titleId: 'region-piltover-title',
    descId: 'region-piltover-desc',
  },
  {
    id: 'shadow-isles',
    name: '暗影岛',
    desc: '被黑雾笼罩的诅咒之地，曾经是福光岛的美丽家园。如今这里充斥着怨灵和不死生物。',
    color: 'from-purple-600/20 to-purple-600/5',
    borderColor: 'border-purple-500/20',
    textColor: 'text-purple-400',
    imgId: 'region-shadow-5e6f7g',
    titleId: 'region-shadow-title',
    descId: 'region-shadow-desc',
  },
  {
    id: 'shurima',
    name: '恕瑞玛',
    desc: '曾经辉煌的沙漠帝国，如今只剩下黄沙掩埋的废墟。但在废墟之下，古老的秘密正在苏醒。',
    color: 'from-orange-600/20 to-orange-600/5',
    borderColor: 'border-orange-500/20',
    textColor: 'text-orange-400',
    imgId: 'region-shurima-6f7g8h',
    titleId: 'region-shurima-title',
    descId: 'region-shurima-desc',
  },
]

export default function RegionsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="regions" ref={containerRef} className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-lol-bg via-lol-blue/5 to-lol-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-lol-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Regions
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            符文之地
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            从德玛西亚的庄严城邦到暗影岛的诅咒之地，每个地区都有独特的历史和文化。
          </p>
        </div>

        {/* Regions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region) => (
            <div
              key={region.id}
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-b ${region.color} ${region.borderColor} border`}
            >
              <img
                alt={region.name}
                className="w-full h-48 object-cover opacity-60 group-hover:opacity-80 transition-all duration-500"
                data-strk-img-id={region.imgId}
                data-strk-img={`[${region.descId}] [${region.titleId}] [regions-section-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 id={region.titleId} className={`text-xl font-bold text-white mb-1`}>
                  {region.name}
                </h3>
                <p id={region.descId} className="text-sm text-white/60 leading-relaxed line-clamp-2">
                  {region.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <span id="regions-section-title" className="hidden">英雄联盟符文之地地区</span>
      </div>
    </section>
  )
}