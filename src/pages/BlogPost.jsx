import React from 'react';
import { Link, useParams } from 'react-router-dom';

const blogContent = {
  'how-to-evaluate-a-chinese-factory': {
    title: 'How to Evaluate a Chinese Factory Before Placing an Order',
    date: '2026-05-12',
    category: 'Supplier Verification',
    readTime: '9 min',
    content: [
      { type: 'p', text: 'Before you send a deposit to a Chinese supplier, you should have reasonable confidence that they are a real factory, that they can produce your product to your standards, and that they will still be in business when you need to reorder.' },
      { type: 'p', text: 'Many buyers skip this step and pay for it later. Here is a practical framework we use when evaluating new suppliers.' },
      { type: 'h', text: '1. Verify they are actually a manufacturer' },
      { type: 'p', text: 'Ask for their business license and check that the registered business scope includes manufacturing. Request photos of their production floor, equipment list, and worker count. A trading company will often dodge these requests or provide generic stock photos.' },
      { type: 'h', text: '2. Assess production capability' },
      { type: 'p', text: 'Do they have the right equipment for your product? What is their monthly capacity for your category? Who are their existing clients (even if anonymized)? Ask for references from buyers in your industry or region.' },
      { type: 'h', text: '3. Evaluate quality systems' },
      { type: 'p', text: 'Do they have documented quality procedures? Who is responsible for quality — a dedicated person or the production supervisor? What testing equipment do they have in-house? Ask to see recent inspection reports or corrective action records.' },
      { type: 'h', text: '4. Understand their incentives' },
      { type: 'p', text: 'A factory that is desperate for orders will say yes to everything. A factory that is selective about clients is often a better long-term partner. Ask about their current capacity utilization and whether they are taking on new clients in your category.' },
      { type: 'h', text: '5. Visit or have someone visit' },
      { type: 'p', text: 'Nothing replaces an on-site visit. If you cannot go yourself, hire a sourcing agent or inspection company to conduct a factory audit. The cost is small compared to the risk of placing a large order with the wrong supplier.' },
      { type: 'p', text: 'We conduct factory audits as a standard part of our process. If you would like us to evaluate suppliers for your project, start by submitting your requirements.' },
    ],
  },
  'common-quality-issues-in-consumer-goods': {
    title: 'Common Quality Issues in Consumer Goods Sourcing from China',
    date: '2026-04-28',
    category: 'Quality Control',
    readTime: '11 min',
    content: [
      { type: 'p', text: 'After inspecting thousands of shipments, we see the same quality problems repeatedly. Most are preventable with proper specification, sampling, and inspection.' },
      { type: 'h', text: 'Dimensional and tolerance issues' },
      { type: 'p', text: 'Parts that do not fit together, products that are slightly too large or too small, inconsistent sizing across batches. These usually stem from inadequate drawings or first-article approval.' },
      { type: 'h', text: 'Material and finish inconsistencies' },
      { type: 'p', text: 'Color variation, surface defects, wrong material grade, or substitution of cheaper components. This is often a result of unclear material specifications or lack of incoming material inspection.' },
      { type: 'h', text: 'Functional failures' },
      { type: 'p', text: 'Products that do not work as intended — electronics that fail after a few uses, mechanisms that seize, zippers that break. These are often caught too late because no one tested the product under real conditions before mass production.' },
      { type: 'h', text: 'Packaging and labeling problems' },
      { type: 'p', text: 'Damaged packaging, incorrect labels, missing instructions, or non-compliant markings. These issues are expensive to fix after goods arrive in your market.' },
      { type: 'p', text: 'The solution is almost always the same: clear specifications, approved samples, in-process monitoring, and a thorough final inspection before shipment.' },
    ],
  },
  'understanding-moq-and-price-breaks': {
    title: 'Understanding MOQ and Price Breaks in China Manufacturing',
    date: '2026-04-15',
    category: 'Commercial',
    readTime: '7 min',
    content: [
      { type: 'p', text: 'Minimum order quantity (MOQ) is one of the most misunderstood aspects of sourcing from China. It is not arbitrary — it reflects real production economics.' },
      { type: 'h', text: 'Why factories set MOQs' },
      { type: 'p', text: 'Factories have setup costs for each production run: machine calibration, material ordering, worker training, and quality checks. These costs must be spread across a minimum number of units to be economical.' },
      { type: 'h', text: 'How to negotiate MOQ' },
      { type: 'p', text: 'If your volume is below the stated MOQ, you have options: pay a higher unit price, combine multiple SKUs into one order, accept a longer lead time, or find a smaller factory that specializes in low-volume production.' },
      { type: 'h', text: 'Price breaks are real' },
      { type: 'p', text: 'Larger orders almost always get better pricing. But the biggest price drops usually happen between very small orders and medium orders. Beyond a certain volume, the marginal savings diminish.' },
      { type: 'p', text: 'We help buyers understand what is realistic for their volume and negotiate terms that make sense for both parties.' },
    ],
  },
  'pre-shipment-inspection-what-to-expect': {
    title: 'What a Pre-Shipment Inspection Actually Covers',
    date: '2026-03-30',
    category: 'Quality Control',
    readTime: '8 min',
    content: [
      { type: 'p', text: 'A pre-shipment inspection (PSI) is your last chance to catch problems before goods leave the factory. Here is what a professional inspection typically includes.' },
      { type: 'h', text: 'Quantity verification' },
      { type: 'p', text: 'Confirm that the correct number of units are ready and match the packing list.' },
      { type: 'h', text: 'Visual and workmanship check' },
      { type: 'p', text: 'Inspect for obvious defects: scratches, dents, misaligned parts, poor finishing, incorrect colors, and labeling errors.' },
      { type: 'h', text: 'Dimensional and specification check' },
      { type: 'p', text: 'Measure critical dimensions against your approved sample or drawing. Verify weight, material, and component specifications.' },
      { type: 'h', text: 'Functional testing' },
      { type: 'p', text: 'Test products to ensure they work as intended. For electronics, this includes safety tests and basic functionality.' },
      { type: 'h', text: 'Packaging and labeling' },
      { type: 'p', text: 'Verify that packaging protects the product, that labels are correct and compliant, and that all required documentation is included.' },
      { type: 'p', text: 'We use AQL (Acceptable Quality Limit) sampling standards and provide a detailed report with photos. You decide whether to release the shipment based on our findings.' },
    ],
  },
  'managing-production-delays-in-china': {
    title: 'How to Manage Production Delays Without Losing Your Mind',
    date: '2026-03-18',
    category: 'Production Management',
    readTime: '10 min',
    content: [
      { type: 'p', text: 'Production delays are common in China sourcing. The question is not whether they will happen, but how you will respond when they do.' },
      { type: 'h', text: 'Build in buffer time' },
      { type: 'p', text: 'Never plan your launch or promotion around the earliest possible ship date. Add at least 2–3 weeks of buffer for most consumer goods.' },
      { type: 'h', text: 'Get visibility early' },
      { type: 'p', text: 'Require weekly production updates with photos. If a factory is behind, you want to know in week two, not week eight.' },
      { type: 'h', text: 'Understand the real cause' },
      { type: 'p', text: 'Delays are often symptoms of deeper problems: material shortages, quality issues, or capacity problems. Address the root cause, not just the symptom.' },
      { type: 'h', text: 'Have a contingency plan' },
      { type: 'p', text: 'Know your options if the delay becomes unacceptable: partial shipment, air freight for critical items, or switching to an alternative supplier for future orders.' },
      { type: 'p', text: 'We manage production timelines for our clients and escalate issues before they become crises.' },
    ],
  },
  'export-documentation-checklist': {
    title: 'Export Documentation Checklist for First-Time Importers',
    date: '2026-03-05',
    category: 'Logistics',
    readTime: '6 min',
    content: [
      { type: 'p', text: 'Incorrect or incomplete documentation is one of the most common causes of customs delays and unexpected costs.' },
      { type: 'h', text: 'Core documents' },
      { type: 'p', text: 'Commercial invoice, packing list, bill of lading or airway bill, and certificate of origin (if required for preferential tariffs).' },
      { type: 'h', text: 'Product-specific documents' },
      { type: 'p', text: 'Depending on your product, you may need: test reports, material safety data sheets, fumigation certificates, or compliance declarations (CE, FCC, FDA, etc.).' },
      { type: 'h', text: 'Who prepares what' },
      { type: 'p', text: 'The factory typically prepares the commercial invoice and packing list. Your freight forwarder handles the bill of lading. You or your agent should review everything before shipment.' },
      { type: 'h', text: 'Common mistakes' },
      { type: 'p', text: 'Mismatched product descriptions, incorrect HS codes, undervalued invoices, and missing certificates. These cause delays and can trigger inspections or penalties.' },
      { type: 'p', text: 'We review all export documentation before goods leave the factory and flag issues while there is still time to correct them.' },
    ],
  },
  'trading-company-vs-factory': {
    title: 'Trading Company vs. Factory: How to Tell the Difference',
    date: '2026-02-20',
    category: 'Supplier Verification',
    readTime: '8 min',
    content: [
      { type: 'p', text: 'Many buyers assume they are dealing with a factory when they are actually working with a trading company. This matters for pricing, quality control, and communication.' },
      { type: 'h', text: 'Why it matters' },
      { type: 'p', text: 'Trading companies add margin. They may not have direct control over production quality. And when problems arise, you are negotiating with a middleman, not the people who make the product.' },
      { type: 'h', text: 'How to tell the difference' },
      { type: 'p', text: 'Ask to visit the factory. Request photos of production equipment and workers. Ask who actually manufactures the product and whether they have other clients in your category. A real factory will usually be transparent; a trading company will often deflect.' },
      { type: 'h', text: 'When a trading company makes sense' },
      { type: 'p', text: 'Trading companies can be useful for small orders, multi-product sourcing, or when you need someone to consolidate shipments from multiple factories. Just understand what you are paying for.' },
      { type: 'p', text: 'We verify whether a supplier is a factory or trading company as part of our standard audit process.' },
    ],
  },
  'building-long-term-supplier-relationships': {
    title: 'Building Long-Term Supplier Relationships in China',
    date: '2026-02-04',
    category: 'Commercial',
    readTime: '9 min',
    content: [
      { type: 'p', text: 'The best sourcing outcomes usually come from long-term relationships with capable factories. Short-term, transactional sourcing often leads to quality problems and constant supplier churn.' },
      { type: 'h', text: 'Pay fairly' },
      { type: 'p', text: 'Factories that are squeezed on price will cut corners. A fair price for a quality product is in everyone\'s interest.' },
      { type: 'h', text: 'Be clear and consistent' },
      { type: 'p', text: 'Changing specifications, quality standards, or order volumes without notice damages trust. Document everything and communicate changes early.' },
      { type: 'h', text: 'Visit and invest in the relationship' },
      { type: 'p', text: 'Factories treat buyers who visit differently from those who only communicate by email. A factory visit signals that you are serious and committed.' },
      { type: 'h', text: 'Give feedback constructively' },
      { type: 'p', text: 'When quality issues arise, focus on solutions, not blame. Factories that feel respected are more likely to invest in fixing problems.' },
      { type: 'p', text: 'We help buyers build supplier relationships that last for years, not just one order.' },
    ],
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogContent[slug];

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-2xl font-semibold mb-4">Article not found</h1>
        <p className="text-slate-600 mb-8">The article you are looking for does not exist or has been moved.</p>
        <Link to="/blog" className="text-sm font-medium text-slate-900 hover:underline">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-3xl mx-auto px-6 pt-12 pb-8">
        <Link to="/blog" className="text-sm text-slate-500 hover:text-slate-700">← Back to Blog</Link>
        <div className="mt-6 flex items-center gap-3 text-xs text-slate-500">
          <span>{post.category}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">{post.title}</h1>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-20">
        <div className="prose prose-slate max-w-none">
          {post.content.map((block, idx) => {
            if (block.type === 'h') {
              return <h2 key={idx} className="text-xl font-semibold tracking-tight mt-10 mb-4">{block.text}</h2>;
            }
            return <p key={idx} className="text-slate-700 leading-relaxed mb-5">{block.text}</p>;
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-600 mb-4">Need help applying this to your specific situation?</p>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
