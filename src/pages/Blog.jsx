import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Tag,
  Search,
  BookOpen
} from 'lucide-react'

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'How to Verify a Chinese Supplier: A Complete Guide',
      excerpt: 'Learn the essential steps to verify suppliers in China, from business license checks to on-site factory audits. Protect your business from scams and ensure you\'re working with legitimate manufacturers.',
      category: 'Supplier Verification',
      date: '2024-01-15',
      author: 'SSourcing Team',
      readTime: '12 min read',
      image: 'factory verification china sourcing'
    },
    {
      id: 2,
      title: 'Quality Control in Chinese Manufacturing: Best Practices',
      excerpt: 'Discover the most effective quality control practices when manufacturing in China. From pre-shipment inspections to during-production checks, learn how to ensure your products meet quality standards.',
      category: 'Quality Control',
      date: '2024-01-10',
      author: 'SSourcing Team',
      readTime: '10 min read',
      image: 'quality inspection manufacturing china'
    },
    {
      id: 3,
      title: 'Understanding Incoterms: Shipping Terms Explained',
      excerpt: 'A comprehensive guide to Incoterms (International Commercial Terms) and how they affect your shipping costs and responsibilities when importing from China.',
      category: 'Logistics & Shipping',
      date: '2024-01-05',
      author: 'SSourcing Team',
      readTime: '8 min read',
      image: 'shipping containers china export'
    },
    {
      id: 4,
      title: 'How to Negotiate with Chinese Suppliers: Cultural Tips',
      excerpt: 'Learn the cultural nuances of negotiating with Chinese suppliers. Understand the concept of "face," building relationships (guanxi), and effective communication strategies.',
      category: 'Business Culture',
      date: '2023-12-28',
      author: 'SSourcing Team',
      readTime: '15 min read',
      image: 'business meeting negotiation china'
    },
    {
      id: 5,
      title: 'Top 10 Product Certification Requirements for Exporting from China',
      excerpt: 'A detailed overview of the most common product certifications required for exporting from China to US, EU, and other major markets. Ensure your products comply with regulations.',
      category: 'Compliance & Certification',
      date: '2023-12-20',
      author: 'SSourcing Team',
      readTime: '11 min read',
      image: 'product certification testing lab'
    },
    {
      id: 6,
      title: 'Sourcing from Yiwu Market: Tips for Buyers',
      excerpt: 'Yiwu Market is the world\'s largest small commodities market. Learn how to navigate it effectively, find reliable suppliers, and avoid common pitfalls.',
      category: 'Sourcing Tips',
      date: '2023-12-15',
      author: 'SSourcing Team',
      readTime: '9 min read',
      image: 'yiwu market china wholesale'
    },
    {
      id: 7,
      title: 'How to Calculate Landed Cost When Importing from China',
      excerpt: 'A step-by-step guide to calculating your total landed cost when importing from China. Include all hidden costs to ensure accurate pricing and profitability.',
      category: 'Cost Management',
      date: '2023-12-10',
      author: 'SSourcing Team',
      readTime: '7 min read',
      image: 'cost calculation import china'
    },
    {
      id: 8,
      title: 'Private Label Manufacturing in China: What You Need to Know',
      excerpt: 'Everything you need to know about private label manufacturing in China. From finding the right manufacturer to protecting your intellectual property.',
      category: 'Manufacturing',
      date: '2023-12-05',
      author: 'SSourcing Team',
      readTime: '13 min read',
      image: 'private label manufacturing china'
    },
    {
      id: 9,
      title: 'Common Quality Issues in Chinese Manufacturing and How to Avoid Them',
      excerpt: 'Identify the most common quality issues when manufacturing in China and learn practical strategies to prevent them. Save time, money, and protect your brand reputation.',
      category: 'Quality Control',
      date: '2023-11-28',
      author: 'SSourcing Team',
      readTime: '10 min read',
      image: 'quality issues manufacturing defects'
    }
  ]

  const categories = [
    'All Categories',
    'Supplier Verification',
    'Quality Control',
    'Logistics & Shipping',
    'Business Culture',
    'Compliance & Certification',
    'Sourcing Tips',
    'Cost Management',
    'Manufacturing'
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Resources</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Expert insights and practical guides on sourcing from China
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button 
                        className={`text-left w-full px-3 py-2 rounded-lg transition-colors ${
                          index === 0 
                            ? 'bg-blue-50 text-blue-600 font-semibold' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-lg font-semibold mb-4">Popular Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Supplier Verification', 'Quality Control', 'Shipping', 'Negotiation', 'Cost Saving'].map((topic, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Articles */}
            <div className="md:col-span-3">
              <div className="space-y-8">
                {articles.map((article) => (
                  <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="grid md:grid-cols-3 gap-0">
                      {/* Article Image Placeholder */}
                      <div className="bg-gray-200 min-h-[200px] md:min-h-full flex items-center justify-center">
                        <div className="text-gray-400 text-center p-4">
                          <BookOpen className="w-12 h-12 mx-auto mb-2" />
                          <p className="text-sm">{article.image}</p>
                        </div>
                      </div>

                      {/* Article Content */}
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {article.category}
                          </span>
                          <span className="text-gray-500 text-sm">{article.readTime}</span>
                        </div>

                        <h2 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                          <Link to={`/blog/${article.id}`}>{article.title}</Link>
                        </h2>

                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{article.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{article.author}</span>
                            </div>
                          </div>

                          <Link 
                            to={`/blog/${article.id}`}
                            className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                  <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50">2</button>
                  <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50">3</button>
                  <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50">Next →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Sourcing Tips</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest articles, guides, and sourcing tips 
              directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Help with Your Sourcing Project?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our team of experts is ready to help you source successfully from China. 
            Contact us today for a free consultation.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-blue-700 hover:bg-blue-50 text-lg">
            Get Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Blog
