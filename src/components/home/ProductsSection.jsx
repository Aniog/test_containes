import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ShoppingCart, Star } from 'lucide-react'

const categories = [
  { id: 'cat-chairs', label: '办公椅', descId: 'cat-chairs-desc', imgId: 'cat-img-chairs-g7h8i9' },
  { id: 'cat-desks', label: '办公桌', descId: 'cat-desks-desc', imgId: 'cat-img-desks-j1k2l3' },
  { id: 'cat-stationery', label: '文具耗材', descId: 'cat-stationery-desc', imgId: 'cat-img-stationery-m4n5o6' },
  { id: 'cat-tech', label: '电脑配件', descId: 'cat-tech-desc', imgId: 'cat-img-tech-p7q8r9' },
]

const products = [
  {
    id: 'prod-1',
    titleId: 'prod-1-title',
    descId: 'prod-1-desc',
    imgId: 'prod-img-1-s1t2u3',
    title: '人体工学办公椅',
    desc: '腰部支撑，透气网背，久坐不累',
    price: '¥1,299',
    originalPrice: '¥1,899',
    rating: 4.8,
    reviews: 326,
    badge: '热销',
  },
  {
    id: 'prod-2',
    titleId: 'prod-2-title',
    descId: 'prod-2-desc',
    imgId: 'prod-img-2-v4w5x6',
    title: '升降电动办公桌',
    desc: '电动升降，站坐两用，保护脊椎',
    price: '¥2,599',
    originalPrice: '¥3,299',
    rating: 4.9,
    reviews: 218,
    badge: '新品',
  },
  {
    id: 'prod-3',
    titleId: 'prod-3-title',
    descId: 'prod-3-desc',
    imgId: 'prod-img-3-y7z8a9',
    title: '无线蓝牙键鼠套装',
    desc: '静音按键，长续航，多设备连接',
    price: '¥399',
    originalPrice: '¥599',
    rating: 4.7,
    reviews: 512,
    badge: '特惠',
  },
  {
    id: 'prod-4',
    titleId: 'prod-4-title',
    descId: 'prod-4-desc',
    imgId: 'prod-img-4-b1c2d3',
    title: '办公文具套装礼盒',
    desc: '钢笔、便签、文件夹一应俱全',
    price: '¥129',
    originalPrice: '¥199',
    rating: 4.6,
    reviews: 784,
    badge: null,
  },
  {
    id: 'prod-5',
    titleId: 'prod-5-title',
    descId: 'prod-5-desc',
    imgId: 'prod-img-5-e4f5g6',
    title: '27寸4K显示器',
    desc: '超清画质，护眼模式，广色域',
    price: '¥3,199',
    originalPrice: '¥3,999',
    rating: 4.9,
    reviews: 143,
    badge: '精选',
  },
  {
    id: 'prod-6',
    titleId: 'prod-6-title',
    descId: 'prod-6-desc',
    imgId: 'prod-img-6-h7i8j9',
    title: '多功能文件收纳架',
    desc: '桌面整理，分层收纳，简约设计',
    price: '¥89',
    originalPrice: '¥139',
    rating: 4.5,
    reviews: 1024,
    badge: null,
  },
]

const badgeColors = {
  热销: 'bg-red-100 text-red-600',
  新品: 'bg-blue-100 text-blue-600',
  特惠: 'bg-orange-100 text-orange-600',
  精选: 'bg-purple-100 text-purple-600',
}

const ProductsSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">精选产品</p>
          <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            为您的办公室精心挑选
          </h2>
          <p id="products-subtitle" className="text-slate-500 text-lg max-w-2xl mx-auto">
            从人体工学椅到智能办公设备，我们提供全系列高品质办公用品
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="px-5 py-2 rounded-full border border-slate-200 bg-white text-slate-600 hover:border-orange-500 hover:text-orange-500 font-medium text-sm transition-colors"
            >
              <span id={cat.id}>{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <span className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full ${badgeColors[product.badge]}`}>
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 id={product.titleId} className="text-slate-900 font-semibold text-base mb-1">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-slate-500 text-sm mb-3">
                  {product.desc}
                </p>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-slate-700 text-sm font-medium">{product.rating}</span>
                  <span className="text-slate-400 text-sm">({product.reviews}条评价)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[#1E3A5F] font-bold text-xl">{product.price}</span>
                    <span className="text-slate-400 text-sm line-through ml-2">{product.originalPrice}</span>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            查看全部产品
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
