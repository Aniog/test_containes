import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: 'How to Evaluate Chinese Suppliers: A Practical Checklist',
      date: 'July 15, 2026',
      category: 'Supplier Verification',
      excerpt: 'Key criteria and questions to ask when assessing potential manufacturing partners in China.',
      readTime: '8 min read'
    },
    {
      title: 'Understanding Quality Inspection Standards for Export Products',
      date: 'July 8, 2026',
      category: 'Quality Control',
      excerpt: 'An overview of common inspection protocols and how they apply to different product categories.',
      readTime: '6 min read'
    },
    {
      title: 'Navigating Shipping Documentation for China Exports',
      date: 'June 28, 2026',
      category: 'Logistics',
      excerpt: 'Essential documents required for international shipments and common pitfalls to avoid.',
      readTime: '7 min read'
    },
    {
      title: 'The Role of Third-Party Audits in Supply Chain Risk Management',
      date: 'June 20, 2026',
      category: 'Risk Management',
      excerpt: 'Why independent verification matters and what buyers should expect from audit reports.',
      readTime: '5 min read'
    },
    {
      title: 'Negotiating Payment Terms with Chinese Manufacturers',
      date: 'June 12, 2026',
      category: 'Procurement',
      excerpt: 'Common payment structures and considerations for establishing secure transaction terms.',
      readTime: '6 min read'
    },
    {
      title: 'Trends in China Manufacturing: What Buyers Should Know',
      date: 'June 5, 2026',
      category: 'Industry Insights',
      excerpt: 'Current developments affecting sourcing decisions and supplier capabilities.',
      readTime: '9 min read'
    }
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4 text-white">Blog</h1>
          <p className="text-xl text-slate-300 max-w-2xl">Practical insights on China sourcing and supply chain management.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post, idx) => (
              <div key={idx} className="blog-card p-6">
                <div className="blog-meta mb-3">{post.date} · {post.category}</div>
                <h3 className="font-semibold text-lg mb-3">{post.title}</h3>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <div className="text-sm text-slate-500">{post.readTime}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container text-center">
          <p className="text-slate-600">For sourcing inquiries, please visit our <a href="/contact" className="text-blue-800">contact page</a>.</p>
        </div>
      </section>
    </div>
  );
};

export default Blog;