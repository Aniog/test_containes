import React, { useState, useEffect } from 'react';
import { supabase } from '@/api/postgrest-client.js';
import { Loader2, AlertCircle, Filter } from 'lucide-react';
import CoffeeCard from './CoffeeCard';

const CoffeeGrid = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: '全部' },
    { value: 'espresso', label: '意式浓缩' },
    { value: 'americano', label: '美式咖啡' },
    { value: 'latte', label: '拿铁' },
    { value: 'cappuccino', label: '卡布奇诺' },
    { value: 'mocha', label: '摩卡' },
    { value: 'specialty', label: '特调' }
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      // 使用模拟数据，因为实际的 Supabase 连接可能不可用
      const mockProducts = [
        {
          id: 1,
          name: "经典美式咖啡",
          description: "选用优质阿拉比卡咖啡豆，口感醇厚，回味悠长",
          price: 28,
          image_url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
          category: "americano",
          size: "medium",
          is_available: true,
          rating: 4.5,
          ingredients: ["阿拉比卡咖啡豆", "纯净水"]
        },
        {
          id: 2,
          name: "香草拿铁",
          description: "浓郁的意式浓缩咖啡配上丝滑牛奶泡沫和香草糖浆",
          price: 35,
          image_url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
          category: "latte",
          size: "large",
          is_available: true,
          rating: 4.8,
          ingredients: ["意式浓缩咖啡", "牛奶", "香草糖浆"]
        },
        {
          id: 3,
          name: "卡布奇诺",
          description: "经典意式咖啡，浓缩咖啡与蒸汽牛奶的完美结合",
          price: 32,
          image_url: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop",
          category: "cappuccino",
          size: "medium",
          is_available: true,
          rating: 4.6,
          ingredients: ["意式浓缩咖啡", "蒸汽牛奶", "奶泡"]
        },
        {
          id: 4,
          name: "摩卡咖啡",
          description: "浓郁的巧克力与咖啡的完美融合，甜蜜诱人",
          price: 38,
          image_url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
          category: "mocha",
          size: "large",
          is_available: true,
          rating: 4.7,
          ingredients: ["意式浓缩咖啡", "巧克力糖浆", "牛奶", "奶油"]
        },
        {
          id: 5,
          name: "意式浓缩",
          description: "纯正的意式浓缩咖啡，浓郁香醇，咖啡爱好者的首选",
          price: 25,
          image_url: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop",
          category: "espresso",
          size: "small",
          is_available: true,
          rating: 4.4,
          ingredients: ["意式浓缩咖啡"]
        },
        {
          id: 6,
          name: "特调冰咖啡",
          description: "夏日特调，清爽冰凉，加入特制糖浆和奶油",
          price: 42,
          image_url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
          category: "specialty",
          size: "large",
          is_available: true,
          rating: 4.9,
          ingredients: ["冰块", "浓缩咖啡", "特制糖浆", "奶油", "香草"]
        }
      ];

      setProducts(mockProducts);
    } catch (err) {
      console.error('获取产品失败:', err);
      setError(err.message || '获取产品信息时发生错误');
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="animate-spin w-8 h-8 text-amber-600" />
        <span className="ml-2 text-gray-600">加载中...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 flex gap-2 p-4 items-center bg-red-50 rounded-md border border-red-100">
        <AlertCircle size={20} />
        <span>错误: {error}</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 分类筛选 */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700 font-medium">分类筛选:</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.value
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* 产品网格 */}
      {filteredProducts.length === 0 ? (
        <div className="text-gray-500 text-center py-12">
          <p className="text-lg">该分类下暂无产品</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <CoffeeCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CoffeeGrid;