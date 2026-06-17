import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'pro-x1',
    name: 'ErgoSeat Pro X1',
    tag: '畅销款',
    tagColor: 'bg-[#e8b86d] text-[#1a1a2e]',
    price: '¥2,999',
    originalPrice: '¥3,599',
    desc: '专业级人体工学椅，适合长时间高强度办公，全方位脊椎支撑系统。',
    features: ['腰椎动态支撑', '4D 扶手', '透气网背', '铝合金底座'],
    imgId: 'product-pro-x1-img-a1b2c3',
    titleId: 'product-pro-x1-title',
    descId: 'product-pro-x1-desc',
  },
  {
    id: 'lite-s2',
    name: 'ErgoSeat Lite S2',
    tag: '入门推荐',
    tagColor: 'bg-[#1a1a2e] text-white',
    price: '¥1,599',
    originalPrice: '¥1,999',
    desc: '轻量化设计，简约时尚，适合家庭办公和轻度使用场景。',
    features: ['腰托可调', '升降扶手', '布艺坐垫', '静音滚轮'],
    imgId: 'product-lite-s2-img-d4e5f6',
    titleId: 'product-lite-s2-title',
    descId: 'product-lite-s2-desc',
  },
  {
    id: 'exec-e3',
    name: 'ErgoSeat Exec E3',
    tag: '高端旗舰',
    tagColor: 'bg-[#5a5a72] text-white',
    price: '¥5,999',
    originalPrice: '¥7,200',
    desc: '顶级行政椅，真皮坐垫，智能感应腰托，彰显品味与地位。',
    features: ['真皮坐垫', '智能腰托', '头枕颈托', '碳纤维底座'],
    imgId: 'product-exec-e3-img-g7h8i9',
    titleId: 'product-exec-e3-title',
    descId: 'product-exec-e3-desc',
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" className="py-24 bg-white" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#e8b86d] text-sm font-semibold uppercase tracking-widest mb-3">
            产品系列
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
            找到适合您的那把椅子
          </h2>
          <p className="text-[#5a5a72] text-lg max-w-2xl mx-auto">
            从入门到旗舰，每款产品都经过严格品质把控，为您提供最佳坐感体验。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-[#f8f7f4] rounded-2xl overflow-hidden border border-[#e2e2ec] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="relative">
                <img
                  alt={p.name}
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}] office ergonomic chair`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full object-cover h-56"
                />
                <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${p.tagColor}`}>
                  {p.tag}
                </span>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <h3 id={p.titleId} className="text-[#1a1a2e] font-bold text-xl mb-2">{p.name}</h3>
                <p id={p.descId} className="text-[#5a5a72] text-sm leading-relaxed mb-5">{p.desc}</p>

                <ul className="space-y-2 mb-6">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-[#5a5a72]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e8b86d] flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-2xl font-bold text-[#1a1a2e]">{p.price}</span>
                    <span className="text-sm text-[#9a9aaa] line-through">{p.originalPrice}</span>
                  </div>
                  <button className="w-full bg-[#1a1a2e] text-white font-semibold py-3 rounded-xl hover:bg-[#e8b86d] hover:text-[#1a1a2e] transition-all duration-300">
                    加入购物车
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
