import React from 'react'
import { Star, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const BookCard = ({ book, onAddToCart }) => {
  const {
    id,
    data: {
      title,
      author,
      price,
      originalPrice,
      rating,
      reviewCount,
      category,
      tags = [],
      featured,
      stock,
      status
    }
  } = book

  const isAvailable = status === 'available' && stock > 0
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 h-full">
      <CardContent className="p-0 h-full flex flex-col">
        <div className="relative overflow-hidden rounded-t-lg">
          <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <div className="text-center p-4">
              <h3 className="font-bold text-lg mb-2 text-gray-800">{title}</h3>
              <p className="text-sm text-gray-600">{author}</p>
            </div>
          </div>
          {featured && (
            <Badge className="absolute top-2 right-2 bg-red-500">
              推荐
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="absolute top-2 left-2 bg-green-500">
              -{discount}%
            </Badge>
          )}
          {!isAvailable && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <Badge variant="secondary" className="bg-gray-600 text-white">
                {stock === 0 ? '缺货' : '暂停销售'}
              </Badge>
            </div>
          )}
        </div>
        
        <div className="p-4 flex-1 flex flex-col">
          <Badge variant="secondary" className="mb-2 w-fit">
            {category}
          </Badge>
          
          <h3 className="font-semibold text-lg mb-1 line-clamp-2 flex-shrink-0">{title}</h3>
          <p className="text-gray-600 text-sm mb-2 flex-shrink-0">{author}</p>
          
          <div className="flex items-center mb-3 flex-shrink-0">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 ml-1">{rating}</span>
              <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
            </div>
          </div>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3 flex-shrink-0">
              {tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          
          <div className="mt-auto">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-red-600">¥{price}</span>
                {originalPrice && originalPrice > price && (
                  <span className="text-sm text-gray-500 line-through">¥{originalPrice}</span>
                )}
              </div>
              <div className="text-xs text-gray-500">
                库存: {stock}
              </div>
            </div>
            
            <Button 
              size="sm" 
              className="w-full"
              disabled={!isAvailable}
              onClick={() => onAddToCart?.(book)}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {isAvailable ? '加入购物车' : '暂时缺货'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default BookCard