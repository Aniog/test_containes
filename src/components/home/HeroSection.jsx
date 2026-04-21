import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, BookOpen, TrendingUp, Star } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full px-4 py-1.5 text-sm text-indigo-200 mb-6">
              <Sparkles className="w-4 h-4" />
              <span>全新上架 · 精选好书</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              探索知识的
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                无限世界
              </span>
            </h1>

            <p className="text-lg text-indigo-200 leading-relaxed mb-8 max-w-lg">
              汇聚数千本优质电子书，涵盖技术、商业、文学、科学等多个领域。
              即买即读，随时随地开启阅读之旅。
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-white text-indigo-900 font-semibold px-6 py-3 rounded-full hover:bg-indigo-50 transition-colors shadow-lg"
              >
                浏览书库
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/shop?sort=sales"
                className="inline-flex items-center gap-2 border border-indigo-400/50 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-800/50 transition-colors"
              >
                <TrendingUp className="w-4 h-4" />
                畅销榜单
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-indigo-800/50">
              {[
                { icon: BookOpen, value: '5000+', label: '精品书籍' },
                { icon: Star, value: '4.8', label: '平均评分' },
                { icon: TrendingUp, value: '100万+', label: '满意读者' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-indigo-300" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{value}</div>
                    <div className="text-xs text-indigo-300">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: floating book cards */}
          <div className="hidden lg:flex items-center justify-center relative h-96">
            {[
              { title: 'Python编程', author: '埃里克·马瑟斯', price: '59.9', color: 'from-blue-500 to-indigo-600', rotate: '-rotate-6', z: 'z-10', top: 'top-4', left: 'left-8' },
              { title: '富爸穷爸', author: '卡尔·罗伯特', price: '29.9', color: 'from-purple-500 to-pink-600', rotate: 'rotate-3', z: 'z-20', top: 'top-12', left: 'left-32' },
              { title: '三体', author: '刘慈欣', price: '45.9', color: 'from-emerald-500 to-teal-600', rotate: '-rotate-2', z: 'z-30', top: 'top-20', left: 'left-56' },
            ].map((book) => (
              <div
                key={book.title}
                className={`absolute ${book.top} ${book.left} ${book.z} ${book.rotate} w-36 bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform`}
              >
                <div className={`h-44 bg-gradient-to-br ${book.color} flex items-center justify-center`}>
                  <BookOpen className="w-12 h-12 text-white/80" />
                </div>
                <div className="p-3">
                  <p className="text-xs font-bold text-gray-900 truncate">{book.title}</p>
                  <p className="text-xs text-gray-500 truncate">{book.author}</p>
                  <p className="text-sm font-bold text-indigo-600 mt-1">¥{book.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
