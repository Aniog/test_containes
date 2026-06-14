import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import BlogCard from '../components/BlogCard';

const blogPosts = [
  {
    slug: 'factory-verification-what-to-look-for',
    title: 'Factory Verification: What to Actually Look For On Site',
    excerpt: 'A checklist of practical things to observe during a factory visit that reveal more about capability and reliability than polished presentations.',
    date: 'May 28, 2026',
    readTime: '9 min',
    category: 'Verification',
    content: `
      <p>When you visit a factory in China, it is easy to be shown only the newest equipment and the cleanest production lines. A structured verification visit looks beyond the tour route.</p>
      
      <h3 class="text-lg font-semibold mt-8 mb-3">Production Reality vs. Showroom</h3>
      <p>Ask to see the actual production lines where your product would be made, not just the sample room. Look at how work-in-progress is handled, how materials are stored, and whether there is evidence of recent production of similar items.</p>
      
      <h3 class="text-lg font-semibold mt-8 mb-3">Order Book and Capacity</h3>
      <p>A factory that claims to have plenty of capacity but is running three shifts on existing orders may not be able to accommodate your timeline. Ask about current order volume and how they prioritize new customers.</p>
      
      <h3 class="text-lg font-semibold mt-8 mb-3">Quality Records</h3>
      <p>Request to see recent inspection records, non-conformance reports, and corrective action logs. A factory that cannot produce these documents quickly may not have a functioning quality system.</p>
      
      <h3 class="text-lg font-semibold mt-8 mb-3">Worker Conditions and Turnover</h3>
      <p>High turnover is a leading indicator of production instability. Observe whether workers appear trained and whether supervisors are actively engaged on the floor.</p>
    `,
  },
  {
    slug: 'aql-inspection-when-it-helps-and-when-it-doesnt',
    title: 'AQL Inspection: When It Helps and When It Does Not',
    excerpt: 'Acceptable Quality Limit sampling is a useful tool, but it has limitations. Understanding what it can and cannot catch helps set realistic expectations.',
    date: 'May 12, 2026',
    readTime: '7 min',
    category: 'Quality',
    content: `
      <p>AQL-based final inspection is one of the most common quality control activities in China sourcing. It is also one of the most misunderstood.</p>
      
      <h3 class="text-lg font-semibold mt-8 mb-3">What AQL Actually Does</h3>
      <p>AQL sampling gives you a statistical basis for accepting or rejecting a batch based on the number of defects found in a sample. It is designed to balance inspection cost against the risk of accepting a bad batch.</p>
      
      <h3 class="text-lg font-semibold mt-8 mb-3">What AQL Does Not Do</h3>
      <p>AQL inspection will not catch every defect. It will not tell you why defects occurred. It will not fix upstream process problems. And it provides limited protection against defects that are difficult to detect visually in a short inspection window.</p>
      
      <h3 class="text-lg font-semibold mt-8 mb-3">Using Inspection Effectively</h3>
      <p>The most effective buyers use inspection as one layer in a broader quality strategy that includes supplier verification, pre-production checks, in-line monitoring, and clear specification documents. Inspection alone is rarely sufficient.</p>
    `,
  },
  {
    slug: 'why-suppliers-miss-deadlines-and-how-to-reduce-risk',
    title: 'Why Suppliers Miss Deadlines — and How to Reduce the Risk',
    excerpt: 'Production delays are one of the most common frustrations in China sourcing. Understanding the root causes helps you set more realistic schedules and protect your timeline.',
    date: 'April 30, 2026',
    readTime: '8 min',
    category: 'Production',
    content: `
      <p>When a supplier announces a delay two weeks before shipment, it is rarely a surprise to the factory. The delay was usually visible earlier — if anyone was looking.</p>
      
      <h3 class="text-lg font-semibold mt-8 mb-3">Common Causes of Delay</h3>
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Overcommitment: The factory accepted more orders than it could realistically produce on time.</li>
        <li>Material shortages: Raw material or component delays that were not communicated.</li>
        <li>Quality issues discovered late: Problems found during final inspection that require rework.</li>
        <li>Equipment breakdowns or power restrictions.</li>
        <li>Seasonal labor shortages after major holidays.</li>
      </ul>
      
      <h3 class="text-lg font-semibold mt-8 mb-3">Practical Steps Buyers Can Take</h3>
      <p>Build realistic buffers into your timeline. Require production schedules with milestones. Ask for evidence of material availability before production starts. Conduct in-line inspections to catch issues early. Maintain relationships with backup suppliers for critical items.</p>
    `,
  },
  {
    slug: 'documentation-requirements-for-smooth-customs-clearance',
    title: 'Documentation Requirements for Smooth Customs Clearance',
    excerpt: 'Incomplete or incorrect export documentation is a frequent cause of shipment delays and unexpected costs. A checklist of what to prepare.',
    date: 'April 18, 2026',
    readTime: '6 min',
    category: 'Logistics',
    content: `
      <p>Even when production and quality go smoothly, documentation problems can hold up a shipment at the port or create issues at destination customs.</p>
      
      <h3 class="text-lg font-semibold mt-8 mb-3">Core Export Documents</h3>
      <p>Commercial invoice, packing list, bill of lading or air waybill, and certificate of origin are the foundation. Depending on the product and destination, you may also need fumigation certificates, inspection certificates, or specific declarations.</p>
      
      <h3 class="text-lg font-semibold mt-8 mb-3">Common Documentation Issues</h3>
      <p>Descriptions that do not match the actual goods, incorrect HS codes, inconsistent weights or quantities between documents, and missing or outdated certificates are frequent problems.</p>
      
      <h3 class="text-lg font-semibold mt-8 mb-3">How to Reduce Risk</h3>
      <p>Agree on required documents and formats before production. Review draft documents before the factory submits them. Work with an experienced freight forwarder who understands your destination market requirements.</p>
    `,
  },
  {
    slug: 'small-order-sourcing-realistic-expectations',
    title: 'Sourcing Small Orders: Realistic Expectations',
    excerpt: 'Many buyers assume that Chinese factories are only interested in large volumes. The reality is more nuanced — but small orders do require different approaches.',
    date: 'April 3, 2026',
    readTime: '7 min',
    category: 'Sourcing Strategy',
    content: `
      <p>Factories in China have different definitions of "small." A 500-piece order may be routine for one supplier and uninteresting to another. Understanding this helps set expectations.</p>
      
      <h3 class="text-lg font-semibold mt-8 mb-3">Where Small Orders Work</h3>
      <p>Suppliers who already produce similar products for other small or medium customers are often willing to accept modest order sizes. Trading companies and agents can also aggregate demand across multiple buyers.</p>
      
      <h3 class="text-lg font-semibold mt-8 mb-3">Where Small Orders Struggle</h3>
      <p>Factories that focus on large OEM contracts may have minimum order quantities that are genuinely driven by setup costs and production efficiency. Pushing them to accept small orders can result in poor attention or inflated pricing.</p>
      
      <h3 class="text-lg font-semibold mt-8 mb-3">Practical Advice</h3>
      <p>Be transparent about your volume expectations from the beginning. Look for suppliers who already serve customers with similar order sizes. Consider whether a trading company or consolidator model makes sense for your situation.</p>
    `,
  },
];

const BlogList = () => {
  return (
    <div>
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="text-sm font-medium text-blue-700 tracking-wider mb-2">INSIGHTS</div>
          <h1 className="text-4xl font-semibold text-slate-900 mb-4">Sourcing Insights</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Practical observations from our work helping overseas buyers source from China. No hype, no generic advice.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>

      <div className="bg-slate-900 text-white py-12">
        <div className="max-w-3xl mx-auto px-6 text-center text-sm text-slate-300">
          These articles reflect our experience across hundreds of sourcing projects. They are intended to help buyers set realistic expectations and ask better questions — not to replace professional advice for your specific situation.
        </div>
      </div>
    </div>
  );
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <Link to="/blog" className="text-sm text-blue-700 hover:underline mb-6 inline-block">← Back to all articles</Link>
        <h1 className="text-3xl font-semibold text-slate-900 mb-4">Article not found</h1>
        <p className="text-slate-600 mb-8">The article you are looking for does not exist or may have been moved.</p>
        <Link to="/blog" className="text-blue-700 font-medium hover:underline">Browse all articles →</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link to="/blog" className="text-sm text-blue-700 hover:underline mb-6 inline-block">← Back to all articles</Link>
      
      <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
        <span className="px-3 py-1 bg-slate-100 rounded-full text-slate-600">{post.category}</span>
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime} read</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-8 leading-tight">{post.title}</h1>

      <div 
        className="prose prose-slate max-w-none text-[15px] leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-12 pt-8 border-t border-slate-200">
        <div className="text-sm text-slate-600">
          This article is for informational purposes. Every sourcing situation is different. We recommend discussing your specific requirements with an experienced sourcing partner.
        </div>
        <div className="mt-4">
          <Link to="/contact" className="text-blue-700 font-medium hover:underline">Contact us to discuss your project →</Link>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/:slug" element={<BlogPost />} />
    </Routes>
  );
};

export default Blog;
