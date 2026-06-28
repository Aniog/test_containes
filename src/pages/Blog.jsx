import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Tag, ChevronRight } from 'lucide-react'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Verify Chinese Suppliers: A Complete Guide',
      excerpt: 'Learn the essential steps to verify suppliers in China, from business license checks to factory audits. Protect your business from scams and ensure supplier reliability.',
      date: '2024-03-15',
      author: 'SSourcing Team',
      category: 'Sourcing Tips',
      image: 'chinese-supplier-verification-factory-audit'
    },
    {
      id: 2,
      title: 'Quality Inspection Checklist for Importing from China',
      excerpt: 'A comprehensive checklist for quality inspections when sourcing from China. Ensure your products meet specifications before shipment.',
      date: '2024-03-10',
      author: 'SSourcing Team',
      category: 'Quality Control',
      image: 'quality-inspection-checklist-china-import'
    },
    {
      id: 3,
      title: 'Understanding Incoterms: Shipping Terms Explained',
      excerpt: 'A practical guide to Incoterms (International Commercial Terms) and how they affect your shipping costs and responsibilities.',
      date: '2024-03-05',
      author: 'SSourcing Team',
      category: 'Logistics',
      image: 'incoterms-shipping-terms-explained-guide'
    },
    {
      id: 4,
      title: 'Top 10 Questions to Ask Before Choosing a Supplier',
      excerpt: 'Essential questions every buyer should ask potential Chinese suppliers to assess their capabilities and reliability.',
      date: '2024-02-28',
      author: 'SSourcing Team',
      category: 'Sourcing Tips',
      image: 'questions-ask-chinese-supplier-sourcing'
    },
    {
      id: 5,
      title: 'How to Negotiate Better Prices with Chinese Suppliers',
      excerpt: 'Practical negotiation strategies to get better prices from Chinese suppliers while maintaining quality and service.',
      date: '2024-02-20',
      author: 'SSourcing Team',
      category: 'Negotiation',
      image: 'negotiate-prices-chinese-suppliers-strategies'
    },
    {
      id: 6,
      title: 'Common Sourcing Mistakes and How to Avoid Them',
      excerpt: 'Learn from others mistakes. A guide to the most common sourcing pitfalls and how to avoid them when importing from China.',
      date: '2024-02-15',
      author: 'SSourcing Team',
      category: 'Sourcing Tips',
      image: 'common-sourcing-mistakes-avoid-china'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Blog & Resources</h1>
          <p className="text-xl text-blue-100">Expert insights on China sourcing, quality control, and international trade</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
                  <Tag className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1">
                      Read More
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Personalized Advice?</h2>
          <p className="text-xl mb-8 text-blue-100">Contact our sourcing experts for tailored recommendations</p>
          <Link
            to="/contact"
            className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Get Expert Help
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Blog
