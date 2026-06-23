import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  ArrowRight, 
  Search, 
  Factory, 
  ClipboardCheck, 
  Truck, 
  Shield,
  Globe,
  Clock,
  FileText,
  TrendingUp,
  CheckCircle,
  MessageCircle
} from 'lucide-react'
import './Blog.css'

const Blog = () => {
  const categories = [
    { name: 'All Posts', count: 24, active: true },
    { name: 'Supplier Verification', count: 8 },
    { name: 'Quality Control', count: 6 },
    { name: 'Sourcing Tips', count: 5 },
    { name: 'Shipping & Logistics', count: 3 },
    { name: 'Industry News', count: 2 },
  ]

  const posts = [
    {
      id: 1,
      category: 'Supplier Verification',
      title: 'How to Verify a Chinese Factory Before Placing Orders',
      excerpt: 'Learn the essential steps to verify a factory\'s legitimacy, including business license checks, factory visits, and red flags to watch for.',
      date: 'June 15, 2026',
      readTime: '8 min read',
      image: 'factory-verification',
    },
    {
      id: 2,
      category: 'Quality Control',
      title: 'Understanding AQL in Product Inspections',
      excerpt: 'A comprehensive guide to Acceptable Quality Level (AQL) sampling methods and how to set appropriate inspection criteria for your products.',
      date: 'June 8, 2026',
      readTime: '6 min read',
      image: 'quality-control',
    },
    {
      id: 3,
      category: 'Sourcing Tips',
      title: 'Negotiating with Chinese Suppliers: Best Practices',
      excerpt: 'Effective negotiation strategies to get the best prices and terms from your Chinese suppliers while maintaining strong relationships.',
      date: 'June 1, 2026',
      readTime: '7 min read',
      image: 'negotiation',
    },
    {
      id: 4,
      category: 'Shipping & Logistics',
      title: 'FOB vs CIF: Choosing the Right Incoterm',
      excerpt: 'Understanding the differences between FOB and CIF shipping terms and how to choose the best option for your business.',
      date: 'May 25, 2026',
      readTime: '5 min read',
      image: 'shipping',
    },
    {
      id: 5,
      category: 'Supplier Verification',
      title: 'Red Flags: Signs of a Fraudulent Supplier',
      excerpt: 'Identify warning signs that may indicate a supplier is not legitimate, from suspicious communication patterns to unrealistic promises.',
      date: 'May 18, 2026',
      readTime: '6 min read',
      image: 'fraud-prevention',
    },
    {
      id: 6,
      category: 'Quality Control',
      title: 'Pre-Shipment Inspection: What to Check',
      excerpt: 'A detailed checklist of what to examine during pre-shipment inspections to ensure product quality and compliance.',
      date: 'May 11, 2026',
      readTime: '9 min read',
      image: 'inspection',
    },
    {
      id: 7,
      category: 'Sourcing Tips',
      title: 'Minimum Order Quantities: How to Negotiate MOQs',
      excerpt: 'Strategies for negotiating lower minimum order quantities with Chinese manufacturers, especially for new product lines.',
      date: 'May 4, 2026',
      readTime: '5 min read',
      image: 'moq',
    },
    {
      id: 8,
      category: 'Industry News',
      title: 'China\'s New Export Regulations: What You Need to Know',
      excerpt: 'Overview of recent changes to Chinese export regulations and how they may affect your sourcing operations.',
      date: 'April 27, 2026',
      readTime: '4 min read',
      image: 'regulations',
    },
  ]

  const featuredPost = {
    category: 'Sourcing Tips',
    title: 'The Complete Guide to Sourcing from China in 2026',
    excerpt: 'Everything you need to know about sourcing products from China, from finding suppliers to shipping your goods. Updated for 2026.',
    date: 'June 20, 2026',
    readTime: '15 min read',
    image: 'complete-guide',
  }

  return (
    <>
      <Helmet>
        <title>Blog | China Sourcing Insights | SSourcing China</title>
        <meta name="description" content="Expert insights on China sourcing, supplier verification, quality control, and international trade. Stay informed with our latest articles." />
      </Helmet>

      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1>China Sourcing Blog</h1>
          <p>
            Expert insights, tips, and guides to help you source products from China 
            safely and efficiently. Updated regularly with the latest industry knowledge.
          </p>
        </div>
      </section>

      <section className="blog-content">
        <div className="section-container">
          <div className="blog-layout">
            <aside className="blog-sidebar">
              <div className="sidebar-section">
                <h3>Categories</h3>
                <ul className="category-list">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#" className={category.active ? 'active' : ''}>
                        {category.name}
                        <span className="category-count">{category.count}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-section">
                <h3>Popular Posts</h3>
                <div className="popular-posts">
                  <div className="popular-post">
                    <span className="popular-number">1</span>
                    <a href="#">How to Verify a Chinese Factory</a>
                  </div>
                  <div className="popular-post">
                    <span className="popular-number">2</span>
                    <a href="#">Understanding AQL Inspections</a>
                  </div>
                  <div className="popular-post">
                    <span className="popular-number">3</span>
                    <a href="#">Negotiation Best Practices</a>
                  </div>
                  <div className="popular-post">
                    <span className="popular-number">4</span>
                    <a href="#">FOB vs CIF Explained</a>
                  </div>
                </div>
              </div>

              <div className="sidebar-cta">
                <h4>Need Help Sourcing?</h4>
                <p>Get expert assistance with your China sourcing needs.</p>
                <Link to="/contact" className="sidebar-cta-btn">
                  Get a Quote
                </Link>
              </div>
            </aside>

            <main className="blog-main">
              <div className="featured-post">
                <div className="featured-badge">Featured</div>
                <span className="post-category">{featuredPost.category}</span>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>
                <div className="post-meta">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <a href="#" className="read-more">
                  Read Article <ArrowRight size={18} />
                </a>
              </div>

              <div className="posts-grid">
                {posts.map((post) => (
                  <article key={post.id} className="post-card">
                    <div className="post-category-badge">{post.category}</div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="post-meta">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <a href="#" className="read-more">
                      Read More <ArrowRight size={16} />
                    </a>
                  </article>
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for the latest China sourcing insights and tips.</p>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Blog