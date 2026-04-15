import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, Grid, List, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import BookCard from '../components/books/BookCard'
import BookFilters from '../components/books/BookFilters'
import { fetchBooks } from '../api/books'

const Books = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [books, setBooks] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)
  const [viewMode, setViewMode] = React.useState('grid')
  const [filtersOpen, setFiltersOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState(searchParams.get('search') || '')
  const [filters, setFilters] = React.useState({
    categories: searchParams.get('category') ? [searchParams.get('category')] : [],
    priceRange: null,
    featured: searchParams.get('featured') === 'true',
    sortBy: 'default',
    search: searchParams.get('search') || ''
  })

  // Load books when filters change
  React.useEffect(() => {
    loadBooks()
  }, [filters])

  // Update URL params when filters change
  React.useEffect(() => {
    const params = new URLSearchParams()
    
    if (filters.categories.length > 0) {
      params.set('category', filters.categories[0]) // For simplicity, only show first category in URL
    }
    if (filters.featured) {
      params.set('featured', 'true')
    }
    if (filters.search) {
      params.set('search', filters.search)
    }
    
    setSearchParams(params)
  }, [filters, setSearchParams])

  const loadBooks = async () => {
    try {
      setLoading(true)
      setError(null)
      const result = await fetchBooks(filters)
      setBooks(result.books)
    } catch (err) {
      setError(err.message)
      console.error('Failed to load books:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
  }

  const handleClearFilters = () => {
    setFilters({
      categories: [],
      priceRange: null,
      featured: false,
      sortBy: 'default',
      search: ''
    })
    setSearchQuery('')
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    setFilters({ ...filters, search: searchQuery })
  }

  const handleAddToCart = (book) => {
    // TODO: Implement add to cart functionality
    console.log('Adding to cart:', book)
    alert(`已将《${book.data.title}》加入购物车！`)
  }

  const getResultsText = () => {
    if (loading) return '搜索中...'
    if (error) return '搜索出错'
    
    const total = books.length
    let text = `找到 ${total} 本图书`
    
    if (filters.search) {
      text += ` (搜索: "${filters.search}")`
    }
    if (filters.categories.length > 0) {
      text += ` (分类: ${filters.categories.join(', ')})`
    }
    
    return text
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">图书浏览</h1>
          
          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="搜索书名、作者..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4"
              />
              <Button 
                type="submit" 
                size="sm" 
                className="absolute right-1 top-1/2 transform -translate-y-1/2"
              >
                搜索
              </Button>
            </div>
          </form>

          {/* Results Info and View Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-gray-600">{getResultsText()}</p>
            
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <BookFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              isOpen={filtersOpen}
              onToggle={() => setFiltersOpen(!filtersOpen)}
            />
          </div>

          {/* Books Grid */}
          <div className="flex-1">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                <span className="ml-2 text-gray-600">加载中...</span>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-600 mb-4">{error}</p>
                <Button onClick={loadBooks} variant="outline">
                  重试
                </Button>
              </div>
            ) : books.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">没有找到符合条件的图书</p>
                <Button onClick={handleClearFilters} variant="outline">
                  清除筛选条件
                </Button>
              </div>
            ) : (
              <div className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                  : 'space-y-4'
              }>
                {books.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    onAddToCart={handleAddToCart}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            )}

            {/* Load More Button (for future pagination) */}
            {books.length > 0 && !loading && (
              <div className="text-center mt-8">
                <Button variant="outline" disabled>
                  加载更多 (即将推出)
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Books