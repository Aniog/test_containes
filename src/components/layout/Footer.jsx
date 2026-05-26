import React from 'react'
import { Link } from 'react-router-dom'
import { Trophy, Instagram, Twitter, Youtube, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0A0E1A] border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-700 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-white font-black text-lg">
                WORLD<span className="text-yellow-400">CUP</span>
                <span className="text-red-500 ml-1">2026</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              官方授权世界杯周边商品，为全球球迷提供最优质的收藏品和应援装备。
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-semibold mb-4">商品分类</h4>
            <ul className="space-y-2">
              {[
                { label: '球衣', to: '/shop?category=jersey' },
                { label: '足球', to: '/shop?category=ball' },
                { label: '围巾', to: '/shop?category=scarf' },
                { label: '帽子', to: '/shop?category=hat' },
                { label: '旗帜', to: '/shop?category=flag' },
                { label: '收藏品', to: '/shop?category=collectible' },
              ].map(item => (
                <li key={item.to}>
                  <Link to={item.to} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">客户服务</h4>
            <ul className="space-y-2">
              {['常见问题', '配送说明', '退换货政策', '联系我们', '关于我们'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">订阅最新资讯</h4>
            <p className="text-gray-400 text-sm mb-3">获取最新商品和优惠信息</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="您的邮箱"
                className="flex-1 bg-gray-800 border border-gray-700 text-white text-sm px-3 py-2 rounded-lg focus:outline-none focus:border-red-600 placeholder-gray-500"
              />
              <button className="bg-red-700 hover:bg-red-600 text-white text-sm px-3 py-2 rounded-lg transition-colors font-medium">
                订阅
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2026 WorldCup Store. 官方授权商品。保留所有权利。</p>
          <div className="flex gap-4">
            <span className="text-gray-500 text-sm">隐私政策</span>
            <span className="text-gray-500 text-sm">使用条款</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
