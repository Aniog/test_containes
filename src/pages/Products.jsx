import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { PRODUCTS, CATEGORIES, BADGE_CONFIG } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

const SORT_OPTIONS = [
  { value: 'default', label: '默认排序' },
  { value: 'price_asc', label: '价格从低到高' },
  { value: 'price_desc', label: '价格从高到低' },
  { value: 'rating', label: '评分最高' },
  { value: 'popular', label: '最受欢迎' },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState('default');
  const [showFilters, setShowFilters] = useState(false);

  const categoryParam = searchParams.get('category') || 'all';
  const searchParam = searchParams.get('search') || '';
  const badgeParam = searchParams.get('badge') || '';

  const [localSearch, setLocalSearch] = useState(searchParam);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];

    if (categoryParam && categoryParam !== 'all') {
      list = list.filter(p => p.category === categoryParam);
    }
    if (badgeParam) {
      list = list.filter(p => p.badge === badgeParam);
    }
    if (searchParam) {
      const q = searchParam.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.team && p.team.toLowerCase().includes(q)) ||
        (p.searchTerms && p.searchTerms.toLowerCase().includes(q))
      );
    }

    switch (sort) {
      case 'price_asc': return list.sort((a, b) => a.price - b.price);
      case 'price_desc': return list.sort((a, b) => b.price - a.price);
      case 'rating': return list.sort((a, b) => b.rating - a.rating);
      case 'popular': return list.sort((a, b) => b.review_count - a.review_count);
      default: return list;
    }
  }, [categoryParam, searchParam, badgeParam, sort]);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (localSearch.trim()) {
      params.set('search', localSearch.trim());
    } else {
      params.delete('search');
    }
    setSearchParams(params);
  };

  const handleCategory = (catId) => {
    const params = new URLSearchParams(searchParams);
    if (catId === 'all') {
      params.delete('category');
    } else {
      params.set('category', catId);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setLocalSearch('');
    setSearchParams({});
    setSort('default');
  };

  const hasFilters = categoryParam !== 'all' || searchParam || badgeParam;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-slate-900 py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            {categoryParam !== 'all'
              ? CATEGORIES.find(c => c.id === categoryParam)?.label || '商品列表'
              : badgeParam
              ? BADGE_CONFIG[badgeParam]?.label + '商品'
              : searchParam
              ? `"${searchParam}" 搜索结果`
              : '全部商品'}
          </h1>
          <p className="text-gray-400">共找到 <span className="text-yellow-400 font-bold">{filtered.length}</span> 件商品</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Search + Sort Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <form onSubmit={handleSearch} className="flex-1 flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="搜索商品名称、球队..."
                value={localSearch}
                onChange={e => setLocalSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-800 placeholder-gray-400 bg-white text-sm"
              />
            </div>
            <button type="submit" className="bg-red-700 hover:bg-red-800 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors">
              搜索
            </button>
          </form>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 border border-gray-200 bg-white text-slate-700 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              筛选
            </button>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="border border-gray-200 bg-white text-slate-700 px-3 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Filter */}
        {showFilters && (
          <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
            <h3 className="text-slate-900 font-semibold text-sm mb-3">商品分类</h3>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => handleCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    (cat.id === 'all' && categoryParam === 'all') || cat.id === categoryParam
                      ? 'bg-red-700 text-white'
                      : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Active Filters */}
        {hasFilters && (
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="text-gray-500 text-sm">当前筛选:</span>
            {categoryParam !== 'all' && (
              <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-medium px-2.5 py-1 rounded-full">
                {CATEGORIES.find(c => c.id === categoryParam)?.label}
                <button onClick={() => handleCategory('all')}><X className="w-3 h-3" /></button>
              </span>
            )}
            {searchParam && (
              <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full">
                "{searchParam}"
                <button onClick={() => { setLocalSearch(''); const p = new URLSearchParams(searchParams); p.delete('search'); setSearchParams(p); }}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button onClick={clearFilters} className="text-gray-400 hover:text-red-600 text-xs underline transition-colors">
              清除全部
            </button>
          </div>
        )}

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">未找到相关商品</h3>
            <p className="text-gray-400 mb-6">请尝试其他关键词或分类</p>
            <button onClick={clearFilters} className="bg-red-700 hover:bg-red-800 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
              查看全部商品
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
