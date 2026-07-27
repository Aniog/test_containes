import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const posts = {
  'factory-audit-checklist-china': {
    title: 'Factory Audit Checklist for China Sourcing: What to Verify Before You Order',
    date: 'Jul 12, 2026',
    readTime: '12 min',
    category: 'Sourcing',
    content: [
      { type: 'p', text: 'Before placing a production order with a new Chinese supplier, it is essential to verify that the factory is legitimate, capable, and aligned with your quality and compliance requirements. A structured audit reduces the risk of working with intermediaries, overcommitted workshops, or facilities that cannot meet your specifications.' },
      { type: 'h', text: '1. Business Legitimacy' },
      { type: 'p', text: 'Confirm that the company is a legally registered manufacturer with the right to export. Request copies of the business license, export license, and any relevant permits. Verify that the factory name and address on official documents match the physical location you are auditing.' },
      { type: 'h', text: '2. Production Capacity' },
      { type: 'p', text: 'Assess whether the factory has sufficient equipment, skilled workers, and floor space to produce your order within the required timeline. Ask for production records from similar orders and observe current production lines. Be cautious of factories that claim capacity far beyond what you see on-site.' },
      { type: 'h', text: '3. Quality Management System' },
      { type: 'p', text: 'Review whether the factory has documented quality procedures, incoming material inspection, in-process checks, and final inspection processes. Ask to see inspection records and non-conformance reports. A factory without basic quality documentation is unlikely to consistently meet your specifications.' },
      { type: 'h', text: '4. Equipment and Process Capability' },
      { type: 'p', text: 'Verify that the factory has the specific equipment needed for your product. For machined parts, check CNC machines and metrology tools. For electronics, confirm assembly lines, testing equipment, and burn-in capabilities. Observe whether equipment appears well-maintained.' },
      { type: 'h', text: '5. Social and Environmental Compliance' },
      { type: 'p', text: 'Many buyers require factories to meet minimum social and environmental standards. Check working conditions, safety equipment, fire exits, and waste management practices. If your customers or markets require specific certifications (BSCI, SEDEX, ISO 14001), verify current certificates and audit dates.' },
      { type: 'h', text: '6. Export Experience' },
      { type: 'p', text: 'Ask for references from other international clients and examples of shipments to your target market. Factories with experience exporting to your region are more likely to understand documentation, labeling, and packaging requirements.' },
      { type: 'h', text: 'Documentation to Request' },
      { type: 'ul', items: [
        'Business license and export license',
        'ISO or other quality certificates',
        'Social compliance audit reports (if available)',
        'Production capacity summary',
        'List of major clients and export markets',
        'Sample inspection reports from recent orders',
      ]},
      { type: 'p', text: 'A thorough factory audit is not a guarantee of perfect quality, but it significantly reduces the risk of working with unsuitable suppliers. We recommend auditing any new factory before placing a production order, especially for first-time suppliers or high-value products.' },
    ],
  },
  'aql-inspection-standards-explained': {
    title: 'AQL Inspection Standards Explained: How We Decide Pass or Fail',
    date: 'Jul 5, 2026',
    readTime: '9 min',
    category: 'Quality Control',
    content: [
      { type: 'p', text: 'Acceptable Quality Limit (AQL) is the standard most professional inspectors use to determine whether a production batch passes or fails inspection. Understanding AQL helps buyers set realistic quality expectations and communicate clearly with suppliers.' },
      { type: 'h', text: 'What AQL Means' },
      { type: 'p', text: 'AQL represents the maximum percentage of defective items that is considered acceptable in a production batch. For example, an AQL of 2.5 means that if the percentage of defects found in the sample is at or below 2.5%, the batch is considered to have passed that inspection level.' },
      { type: 'h', text: 'Common AQL Levels' },
      { type: 'ul', items: [
        'Critical defects: AQL 0 or 0.65 — defects that could cause harm or make the product unusable',
        'Major defects: AQL 1.0 or 1.5 — defects that are not critical but would likely result in customer complaints or returns',
        'Minor defects: AQL 2.5 or 4.0 — defects that are unlikely to affect function or customer satisfaction',
      ]},
      { type: 'h', text: 'How Sampling Works' },
      { type: 'p', text: 'Inspectors do not check every unit. They use standardized sampling tables (ANSI/ASQ Z1.4 or ISO 2859-1) to determine how many units to inspect based on batch size and inspection level. The inspection level (I, II, or III) affects sample size. Level II is the default for most consumer products.' },
      { type: 'h', text: 'How We Report Findings' },
      { type: 'p', text: 'Our inspection reports include the number of units inspected, the number of defects found by category, and a clear pass/fail determination based on the agreed AQL levels. We also provide photos of defects and measurements where relevant. Buyers receive the full report within 24 hours of inspection completion.' },
      { type: 'p', text: 'Setting appropriate AQL levels is a business decision. Tighter AQLs increase inspection costs and may result in more rejected batches. Looser AQLs reduce costs but increase the risk of customer complaints. We help clients set AQL levels that balance quality expectations with commercial realities.' },
    ],
  },
  'china-export-documentation-guide-2026': {
    title: 'China Export Documentation Guide for 2026: What Buyers Need to Know',
    date: 'Jun 28, 2026',
    readTime: '11 min',
    category: 'Logistics',
    content: [
      { type: 'p', text: 'Proper export documentation is essential for smooth customs clearance and to avoid costly delays. While requirements vary by product and destination country, there are several core documents that are almost always required.' },
      { type: 'h', text: 'Core Export Documents' },
      { type: 'ul', items: [
        'Commercial Invoice — describes the transaction, including product description, quantity, unit price, and total value',
        'Packing List — details the contents of each package, including dimensions, weight, and markings',
        'Bill of Lading or Air Waybill — issued by the carrier as proof of shipment',
        'Certificate of Origin — certifies the country of manufacture (often required for preferential tariffs)',
      ]},
      { type: 'h', text: 'Product-Specific Documents' },
      { type: 'p', text: 'Certain products require additional documentation. Electronics may need CE, FCC, or other compliance certificates. Food-contact products may require material safety data sheets or test reports. We help clients identify required documents early in the sourcing process.' },
      { type: 'h', text: 'Common Causes of Customs Delays' },
      { type: 'p', text: 'Incomplete or inconsistent documentation is one of the most common causes of customs delays. Discrepancies between the commercial invoice and packing list, missing certificates, or incorrect HS codes can result in holds that last days or weeks. We review documentation before shipment to reduce this risk.' },
      { type: 'p', text: 'We do not act as a customs broker, but we coordinate with your freight forwarder and provide the documentation package that customs authorities typically require. Clear documentation is part of protecting your supply chain timeline.' },
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-semibold mb-4">Article not found</h1>
        <p className="text-slate-600 mb-6">The article you are looking for does not exist or has been moved.</p>
        <Link to="/blog" className="text-sky-700 hover:underline">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-3xl mx-auto px-6 pt-12 pb-8">
        <Link to="/blog" className="text-sm text-sky-700 hover:underline">← Back to all articles</Link>
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
          <span className="uppercase tracking-widest">{post.category}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">{post.title}</h1>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-16">
        <div className="prose prose-slate max-w-none">
          {post.content.map((block, idx) => {
            if (block.type === 'h') {
              return <h2 key={idx} className="text-xl font-semibold mt-8 mb-3 text-slate-900">{block.text}</h2>;
            }
            if (block.type === 'ul') {
              return (
                <ul key={idx} className="list-disc pl-5 space-y-1 text-slate-600">
                  {block.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              );
            }
            return <p key={idx} className="text-slate-600 mb-4 leading-relaxed">{block.text}</p>;
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-600 mb-4">Have a specific sourcing question? We are happy to discuss your project.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium bg-slate-900 text-white rounded-md hover:bg-slate-800">Get a Free Sourcing Quote</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
