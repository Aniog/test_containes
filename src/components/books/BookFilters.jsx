import React from 'react'
import { Filter, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const BookFilters = ({ 
  filters, 
  onFilterChange, 
  onClearFilters,
  isOpen,
  onToggle 
}) => {
  const categories = [
    "文学", "历史", "哲学", "科学", "艺术", "传记", 
    "小说", "诗歌", "散文", "经济", "管理", "心理学", 
    "教育", "儿童", "其他"
  ]

  const priceRanges = [
    { label: "0-30元", min: 0, max: 30 },
    { label: "30-50元", min: 30, max: 50 },
    { label: "50-80元", min: 50, max: 80 },
    { label: "80元以上", min: 80, max: 999 }
  ]

  const handleCategoryChange = (category) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category]
    
    onFilterChange({ ...filters, categories: newCategories })
  }

  const handlePriceRangeChange = (range) => {
    const isSameRange = filters.priceRange?.min === range.min && filters.priceRange?.max === range.max
    onFilterChange({ 
      ...filters, 
      priceRange: isSameRange ? null : range 
    })
  }

  const handleFeaturedChange = () => {
    onFilterChange({ ...filters, featured: !filters.featured })
  }

  const handleSortChange = (sortBy) => {
    onFilterChange({ ...filters, sortBy })
  }

  const getActiveFiltersCount = () => {
    let count = 0
    if (filters.categories.length > 0) count++
    if (filters.priceRange) count++
    if (filters.featured) count++
    return count
  }

  return (
    <div className="space-y-4">
      {/* Mobile Toggle Button */}
      <div className="lg:hidden">
        <Button 
          variant="outline" 
          onClick={onToggle}
          className="w-full justify-between"
        >
          <div className="flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            筛选条件
            {getActiveFiltersCount() > 0 && (
              <Badge variant="secondary" className="ml-2">
                {getActiveFiltersCount()}
              </Badge>
            )}
          </div>
        </Button>
      </div>

      {/* Filters Panel */}
      <div className={`space-y-4 ${isOpen ? 'block' : 'hidden lg:block'}`}>
        {/* Clear Filters */}
        {getActiveFiltersCount() > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">
              已选择 {getActiveFiltersCount()} 个筛选条件
            </span>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClearFilters}
              className="text-red-600 hover:text-red-700"
            >
              <X className="h-4 w-4 mr-1" />
              清除全部
            </Button>
          </div>
        )}

        {/* Sort Options */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">排序方式</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {[
              { value: 'default', label: '默认排序' },
              { value: 'price_asc', label: '价格从低到高' },
              { value: 'price_desc', label: '价格从高到低' },
              { value: 'rating', label: '评分最高' },
              { value: 'newest', label: '最新上架' }
            ].map((option) => (
              <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="sort"
                  value={option.value}
                  checked={filters.sortBy === option.value}
                  onChange={() => handleSortChange(option.value)}
                  className="text-blue-600"
                />
                <span className="text-sm">{option.label}</span>
              </label>
            ))}
          </CardContent>
        </Card>

        {/* Categories */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">图书分类</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <label key={category} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="text-blue-600"
                  />
                  <span className="text-sm">{category}</span>
                </label>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Price Range */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">价格区间</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {priceRanges.map((range) => (
              <label key={range.label} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="priceRange"
                  checked={filters.priceRange?.min === range.min && filters.priceRange?.max === range.max}
                  onChange={() => handlePriceRangeChange(range)}
                  className="text-blue-600"
                />
                <span className="text-sm">{range.label}</span>
              </label>
            ))}
          </CardContent>
        </Card>

        {/* Featured Books */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">特色筛选</CardTitle>
          </CardHeader>
          <CardContent>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.featured}
                onChange={handleFeaturedChange}
                className="text-blue-600"
              />
              <span className="text-sm">仅显示推荐图书</span>
            </label>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default BookFilters