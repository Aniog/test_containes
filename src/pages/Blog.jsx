import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  User,
  Search,
  FileText,
  TrendingUp,
  Shield,
  Truck,
  Package,
  Factory,
  CheckCircle
} from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'How to Verify a Chinese Factory Before Placing an Order',
      excerpt: 'Learn the essential steps to verify a factory\'s legitimacy, including business license checks, facility visits, and red flags to watch for.',
      category: 'Supplier Verification',
      date: 'July 20, 2026',
      readTime: '8 min read',
      author: 'Michael Chen',
      image: 'factory-verification'
    },
    {
      title: 'Understanding AQL: The Key to Quality Inspections in China',
      excerpt: 'AQL (Acceptable Quality Level) is the industry standard for product inspections. We explain how it works and why it matters for your orders.',
      category: 'Quality Control',
      date: 'July 15, 2026',
      readTime: '6 min read',
      author: 'Sarah Zhang',
      image: 'quality-inspection'
    },
    {
      title: 'FOB vs CIF: Choosing the Right Shipping Terms for Your China Order',
      excerpt: 'Understanding the difference between FOB and CIF shipping terms is crucial for cost planning. We break down the pros and cons of each.',
      category: 'Shipping & Logistics',
      date: 'July 10, 2026',
      readTime: '5 min read',
      author: 'David Liu',
      image: 'shipping-logistics'
    },
    {
      title: 'Top 10 Mistakes to Avoid When Sourcing from China',
      excerpt: 'From poor communication to skipping inspections, these common mistakes can cost you time and money. Learn how to avoid them.',
      category: 'Sourcing Tips',
      date: 'July 5, 2026',
      readTime: '7 min read',
      author: 'Michael Chen',
      image: 'sourcing-mistakes'
    },
    {
      title: 'How to Protect Your IP When Manufacturing in China',
      excerpt: 'Intellectual property concerns are valid when manufacturing overseas. Discover practical steps to protect your designs and patents.',
      category: 'IP Protection',
      date: 'June 28, 2026',
      readTime: '9 min read',
      author: 'Jennifer Wu',
      image: 'ip-protection'
    },
    {
      title: 'The Complete Guide to Product Samples from China',
      excerpt: 'Everything you need to know about requesting, evaluating, and approving samples from Chinese suppliers.',
      category: 'Sourcing Tips',
      date: 'June 20, 2026',
      readTime: '6 min read',
      author: 'Sarah Zhang',
      image: 'product-samples'
    },
    {
      title: 'Understanding MOQ: Minimum Order Quantities Explained',
      excerpt: 'Most Chinese factories have minimum order requirements. Learn how to negotiate MOQs and what alternatives exist for smaller orders.',
      category: 'Sourcing Tips',
      date: 'June 15, 2026',
      readTime: '5 min read',
      author: 'David Liu',
      image: 'moq-explained'
    },
    {
      title: 'Pre-Shipment Inspection: Why It\'s Essential for Your Order',
      excerpt: 'A pre-shipment inspection is your last line of defense against quality issues. Here\'s what to expect and how to prepare.',
      category: 'Quality Control',
      date: 'June 10, 2026',
      readTime: '7 min read',
      author: 'Sarah Zhang',
      image: 'pre-shipment'
    },
    {
      title: 'Navigating Chinese Business Culture: Tips for Successful Negotiations',
      excerpt: 'Understanding Chinese business culture can make or break your sourcing success. Learn key customs and negotiation tactics.',
      category: 'Business Culture',
      date: 'June 5, 2026',
      readTime: '8 min read',
      author: 'Michael Chen',
      image: 'business-culture'
    },
    {
      title: 'Sea Freight vs Air Freight: Making the Right Choice',
      excerpt: 'Compare the costs, transit times, and considerations for sea freight versus air freight when shipping from China.',
      category: 'Shipping & Logistics',
      date: 'May 28, 2026',
      readTime: '6 min read',
      author: 'David Liu',
      image: 'freight-options'
    }
  ];

  const categories = [
    'All Posts',
    'Supplier Verification',
    'Quality Control',
    'Shipping & Logistics',
    'Sourcing Tips',
    'IP Protection',
    'Business Culture'
  ];

  const featuredPost = blogPosts[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Blog
            </h1>
            <p className="text-xl text-gray-200">
              Expert insights on China sourcing, quality control, and international trade. Practical tips from our years of experience.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section">
        <div className="container">
          <div className="mb-8">
            <span className="text-sm text-[var(--secondary)] font-medium">Featured Article</span>
          </div>
          <div className="card overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="bg-[var(--bg-secondary)] aspect-video lg:aspect-auto flex items-center justify-center">
                <Factory className="text-[var(--primary)]" size={80} />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)] mb-4">
                  <span className="bg-[var(--secondary)]/10 text-[var(--secondary)] px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h2 className="text-2xl mb-4">{featuredPost.title}</h2>
                <p className="text-[var(--text-secondary)] mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center">
                      <User className="text-white" size={16} />
                    </div>
                    <span className="text-sm text-[var(--text-secondary)]">{featuredPost.author}</span>
                  </div>
                  <Link to="#" className="btn btn-primary inline-flex items-center gap-2">
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section section-alt">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-white text-[var(--text-secondary)] hover:bg-[var(--primary)] hover:text-white border border-[var(--border)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="bg-[var(--bg-secondary)] aspect-video flex items-center justify-center mb-4">
                  <FileText className="text-[var(--primary)]" size={48} />
                </div>
                <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)] mb-3">
                  <span className="text-[var(--secondary)] font-medium">{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mb-3 group-hover:text-[var(--primary)] transition-colors">{post.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                      <User className="text-[var(--primary)]" size={12} />
                    </div>
                    <span className="text-xs text-[var(--text-secondary)]">{post.author}</span>
                  </div>
                  <span className="text-xs text-[var(--text-light)]">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section">
        <div className="container">
          <div className="bg-[var(--primary)] rounded-2xl p-12 text-center">
            <h2 className="text-white mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest China sourcing insights delivered to your inbox. No spam, just valuable content.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="input flex-1"
                required
              />
              <button type="submit" className="btn bg-[var(--secondary)] text-white hover:bg-[var(--secondary-hover)] whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;