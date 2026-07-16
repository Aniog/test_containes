import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Target, Users, Star } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-cuhk-purple py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl font-bold text-white mb-2">关于我们</h1>
          <p className="text-white/70">了解香港中文大学内地生校友会</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 space-y-10">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">我们是谁</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            香港中文大学内地生校友会（CUHK Mainland Alumni Association）成立于2010年，
            是由香港中文大学内地生校友自发组织的非营利性社团。
          </p>
          <p className="text-gray-600 leading-relaxed">
            我们致力于连接全球各地的中大内地生校友，搭建互助成长的校友网络，
            传承中大精神，服务校友社群，促进校友之间的交流与合作。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: Target, title: '使命', desc: '连接中大内地生校友，共建互助成长的校友网络，传承中大精神。' },
            { icon: Heart, title: '愿景', desc: '成为最具影响力的中大内地生校友平台，让每位校友都能找到归属感。' },
            { icon: Users, title: '社群', desc: '覆盖全球20+城市，500+注册校友，持续扩大中的校友网络。' },
            { icon: Star, title: '价值观', desc: '真诚、互助、开放、创新，以校友情谊为纽带，共同成长。' },
          ].map(item => (
            <div key={item.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="w-10 h-10 bg-cuhk-purple-light rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-cuhk-purple" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-cuhk-purple rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">加入我们</h2>
          <p className="text-white/70 mb-6">成为校友会的一员，与全球中大校友共叙情谊</p>
          <Link
            to="/register"
            className="bg-cuhk-gold hover:bg-cuhk-gold-dark text-white px-8 py-3 rounded-xl font-semibold transition-colors inline-block"
          >
            立即注册
          </Link>
        </div>
      </div>
    </div>
  )
}
