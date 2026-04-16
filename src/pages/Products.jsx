import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, Search, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const sortOptions = [
  { value: 'default', label: '综合排序' },
  { value: 'price_asc', label: '价格从低到高' },
  { value: 'price_desc', label: '价格从高到低' },
  { value: 'rating', label: '好评优先' },
  { value: 'sold', label: '销量优先' },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const searchQuery = searchParams.get('search') || '';

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams);
    if (cat === 'all') {
      params.delete('category');
    } else {
      params.set('category', cat);
    }
    params.delete('search');
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortBy) {
      case 'price_asc': result.sort((a, b) => a.price - b.price); break;
      case 'price_desc': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      case 'sold': result.sort((a, b) => b.sold - a.sold); break;
    }

    return result;
  }, [activeCategory, searchQuery, sortBy, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {searchQuery ? `搜索"${searchQuery}"` : (categories.find(c => c.id === activeCategory)?.name || '全部商品')}
          </h1>
          <p className="text-gray-500 text-sm mt-1">共找到 {filteredProducts.length} 件商品</p>
        </div>

        <div className="flex gap-6">
          {/* Sidebar filters - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-bold text-gray-800 mb-4">商品分类</h3>
              <ul className="space-y-1">
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-sm transition flex items-center gap-2 ${
                        activeCategory === cat.id
                          ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.name}</span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <h3 className="font-bold text-gray-800 mb-3">价格区间</h3>
                <div className="space-y-2">
                  {[[0, 100], [100, 300], [300, 500], [500, 1000]].map(([min, max]) => (
                    <button
                      key={`${min}-${max}`}
                      onClick={() => setPriceRange([min, max])}
                      className={`w-full text-left px-3 py-2 rounded-xl text-sm transition ${
                        priceRange[0] === min && priceRange[1] === max
                          ? 'bg-pink-50 text-pink-600 font-medium border border-pink-200'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      ¥{min} - ¥{max}
                    </button>
                  ))}
                  <button
                    onClick={() => setPriceRange([0, 1000])}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm transition ${
                      priceRange[0] === 0 && priceRange[1] === 1000
                        ? 'bg-pink-50 text-pink-600 font-medium border border-pink-200'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    全部价格
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Sort bar */}
            <div className="bg-white rounded-2xl px-4 py-3 mb-4 flex items-center justify-between shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 overflow-x-auto">
                {sortOptions.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setSortBy(opt.value)}
                    className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition ${
                      sortBy === opt.value
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center gap-1 text-gray-600 text-sm ml-2 flex-shrink-0"
              >
                <SlidersHorizontal className="w-4 h-4" />
                筛选
              </button>
            </div>

            {/* Mobile filters */}
            {showFilters && (
              <div className="md:hidden bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => { setCategory(cat.id); setShowFilters(false); }}
                      className={`px-3 py-1.5 rounded-full text-sm transition ${
                        activeCategory === cat.id
                          ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {cat.icon} {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Search result tag */}
            {searchQuery && (
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  搜索: {searchQuery}
                  <button onClick={() => { const p = new URLSearchParams(searchParams); p.delete('search'); setSearchParams(p); }}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              </div>
            )}

            {/* Products grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl p-16 text-center">
                <Search className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">没有找到相关商品</p>
                <button
                  onClick={() => { setSearchParams({}); setPriceRange([0, 1000]); }}
                  className="mt-4 text-pink-600 hover:underline text-sm"
                >
                  清除筛选条件
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {filteredProducts.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
