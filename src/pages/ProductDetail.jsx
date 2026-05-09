import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart, ArrowLeft, Shield, Truck, RefreshCw, ChevronRight, Check } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/products/ProductCard';

export default function ProductDetail({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="text-5xl">🏸</div>
        <h2 className="text-xl font-bold text-gray-900">商品不存在</h2>
        <Link to="/products" className="text-blue-700 hover:underline">返回商品列表</Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const categoryName = categories.find((c) => c.id === product.category)?.name || '';
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    if (onAddToCart) {
      for (let i = 0; i < qty; i++) onAddToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-700 transition-colors">首页</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/products" className="hover:text-blue-700 transition-colors">全部商品</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to={`/products?category=${product.category}`} className="hover:text-blue-700 transition-colors">{categoryName}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium truncate max-w-xs">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-700 mb-6 transition-colors border-0 bg-transparent p-0"
        >
          <ArrowLeft className="w-4 h-4" />
          返回
        </button>

        {/* Main product section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="bg-gray-50 p-8 flex items-center justify-center min-h-80">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-80 object-contain rounded-xl"
              />
            </div>

            {/* Info */}
            <div className="p-6 md:p-8 flex flex-col">
              {product.badge && (
                <span className={`self-start text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${
                  product.badgeColor === 'red' ? 'bg-red-100 text-red-600' :
                  product.badgeColor === 'green' ? 'bg-green-100 text-green-600' :
                  product.badgeColor === 'purple' ? 'bg-purple-100 text-purple-600' :
                  product.badgeColor === 'orange' ? 'bg-orange-100 text-orange-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  {product.badge}
                </span>
              )}

              <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`} />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                <span className="text-sm text-gray-500">({product.reviews} 条评价)</span>
              </div>

              {/* Price */}
              <div className="bg-gray-50 rounded-xl p-4 mb-5">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-red-600">¥{product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-base text-gray-400 line-through">¥{product.originalPrice}</span>
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">省{product.originalPrice - product.price}元</span>
                    </>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{product.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-5">
                {product.features.map((f) => (
                  <span key={f} className="flex items-center gap-1 bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full">
                    <Check className="w-3 h-3" />
                    {f}
                  </span>
                ))}
              </div>

              {/* Stock */}
              <div className="text-sm text-gray-500 mb-5">
                库存：<span className={`font-medium ${product.stock < 10 ? 'text-red-500' : 'text-green-600'}`}>
                  {product.stock < 10 ? `仅剩 ${product.stock} 件` : '充足'}
                </span>
              </div>

              {/* Qty + Add to cart */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors border-0 bg-white text-lg font-medium"
                  >
                    −
                  </button>
                  <span className="w-10 text-center text-sm font-semibold text-gray-900">{qty}</span>
                  <button
                    onClick={() => setQty((q) => Math.min(product.stock, q + 1))}
                    className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors border-0 bg-white text-lg font-medium"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm transition-all border-0 ${
                    added
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-700 text-white hover:bg-blue-800'
                  }`}
                >
                  {added ? (
                    <><Check className="w-4 h-4" /> 已加入购物车</>
                  ) : (
                    <><ShoppingCart className="w-4 h-4" /> 加入购物车</>
                  )}
                </button>

                <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-xl hover:bg-red-50 hover:border-red-200 transition-colors bg-white">
                  <Heart className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors" />
                </button>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-gray-100">
                {[
                  { icon: Shield, text: '正品保证' },
                  { icon: Truck, text: '极速发货' },
                  { icon: RefreshCw, text: '7天退换' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex flex-col items-center gap-1 text-center">
                    <Icon className="w-4 h-4 text-blue-600" />
                    <span className="text-xs text-gray-500">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Specs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">商品规格</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="bg-gray-50 rounded-xl p-3">
                <div className="text-xs text-gray-500 mb-1">{key}</div>
                <div className="text-sm font-semibold text-gray-900">{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">相关商品</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
