import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar,
  Clock,
  User,
  Search,
  Tag,
  ChevronRight
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const PageHero = ({ title, subtitle }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-primary py-16 lg:py-24">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-lg text-white/80">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ post, onClick }) => {
  return (
    <div 
      className="bg-surface rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-[16/9] bg-primary/5 relative overflow-hidden">
        <img
          data-strk-img-id={`blog-post-${post.id}`}
          data-strk-img={`[blog-title-${post.id}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-text-muted text-xs mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>
        
        <h3 id={`blog-title-${post.id}`} className="text-lg font-semibold text-text-primary mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-text-secondary text-sm line-clamp-2 mb-4">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-text-muted text-xs">By {post.author}</span>
          <ArrowRight className="w-5 h-5 text-primary" />
        </div>
      </div>
    </div>
  );
};

const BlogModal = ({ post, isOpen, onClose }) => {
  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-surface rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/80 hover:text-white z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="aspect-[16/9] bg-primary/5">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <span className="text-primary/40 font-semibold text-lg">{post.title}</span>
          </div>
        </div>
        
        <div className="p-6 lg:p-8">
          <div className="flex items-center gap-4 text-text-muted text-sm mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
          
          <h2 id={`blog-title-modal-${post.id}`} className="text-2xl font-bold text-text-primary mb-4">
            {post.title}
          </h2>
          
          <div className="flex items-center gap-2 mb-6 pb-6 border-b border-border">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
            <span className="text-text-secondary text-sm">By {post.author}</span>
          </div>
          
          <div className="prose prose-sm max-w-none text-text-secondary">
            {post.content}
          </div>
          
          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-background text-text-muted text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Sourcing Guide', 'Quality Control', 'Logistics', 'Industry Insights'];

  const blogPosts = [
    {
      id: 'supplier-verification-guide',
      title: 'How to Verify Chinese Suppliers Before Working With Them',
      excerpt: 'A comprehensive guide to verifying supplier credentials, conducting factory visits, and protecting your business from fraud.',
      category: 'Sourcing Guide',
      date: 'July 15, 2026',
      readTime: '8 min read',
      author: 'James Chen',
      tags: ['Supplier Verification', 'Risk Management', 'Due Diligence'],
      content: (
        <div className="space-y-4">
          <p>When sourcing from China, supplier verification is one of the most critical steps in protecting your business. This comprehensive guide covers everything you need to know about verifying Chinese suppliers before committing to any business relationship.</p>
          
          <h3 className="font-semibold text-text-primary">Why Supplier Verification Matters</h3>
          <p>The Chinese manufacturing landscape is vast and diverse, with both reputable manufacturers and, unfortunately, some bad actors. Without proper verification, you risk:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Working with middlemen posing as factories</li>
            <li>Dealing with suppliers lacking necessary certifications</li>
            <li>Quality issues due to inadequate production capabilities</li>
            <li>Financial losses from fraudulent schemes</li>
          </ul>
          
          <h3 className="font-semibold text-text-primary">Key Verification Steps</h3>
          <p><strong>1. Business License Verification</strong> - Always request a copy of the supplier's business license and verify it through the National Enterprise Credit Information Publicity System.</p>
          
          <p><strong>2. Factory Visit</strong> - Nothing replaces an in-person factory visit. Look for production capacity, worker conditions, equipment, and overall professionalism.</p>
          
          <p><strong>3. Certification Check</strong> - Verify any claimed certifications (ISO, CE, FCC, etc.) directly with the issuing bodies.</p>
          
          <p><strong>4. Reference Verification</strong> - Ask for and contact references from other international buyers who have worked with the supplier.</p>
          
          <h3 className="font-semibold text-text-primary">How We Help</h3>
          <p>At SSourcing China, we conduct thorough supplier verification as part of our sourcing service. Our team visits factories, verifies credentials, and provides detailed reports to help you make informed decisions.</p>
        </div>
      ),
    },
    {
      id: 'quality-inspection-checklist',
      title: 'Quality Inspection Checklist: What to Check Before Shipment',
      excerpt: 'Learn about the key inspection points for different product categories and how to ensure consistent quality.',
      category: 'Quality Control',
      date: 'July 8, 2026',
      readTime: '6 min read',
      author: 'Sarah Liu',
      tags: ['Quality Control', 'Inspection', 'AQL'],
      content: (
        <div className="space-y-4">
          <p>Quality control is essential when sourcing from China. A well-conducted pre-shipment inspection can save you from costly returns and damaged customer relationships.</p>
          
          <h3 className="font-semibold text-text-primary">Pre-Shipment Inspection Basics</h3>
          <p>A comprehensive pre-shipment inspection (PSI) should cover:</p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Visual Inspection</strong> - Check for defects, color variations, and finish quality</li>
            <li><strong>Functionality Testing</strong> - Ensure products work as intended</li>
            <li><strong>Packaging Verification</strong> - Confirm packaging meets specifications</li>
            <li><strong>Labeling Check</strong> - Verify all required labels are present and accurate</li>
            <li><strong>Quantity Count</strong> - Confirm order quantities match</li>
          </ul>
          
          <h3 className="font-semibold text-text-primary">AQL Sampling</h3>
          <p>Acceptable Quality Level (AQL) sampling is a statistical method used to determine whether a batch meets quality standards. Common AQL levels:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>General inspection: AQL 2.5</li>
            <li>Critical defects: AQL 0</li>
            <li>Major defects: AQL 2.5</li>
            <li>Minor defects: AQL 4.0</li>
          </ul>
          
          <h3 className="font-semibold text-text-primary">Our QC Services</h3>
          <p>We offer comprehensive QC inspection services at all stages of production, from pre-production to pre-shipment, with detailed reports and photos.</p>
        </div>
      ),
    },
    {
      id: 'shipping-options-china',
      title: 'Shipping from China: Air vs Sea vs Express - Which to Choose?',
      excerpt: 'Compare shipping methods, costs, and transit times to choose the best option for your business.',
      category: 'Logistics',
      date: 'July 1, 2026',
      readTime: '5 min read',
      author: 'Michael Wang',
      tags: ['Shipping', 'Logistics', 'Freight'],
      content: (
        <div className="space-y-4">
          <p>Choosing the right shipping method is crucial for balancing cost, speed, and reliability. Here's a comprehensive comparison of your options when shipping from China.</p>
          
          <h3 className="font-semibold text-text-primary">Shipping Options Overview</h3>
          
          <p><strong>Air Freight</strong> - Best for: High-value, time-sensitive shipments</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Transit time: 3-7 days</li>
            <li>Cost: $4-8 per kg</li>
            <li>Ideal for: Electronics, urgent orders, samples</li>
          </ul>
          
          <p><strong>Sea Freight</strong> - Best for: Large, non-urgent shipments</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Transit time: 20-35 days</li>
            <li>Cost: $500-2000 per cubic meter</li>
            <li>Ideal for: Bulk orders, furniture, heavy items</li>
          </ul>
          
          <p><strong>Express Delivery</strong> - Best for: Small packages, samples</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Transit time: 3-5 days</li>
            <li>Cost: $20-50 per shipment</li>
            <li>Ideal for: Samples, documents, small orders</li>
          </ul>
          
          <h3 className="font-semibold text-text-primary">Making the Right Choice</h3>
          <p>Consider these factors: urgency, budget, order volume, and product value. We can help you choose the most cost-effective option for your specific needs.</p>
        </div>
      ),
    },
    {
      id: 'negotiating-china-suppliers',
      title: 'Negotiating with Chinese Suppliers: Tips for Better Pricing',
      excerpt: 'Master the art of negotiation to get the best prices without damaging supplier relationships.',
      category: 'Sourcing Guide',
      date: 'June 24, 2026',
      readTime: '7 min read',
      author: 'David Chen',
      tags: ['Negotiation', 'Pricing', 'Cost Reduction'],
      content: (
        <div className="space-y-4">
          <p>Effective negotiation is key to securing favorable terms with Chinese suppliers. Here's how to negotiate professionally while building long-term relationships.</p>
          
          <h3 className="font-semibold text-text-primary">Preparation is Key</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Research market prices before negotiating</li>
            <li>Know your target price and walk-away point</li>
            <li>Understand the supplier's cost structure</li>
            <li>Prepare multiple suppliers to create competition</li>
          </ul>
          
          <h3 className="font-semibold text-text-primary">Negotiation Strategies</h3>
          <p><strong>1. Start with a Reasonable Offer</strong> - Don't lowball excessively, as it damages trust.</p>
          <p><strong>2. Focus on Total Value</strong> - Consider payment terms, lead times, and extras, not just unit price.</p>
          <p><strong>3. Build Relationships</strong> - Chinese business culture values long-term relationships.</p>
          <p><strong>4. Be Prepared to Walk Away</strong> - Sometimes the best deal comes from being willing to walk away.</p>
          
          <h3 className="font-semibold text-text-primary">What to Negotiate</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Unit price and payment terms</li>
            <li>Minimum order quantities (MOQ)</li>
            <li>Lead times and delivery schedules</li>
            <li>Quality guarantees and after-sales support</li>
            <li>Packaging and labeling requirements</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'ip-protection-china',
      title: 'Protecting Your Intellectual Property When Sourcing from China',
      excerpt: 'Essential strategies for protecting your designs, trademarks, and patents when manufacturing in China.',
      category: 'Industry Insights',
      date: 'June 17, 2026',
      readTime: '6 min read',
      author: 'Jennifer Zhang',
      tags: ['IP Protection', 'Trademarks', 'Patents'],
      content: (
        <div className="space-y-4">
          <p>Intellectual property protection is a major concern for businesses sourcing from China. Here's how to protect your designs and trademarks.</p>
          
          <h3 className="font-semibold text-text-primary">Understanding the Risks</h3>
          <p>IP risks in China include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Design theft by suppliers</li>
            <li>Counterfeit products appearing in market</li>
            <li>Trademark squatters</li>
            <li>Unauthorized production runs</li>
          </ul>
          
          <h3 className="font-semibold text-text-primary">Protection Strategies</h3>
          <p><strong>1. Register in China</strong> - Register your trademark with CNIPA (China National Intellectual Property Administration).</p>
          <p><strong>2. Use NDAs</strong> - Have suppliers sign non-disclosure agreements.</p>
          <p><strong>3. Limit Exposure</strong> - Only share necessary design details with verified partners.</p>
          <p><strong>4. Monitor and Enforce</strong> - Regularly search for infringing products and take action when needed.</p>
          
          <h3 className="font-semibold text-text-primary">Working with Trusted Partners</h3>
          <p>Choose suppliers with proven track records and implement quality control measures to ensure your designs are protected throughout production.</p>
        </div>
      ),
    },
    {
      id: 'moq-explained',
      title: 'Understanding MOQ: Minimum Order Quantities Explained',
      excerpt: 'What MOQ means, how suppliers set it, and strategies for working with MOQ requirements.',
      category: 'Sourcing Guide',
      date: 'June 10, 2026',
      readTime: '4 min read',
      author: 'Tom Liu',
      tags: ['MOQ', 'Orders', 'Manufacturing'],
      content: (
        <div className="space-y-4">
          <p>Minimum Order Quantity (MOQ) is a common requirement when sourcing from China. Understanding how MOQ works helps you plan orders effectively.</p>
          
          <h3 className="font-semibold text-text-primary">What is MOQ?</h3>
          <p>MOQ is the minimum quantity a supplier is willing to produce for a single order. It's set based on:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Raw material minimums from their suppliers</li>
            <li>Production line setup costs</li>
            <li>Profit margins on smaller orders</li>
            <li>Equipment and machinery requirements</li>
          </ul>
          
          <h3 className="font-semibold text-text-primary">Typical MOQ Ranges</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Simple products: 100-500 units</li>
            <li>Electronics: 500-1,000 units</li>
            <li>Textiles: 300-1,000 units</li>
            <li>Custom packaging: 1,000-5,000 units</li>
          </ul>
          
          <h3 className="font-semibold text-text-primary">Strategies for Lower MOQ</h3>
          <p>1. Negotiate with suppliers for reduced MOQ on initial orders</p>
          <p>2. Consider similar products to combine orders</p>
          <p>3. Offer faster payment terms for flexibility</p>
          <p>4. Build relationships for future flexibility</p>
        </div>
      ),
    },
  ];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <PageHero 
        title="Blog" 
        subtitle="Insights, guides, and tips for successful China sourcing"
      />

      {/* Categories */}
      <section className="py-8 bg-surface border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-background text-text-secondary hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard 
                key={post.id} 
                post={post} 
                onClick={() => setSelectedPost(post)}
              />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-muted">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Subscribe to our newsletter for the latest China sourcing insights and tips
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Modal */}
      <BlogModal 
        post={selectedPost} 
        isOpen={!!selectedPost} 
        onClose={() => setSelectedPost(null)} 
      />
    </>
  );
};

export default BlogPage;