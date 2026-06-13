import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

// This is a simple blog post detail page
const blogContent = {
  '1': {
    title: 'How to Verify a Chinese Supplier: A Step-by-Step Guide',
    date: '2026-05-20',
    author: 'Michael Chen',
    category: 'Supplier Verification',
    content: `Finding the right supplier in China is the single most important decision in your sourcing journey. A verified, reliable supplier can be a competitive advantage; an unverified one can cost you time, money, and reputation.

Here is our step-by-step guide to verifying Chinese manufacturers before placing an order.

Step 1: Check Business Registration

Every legitimate Chinese factory has a business license (营业执照). Request a copy and verify it through China's National Enterprise Credit Information Publicity System. Check:
- Company name matches what they're telling you
- Registered business scope includes manufacturing (not just trading)
- Registration capital is reasonable for their claimed size
- No serious violations or legal issues

Step 2: Verify Certifications

Ask for copies of quality and compliance certifications relevant to your industry:
- ISO 9001 (Quality Management)
- BSCI / SMETA (Social Compliance)
- Product-specific certifications (CE, FDA, RoHS, etc.)

Contact the certification body directly to verify certificate validity. Photographs of certificates are easy to fake.

Step 3: Conduct an On-Site Audit

Nothing replaces a physical factory visit. During an audit, evaluate:
- Production equipment: Is it well-maintained and appropriate for your product?
- Production lines: Are they organized and efficient?
- Quality control processes: Is there a dedicated QC area with testing equipment?
- Raw materials: Are they stored properly?
- Workforce: Are workers skilled and properly equipped?

Step 4: Check References

Ask for references from international clients, particularly those in your industry and region. Contact these references and ask:
- How long have you worked with this supplier?
- Have there been any quality or delivery issues?
- How do they handle problems when they arise?

Step 5: Start with a Trial Order

Even after verification, start with a smaller trial order. This lets you evaluate:
- Communication throughout the production process
- Adherence to specifications and samples
- On-time delivery performance
- Product quality upon arrival

Conclusion

Supplier verification is not a one-time event—it's an ongoing process. Our team conducts regular re-audits and inspections to ensure our clients' suppliers maintain their standards over time.`,
  },
  '2': {
    title: 'Understanding AQL Inspection Standards for Importers',
    date: '2026-05-12',
    author: 'Sarah Wang',
    category: 'Quality Control',
    content: `AQL (Acceptable Quality Limit) is the international standard for quality inspections. Understanding how it works is essential for anyone importing products from China.

What is AQL?

AQL is a statistical sampling method defined in ISO 2859-1. It determines how many units from a production batch should be inspected and the maximum number of defects allowed before the batch is rejected.

The AQL table uses three key parameters:
- Lot size (total order quantity)
- Inspection level (usually General Level II for most consumer goods)
- AQL limits (acceptable defect percentages)

Common AQL limits:
- Critical defects: 0% (zero tolerance)
- Major defects: 2.5% (affects product function or saleability)
- Minor defects: 4.0% (minor cosmetic issues)

How Sampling Works

For example, if you order 5,000 units and use General Level II with AQL 2.5:
- Sample size: 200 units are randomly selected
- Maximum allowed major defects: 10 units (5%)
- If 11 or more major defects are found, the batch fails inspection

Defect Classification

Critical Defects: Safety hazards, regulatory non-compliance, or defects that could harm the user. Zero tolerance.

Major Defects: Defects that affect product function, significantly reduce saleability, or would cause a customer to return the product.

Minor Defects: Small cosmetic issues that don't affect function but deviate from specifications.

Best Practices

1. Define clear quality specifications before production starts—include detailed product specifications, approved samples, and a defect classification list.

2. Conduct inspections at multiple stages: during production (DUPRO) and before shipment (PSI).

3. Work with qualified inspectors who understand your product category and quality expectations.

Our QC team follows AQL standards on every inspection, providing detailed reports with photos and actionable recommendations.`,
  },
};

const defaultContent = {
  title: 'Blog Article',
  date: '',
  author: '',
  category: '',
  content: 'This article content is being prepared. Please check back soon for detailed insights on sourcing from China.',
};

export default function BlogPost() {
  const { id } = useParams();
  const post = blogContent[id] || defaultContent;

  return (
    <div>
      <section className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <span className="inline-block text-xs font-medium text-brand-orange bg-orange-50/20 px-2.5 py-1 rounded-full mb-3">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <article className="prose prose-slate max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
            {post.content}
          </article>
        </div>
      </section>
    </div>
  );
}