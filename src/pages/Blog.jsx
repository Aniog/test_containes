import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

const Blog = () => {
  const posts = [
    {
      title: 'How to Evaluate a Chinese Supplier: A Practical Checklist',
      excerpt: 'Key criteria and questions to ask when assessing potential manufacturing partners in China.',
      date: 'July 15, 2026',
      category: 'Supplier Selection',
      readTime: '8 min'
    },
    {
      title: 'Understanding Quality Inspection Levels: AQL Explained',
      excerpt: 'A clear breakdown of Acceptable Quality Limit standards and how they apply to your orders.',
      date: 'July 8, 2026',
      category: 'Quality Control',
      readTime: '6 min'
    },
    {
      title: 'Navigating Shipping from China: Sea vs Air Freight',
      excerpt: 'Cost, timing, and practical considerations when choosing between ocean and air transportation.',
      date: 'June 28, 2026',
      category: 'Logistics',
      readTime: '7 min'
    },
    {
      title: 'Common Sourcing Mistakes and How to Avoid Them',
      excerpt: 'Lessons from real sourcing projects: what goes wrong and how professional support helps.',
      date: 'June 20, 2026',
      category: 'Best Practices',
      readTime: '9 min'
    },
    {
      title: 'Factory Audit Reports: What to Look For',
      excerpt: 'Understanding audit findings and red flags that indicate potential supplier issues.',
      date: 'June 12, 2026',
      category: 'Verification',
      readTime: '5 min'
    },
    {
      title: 'Building Long-Term Supplier Relationships in China',
      excerpt: 'Strategies for developing reliable, mutually beneficial partnerships with Chinese manufacturers.',
      date: 'June 5, 2026',
      category: 'Supplier Relations',
      readTime: '7 min'
    }
  ]

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Sourcing Insights</h1>
          <p className="text-xl text-slate-300">Practical guidance and industry knowledge for international buyers.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <article key={idx} className="border border-slate-200 rounded-lg p-8 hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
              <p className="text-slate-600 mb-4">{post.excerpt}</p>
              <span className="text-sky-600 text-sm font-medium">Read article →</span>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center bg-slate-50 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Have a Specific Question?</h2>
          <p className="text-slate-600 mb-6">Our team is available to discuss your sourcing challenges directly.</p>
          <Button asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Blog