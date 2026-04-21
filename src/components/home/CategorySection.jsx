import React from 'react'
import { Link } from 'react-router-dom'
import { Code, Briefcase, BookMarked, FlaskConical, Palette, GraduationCap, Globe, MoreHorizontal } from 'lucide-react'

const categories = [
  { name: '技术', icon: Code, color: 'bg-blue-50 text-blue-600 hover:bg-blue-100', border: 'border-blue-100' },
  { name: '商业', icon: Briefcase, color: 'bg-amber-50 text-amber-600 hover:bg-amber-100', border: 'border-amber-100' },
  { name: '文学', icon: BookMarked, color: 'bg-rose-50 text-rose-600 hover:bg-rose-100', border: 'border-rose-100' },
  { name: '科学', icon: FlaskConical, color: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100', border: 'border-emerald-100' },
  { name: '艺术', icon: Palette, color: 'bg-purple-50 text-purple-600 hover:bg-purple-100', border: 'border-purple-100' },
  { name: '教育', icon: GraduationCap, color: 'bg-teal-50 text-teal-600 hover:bg-teal-100', border: 'border-teal-100' },
  { name: '历史', icon: Globe, color: 'bg-orange-50 text-orange-600 hover:bg-orange-100', border: 'border-orange-100' },
  { name: '其他', icon: MoreHorizontal, color: 'bg-gray-50 text-gray-600 hover:bg-gray-100', border: 'border-gray-100' },
]

export default function CategorySection() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">按分类浏览</h2>
          <p className="text-gray-500">找到你感兴趣的领域，开始探索</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map(({ name, icon: Icon, color, border }) => (
            <Link
              key={name}
              to={`/shop?category=${name}`}
              className={`flex flex-col items-center gap-3 p-4 rounded-2xl border ${border} ${color} transition-all duration-200 hover:shadow-md hover:-translate-y-0.5`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/70 flex items-center justify-center shadow-sm">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold">{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
