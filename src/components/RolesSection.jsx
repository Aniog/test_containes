import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Swords, Shield, Crosshair, Wand2, Heart } from 'lucide-react'

const roles = [
  {
    icon: Swords,
    name: '战士',
    engName: 'Fighter',
    color: 'from-red-500/20 to-red-500/5',
    borderColor: 'border-red-500/30',
    textColor: 'text-red-400',
    desc: '近战输出者，兼具伤害与生存能力。在战斗中冲锋陷阵，引领团队走向胜利。',
    examples: '德莱厄斯、锐雯、剑姬',
    imgId: 'role-fighter-3a4b5c',
    titleId: 'role-fighter-title',
    descId: 'role-fighter-desc',
  },
  {
    icon: Wand2,
    name: '法师',
    engName: 'Mage',
    color: 'from-blue-500/20 to-blue-500/5',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-400',
    desc: '技能型远程输出者，拥有强大的范围伤害和控制能力，但自身较为脆弱。',
    examples: '拉克丝、安妮、维克兹',
    imgId: 'role-mage-4b5c6d',
    titleId: 'role-mage-title',
    descId: 'role-mage-desc',
  },
  {
    icon: Crosshair,
    name: '射手',
    engName: 'Marksman',
    color: 'from-yellow-500/20 to-yellow-500/5',
    borderColor: 'border-yellow-500/30',
    textColor: 'text-yellow-400',
    desc: '远程物理输出核心，持续伤害能力极强。后期团战的绝对主力，需要队友保护。',
    examples: '金克丝、伊泽瑞尔、凯特琳',
    imgId: 'role-marksman-5c6d7e',
    titleId: 'role-marksman-title',
    descId: 'role-marksman-desc',
  },
  {
    icon: Shield,
    name: '坦克',
    engName: 'Tank',
    color: 'from-green-500/20 to-green-500/5',
    borderColor: 'border-green-500/30',
    textColor: 'text-green-400',
    desc: '坚不可摧的前排壁垒，吸收大量伤害的同时提供控制，为团队创造输出空间。',
    examples: '蒙多、瑟提、墨菲特',
    imgId: 'role-tank-6d7e8f',
    titleId: 'role-tank-title',
    descId: 'role-tank-desc',
  },
  {
    icon: Heart,
    name: '辅助',
    engName: 'Support',
    color: 'from-purple-500/20 to-purple-500/5',
    borderColor: 'border-purple-500/30',
    textColor: 'text-purple-400',
    desc: '团队的后盾，通过治疗、护盾和控制技能保护队友，是胜利不可或缺的一环。',
    examples: '锤石、娜美、索拉卡',
    imgId: 'role-support-7e8f9g',
    titleId: 'role-support-title',
    descId: 'role-support-desc',
  },
  {
    icon: Swords,
    name: '刺客',
    engName: 'Assassin',
    color: 'from-lol-red/20 to-lol-red/5',
    borderColor: 'border-lol-red/30',
    textColor: 'text-lol-red',
    desc: '致命的暗影猎手，擅长瞬间秒杀敌方核心目标，来无影去无踪。',
    examples: '亚索、劫、泰隆',
    imgId: 'role-assassin-8f9g0h',
    titleId: 'role-assassin-title',
    descId: 'role-assassin-desc',
  },
]

export default function RolesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="roles" ref={containerRef} className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-lol-bg via-lol-blue/10 to-lol-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-lol-accent text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Roles
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            英雄定位
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            每位英雄都有独特的定位和玩法风格，找到适合你的角色，在召唤师峡谷中发光发热。
          </p>
        </div>

        {/* Roles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {roles.map((role) => {
            const Icon = role.icon
            return (
              <div
                key={role.engName}
                className={`relative overflow-hidden rounded-xl bg-gradient-to-b ${role.color} ${role.borderColor} border p-6 group hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${role.borderColor} border ${role.textColor} bg-black/20`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 id={role.titleId} className={`text-xl font-bold text-white mb-1`}>
                      {role.name}
                    </h3>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-3">{role.engName}</p>
                    <p id={role.descId} className="text-sm text-white/60 leading-relaxed">
                      {role.desc}
                    </p>
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <span className="text-xs text-white/40">代表英雄：</span>
                      <span className={`text-xs ${role.textColor}`}>{role.examples}</span>
                    </div>
                  </div>
                </div>

                {/* Role icon watermark */}
                <div className="absolute -bottom-4 -right-4 opacity-5">
                  <Icon className="w-24 h-24 text-white" />
                </div>
              </div>
            )
          })}
        </div>

        <span id="roles-section-title" className="hidden">英雄联盟角色定位</span>
      </div>
    </section>
  )
}