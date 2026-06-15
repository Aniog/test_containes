import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify Chinese Suppliers: A Complete Guide',
    excerpt: 'Learn the essential steps to verify Chinese suppliers before placing orders. From business license checks to on-site factory audits, discover how to protect your business from scams.',
    date: '2024-03-15',
    author: 'SSourcing Team',
    category: 'Sourcing Tips',
    image: 'Chinese supplier verification factory audit guide',
  },
  {
    id: 2,
    title: 'Understanding Quality Inspections: PSI vs DPI vs CLS',
    excerpt: 'A detailed comparison of Pre-Shipment Inspection (PSI), During Production Inspection (DPI), and Container Loading Supervision (CLS). Learn when to use each type of inspection.',
    date: '2024-03-08',
    author: 'SSourcing Team',
    category: 'Quality Control',
    image: 'Quality inspection PSI DPI CLS comparison guide',
  },
  {
    id: 3,
    title: 'Shipping from China: Air Freight vs Sea Freight vs Express',
    excerpt: 'Compare different shipping methods from China. Understand the cost, transit time, and when to choose each option for your imports.',
    date: '2024-02-28',
    author: 'SSourcing Team',
    category: 'Logistics',
    image: 'Shipping methods air freight sea freight express comparison',
  },
  {
    id: 4,
    title: 'Negotiating with Chinese Suppliers: Tips and Strategies',
    excerpt: 'Effective negotiation strategies when dealing with Chinese suppliers. Learn about cultural nuances, pricing tactics, and how to secure better deals.',
    date: '2024-02-20',
    author: 'SSourcing Team',
    category: 'Business Tips',
    image: 'Negotiating with Chinese suppliers pricing strategies',
  },
  {
    id: 5,
    title: 'Common Quality Issues in Chinese Manufacturing and How to Avoid Them',
    excerpt: 'Identify the most common quality problems when sourcing from China and learn practical strategies to prevent them. Protect your brand reputation.',
    date: '2024-02-15',
    author: 'SSourcing Team',
    category: 'Quality Control',
    image: 'Common quality issues Chinese manufacturing prevention',
  },
  {
    id: 6,
    title: 'Import Duties and Taxes: What Every Importer Should Know',
    excerpt: 'A comprehensive guide to understanding import duties, taxes, and customs clearance. Learn how to calculate landed costs accurately.',
    date: '2024-02-08',
    author: 'SSourcing Team',
    category: 'Import Guide',
    image: 'Import duties taxes customs clearance guide',
  },
]

const BlogPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog & Resources
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Insights, tips, and guides to help you navigate the complexities
              of sourcing from China. Stay informed with our latest articles.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image Placeholder */}
              <div
                className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center"
                data-strk-bg-id={`blog-${post.id}`}
                data-strk-bg={post.image}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="600"
              >
                <svg className="w-12 h-12 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="mr-1" size={14} />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <div className="flex items-center">
                    <User className="mr-1" size={14} />
                    {post.author}
                  </div>
                </div>

                <Link
                  to={`/blog/${post.id}`}
                  className="mt-4 inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                >
                  Read More
                  <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Have Questions About Sourcing from China?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team of experts is here to help. Contact us today for personalized
            advice on your sourcing project.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Get Expert Advice
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
