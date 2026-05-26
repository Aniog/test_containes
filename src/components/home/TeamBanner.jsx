import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ChevronRight } from 'lucide-react'

const teams = [
  { name: '巴西', color: 'from-yellow-600 to-green-700', flag: '🇧🇷' },
  { name: '德国', color: 'from-gray-700 to-gray-900', flag: '🇩🇪' },
  { name: '阿根廷', color: 'from-sky-600 to-sky-800', flag: '🇦🇷' },
  { name: '法国', color: 'from-blue-700 to-red-700', flag: '🇫🇷' },
  { name: '西班牙', color: 'from-red-700 to-yellow-600', flag: '🇪🇸' },
  { name: '英格兰', color: 'from-red-600 to-white/20', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { name: '葡萄牙', color: 'from-green-700 to-red-700', flag: '🇵🇹' },
  { name: '日本', color: 'from-red-600 to-white/20', flag: '🇯🇵' },
]

export default function TeamBanner() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-2">球队专区</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">按球队选购</h2>
          <p className="text-gray-400 mt-3">支持您最爱的球队，选购专属周边</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {teams.map(team => (
            <Link
              key={team.name}
              to={`/shop?team=${encodeURIComponent(team.name)}`}
              className={`group relative bg-gradient-to-br ${team.color} rounded-xl p-6 flex flex-col items-center gap-2 hover:scale-105 transition-all duration-200 overflow-hidden`}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              <span className="relative text-4xl">{team.flag}</span>
              <span className="relative text-white font-bold text-sm">{team.name}</span>
              <span className="relative text-white/70 text-xs flex items-center gap-1">
                查看商品 <ChevronRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
