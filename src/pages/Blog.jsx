import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Calendar,
  Clock,
  User,
  Search,
  Tag,
  FileText,
  Shield,
  Truck,
  ClipboardCheck,
  TrendingUp,
  MessageSquare,
  Building2,
  Globe
} from 'lucide-react'

const PageHeader = ({ title, subtitle }) => (
  <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-gray-200 max-w-2xl">{subtitle}</p>
    </div>
  </section>
)

const BlogCard = ({ post }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
    <div className="h-48 bg-[#1E3A5F] relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <post.icon className="w-12 h-12 text-white/30" />
      </div>
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 bg-[#E67E22] text-white text-xs font-medium rounded-full">
          {post.category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-4 text-sm text-[#718096] mb-3">
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {post.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {post.readTime}
        </span>
      </div>
      <h3 className="text-lg font-bold text-[#1A1A2E] mb-2 hover:text-[#E67E22] transition-colors">
        <Link to="#">{post.title}</Link>
      </h3>
      <p className="text-[#4A5568] text-sm mb-4">{post.excerpt}</p>
      <Link 
        to="#"
        className="inline-flex items-center text-[#1E3A5F] font-medium text-sm hover:text-[#E67E22] transition-colors"
      >
        Read More
        <ArrowRight className="ml-1 w-4 h-4" />
      </Link>
    </div>
  </div>
)

const Blog = () => {
  const posts = [
    {
      icon: Shield,
      category: 'Supplier Verification',
      title: 'How to Verify a Chinese Factory Before Sourcing',
      excerpt: 'Learn the essential steps to verify factory legitimacy, including business license checks, on-site audits, and red flags to watch for.',
      date: 'June 15, 2024',
      readTime: '8 min read',
    },
    {
      icon: ClipboardCheck,
      category: 'Quality Control',
      title: 'Quality Inspection Checklist for Imported Products',
      excerpt: 'A comprehensive guide to quality control inspections, covering pre-production, during production, and pre-shipment checks.',
      date: 'June 10, 2024',
      readTime: '10 min read',
    },
    {
      icon: Truck,
      category: 'Logistics',
      title: 'Understanding Shipping Terms: FOB, CIF, EXW, and More',
      excerpt: 'Navigate the complexities of international shipping terms and understand what each Incoterm means for your business.',
      date: 'June 5, 2024',
      readTime: '7 min read',
    },
    {
      icon: TrendingUp,
      category: 'Cost Optimization',
      title: 'Strategies for Reducing Sourcing Costs from China',
      excerpt: 'Practical tips for negotiating better prices, optimizing order quantities, and reducing hidden costs in your supply chain.',
      date: 'May 28, 2024',
      readTime: '9 min read',
    },
    {
      icon: Building2,
      category: 'Industry Insights',
      title: 'The State of Manufacturing in China 2024',
      excerpt: 'An overview of the current manufacturing landscape in China, emerging trends, and what it means for international buyers.',
      date: 'May 20, 2024',
      readTime: '12 min read',
    },
    {
      icon: MessageSquare,
      category: 'Communication',
      title: 'Effective Communication with Chinese Suppliers',
      excerpt: 'Tips for building strong relationships with suppliers, overcoming language barriers, and ensuring clear communication.',
      date: 'May 15, 2024',
      readTime: '6 min read',
    },
    {
      icon: Globe,
      category: 'Compliance',
      title: 'Navigating Product Certifications for China Exports',
      excerpt: 'Understanding CE, FCC, RoHS, and other certifications required for different product categories when importing from China.',
      date: 'May 10, 2024',
      readTime: '11 min read',
    },
    {
      icon: FileText,
      category: 'Contract Management',
      title: 'Essential Contract Clauses for China Sourcing',
      excerpt: 'Key contract terms you should include when working with Chinese suppliers to protect your interests and minimize risks.',
      date: 'May 5, 2024',
      readTime: '8 min read',
    },
    {
      icon: Shield,
      category: 'Risk Management',
      title: 'Common Scams and How to Avoid Them',
      excerpt: 'Learn about prevalent scams in China sourcing and practical steps to protect your business from fraud.',
      date: 'April 28, 2024',
      readTime: '9 min read',
    },
  ]

  const categories = [
    { name: 'All Posts', count: 9 },
    { name: 'Supplier Verification', count: 2 },
    { name: 'Quality Control', count: 1 },
    { name: 'Logistics', count: 1 },
    { name: 'Cost Optimization', count: 1 },
    { name: 'Industry Insights', count: 1 },
    { name: 'Communication', count: 1 },
    { name: 'Compliance', count: 1 },
    { name: 'Contract Management', count: 1 },
    { name: 'Risk Management', count: 1 },
  ]

  return (
    <>
      <PageHeader 
        title="Blog" 
        subtitle="Insights, tips, and guides for successful China sourcing"
      />

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#F8FAFC] rounded-xl p-6 sticky top-24">
                <h3 className="font-semibold text-[#1A1A2E] mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link 
                        to="#"
                        className="flex items-center justify-between text-sm text-[#4A5568] hover:text-[#E67E22] transition-colors py-1"
                      >
                        <span>{category.name}</span>
                        <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h3 className="font-semibold text-[#1A1A2E] mb-4">Subscribe</h3>
                  <p className="text-sm text-[#4A5568] mb-4">
                    Get the latest insights delivered to your inbox.
                  </p>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
                  />
                  <button className="w-full mt-2 py-2 bg-[#1E3A5F] text-white text-sm font-medium rounded-lg hover:bg-[#2D5A87] transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {posts.map((post, index) => (
                  <BlogCard key={index} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-[#4A5568] mb-8">
            Subscribe to our newsletter for the latest China sourcing insights and tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
            />
            <button className="px-6 py-3 bg-[#E67E22] text-white font-semibold rounded-lg hover:bg-[#D35400] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1E3A5F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help with Sourcing?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Our team of experts is ready to assist you with your China sourcing needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#E67E22] text-white font-semibold rounded-lg hover:bg-[#D35400] transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Blog