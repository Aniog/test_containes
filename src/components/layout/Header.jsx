import React from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingCart, BookOpen, User, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const Header = ({ cartItemsCount = 0, onSearchChange, searchQuery = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-gray-900">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="hidden sm:block">书香小筑</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="搜索书籍、作者..."
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                className="pl-10 pr-4 w-full"
              />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              首页
            </Link>
            <Link to="/books" className="text-gray-700 hover:text-blue-600 transition-colors">
              图书
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-blue-600 transition-colors">
              分类
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              关于
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button - Mobile */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs p-0"
                  >
                    {cartItemsCount > 99 ? '99+' : cartItemsCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* User Account */}
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="搜索书籍、作者..."
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="pl-10 pr-4 w-full"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                首页
              </Link>
              <Link 
                to="/books" 
                className="text-gray-700 hover:text-blue-600 transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                图书
              </Link>
              <Link 
                to="/categories" 
                className="text-gray-700 hover:text-blue-600 transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                分类
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-blue-600 transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                关于
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header