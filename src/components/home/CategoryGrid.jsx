import React from 'react'
import { Link } from 'react-router-dom'
import { Shirt, Circle, Wind, HardHat, Flag, Trophy, Package, Star } from 'lucide-react'

const categories = [
  { key: 'jersey', label: '球衣', icon: Shirt, color: 'from-red-900/50 to-red-800/20', border: 'border-red-800/50', iconColor: 'text-red-400', count: '120+款' },
  { key: 'ball', label: '足球', icon: Circle, color: 'from-blue-900/50 to-blue-800/20', border: 'border-blue-800/50', iconColor: 'text-blue-400', count: '30+款' },
  { key: 'scarf', label: '围巾', icon: Wind, color: 'from-yellow-900/50 to-yellow-800/20', border: 'border-yellow-800/50', iconColor: 'text-yellow-400', count: '60+款' },
  { key: 'hat', label: '帽子', icon: HardHat, color: 'from-green-900/50 to-green-800/20', border: 'border-green-800/50', iconColor: 'text-green-400', count: '45+款' },
  { key: 'flag', label: '旗帜', icon: Flag, color: 'from-orange-900/50 to-orange-800/20', border: 'border-orange-800/50', iconColor: 'text-orange-400', count: '32+款' },
  { key: 'trophy', label: '奖杯模型', icon: Trophy, color: 'from-purple-900/50 to-purple-800/20', border: 'border-purple-800/50', iconColor: 'text-purple-400', count: '15+款' },
  { key: 'collectible', label: '收藏品', icon: Star, color: 'from-pink-900/50 to-pink-800/20', border: 'border-pink-800/50', iconColor: 'text-pink-400', count: '80+款' },
  { key: 'accessory', label: '配件', icon: Package, color: 'from-cyan-900/50 to-cyan-800/20', border: 'border-cyan-800/50', iconColor: 'text-cyan-400', count: '100+款' },
]

export default function CategoryGrid() {
  return (
    <section className="py-16 md:py-24 bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-2">商品分类</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">探索全系列周边</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">从球衣到收藏品，应有尽有，满足每一位球迷的需求</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map(cat => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.key}
                to={`/shop?category=${cat.key}`}
                className={`group relative bg-gradient-to-br ${cat.color} border ${cat.border} rounded-xl p-6 flex flex-col items-center gap-3 hover:scale-105 transition-all duration-200 hover:shadow-lg`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gray-900/50 flex items-center justify-center ${cat.iconColor} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold text-sm">{cat.label}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{cat.count}</div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
