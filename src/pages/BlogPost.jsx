import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // Simple content map for demo purposes
  const posts = {
    'factory-audit-what-to-expect': {
      title: 'What to Expect from a Factory Audit in China',
      date: 'June 10, 2026',
      readTime: '8 min',
      category: 'Quality',
      content: (
        <>
          <p>A factory audit is one of the most valuable steps a buyer can take before placing a significant order with a new supplier. It is also one of the steps most commonly skipped — often with expensive consequences later.</p>
          
          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">What a Typical Audit Covers</h3>
          <p>A standard on-site audit usually includes the following areas:</p>
          <ul className="list-disc pl-5 space-y-1 my-4 text-sm">
            <li>Business registration and legal status verification</li>
            <li>Ownership structure and export license confirmation</li>
            <li>Production facility layout and equipment condition</li>
            <li>Production capacity assessment (actual vs. claimed)</li>
            <li>Quality management processes and record-keeping</li>
            <li>Workforce size, skill level, and turnover indicators</li>
            <li>Raw material sourcing and incoming inspection</li>
            <li>Working conditions and basic social compliance observations</li>
          </ul>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">What an Audit Report Should Include</h3>
          <p>A useful audit report is not just a checklist. It should provide:</p>
          <ul className="list-disc pl-5 space-y-1 my-4 text-sm">
            <li>Clear findings with supporting photos</li>
            <li>A risk rating or summary assessment</li>
            <li>Specific observations about capability gaps</li>
            <li>Recommendations on whether to proceed and under what conditions</li>
          </ul>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">Limitations to Understand</h3>
          <p>An audit is a snapshot in time. It does not guarantee future performance. Factories can change processes, staff, or priorities after the audit. This is why ongoing monitoring and inspection remain important even after a positive audit result.</p>

          <p className="mt-6 text-sm text-slate-600">If you are considering working with a new supplier in China, we recommend treating a factory audit as a standard part of due diligence rather than an optional extra.</p>
        </>
      ),
    },
    'pre-shipment-inspection-guide': {
      title: 'A Buyer\'s Guide to Pre-Shipment Inspection',
      date: 'May 28, 2026',
      readTime: '7 min',
      category: 'Quality',
      content: (
        <>
          <p>Pre-shipment inspection (PSI) is the last practical opportunity to identify quality issues before goods leave the factory and your payment is finalized.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">How AQL Works in Practice</h3>
          <p>Most inspections use Acceptable Quality Limit (AQL) sampling. Common levels include:</p>
          <ul className="list-disc pl-5 space-y-1 my-4 text-sm">
            <li>AQL 2.5 for major defects (often used for consumer goods)</li>
            <li>AQL 4.0 for minor defects</li>
            <li>AQL 1.0 or 1.5 for critical or safety-related items</li>
          </ul>
          <p>The AQL level you choose determines how many units are inspected and how many defects are tolerated before the lot is considered to have failed.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">What Inspectors Typically Check</h3>
          <p>A standard PSI includes visual inspection, dimensional measurement, functional testing, packaging verification, and labeling accuracy. The exact checklist should be tailored to your product and risk tolerance.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">When to Use Different Inspection Types</h3>
          <p>Pre-shipment inspection is the most common, but other types can be useful:</p>
          <ul className="list-disc pl-5 space-y-1 my-4 text-sm">
            <li>Initial Production Check — early in production to catch issues before large volumes are made</li>
            <li>During Production Inspection — useful for longer production runs</li>
            <li>Container Loading Supervision — verifies that the right goods are loaded and properly secured</li>
          </ul>

          <p className="mt-6 text-sm text-slate-600">Inspection is not a substitute for a capable supplier, but it is an important layer of protection when you are sourcing from factories you do not control directly.</p>
        </>
      ),
    },
    'moq-and-pricing-realities': {
      title: 'Understanding MOQ and Pricing Realities When Sourcing from China',
      date: 'May 15, 2026',
      readTime: '6 min',
      category: 'Sourcing',
      content: (
        <>
          <p>Minimum order quantity (MOQ) is one of the most common points of friction between buyers and Chinese suppliers. Understanding why MOQs exist can help you negotiate more effectively.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">Why MOQs Exist</h3>
          <p>Factories incur setup costs for each production run — machine configuration, material ordering, quality checks, and worker training. These costs are spread across the units produced. Lower volumes mean higher per-unit costs for the factory, which is reflected in pricing or minimums.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">Pricing Tiers Are Real</h3>
          <p>Most suppliers offer tiered pricing. Moving from 1,000 to 5,000 units often produces a meaningful per-unit price reduction. The exact breakpoints vary by product and material.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">Negotiation Approaches</h3>
          <ul className="list-disc pl-5 space-y-1 my-4 text-sm">
            <li>Be clear about your target volume and timeline from the start</li>
            <li>Ask what drives the MOQ (tooling, material, labor, or something else)</li>
            <li>Consider whether a slightly different specification could reduce cost or MOQ</li>
            <li>Explore whether the supplier will accept a smaller trial order at a higher price</li>
          </ul>

          <p className="mt-6 text-sm text-slate-600">It is rarely productive to pressure a supplier below their actual cost. A factory that loses money on your order is unlikely to be a reliable long-term partner.</p>
        </>
      ),
    },
    'common-mistakes-first-time-buyers': {
      title: 'Common Mistakes First-Time Buyers Make When Sourcing from China',
      date: 'May 2, 2026',
      readTime: '9 min',
      category: 'Sourcing',
      content: (
        <>
          <p>Many first-time importers make similar mistakes. These patterns show up repeatedly across different industries and product types.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">1. Skipping Factory Verification</h3>
          <p>Many buyers rely on photos, videos, and supplier assurances. Without an on-site visit or credible third-party verification, it is difficult to know whether a factory actually has the claimed capacity and quality systems.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">2. Vague or Incomplete Specifications</h3>
          <p>When specifications are unclear, factories make assumptions. Those assumptions often do not match what the buyer had in mind. Detailed specifications, reference samples, and acceptance criteria reduce this risk.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">3. Unrealistic Timelines</h3>
          <p>Buyers often underestimate how long sampling, production, and shipping actually take. Adding buffer time and confirming realistic schedules with the factory early helps avoid last-minute crises.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">4. Weak Payment Structures</h3>
          <p>Paying 100% upfront or using payment methods with no recourse leaves buyers with little leverage if quality or delivery problems arise. Staged payments tied to milestones are more common for a reason.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">5. No Inspection Before Shipment</h3>
          <p>Once goods are on a container, fixing problems becomes expensive and slow. Pre-shipment inspection is a relatively low-cost way to catch issues before they leave the factory.</p>

          <p className="mt-6 text-sm text-slate-600">Most of these mistakes are avoidable with basic process discipline. The cost of prevention is almost always lower than the cost of remediation.</p>
        </>
      ),
    },
    'shipping-options-comparison': {
      title: 'Sea, Air, Rail, and Express: How to Choose a Shipping Method',
      date: 'April 20, 2026',
      readTime: '7 min',
      category: 'Logistics',
      content: (
        <>
          <p>Choosing the right shipping method involves balancing cost, speed, and reliability. There is no single best option for all situations.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">Sea Freight</h3>
          <p>Sea freight is the most common method for full container loads (FCL) and less-than-container loads (LCL). Transit times from major Chinese ports to the US West Coast are typically 25–35 days; to Europe, 30–45 days. It is the lowest-cost option for most bulk shipments.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">Air Freight</h3>
          <p>Air freight is significantly faster (usually 3–7 days to most major destinations) but much more expensive. It is appropriate for high-value, time-sensitive, or perishable goods, or when inventory is critically low.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">Rail Freight (China-Europe Rail)</h3>
          <p>Rail freight via the China-Europe rail network offers a middle ground for certain routes. Transit times are typically 15–25 days to major European hubs. It can be a useful option when sea is too slow and air is too expensive.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">Express / Courier</h3>
          <p>Services like DHL, FedEx, and UPS are convenient for small shipments and samples. They include door-to-door service and simplified customs handling, but costs rise quickly with weight and volume.</p>

          <p className="mt-6 text-sm text-slate-600">We recommend comparing total landed cost (freight + duties + inland delivery) and realistic transit times, not just the headline freight rate.</p>
        </>
      ),
    },
    'working-with-sourcing-agents': {
      title: 'How to Work Effectively with a Sourcing Agent',
      date: 'April 8, 2026',
      readTime: '6 min',
      category: 'Sourcing',
      content: (
        <>
          <p>A good sourcing agent can save you time and reduce risk. A poor one can add cost without adding value. How you work with an agent matters.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">Provide Clear Information Upfront</h3>
          <p>The more clearly you can describe your product, quality expectations, target price, and timeline, the better the agent can identify suitable suppliers and set realistic expectations.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">Ask for Written Reports</h3>
          <p>Verbal updates are easy to misremember. Request written reports for audits, inspections, and key decisions. These become part of your internal record and can be shared with your team.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">Understand the Agent\'s Incentives</h3>
          <p>Ask how the agent is compensated. If they earn commissions from suppliers, their incentives may not be aligned with yours. Many professional agents charge buyers directly and do not accept supplier commissions.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">Use the Agent\'s Recommendations Thoughtfully</h3>
          <p>An agent can provide information and recommendations, but final decisions about supplier selection, order placement, and payment terms are yours. Treat agent input as informed advice, not a guarantee.</p>

          <p className="mt-6 text-sm text-slate-600">The most effective client-agent relationships are built on clear communication, documented expectations, and mutual understanding of roles and limitations.</p>
        </>
      ),
    },
    'documentation-for-import': {
      title: 'Documentation Basics for Importing from China',
      date: 'March 25, 2026',
      readTime: '5 min',
      category: 'Logistics',
      content: (
        <>
          <p>Proper documentation is essential for customs clearance, payment, and record-keeping. Missing or incorrect documents can cause delays and extra costs.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">Core Commercial Documents</h3>
          <ul className="list-disc pl-5 space-y-1 my-4 text-sm">
            <li>Commercial Invoice — describes the goods, value, and parties involved</li>
            <li>Packing List — details contents, weights, dimensions, and packaging</li>
            <li>Bill of Lading (or Air Waybill) — the transport contract and title document</li>
            <li>Certificate of Origin — may be required for preferential duty treatment</li>
          </ul>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">What to Check Before Shipment</h3>
          <p>Before goods leave the factory, verify that the commercial invoice and packing list match the actual shipment in description, quantity, and value. Discrepancies are a common source of customs delays.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">Other Documents That May Be Required</h3>
          <p>Depending on your product and destination market, you may also need test reports, certificates of conformity, fumigation certificates, or other regulatory documents. Confirm requirements with your customs broker or freight forwarder in advance.</p>

          <p className="mt-6 text-sm text-slate-600">We recommend keeping a document checklist for each order and reviewing the full package before authorizing shipment.</p>
        </>
      ),
    },
    'quality-agreements-suppliers': {
      title: 'Why a Simple Quality Agreement Can Prevent Expensive Problems',
      date: 'March 12, 2026',
      readTime: '8 min',
      category: 'Quality',
      content: (
        <>
          <p>Many quality disputes between buyers and suppliers stem from unstated or misunderstood expectations. A simple quality agreement can reduce this friction.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">What a Quality Agreement Should Cover</h3>
          <ul className="list-disc pl-5 space-y-1 my-4 text-sm">
            <li>Product specifications and acceptance criteria</li>
            <li>Inspection methods and sampling standards (e.g., AQL levels)</li>
            <li>Definition of major, minor, and critical defects</li>
            <li>Packaging and labeling requirements</li>
            <li>Process for handling non-conforming goods</li>
            <li>Documentation and record retention expectations</li>
          </ul>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">When to Create One</h3>
          <p>A quality agreement is most useful before the first production run. It forces both parties to discuss and agree on expectations while there is still time to adjust processes or specifications.</p>

          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">It Does Not Need to Be Complex</h3>
          <p>A short, clear document is often more effective than a lengthy legal contract that no one reads. The goal is shared understanding, not legal protection in court.</p>

          <p className="mt-6 text-sm text-slate-600">We have seen many situations where a one-page quality agreement would have prevented weeks of back-and-forth and significant financial loss.</p>
        </>
      ),
    },
  };

  const post = posts[slug];

  if (!post) {
    return (
      <div className="section container">
        <div className="max-w-2xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <h1 className="text-2xl font-semibold text-slate-900 mb-4">Article Not Found</h1>
          <p className="text-slate-600">The article you are looking for does not exist or has been moved.</p>
          <Link to="/blog" className="btn-secondary mt-6 inline-flex">Return to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-slate-50 py-8">
        <div className="container">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span className="px-2 py-0.5 bg-slate-200 rounded text-slate-600">{post.category}</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{post.title}</h1>
        </div>
      </div>

      <article className="section container">
        <div className="max-w-3xl prose prose-slate">
          <div className="text-[15px] leading-relaxed text-slate-700 space-y-5">
            {post.content}
          </div>
        </div>
      </article>

      <div className="section bg-slate-50">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm text-slate-600 mb-4">This article is for informational purposes only and does not constitute professional advice.</p>
            <Link to="/contact" className="btn-secondary">Have a question about sourcing? Contact us →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;