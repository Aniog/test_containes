import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const champions = [
  {
    id: 'aatrox',
    name: '暗裔剑魔',
    engName: 'Aatrox',
    title: '亚托克斯',
    role: '战士',
    desc: '远古的暗裔剑魔，曾经是恕瑞玛的飞升者，如今只为毁灭而战。',
    imgId: 'champ-aatrox-8f2a9c',
    titleId: 'champ-aatrox-title',
    descId: 'champ-aatrox-desc',
  },
  {
    id: 'ahri',
    name: '九尾妖狐',
    engName: 'Ahri',
    title: '阿狸',
    role: '法师',
    desc: '天生连接着精神领域的瓦斯塔亚，拥有操纵他人情感的能力。',
    imgId: 'champ-ahri-7e1b8d',
    titleId: 'champ-ahri-title',
    descId: 'champ-ahri-desc',
  },
  {
    id: 'yasuo',
    name: '疾风剑豪',
    engName: 'Yasuo',
    title: '亚索',
    role: '刺客',
    desc: '一位艾欧尼亚的剑客，背负着弑师之名的浪人武士。',
    imgId: 'champ-yasuo-9c3d2e',
    titleId: 'champ-yasuo-title',
    descId: 'champ-yasuo-desc',
  },
  {
    id: 'lux',
    name: '光辉女郎',
    engName: 'Lux',
    title: '拉克丝',
    role: '法师',
    desc: '德玛西亚的光魔法使，用光明之力守护她的家园。',
    imgId: 'champ-lux-4a5f6b',
    titleId: 'champ-lux-title',
    descId: 'champ-lux-desc',
  },
  {
    id: 'jinx',
    name: '暴走萝莉',
    engName: 'Jinx',
    title: '金克丝',
    role: '射手',
    desc: '皮尔特沃夫最疯狂的罪犯，以制造混乱和爆炸为乐。',
    imgId: 'champ-jinx-2d3e4f',
    titleId: 'champ-jinx-title',
    descId: 'champ-jinx-desc',
  },
  {
    id: 'thresh',
    name: '魂锁典狱长',
    engName: 'Thresh',
    title: '锤石',
    role: '辅助',
    desc: '暗影岛的恐怖收割者，以折磨灵魂为乐的铁链狱卒。',
    imgId: 'champ-thresh-5g6h7i',
    titleId: 'champ-thresh-title',
    descId: 'champ-thresh-desc',
  },
  {
    id: 'ezreal',
    name: '探险家',
    engName: 'Ezreal',
    title: '伊泽瑞尔',
    role: '射手',
    desc: '年轻气盛的探险家，凭借运气和神器的力量穿越符文之地。',
    imgId: 'champ-ezreal-8j9k0l',
    titleId: 'champ-ezreal-title',
    descId: 'champ-ezreal-desc',
  },
  {
    id: 'darius',
    name: '诺克萨斯之手',
    engName: 'Darius',
    title: '德莱厄斯',
    role: '战士',
    desc: '诺克萨斯最令人畏惧的将军，用铁血手段维护帝国的威严。',
    imgId: 'champ-darius-1m2n3o',
    titleId: 'champ-darius-title',
    descId: 'champ-darius-desc',
  },
]

export default function ChampionsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="champions" ref={containerRef} className="relative py-24 lg:py-32">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-lol-bg via-lol-bg-light/30 to-lol-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-lol-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Champions
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            探索英雄
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            从暗影岛的恐怖收割者到德玛西亚的光明卫士，每位英雄都有独特的故事和玩法。
          </p>
        </div>

        {/* Champions grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {champions.map((champ) => (
            <div
              key={champ.id}
              className="group relative bg-lol-bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-lol-gold/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-lol-gold/5"
            >
              {/* Image container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt={champ.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-strk-img-id={champ.imgId}
                  data-strk-img={`[${champ.descId}] [${champ.titleId}] [champions-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lol-bg-card via-transparent to-transparent" />

                {/* Role badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold bg-lol-bg/80 backdrop-blur-sm rounded-full text-lol-gold border border-lol-gold/20">
                  {champ.role}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <p className="text-xs text-lol-text-muted uppercase tracking-wider mb-1">{champ.engName}</p>
                <h3 id={champ.titleId} className="text-lg font-bold text-white mb-2">
                  {champ.name}
                </h3>
                <p id={champ.descId} className="text-sm text-white/50 leading-relaxed line-clamp-2">
                  {champ.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hidden section title for image queries */}
        <span id="champions-section-title" className="hidden">英雄联盟英雄展示</span>
      </div>
    </section>
  )
}