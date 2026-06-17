import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Truck, Shield, Headphones, Tag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  { name: '书写工具', icon: '✏️', color: 'bg-blue-50 hover:bg-blue-100', textColor: 'text-blue-700' },
  { name: '纸张文具', icon: '📄', color: 'bg-green-50 hover:bg-green-100', textColor: 'text-green-700' },
  { name: '办公设备', icon: '🖨️', color: 'bg-purple-50 hover:bg-purple-100', textColor: 'text-purple-700' },
  { name: '收纳整理', icon: '📁', color: 'bg-orange-50 hover:bg-orange-100', textColor: 'text-orange-700' },
  { name: '桌面用品', icon: '🖊️', color: 'bg-pink-50 hover:bg-pink-100', textColor: 'text-pink-700' },
  { name: '打印耗材', icon: '🖥️', color: 'bg-teal-50 hover:bg-teal-100', textColor: 'text-teal-700' },
]

const features = [
  { icon: Truck, title: '免费配送', desc: '满99元免运费', color: 'text-blue-600' },
  { icon: Shield, title: '品质保证', desc: '正品保障，假一赔十', color: 'text-green-600' },
  { icon: Headphones, title: '专属客服', desc: '7×24小时在线服务', color: 'text-purple-600' },
  { icon: Tag, title: '企业采购', desc: '大批量享专属折扣', color: 'text-orange-600' },
]

export default function HomeHero() {
  const heroRef = useRef(null)

  useEffect(() => {
    if (heroRef.current) {
      return ImageHelper.loadImages(strkImgConfig, heroRef.current)
    }
  }, [])

  return (
    <div ref={heroRef}>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A5F] to-[#2563EB] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
              🎉 新用户首单立减20元
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              专业办公用品<br />
              <span className="text-orange-400">一站式采购</span>
            </h1>
            <p id="hero-subtitle" className="text-slate-300 text-lg mb-8 max-w-md">
              精选数千款办公文具、设备和耗材，品质保证，快速配送，让您的办公更高效。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                to="/products"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                立即选购 <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products?category=%E5%8A%9E%E5%85%AC%E8%AE%BE%E5%A4%87"
                className="border border-white/40 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-center"
              >
                企业采购
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="hero-main-img-a1b2c3"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="办公用品"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="flex items-center gap-3">
                <Icon className={`w-8 h-8 ${color} flex-shrink-0`} />
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{title}</p>
                  <p className="text-xs text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">商品分类</h2>
          <Link to="/products" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
            查看全部 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {categories.map(cat => (
            <Link
              key={cat.name}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className={`${cat.color} ${cat.textColor} rounded-xl p-4 text-center transition-colors cursor-pointer`}
            >
              <div className="text-3xl mb-2">{cat.icon}</div>
              <p className="text-sm font-semibold">{cat.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
