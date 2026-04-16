import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ShoppingCart, Heart, Star, Shield, Truck, RotateCcw,
  ChevronLeft, Plus, Minus, CheckCircle, Package, Zap
} from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import TutorialCanvas from '../components/TutorialCanvas';
import ProductCard from '../components/ProductCard';

const fakeReviews = [
  { id: 1, user: '用户***88', rating: 5, date: '2024-03-15', content: '质量非常好，包装很隐私，快递也很快，完全符合预期！', verified: true },
  { id: 2, user: '买家***23', rating: 5, date: '2024-03-10', content: '第二次购买了，品质稳定，使用效果很好，强烈推荐！', verified: true },
  { id: 3, user: '匿名用户', rating: 4, date: '2024-03-08', content: '整体不错，包装很严实，没有任何标识，发货速度快。', verified: false },
  { id: 4, user: '用户***56', rating: 5, date: '2024-03-05', content: '材质很好，手感舒适，功能强大，值得购买！', verified: true },
  { id: 5, user: '买家***77', rating: 4, date: '2024-02-28', content: '性价比很高，功能齐全，客服态度也很好。', verified: true },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('detail');
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-xl mb-4">商品不存在</p>
          <Link to="/products" className="text-pink-600 hover:underline">返回商品列表</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    setIsCartOpen(true);
  };

  const avgRating = fakeReviews.reduce((s, r) => s + r.rating, 0) / fakeReviews.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-pink-600 transition">首页</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-pink-600 transition">全部商品</Link>
          <span>/</span>
          <span className="text-gray-800">{product.name}</span>
        </nav>

        {/* Product main */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative bg-gray-50 aspect-square md:aspect-auto">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={e => {
                  e.target.src = `https://placehold.co/600x600/f9a8d4/9333ea?text=${encodeURIComponent(product.name)}`;
                }}
              />
              <span className={`absolute top-4 left-4 ${product.badgeColor} text-white text-sm px-3 py-1 rounded-full font-medium`}>
                {product.badge}
              </span>
            </div>

            {/* Info */}
            <div className="p-6 md:p-8 flex flex-col">
              <h1 className="text-2xl font-bold text-gray-800 mb-3">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`} />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">{product.rating} 分</span>
                <span className="text-gray-400 text-sm">({product.reviews} 条评价)</span>
                <span className="text-gray-400 text-sm">已售 {product.sold.toLocaleString()}</span>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 mb-5">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-pink-600">¥{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">¥{product.originalPrice}</span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-red-500 text-white text-sm px-2 py-0.5 rounded-full font-bold">
                      省¥{product.originalPrice - product.price}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="mb-5">
                <p className="text-sm font-medium text-gray-700 mb-2">产品特点</p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((f, i) => (
                    <span key={i} className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div className="mb-5 grid grid-cols-2 gap-2">
                {Object.entries(product.specs).filter(([, v]) => v !== 'N/A').map(([k, v]) => (
                  <div key={k} className="bg-gray-50 rounded-lg px-3 py-2">
                    <p className="text-xs text-gray-500">{k === 'material' ? '材质' : k === 'size' ? '尺寸' : k === 'waterproof' ? '防水' : k === 'charge' ? '充电' : '续航'}</p>
                    <p className="text-sm font-medium text-gray-800">{v}</p>
                  </div>
                ))}
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-5">
                <span className="text-sm text-gray-600">数量</span>
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-4 py-2 hover:bg-gray-50 transition text-gray-600"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-5 py-2 font-medium text-gray-800 border-x border-gray-200">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                    className="px-4 py-2 hover:bg-gray-50 transition text-gray-600"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-sm text-gray-400">库存 {product.stock} 件</span>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mb-5">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-3.5 rounded-xl font-medium transition flex items-center justify-center gap-2 ${
                    addedToCart
                      ? 'bg-green-500 text-white'
                      : 'border-2 border-pink-500 text-pink-600 hover:bg-pink-50'
                  }`}
                >
                  {addedToCart ? (
                    <><CheckCircle className="w-5 h-5" /> 已加入购物车</>
                  ) : (
                    <><ShoppingCart className="w-5 h-5" /> 加入购物车</>
                  )}
                </button>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 py-3.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  立即购买
                </button>
              </div>

              {/* Trust */}
              <div className="flex items-center gap-4 text-xs text-gray-500 border-t pt-4">
                <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-green-500" /> 隐私包装</span>
                <span className="flex items-center gap-1"><Truck className="w-4 h-4 text-blue-500" /> 快速发货</span>
                <span className="flex items-center gap-1"><RotateCcw className="w-4 h-4 text-orange-500" /> 7天退换</span>
                <span className="flex items-center gap-1"><Package className="w-4 h-4 text-purple-500" /> 正品保障</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className="flex border-b border-gray-100">
            {[
              { key: 'detail', label: '商品详情' },
              { key: 'tutorial', label: '使用教程' },
              { key: 'reviews', label: `用户评价 (${fakeReviews.length})` },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 py-4 text-sm font-medium transition ${
                  activeTab === tab.key
                    ? 'text-pink-600 border-b-2 border-pink-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {/* Detail tab */}
            {activeTab === 'detail' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-3">商品描述</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-3">产品规格</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.entries(product.specs).map(([k, v]) => (
                      <div key={k} className="bg-gray-50 rounded-xl p-3">
                        <p className="text-xs text-gray-500 mb-1">
                          {k === 'material' ? '材质' : k === 'size' ? '尺寸/容量' : k === 'waterproof' ? '防水等级' : k === 'charge' ? '充电方式' : '电池续航'}
                        </p>
                        <p className="text-sm font-semibold text-gray-800">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <p className="text-yellow-800 text-sm font-medium mb-1">⚠️ 温馨提示</p>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• 本商品仅供18岁以上成年人购买使用</li>
                    <li>• 使用前请仔细阅读说明书</li>
                    <li>• 使用前后请做好清洁工作</li>
                    <li>• 如有不适请立即停止使用</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Tutorial tab */}
            {activeTab === 'tutorial' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">动态使用教程</h3>
                  <p className="text-gray-500 text-sm mb-4">以下动画演示了本产品的基本使用步骤，请按照步骤操作以获得最佳体验。</p>
                </div>
                <div className="max-w-lg mx-auto">
                  <TutorialCanvas tutorialType={product.tutorialType} />
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-blue-800 text-sm font-medium mb-2">💡 使用小贴士</p>
                  <ul className="text-blue-700 text-sm space-y-1.5">
                    <li>• 首次使用前请充满电，以获得最佳性能</li>
                    <li>• 建议配合润滑液使用，增加舒适感</li>
                    <li>• 使用后用温水和中性清洁剂清洗</li>
                    <li>• 存放于阴凉干燥处，避免阳光直射</li>
                    <li>• 如有任何问题，请联系我们的客服团队</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Reviews tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {/* Summary */}
                <div className="flex items-center gap-8 p-5 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
                  <div className="text-center">
                    <p className="text-5xl font-bold text-pink-600">{avgRating.toFixed(1)}</p>
                    <div className="flex justify-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(avgRating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`} />
                      ))}
                    </div>
                    <p className="text-gray-500 text-sm mt-1">{fakeReviews.length} 条评价</p>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    {[5, 4, 3, 2, 1].map(star => {
                      const count = fakeReviews.filter(r => r.rating === star).length;
                      const pct = (count / fakeReviews.length) * 100;
                      return (
                        <div key={star} className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 w-4">{star}★</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-yellow-400 h-2 rounded-full transition-all"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500 w-6">{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Review list */}
                <div className="space-y-4">
                  {fakeReviews.map(review => (
                    <div key={review.id} className="border border-gray-100 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            {review.user[0]}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">{review.user}</p>
                            {review.verified && (
                              <span className="text-xs text-green-600 flex items-center gap-0.5">
                                <CheckCircle className="w-3 h-3" /> 已验证购买
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="text-xs text-gray-400">{review.date}</span>
                      </div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`} />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm">{review.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">相关推荐</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
