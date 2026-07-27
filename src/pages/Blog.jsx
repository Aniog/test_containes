import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: 'sourcing-guide-2024',
    title: 'Complete Guide to China Sourcing in 2024',
    excerpt: 'Everything you need to know about sourcing products from China, including supplier selection, quality control, and shipping logistics.',
    category: 'Sourcing Guide',
    author: 'SSourcing China Team',
    date: 'January 15, 2024',
    readTime: '12 min read',
    image: '📦',
    featured: true,
  },
  {
    id: 'factory-audit-checklist',
    title: 'Factory Audit Checklist: What to Verify Before Signing',
    excerpt: 'A comprehensive checklist for auditing Chinese factories, covering legal compliance, production capacity, and quality systems.',
    category: 'Quality Control',
    author: 'SSourcing China Team',
    date: 'January 8, 2024',
    readTime: '8 min read',
    image: '🏭',
    featured: false,
  },
  {
    id: 'shipping-options-china',
    title: 'Sea Freight vs Air Freight: Choosing the Right Shipping Option',
    excerpt: 'Compare shipping methods from China, including costs, transit times, and when to use each option for your business.',
    category: 'Shipping',
    author: 'SSourcing China Team',
    date: 'December 28, 2023',
    readTime: '6 min read',
    image: '🚢',
    featured: false,
  },
  {
    id: 'negotiation-tips',
    title: 'Negotiation Strategies for Working with Chinese Suppliers',
    excerpt: 'Tips and strategies for negotiating effectively with Chinese manufacturers while building long-term relationships.',
    category: 'Business Tips',
    author: 'SSourcing China Team',
    date: 'December 15, 2023',
    readTime: '10 min read',
    image: '🤝',
    featured: false,
  },
  {
    id: 'qc-inspection-types',
    title: 'Understanding QC Inspection Types: AQL, CSI, DPL, and More',
    excerpt: 'Learn about different quality control inspection standards and when to use each type for your orders.',
    category: 'Quality Control',
    author: 'SSourcing China Team',
    date: 'December 5, 2023',
    readTime: '7 min read',
    image: '🔍',
    featured: false,
  },
  {
    id: 'payment-terms',
    title: 'Safe Payment Terms for China Sourcing: A Practical Guide',
    excerpt: 'Protect your business with proper payment terms and Escrow services when sourcing from China.',
    category: 'Business Tips',
    author: 'SSourcing China Team',
    date: 'November 20, 2023',
    readTime: '9 min read',
    image: '💳',
    featured: false,
  },
  {
    id: 'ip-protection',
    title: 'Protecting Your Intellectual Property When Sourcing in China',
    excerpt: 'Essential strategies for protecting your designs, trademarks, and trade secrets when manufacturing in China.',
    category: 'Legal & Compliance',
    author: 'SSourcing China Team',
    date: 'November 10, 2023',
    readTime: '8 min read',
    image: '🔒',
    featured: false,
  },
  {
    id: 'sample-process',
    title: 'The Sample Process: Getting It Right from the Start',
    excerpt: 'A step-by-step guide to requesting and approving samples from Chinese manufacturers.',
    category: 'Sourcing Guide',
    author: 'SSourcing China Team',
    date: 'October 25, 2023',
    readTime: '6 min read',
    image: '📝',
    featured: false,
  },
];

const categories = ['All', 'Sourcing Guide', 'Quality Control', 'Shipping', 'Business Tips', 'Legal & Compliance'];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-600 to-secondary py-20 lg:py-28">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Resources & Insights</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              China Sourcing Blog
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Expert insights, practical guides, and industry knowledge to help you succeed 
              with China sourcing. Stay informed with the latest trends and best practices.
            </p>
            <Link to="/contact" className="btn-accent text-lg px-8 py-4">
              Get Expert Help
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="mb-8">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Featured Article</span>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div className="flex items-center justify-center text-8xl">
                {featuredPost.image}
              </div>
              <div className="flex flex-col justify-center">
                <span className="inline-block bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-text-secondary mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <button className="btn-primary w-fit">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-background-light">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
            <div>
              <h2 className="heading-2">Latest Articles</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    category === 'All'
                      ? 'bg-primary text-white'
                      : 'bg-white text-text-secondary hover:bg-primary hover:text-white border border-border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <article key={post.id} className="card-base card-hover group cursor-pointer">
                <div className="text-5xl mb-4">{post.image}</div>
                <span className="inline-block bg-primary-50 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-text-secondary">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-white/80 mb-6">
                Get the latest China sourcing insights, tips, and industry news delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button type="submit" className="btn-accent whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <p className="text-white/60 text-xs mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Ready to Start Sourcing?
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Put our expertise to work for you. Get a free consultation for your China sourcing needs.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-10 py-4">
            Get a Free Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
