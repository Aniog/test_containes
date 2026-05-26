import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const categories = [
  { key: 'all', label: '全部' },
  { key: 'jersey', label: '球衣' },
  { key: 'ball', label: '足球' },
  { key: 'scarf', label: '围巾' },
  { key: 'hat', label: '帽子' },
  { key: 'flag', label: '旗帜' },
  { key: 'trophy', label: '奖杯' },
  { key: 'collectible', label: '收藏品' },
  { key: 'accessory', label: '配件' },
]

export default function ShopFilters({ onCategoryChange }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'all'

  const handleCategory = (key) => {
    const params = new URLSearchParams(searchParams)
    if (key === 'all') {
      params.delete('category')
    } else {
      params.set('category', key)
    }
    params.delete('page')
    setSearchParams(params)
    if (onCategoryChange) onCategoryChange(key)
  }

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(cat => (
        <button
          key={cat.key}
          onClick={() => handleCategory(cat.key)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeCategory === cat.key
              ? 'bg-red-700 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
