import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Search, Tag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Blog = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Blog</h1>
          <p>Insights and tips for successful China sourcing</p>
        </div>

        <style>{`
          .page-header {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
            color: white;
            padding: 140px 0 80px;
            text-align: center;
          }

          .page-header h1 {
            font-size: 48px;
            font-weight: 800;
            margin-bottom: 16px;
          }

          .page-header p {
            font-size: 20px;
            color: rgba(255, 255, 255, 0.9);
            max-width: 600px;
            margin: 0 auto;
          }

          @media (max-width: 768px) {
            .page-header {
              padding: 120px 0 60px;
            }
            .page-header h1 {
              font-size: 32px;
            }
          }
        `}</style>
      </section>

      {/* Blog Content */}
      <section className="section">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {selectedCategory === 'All' && (
            <div className="featured-post">
              <div className="featured-image">
                <div className="image-placeholder"
                  data-strk-img-id="featured-blog-1"
                  data-strk-img="[featured-blog-title]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                />
              </div>
              <div className="featured-content">
                <span className="post-category">{featuredPost.category}</span>
                <h2 id="featured-blog-title">{featuredPost.title}</h2>
                <p className="post-excerpt">{featuredPost.excerpt}</p>
                <div className="post-meta">
                  <span><Calendar size={16} /> {featuredPost.date}</span>
                  <span><Tag size={16} /> {featuredPost.category}</span>
                </div>
                <button className="btn btn-primary">Read Article</button>
              </div>
            </div>
          )}

          {/* Blog Grid */}
          <div className="blog-grid">
            {filteredPosts.map((post, index) => (
              <article key={index} className="blog-card card">
                <div className="blog-image">
                  <div className="image-placeholder"
                    data-strk-img-id={`blog-img-${index}`}
                    data-strk-img={`[blog-title-${index}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                  />
                </div>
                <div className="blog-content">
                  <span className="post-category">{post.category}</span>
                  <h3 id={`blog-title-${index}`}>{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span><Calendar size={14} /> {post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <style>{`
          .category-filter {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            justify-content: center;
            margin-bottom: 48px;
          }

          .filter-btn {
            padding: 10px 20px;
            background: white;
            border: 2px solid var(--border);
            border-radius: 25px;
            font-size: 14px;
            font-weight: 500;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.2s;
          }

          .filter-btn:hover {
            border-color: var(--primary);
            color: var(--primary);
          }

          .filter-btn.active {
            background: var(--primary);
            border-color: var(--primary);
            color: white;
          }

          .featured-post {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 48px;
            align-items: center;
            margin-bottom: 64px;
            padding-bottom: 64px;
            border-bottom: 1px solid var(--border);
          }

          .featured-image {
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }

          .image-placeholder {
            height: 350px;
            background: var(--bg-tertiary);
            background-size: cover;
            background-position: center;
          }

          .featured-content {
            padding: 16px 0;
          }

          .post-category {
            display: inline-block;
            background: var(--bg-secondary);
            color: var(--primary);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin-bottom: 16px;
          }

          .featured-content h2 {
            font-size: 32px;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 16px;
            line-height: 1.2;
          }

          .blog-content h3 {
            font-size: 20px;
            font-weight: 600;
            color: var(--text-primary);
            margin: 12px 0;
            line-height: 1.3;
          }

          .post-excerpt {
            font-size: 16px;
            color: var(--text-secondary);
            line-height: 1.7;
            margin-bottom: 16px;
          }

          .post-meta {
            display: flex;
            gap: 20px;
            font-size: 13px;
            color: var(--text-muted);
            margin-bottom: 20px;
          }

          .post-meta span {
            display: flex;
            align-items: center;
            gap: 6px;
          }

          .blog-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .blog-card {
            overflow: hidden;
          }

          .blog-image {
            height: 200px;
            background: var(--bg-tertiary);
          }

          .blog-content {
            padding: 24px;
          }

          .blog-card .post-excerpt {
            font-size: 14px;
            margin-bottom: 12px;
          }

          @media (max-width: 1024px) {
            .featured-post {
              grid-template-columns: 1fr;
              gap: 24px;
            }
            .blog-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 640px) {
            .blog-grid {
              grid-template-columns: 1fr;
            }
            .featured-content h2 {
              font-size: 26px;
            }
          }
        `}</style>
      </section>

      {/* Newsletter */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="newsletter-box">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for the latest China sourcing insights, tips, and market updates.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <style>{`
          .newsletter-box {
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
          }

          .newsletter-box h2 {
            font-size: 32px;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 16px;
          }

          .newsletter-box p {
            font-size: 17px;
            color: var(--text-secondary);
            margin-bottom: 32px;
          }

          .newsletter-form {
            display: flex;
            gap: 12px;
            max-width: 450px;
            margin: 0 auto;
          }

          .newsletter-form input {
            flex: 1;
            padding: 14px 20px;
            border: 2px solid var(--border);
            border-radius: 4px;
            font-size: 15px;
          }

          .newsletter-form input:focus {
            outline: none;
            border-color: var(--primary);
          }

          @media (max-width: 640px) {
            .newsletter-form {
              flex-direction: column;
            }
          }
        `}</style>
      </section>
    </div>
  )
}

const categories = ['All', 'Sourcing Tips', 'Quality Control', 'Logistics', 'Market Insights']

const featuredPost = {
  title: 'How to Verify Chinese Suppliers Before Placing Orders',
  category: 'Sourcing Tips',
  excerpt: 'Learn the essential steps to verify supplier legitimacy, assess production capacity, and protect yourself from scams when sourcing from China.',
  date: 'June 15, 2026'
}

const blogPosts = [
  {
    title: 'Understanding MOQ: Minimum Order Quantities Explained',
    category: 'Sourcing Tips',
    excerpt: 'Everything you need to know about MOQs and how to negotiate favorable terms with Chinese suppliers.',
    date: 'June 10, 2026'
  },
  {
    title: 'Pre-Shipment Inspection: Why It Matters',
    category: 'Quality Control',
    excerpt: 'How professional inspections can save you from costly mistakes and ensure product quality.',
    date: 'June 5, 2026'
  },
  {
    title: 'Shipping from China: Air vs Sea Freight',
    category: 'Logistics',
    excerpt: 'Compare shipping methods and find the right balance between cost and delivery time for your business.',
    date: 'May 28, 2026'
  },
  {
    title: 'China Trade Shows: A Complete Guide',
    category: 'Market Insights',
    excerpt: 'Navigate major trade shows like Canton Fair to find and evaluate suppliers effectively.',
    date: 'May 20, 2026'
  },
  {
    title: 'Quality Certifications Explained: CE, FCC, RoHS and More',
    category: 'Quality Control',
    excerpt: 'Understanding the certifications your products need for different markets and how to verify compliance.',
    date: 'May 15, 2026'
  },
  {
    title: 'Building Long-Term Supplier Relationships',
    category: 'Sourcing Tips',
    excerpt: 'Strategies for developing strong, reliable partnerships with Chinese manufacturers.',
    date: 'May 8, 2026'
  }
]

export default Blog