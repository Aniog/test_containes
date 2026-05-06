import { useState } from 'react';
import { ShoppingCart, Heart, Star, Eye } from 'lucide-react';

const allProducts = [
  {
    id: 1,
    name: '胡桃木茶盘',
    category: '餐厨用品',
    price: 298,
    originalPrice: 380,
    rating: 4.9,
    reviews: 234,
    badge: '热销',
    badgeColor: 'bg-[#d4a96a] text-[#2c1a0e]',
    emoji: '🫖',
    wood: '黑胡桃木',
    description: '精选北美黑胡桃木，纹理清晰，手感温润，是茶道爱好者的首选',
  },
  {
    id: 2,
    name: '橡木书立架',
    category: '文具收纳',
    price: 168,
    originalPrice: null,
    rating: 4.8,
    reviews: 156,
    badge: '新品',
    badgeColor: 'bg-[#5c7a3e] text-white',
    emoji: '📚',
    wood: '白橡木',
    description: '简约北欧风格，白橡木原色，为您的书桌增添一份自然雅致',
  },
  {
    id: 3,
    name: '樱桃木相框',
    category: '家居摆件',
    price: 128,
    originalPrice: 168,
    rating: 4.7,
    reviews: 89,
    badge: null,
    badgeColor: '',
    emoji: '🖼️',
    wood: '樱桃木',
    description: '樱桃木随时间氧化呈现迷人红棕色，每一帧都是时光的印记',
  },
  {
    id: 4,
    name: '松木积木套装',
    category: '儿童玩具',
    price: 218,
    originalPrice: null,
    rating: 5.0,
    reviews: 312,
    badge: '精选',
    badgeColor: 'bg-[#8b5e3c] text-white',
    emoji: '🧩',
    wood: '新西兰松木',
    description: '无毒无害天然松木，经过精细打磨，安全陪伴孩子健康成长',
  },
  {
    id: 5,
    name: '竹制餐具套装',
    category: '餐厨用品',
    price: 88,
    originalPrice: 120,
    rating: 4.6,
    reviews: 445,
    badge: '特惠',
    badgeColor: 'bg-red-500 text-white',
    emoji: '🥄',
    wood: '毛竹',
    description: '天然毛竹精制，轻盈耐用，环保可持续，日常用餐的理想选择',
  },
  {
    id: 6,
    name: '胡桃木挂钟',
    category: '家居摆件',
    price: 358,
    originalPrice: 450,
    rating: 4.9,
    reviews: 178,
    badge: '热销',
    badgeColor: 'bg-[#d4a96a] text-[#2c1a0e]',
    emoji: '🕐',
    wood: '黑胡桃木',
    description: '极简设计，胡桃木纹理自然流畅，静音机芯，为空间增添格调',
  },
  {
    id: 7,
    name: '木质名片盒',
    category: '文具收纳',
    price: 78,
    originalPrice: null,
    rating: 4.7,
    reviews: 203,
    badge: null,
    badgeColor: '',
    emoji: '💼',
    wood: '枫木',
    description: '枫木细腻光滑，可激光雕刻个人信息，商务礼品首选',
  },
  {
    id: 8,
    name: '木制风铃',
    category: '装饰挂件',
    price: 138,
    originalPrice: 180,
    rating: 4.8,
    reviews: 267,
    badge: '新品',
    badgeColor: 'bg-[#5c7a3e] text-white',
    emoji: '🎐',
    wood: '楠木',
    description: '楠木清香，风吹时发出悦耳声响，为居室带来禅意与宁静',
  },
];

const filterTabs = ['全部', '家居摆件', '餐厨用品', '文具收纳', '儿童玩具', '装饰挂件'];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('全部');
  const [wishlist, setWishlist] = useState([]);
  const [addedToCart, setAddedToCart] = useState([]);

  const filtered = activeFilter === '全部'
    ? allProducts
    : allProducts.filter((p) => p.category === activeFilter);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (id) => {
    setAddedToCart((prev) => [...prev, id]);
    setTimeout(() => setAddedToCart((prev) => prev.filter((i) => i !== id)), 1500);
  };

  return (
    <section id="products" className="py-20 bg-[#f5ede0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-[#8b5e3c] tracking-widest uppercase mb-3">
            精品展示
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#3d2b1f] mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            匠心之作
          </h2>
          <p className="text-[#7a5c45] max-w-xl mx-auto">
            每一件产品都经过严格品质把控，让您感受木艺之美
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === tab
                  ? 'bg-[#8b5e3c] text-white shadow-md'
                  : 'bg-white text-[#5c3d2e] hover:bg-[#f0e6d3] border border-[#d4a96a]/30'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Image Area */}
              <div className="relative bg-gradient-to-br from-[#f5ede0] to-[#e8d5b7] aspect-square flex items-center justify-center overflow-hidden">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {product.emoji}
                </span>

                {/* Badge */}
                {product.badge && (
                  <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                )}

                {/* Discount badge */}
                {product.originalPrice && (
                  <span className="absolute top-3 right-3 text-xs font-semibold bg-red-500 text-white px-2 py-1 rounded-full">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                )}

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-[#3d2b1f]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all ${
                      wishlist.includes(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-[#5c3d2e] hover:bg-red-50'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-[#5c3d2e] hover:bg-[#f0e6d3] transition-all">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-[#8b5e3c] font-medium bg-[#f5ede0] px-2 py-0.5 rounded-full">
                    {product.wood}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-[#d4a96a] text-[#d4a96a]" />
                    <span className="text-xs text-[#7a5c45]">{product.rating}</span>
                    <span className="text-xs text-[#b89a7a]">({product.reviews})</span>
                  </div>
                </div>

                <h3 className="font-bold text-[#3d2b1f] text-base mb-1" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  {product.name}
                </h3>
                <p className="text-xs text-[#7a5c45] mb-3 line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-[#8b5e3c]">¥{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-[#b89a7a] line-through ml-1">¥{product.originalPrice}</span>
                    )}
                  </div>
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold transition-all ${
                      addedToCart.includes(product.id)
                        ? 'bg-green-500 text-white'
                        : 'bg-[#8b5e3c] hover:bg-[#6b4423] text-white'
                    }`}
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    {addedToCart.includes(product.id) ? '已加入' : '加入购物车'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="border-2 border-[#8b5e3c] text-[#8b5e3c] hover:bg-[#8b5e3c] hover:text-white font-semibold px-10 py-3 rounded-full transition-all">
            查看更多产品
          </button>
        </div>
      </div>
    </section>
  );
}
