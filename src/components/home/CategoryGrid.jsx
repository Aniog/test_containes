import { Link } from 'react-router-dom'
import { Smartphone, Shirt, Apple, Sparkles, Home, Dumbbell, BookOpen, Gamepad2 } from 'lucide-react'

const categories = [
  { label: '电子产品', value: 'electronics', icon: Smartphone, color: 'bg-blue-50 text-blue-600' },
  { label: '时尚服饰', value: 'fashion', icon: Shirt, color: 'bg-pink-50 text-pink-600' },
  { label: '食品', value: 'food', icon: Apple, color: 'bg-green-50 text-green-600' },
  { label: '美妆护肤', value: 'beauty', icon: Sparkles, color: 'bg-purple-50 text-purple-600' },
  { label: '家居用品', value: 'home', icon: Home, color: 'bg-amber-50 text-amber-600' },
  { label: '运动户外', value: 'sports', icon: Dumbbell, color: 'bg-orange-50 text-orange-600' },
  { label: '图书', value: 'books', icon: BookOpen, color: 'bg-teal-50 text-teal-600' },
  { label: '玩具', value: 'toys', icon: Gamepad2, color: 'bg-red-50 text-red-600' },
]

export default function CategoryGrid() {
  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-gray-900">商品分类</h2>
        <Link to="/products" className="text-red-600 text-sm font-medium hover:text-red-700 flex items-center gap-1">
          全部分类 →
        </Link>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
        {categories.map(({ label, value, icon: Icon, color }) => (
          <Link
            key={value}
            to={`/products?category=${value}`}
            className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl hover:shadow-md transition-all duration-200 group border border-gray-100"
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
              <Icon className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium text-gray-700 text-center leading-tight">{label}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
