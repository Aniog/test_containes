import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search, FileText, BookOpen } from 'lucide-react';

const blogPosts = [
  {
    id: 'sourcing-guide-2024',
    title: 'The Complete Guide to Sourcing from China in 2024',
    excerpt: 'Everything you need to know about finding suppliers, managing quality, and shipping products from China.',
    category: 'Sourcing Guide',
    readTime: '15 min read',
    date: '2024-03-15',
    imageId: 'blog-sourcing-guide-img',
  },
  {
    id: 'supplier-verification',
    title: 'How to Verify Chinese Suppliers Before Placing Orders',
    excerpt: 'Learn the essential steps to verify supplier legitimacy, factory existence, and production capabilities.',
    category: 'Supplier Tips',
    readTime: '10 min read',
    date: '2024-03-10',
    imageId: 'blog-supplier-verification-img',
  },
  {
    id: 'qc-inspection-checklist',
    title: 'QC Inspection Checklist: What to Check Before Shipping',
    excerpt: 'A comprehensive checklist for inspecting products before they leave the factory.',
    category: 'Quality Control',
    readTime: '8 min read',
    date: '2024-03-05',
    imageId: 'blog-qc-checklist-img',
  },
  {
    id: 'shipping-options',
    title: 'Sea Freight vs Air Freight: Choosing the Right Shipping Method',
    excerpt: 'Compare shipping methods, costs, and timelines to make the best decision for your business.',
    category: 'Shipping',
    readTime: '12 min read',
    date: '2024-02-28',
    imageId: 'blog-shipping-options-img',
  },
  {
    id: 'moq-negotiation',
    title: 'How to Negotiate Lower MOQs with Chinese Suppliers',
    excerpt: 'Practical strategies for reducing minimum order quantities and building supplier relationships.',
    category: 'Negotiation',
    readTime: '7 min read',
    date: '2024-02-20',
    imageId: 'blog-moq-negotiation-img',
  },
  {
    id: 'payment-terms',
    title: 'Safe Payment Terms for China Trade',
    excerpt: 'Understanding payment methods and protecting your investment when sourcing from China.',
    category: 'Payments',
    readTime: '9 min read',
    date: '2024-02-15',
    imageId: 'blog-payment-terms-img',
  },
];

const categories = [
  { name: 'All Posts', count: 24 },
  { name: 'Sourcing Guide', count: 8 },
  { name: 'Quality Control', count: 6 },
  { name: 'Shipping', count: 5 },
  { name: 'Negotiation', count: 3 },
  { name: 'Payments', count: 2 },
];

const featuredPost = blogPosts[0];

const Blog = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Resources & Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              China Sourcing Blog
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Practical guides, tips, and insights to help you succeed with China sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">Featured Article</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="grid lg:grid-cols-2">
              <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 aspect-video lg:aspect-auto flex items-center justify-center">
                <FileText className="w-20 h-20 text-neutral-400" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="badge-primary mb-4 w-fit">{featuredPost.category}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-neutral-500 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-neutral-400 mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(featuredPost.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="btn-primary w-fit"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-spacing bg-white pb-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Search */}
                <div className="mb-8">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="input-field pl-10"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-neutral-50 rounded-xl p-6">
                  <h3 className="font-semibold text-neutral-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((cat) => (
                      <li key={cat.name}>
                        <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-neutral-600 hover:text-primary-700 hover:bg-white rounded-lg transition-colors">
                          <span>{cat.name}</span>
                          <span className="text-neutral-400">({cat.count})</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8 bg-primary-800 text-white rounded-xl p-6">
                  <h3 className="font-semibold mb-2">Need Help?</h3>
                  <p className="text-primary-100 text-sm mb-4">
                    Get personalized sourcing advice from our team.
                  </p>
                  <Link to="/contact" className="btn-accent w-full text-center text-sm py-2">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.slice(1).map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 h-48 flex items-center justify-center">
                      <FileText className="w-16 h-16 text-neutral-400" />
                    </div>
                    <div className="p-6">
                      <span className="badge-primary text-xs mb-3">{post.category}</span>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-neutral-500 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-neutral-400 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-primary-700 font-medium text-sm hover:gap-2 transition-all"
                      >
                        Read more
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="btn-secondary">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
