import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, ArrowLeft, Heart, Share2, Shield, Truck, RotateCcw } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PRODUCTS, BADGE_CONFIG } from '@/data/products';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/products/ProductCard';

const CATEGORY_EMOJI = {
  jersey: '👕', ball: '⚽', scarf: '🧣', hat: '🧢',
  trophy: '🏆', flag: '🚩', accessory: '🎁', collectible: '🎖️',
};

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem, setIsOpen } = useCart();
  const containerRef = useRef(null);

  const product = PRODUCTS.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!product) return;
    setSelectedSize(product.sizes?.[0] || '');
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50">
        <div className="text-6xl">😕</div>
        <h2 className="text-2xl font-bold text-slate-900">商品不存在</h2>
        <Button onClick={() => navigate('/products')} variant="primary">返回商品列表</Button>
      </div>
    );
  }

  const badgeConfig = product.badge ? BADGE_CONFIG[product.badge] : null;
  const discount = product.original_price
    ? Math.round((1 - product.price / product.original_price) * 100)
    : null;

  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addItem(product, selectedSize, quantity);
    setIsOpen(true);
  };

  return (
    <main ref={containerRef} className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-red-700 transition-colors">首页</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-red-700 transition-colors">商品</Link>
          <span>/</span>
          <span className="text-slate-700 font-medium line-clamp-1">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-gray-500 hover:text-red-700 text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> 返回
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Product Image */}
          <div className="relative aspect-square bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name}
              id={`detail-img-${product.id}`}
              data-strk-img-id={`product-detail-img-${product.id}`}
              data-strk-img={`[detail-name-${product.id}] [detail-team-${product.id}] world cup merchandise`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="600"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-9xl opacity-20">{CATEGORY_EMOJI[product.category]}</span>
            </div>
            {badgeConfig && (
              <div className="absolute top-4 left-4">
                <Badge className={`${badgeConfig.className} text-sm px-3 py-1`}>{badgeConfig.label}</Badge>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Hidden text for image search */}
            <span id={`detail-name-${product.id}`} className="sr-only">{product.name}</span>
            <span id={`detail-team-${product.id}`} className="sr-only">{product.team || product.category}</span>

            {product.team && (
              <span className="text-blue-700 font-semibold text-sm mb-2">{product.team}</span>
            )}
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex">
                {[1,2,3,4,5].map(s => (
                  <Star
                    key={s}
                    className={`w-5 h-5 ${s <= Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-slate-700 font-semibold">{product.rating}</span>
              <span className="text-gray-400 text-sm">({product.review_count} 条评价)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6 p-4 bg-red-50 rounded-xl">
              <span className="text-red-700 font-extrabold text-3xl">¥{product.price.toFixed(2)}</span>
              {product.original_price && (
                <>
                  <span className="text-gray-400 text-lg line-through">¥{product.original_price.toFixed(2)}</span>
                  <Badge className="bg-red-600 text-white text-sm">省 ¥{(product.original_price - product.price).toFixed(2)}</Badge>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm leading-relaxed mb-6">{product.description}</p>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <p className="text-slate-900 font-semibold text-sm mb-2">
                  选择规格: <span className="text-red-700">{selectedSize}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                        selectedSize === size
                          ? 'border-red-700 bg-red-700 text-white'
                          : 'border-gray-200 text-slate-700 hover:border-red-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-slate-900 font-semibold text-sm">数量:</span>
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-3 py-2 text-slate-700 hover:bg-gray-100 transition-colors font-bold"
                >
                  −
                </button>
                <span className="px-4 py-2 text-slate-900 font-semibold border-x border-gray-200 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                  className="px-3 py-2 text-slate-700 hover:bg-gray-100 transition-colors font-bold"
                >
                  +
                </button>
              </div>
              <span className="text-gray-400 text-sm">库存 {product.stock} 件</span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-6">
              <Button
                onClick={handleAddToCart}
                variant={added ? 'dark' : 'outline'}
                size="lg"
                className="flex-1 flex items-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                {added ? '已加入购物车 ✓' : '加入购物车'}
              </Button>
              <Button onClick={handleBuyNow} variant="primary" size="lg" className="flex-1">
                立即购买
              </Button>
            </div>

            <div className="flex gap-3">
              <button className="flex items-center gap-1.5 text-gray-500 hover:text-red-600 text-sm transition-colors">
                <Heart className="w-4 h-4" /> 收藏
              </button>
              <button className="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 text-sm transition-colors">
                <Share2 className="w-4 h-4" /> 分享
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-3 gap-3">
              {[
                { icon: <Shield className="w-4 h-4" />, text: "正品保证" },
                { icon: <Truck className="w-4 h-4" />, text: "免费配送" },
                { icon: <RotateCcw className="w-4 h-4" />, text: "30天退换" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1 text-center">
                  <span className="text-yellow-500">{item.icon}</span>
                  <span className="text-gray-500 text-xs">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">相关商品</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
