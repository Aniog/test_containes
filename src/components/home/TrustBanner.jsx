import React from 'react'
import { Shield, Truck, RotateCcw, Award } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: '官方授权',
    desc: '所有商品均为FIFA官方授权，品质保证',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
  },
  {
    icon: Truck,
    title: '全球配送',
    desc: '支持全球200+国家和地区快速配送',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    icon: RotateCcw,
    title: '30天退换',
    desc: '购买后30天内无理由退换货服务',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
  },
  {
    icon: Award,
    title: '正品保障',
    desc: '假一赔十，让您购物无后顾之忧',
    color: 'text-red-400',
    bg: 'bg-red-400/10',
  },
]

export default function TrustBanner() {
  return (
    <section className="py-12 bg-[#0A0E1A] border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map(f => {
            const Icon = f.icon
            return (
              <div key={f.title} className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{f.title}</div>
                  <div className="text-gray-400 text-xs mt-0.5 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
