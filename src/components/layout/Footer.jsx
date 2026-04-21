import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Mail, Phone, MapPin, Github, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">书海电子书</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              汇聚优质电子书，让知识触手可及。随时随地，开启阅读之旅。
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">书籍分类</h3>
            <ul className="space-y-2 text-sm">
              {['技术', '商业', '文学', '历史', '科学', '艺术', '教育'].map(cat => (
                <li key={cat}>
                  <Link to={`/shop?category=${cat}`} className="hover:text-indigo-400 transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">首页</Link></li>
              <li><Link to="/shop" className="hover:text-indigo-400 transition-colors">全部书籍</Link></li>
              <li><Link to="/shop?sort=sales" className="hover:text-indigo-400 transition-colors">畅销榜</Link></li>
              <li><Link to="/shop?sort=rating" className="hover:text-indigo-400 transition-colors">高分推荐</Link></li>
              <li><Link to="/cart" className="hover:text-indigo-400 transition-colors">购物车</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">联系我们</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>support@shuhai.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>400-888-8888</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>北京市朝阳区</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 书海电子书. 保留所有权利。</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">隐私政策</a>
            <a href="#" className="hover:text-gray-300 transition-colors">服务条款</a>
            <a href="#" className="hover:text-gray-300 transition-colors">帮助中心</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
