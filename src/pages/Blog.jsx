import { Link } from 'react-router-dom';
import { 
  FileText, 
  Search, 
  ShieldCheck, 
  Truck, 
  ArrowRight,
  Calendar,
  User
} from 'lucide-react';

const BlogPage = () => {
  const categories = [
    { name: 'All Posts', count: 12 },
    { name: 'Sourcing Tips', count: 5 },
    { name: 'Quality Control', count: 3 },
    { name: 'Industry News', count: 2 },
    { name: 'Logistics', count: 2 }
  ];

  const posts = [
    {
      title: 'How to Verify a Chinese Supplier Before Placing Orders',
      excerpt: 'Learn the essential steps to verify supplier legitimacy, including business license checks, factory visits, and reference verification.',
      category: 'Sourcing Tips',
      date: 'June 15, 2026',
      author: 'Sarah Chen',
      readTime: '8 min read'
    },
    {
      title: 'Understanding Quality Control Inspections: A Complete Guide',
      excerpt: 'Everything you need to know about pre-shipment inspections, AQL standards, and how to ensure product quality from China.',
      category: 'Quality Control',
      date: 'June 8, 2026',
      author: 'Michael Wang',
      readTime: '12 min read'
    },
    {
      title: 'Navigating China Shipping: Sea Freight vs Air Freight',
      excerpt: 'Compare shipping methods, costs, and transit times to choose the best option for your business needs.',
      category: 'Logistics',
      date: 'June 1, 2026',
      author: 'David Liu',
      readTime: '10 min read'
    },
    {
      title: 'Common Mistakes to Avoid When Sourcing from China',
      excerpt: 'Learn about frequent pitfalls in China sourcing and how to avoid them for a smoother procurement experience.',
      category: 'Sourcing Tips',
      date: 'May 25, 2026',
      author: 'Sarah Chen',
      readTime: '7 min read'
    },
    {
      title: 'The Importance of Factory Audits in Sourcing',
      excerpt: 'Discover why factory audits are crucial and what to look for during on-site inspections.',
      category: 'Quality Control',
      date: 'May 18, 2026',
      author: 'Michael Wang',
      readTime: '9 min read'
    },
    {
      title: 'China Manufacturing Trends in 2026',
      excerpt: 'Stay updated on the latest trends in Chinese manufacturing, including automation, sustainability, and new regulations.',
      category: 'Industry News',
      date: 'May 10, 2026',
      author: 'Lisa Zhang',
      readTime: '6 min read'
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-[var(--primary)] py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">Blog</h1>
            <p className="text-xl text-gray-200">
              Expert insights, tips, and industry news to help you succeed in China sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card">
                <h4 className="mb-4">Categories</h4>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#" className="flex items-center justify-between text-sm hover:text-[var(--primary)]">
                        <span>{category.name}</span>
                        <span className="text-[var(--text-muted)]">({category.count})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card mt-6">
                <h4 className="mb-4">Subscribe</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Get the latest sourcing tips and industry insights delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="input mb-2"
                />
                <button className="btn btn-primary w-full">Subscribe</button>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post, index) => (
                  <article key={index} className="card">
                    <div className="text-xs font-semibold text-[var(--secondary)] uppercase tracking-wide mb-2">
                      {post.category}
                    </div>
                    <h3 className="mb-3 text-lg">{post.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-[var(--border)]">
                      <a href="#" className="text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-light)] inline-flex items-center gap-1">
                        Read More <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Stay Updated</h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Subscribe to our newsletter for the latest China sourcing insights, tips, and industry news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input flex-1"
              />
              <button className="btn btn-cta whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;