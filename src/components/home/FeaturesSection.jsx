import React from 'react'
import { Download, Shield, Smartphone, Headphones } from 'lucide-react'

const features = [
  {
    icon: Download,
    title: '即买即读',
    desc: '购买后立即下载，无需等待，随时开始阅读之旅。',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: Shield,
    title: '正版保障',
    desc: '所有书籍均为正版授权，支持7天无理由退款。',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Smartphone,
    title: '多端同步',
    desc: '支持手机、平板、电脑多端阅读，进度自动同步。',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Headphones,
    title: '专属客服',
    desc: '7×24小时在线客服，随时解答您的问题。',
    color: 'bg-rose-50 text-rose-600',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-14 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">为什么选择书海</h2>
          <p className="text-gray-500">我们致力于提供最优质的电子书阅读体验</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
