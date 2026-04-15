import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, TrendingUp, BookOpen, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Home = () => {
  // 模拟数据 - 稍后会从数据库获取
  const featuredBooks = [
    {
      id: 1,
      title: "百年孤独",
      author: "加西亚·马尔克斯",
      price: 45.00,
      originalPrice: 58.00,
      rating: 4.8,
      coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      category: "文学"
    },
    {
      id: 2,
      title: "人类简史",
      author: "尤瓦尔·赫拉利",
      price: 52.00,
      originalPrice: 68.00,
      rating: 4.7,
      coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      category: "历史"
    },
    {
      id: 3,
      title: "三体",
      author: "刘慈欣",
      price: 39.00,
      originalPrice: 49.00,
      rating: 4.9,
      coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      category: "科学"
    },
    {
      id: 4,
      title: "活着",
      author: "余华",
      price: 28.00,
      originalPrice: 35.00,
      rating: 4.6,
      coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
      category: "文学"
    }
  ]

  const categories = [
    { name: "文学", icon: "📚", count: 1250 },
    { name: "历史", icon: "🏛️", count: 890 },
    { name: "哲学", icon: "🤔", count: 650 },
    { name: "科学", icon: "🔬", count: 780 },
    { name: "艺术", icon: "🎨", count: 420 },
    { name: "传记", icon: "👤", count: 320 }
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                发现你的
                <span className="block text-yellow-300">下一本好书</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                在书香小筑，我们精心挑选每一本书，为您提供个性化的阅读体验。从经典文学到前沿科学，总有一本书在等待与您相遇。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link to="/books" className="flex items-center">
                    开始探索
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  了解更多
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=300&fit=crop" 
                  alt="Book 1" 
                  className="rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=300&fit=crop" 
                  alt="Book 2" 
                  className="rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <BookOpen className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">10,000+</h3>
            <p className="text-gray-600">精选图书</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">50,000+</h3>
            <p className="text-gray-600">满意读者</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Award className="h-12 w-12 text-yellow-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">4.9</h3>
            <p className="text-gray-600">用户评分</p>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">精选推荐</h2>
            <p className="text-gray-600">编辑精心挑选的优质图书</p>
          </div>
          <Link to="/books?featured=true">
            <Button variant="outline">
              查看全部
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <Card key={book.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={book.coverImage} 
                    alt={book.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2 bg-red-500">
                    热销
                  </Badge>
                </div>
                <div className="p-4">
                  <Badge variant="secondary" className="mb-2">
                    {book.category}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-1 line-clamp-1">{book.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{book.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-red-600">¥{book.price}</span>
                      <span className="text-sm text-gray-500 line-through">¥{book.originalPrice}</span>
                    </div>
                    <Button size="sm">
                      加入购物车
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">热门分类</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              探索不同领域的知识宝库，从文学经典到科学前沿，总有适合您的图书分类
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link key={category.name} to={`/books?category=${category.name}`}>
                <Card className="text-center hover:shadow-md transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.count} 本书</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">订阅我们的推荐</h2>
          <p className="text-gray-300 mb-8">
            每周收到精选书籍推荐和独家优惠信息
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="输入您的邮箱"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button className="bg-blue-600 hover:bg-blue-700">
              订阅
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home