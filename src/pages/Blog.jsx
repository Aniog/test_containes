import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Calendar } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Blog = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const blogPosts = [
    {
      date: 'July 20, 2026',
      category: 'Sourcing Tips',
      title: 'How to Verify a Chinese Supplier Before Placing Orders',
      excerpt: 'Learn the essential steps to verify supplier legitimacy, including business license checks, factory visits, and red flags to watch for.',
      readTime: '8 min read'
    },
    {
      date: 'July 15, 2026',
      category: 'Quality Control',
      title: 'Understanding AQL in Product Inspections',
      excerpt: 'A comprehensive guide to Acceptable Quality Level (AQL) standards and how they apply to your China sourcing inspections.',
      readTime: '6 min read'
    },
    {
      date: 'July 10, 2026',
      category: 'Logistics',
      title: 'Shipping from China: FOB vs CIF Explained',
      excerpt: 'Understanding the differences between FOB and CIF shipping terms and which is better for your business.',
      readTime: '5 min read'
    },
    {
      date: 'July 5, 2026',
      category: 'Sourcing Tips',
      title: 'Negotiating with Chinese Suppliers: Best Practices',
      excerpt: 'Proven strategies for negotiating better prices and terms with your Chinese suppliers.',
      readTime: '7 min read'
    },
    {
      date: 'June 28, 2026',
      category: 'Quality Control',
      title: 'Pre-Shipment Inspection: What to Check',
      excerpt: 'A detailed checklist of what to look for during pre-shipment product inspections in China.',
      readTime: '10 min read'
    },
    {
      date: 'June 20, 2026',
      category: 'Industry Insights',
      title: 'China Manufacturing Trends in 2026',
      excerpt: 'An overview of the latest trends shaping China\'s manufacturing landscape and what it means for buyers.',
      readTime: '6 min read'
    }
  ]

  const categories = ['All', 'Sourcing Tips', 'Quality Control', 'Logistics', 'Industry Insights']

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Blog</h1>
          <p>
            Insights, tips, and industry news to help you succeed with China sourcing.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section" style={{ background: 'white', paddingBottom: '0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((category, index) => (
              <button
                key={index}
                style={{
                  padding: '10px 20px',
                  borderRadius: '50px',
                  border: index === 0 ? 'none' : '1px solid var(--color-border)',
                  background: index === 0 ? 'var(--color-primary)' : 'transparent',
                  color: index === 0 ? 'white' : 'var(--color-text-secondary)',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section" style={{ background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="grid-3">
            {blogPosts.map((post, index) => (
              <div key={index} className="blog-card">
                <div className="blog-image">
                  <span style={{ fontSize: '40px' }}>📄</span>
                </div>
                <div className="blog-content">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '13px', color: 'var(--color-accent)', fontWeight: '500' }}>
                      {post.category}
                    </span>
                    <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                      {post.readTime}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px', color: 'var(--color-text-secondary)', fontSize: '13px' }}>
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ 
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
            borderRadius: '16px',
            padding: '48px',
            textAlign: 'center',
            color: 'white'
          }}>
            <h2 style={{ color: 'white', marginBottom: '16px' }}>Stay Updated</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
              Subscribe to our newsletter for the latest China sourcing insights and tips.
            </p>
            <div style={{ display: 'flex', gap: '12px', maxWidth: '450px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={{
                  flex: 1,
                  minWidth: '200px',
                  padding: '14px 20px',
                  borderRadius: '6px',
                  border: 'none',
                  fontSize: '15px'
                }}
              />
              <button className="btn btn-primary" style={{ background: 'var(--color-accent)' }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-bg-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '16px' }}>Need Help with Sourcing?</h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Our team of experts is ready to help you find verified suppliers and ensure quality products.
          </p>
          <a href="/contact" className="btn btn-primary" style={{ background: 'var(--color-accent)' }}>
            Get Expert Help <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Blog