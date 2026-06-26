import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      slug: 'evaluating-chinese-suppliers',
      title: 'How to Evaluate a Chinese Supplier Before Placing an Order',
      excerpt: 'A practical framework for assessing potential manufacturers based on verifiable information rather than marketing claims.',
      date: '2026-05-12',
      readTime: '8 min',
      category: 'Supplier Selection',
      content: `
        <p>When sourcing from China, the difference between a reliable supplier and a problematic one often becomes clear only after an order is placed. A structured evaluation process can reduce that risk.</p>
        
        <h3>Start With Basic Verification</h3>
        <p>Confirm that the company is a legitimate registered business. Request their business license and cross-check registration details. While registration does not guarantee quality or reliability, it is a baseline filter that eliminates some high-risk entities.</p>
        
        <h3>Assess Production Capability</h3>
        <p>Ask specific questions about equipment, workforce size, and production capacity. Request photos of the actual production floor and relevant machinery. Be cautious of suppliers who cannot provide concrete evidence of their claimed capabilities.</p>
        
        <h3>Review Quality Processes</h3>
        <p>Inquire about their quality control procedures. Do they have documented inspection processes? What testing equipment do they use? How do they handle non-conforming products? The answers reveal whether quality is managed systematically or handled ad hoc.</p>
        
        <h3>Check Export Experience</h3>
        <p>Suppliers with experience exporting to your target market are more likely to understand documentation requirements, labeling standards, and common compliance issues. Ask for references or examples of similar products shipped to your region.</p>
        
        <h3>Request and Evaluate Samples</h3>
        <p>Samples are the most direct way to assess capability. Pay attention not only to the product itself but also to packaging, labeling, and documentation that accompanies the sample. These details often predict how production orders will be handled.</p>
        
        <h3>Consider an On-Site Audit</h3>
        <p>For significant orders or new supplier relationships, an on-site audit provides information that cannot be obtained remotely. A qualified auditor can verify claims about equipment, workforce, and processes, and identify red flags that may not be visible from photos or video calls.</p>
      `,
    },
    {
      id: 2,
      slug: 'reading-inspection-reports',
      title: 'How to Read a Quality Inspection Report',
      excerpt: 'Understanding what inspection findings mean and how to interpret results when making shipment decisions.',
      date: '2026-05-05',
      readTime: '6 min',
      category: 'Quality Control',
      content: `
        <p>A quality inspection report is a decision-making tool. Knowing how to interpret it helps you make informed choices about whether to accept, reject, or request rework on a shipment.</p>
        
        <h3>Understand the Sampling Method</h3>
        <p>Most inspections use a sampling standard such as AQL (Acceptable Quality Limit). The report should specify the sampling plan, lot size, and number of units inspected. A small sample size means the report provides limited statistical confidence.</p>
        
        <h3>Distinguish Defect Categories</h3>
        <p>Defects are typically classified as critical, major, or minor. Critical defects affect safety or regulatory compliance. Major defects are likely to result in returns or complaints. Minor defects are cosmetic or have limited impact. Know which categories matter for your product and market.</p>
        
        <h3>Review the Numbers, Not Just the Pass/Fail</h3>
        <p>A "Pass" result does not mean zero defects. It means defects fell within the acceptable threshold for the sampling plan. Review the actual defect counts and types. A borderline pass may warrant closer scrutiny or additional inspection.</p>
        
        <h3>Look at Photos and Evidence</h3>
        <p>Good inspection reports include photos of defects and the inspection process. Use these to understand the nature of issues found. Photos also provide documentation if you need to discuss findings with the supplier.</p>
        
        <h3>Consider the Context</h3>
        <p>An inspection result is one data point. Consider it alongside your knowledge of the supplier, the product complexity, and the consequences of quality issues in your market. A marginal result on a low-risk product may be acceptable; the same result on a safety-critical item may not be.</p>
      `,
    },
    {
      id: 3,
      slug: 'import-documentation-basics',
      title: 'Essential Documentation for Importing from China',
      excerpt: 'A checklist of common documents required for international shipments and how they affect customs clearance.',
      date: '2026-04-28',
      readTime: '7 min',
      category: 'Logistics',
      content: `
        <p>Documentation errors are a common cause of shipment delays and unexpected costs. Understanding what documents are typically required helps you avoid problems at the destination.</p>
        
        <h3>Commercial Invoice</h3>
        <p>The commercial invoice describes the transaction between buyer and seller. It should include accurate descriptions, quantities, unit prices, and total value. Inaccurate or incomplete invoices are a frequent source of customs delays.</p>
        
        <h3>Packing List</h3>
        <p>The packing list details the contents of each package or container. It should match the actual shipment and the commercial invoice. Discrepancies between the packing list and physical goods can cause inspection and clearance issues.</p>
        
        <h3>Bill of Lading or Air Waybill</h3>
        <p>This is the transport document issued by the carrier. It serves as a receipt, a contract of carriage, and a document of title. Ensure the consignee information matches your import registration exactly.</p>
        
        <h3>Certificate of Origin</h3>
        <p>Some countries require a certificate of origin to determine applicable tariffs or to qualify for preferential trade agreements. Requirements vary by destination country and product type.</p>
        
        <h3>Product-Specific Documents</h3>
        <p>Depending on your product and destination, you may need additional documentation such as test reports, material safety data sheets, or compliance certificates. Identify these requirements early in the sourcing process.</p>
        
        <h3>Practical Tip</h3>
        <p>Request draft copies of all documents before shipment. Review them for accuracy and consistency. Correcting errors before goods leave the factory is far easier than resolving issues after arrival.</p>
      `,
    },
    {
      id: 4,
      slug: 'factory-audit-checklist',
      title: 'What a Basic Factory Audit Should Cover',
      excerpt: 'Key areas to examine when verifying a potential supplier on-site or through a qualified auditor.',
      date: '2026-04-20',
      readTime: '9 min',
      category: 'Supplier Verification',
      content: `
        <p>A factory audit provides information that cannot be obtained from photos, video calls, or online profiles. A structured approach ensures you gather relevant data across the areas that matter most.</p>
        
        <h3>Business Legitimacy</h3>
        <p>Verify that the company exists as a registered legal entity. Confirm the address matches the registration documents. Note any discrepancies between claimed operations and actual facilities.</p>
        
        <h3>Production Capacity</h3>
        <p>Assess the physical production space, equipment, and workforce. Count machines relevant to your product. Observe whether the facility appears active and maintained. Ask about shift patterns and peak capacity.</p>
        
        <h3>Quality Control Processes</h3>
        <p>Examine the quality control area and equipment. Review inspection records and procedures. Ask how non-conforming products are identified and handled. Look for evidence that quality processes are actually followed, not just documented.</p>
        
        <h3>Material Sourcing</h3>
        <p>Understand where raw materials and components come from. Ask about supplier qualification processes. For products with specific material requirements, verify that the factory has access to appropriate sources.</p>
        
        <h3>Workforce and Management</h3>
        <p>Observe workforce conditions and turnover indicators. Meet with management and quality personnel. Assess whether key staff have relevant experience and whether communication will be feasible.</p>
        
        <h3>Export and Compliance</h3>
        <p>Review export documentation samples. Ask about experience with your target market. Note any certifications or compliance documentation the factory maintains.</p>
        
        <h3>Documentation</h3>
        <p>A good audit produces a written report with photos, findings, and recommendations. Use this as a reference when making supplier decisions and share relevant sections with your team.</p>
      `,
    },
    {
      id: 5,
      slug: 'managing-production-timelines',
      title: 'Managing Production Timelines When Sourcing from China',
      excerpt: 'Practical approaches to setting realistic schedules and monitoring progress to reduce delivery surprises.',
      date: '2026-04-14',
      readTime: '6 min',
      category: 'Production',
      content: `
        <p>Production delays are common in international sourcing. While not all delays can be prevented, structured monitoring and realistic planning reduce their frequency and impact.</p>
        
        <h3>Build in Buffer Time</h3>
        <p>Chinese New Year, national holidays, and peak seasons affect factory schedules. Add buffer time to quoted lead times, especially for first orders or during known busy periods. A 20-30% buffer is common for new supplier relationships.</p>
        
        <h3>Establish Clear Milestones</h3>
        <p>Break the production timeline into milestones: material receipt, production start, mid-production checkpoint, completion, and inspection. Define what constitutes each milestone and the expected dates.</p>
        
        <h3>Request Regular Updates</h3>
        <p>Agree on a reporting schedule before production begins. Weekly written updates with photos are more reliable than verbal assurances. Ask for specific evidence of progress rather than general statements.</p>
        
        <h3>Identify Delays Early</h3>
        <p>If a milestone is missed, investigate immediately. Early identification allows time to adjust downstream plans or escalate with the supplier. Waiting until the shipment date to discover delays eliminates options.</p>
        
        <h3>Have Contingency Plans</h3>
        <p>For time-sensitive orders, identify backup suppliers or air freight options in advance. Understand the cost and feasibility of expediting before you need to make that decision.</p>
        
        <h3>Document Agreements</h3>
        <p>Confirm production schedules and any changes in writing. This creates a record if disputes arise and helps align expectations between all parties.</p>
      `,
    },
    {
      id: 6,
      slug: 'communication-time-zones',
      title: 'Working Across Time Zones and Language Barriers',
      excerpt: 'Practical habits that improve communication clarity when working with suppliers in China.',
      date: '2026-04-07',
      readTime: '5 min',
      category: 'Communication',
      content: `
        <p>Most sourcing problems have a communication component. Clear, documented communication reduces misunderstandings that lead to quality issues, delays, and disputes.</p>
        
        <h3>Write Clearly and Specifically</h3>
        <p>Avoid idioms, slang, and ambiguous phrasing. Use short sentences. Define terms that could be interpreted differently. When giving instructions, be explicit about what is required rather than what is preferred.</p>
        
        <h3>Confirm Understanding</h3>
        <p>Ask suppliers to confirm their understanding of key requirements in their own words. A simple "yes" or "understood" often masks incomplete comprehension. Requesting a restatement reveals gaps.</p>
        
        <h3>Use Visual References</h3>
        <p>Photos, diagrams, and marked-up samples communicate more reliably than text alone. When specifications are complex, provide visual examples of acceptable and unacceptable outcomes.</p>
        
        <h3>Document Everything</h3>
        <p>Follow up verbal discussions with written summaries. Keep records of agreements, changes, and clarifications. Written records prevent "I thought you meant" situations later.</p>
        
        <h3>Manage Time Zone Expectations</h3>
        <p>China is 12-16 hours ahead of most North American and European time zones. Plan communication windows accordingly. For urgent matters, establish who can be contacted outside normal hours and under what circumstances.</p>
        
        <h3>Consider Intermediary Support</h3>
        <p>For complex projects or when communication friction is high, a local sourcing agent or bilingual coordinator can reduce misunderstandings. The cost of intermediary support is often lower than the cost of errors.</p>
      `,
    },
    {
      id: 7,
      slug: 'shipping-options-comparison',
      title: 'Comparing Shipping Options from China',
      excerpt: 'An overview of sea freight, air freight, and express options and when each makes sense.',
      date: '2026-03-31',
      readTime: '7 min',
      category: 'Logistics',
      content: `
        <p>Choosing the right shipping method affects both cost and timeline. Understanding the trade-offs helps you select the option that fits your requirements.</p>
        
        <h3>Sea Freight (FCL and LCL)</h3>
        <p>Sea freight is the most economical option for larger volumes. Full Container Load (FCL) is typically used for shipments that fill a 20ft or 40ft container. Less than Container Load (LCL) consolidates smaller shipments. Transit times range from 15-40 days depending on origin and destination ports.</p>
        
        <h3>Air Freight</h3>
        <p>Air freight is faster than sea but significantly more expensive. Typical transit times are 3-7 days door-to-door. It is appropriate for high-value, time-sensitive, or perishable goods, or when inventory shortages require rapid replenishment.</p>
        
        <h3>Express Courier</h3>
        <p>Services like DHL, FedEx, and UPS offer door-to-door delivery with tracking and customs handling. Transit times are typically 2-5 days. This option is practical for samples, small shipments, or urgent replacements.</p>
        
        <h3>Key Decision Factors</h3>
        <p>Consider total landed cost, not just freight rates. Factor in duties, taxes, insurance, and inland transportation. Also consider inventory carrying costs and the business impact of delayed delivery.</p>
        
        <h3>Plan Ahead</h3>
        <p>Shipping schedules, especially sea freight, are affected by vessel availability, port congestion, and seasonal demand. Book early for peak periods. Confirm cut-off dates with your freight forwarder.</p>
      `,
    },
    {
      id: 8,
      slug: 'writing-product-specifications',
      title: 'Writing Effective Product Specifications for Chinese Suppliers',
      excerpt: 'How to communicate requirements clearly so suppliers understand exactly what you need.',
      date: '2026-03-24',
      readTime: '8 min',
      category: 'Supplier Selection',
      content: `
        <p>Vague or incomplete specifications are a leading cause of quality issues and disputes. Clear specifications protect both parties and improve the likelihood of receiving what you expect.</p>
        
        <h3>Be Specific About Dimensions and Tolerances</h3>
        <p>Provide exact measurements and acceptable tolerances. "Approximately 50mm" is not a specification. "50mm ± 0.5mm" is. Include units and reference standards where applicable.</p>
        
        <h3>Define Materials and Finishes</h3>
        <p>Specify material grades, compositions, and finishes. If color matters, provide a reference (Pantone, RAL, or physical sample). If material substitution is acceptable, state the conditions under which it is allowed.</p>
        
        <h3>Include Quality and Testing Requirements</h3>
        <p>Define what constitutes acceptable quality. Specify any tests that must be performed and the standards they should meet. Indicate whether third-party testing is required.</p>
        
        <h3>Address Packaging and Labeling</h3>
        <p>Packaging is often overlooked until problems arise. Specify packaging materials, quantities per carton, labeling requirements, and any retail packaging needs. Include barcode or marking specifications if applicable.</p>
        
        <h3>Provide Visual References</h3>
        <p>Supplement written specifications with photos, diagrams, or physical samples. Mark up images to highlight critical areas. Visual references reduce ambiguity.</p>
        
        <h3>State What Is Not Acceptable</h3>
        <p>Sometimes it is useful to explicitly list common defects or variations that are not acceptable. This is particularly helpful for products where minor cosmetic issues are common.</p>
        
        <h3>Review and Confirm</h3>
        <p>Ask the supplier to confirm they understand the specification and can meet it. Request that they identify any requirements they cannot fulfill before production begins.</p>
      `,
    },
  ];

  const categories = [...new Set(articles.map(a => a.category))];

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (selectedArticle) {
    const article = articles.find(a => a.id === selectedArticle);
    if (!article) return null;

    return (
      <div>
        <div className="bg-white border-b border-slate-200">
          <div className="container py-4">
            <button
              onClick={() => setSelectedArticle(null)}
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </button>
          </div>
        </div>

        <article className="section bg-white">
          <div className="container max-w-3xl">
            <div className="mb-6">
              <span className="text-sm font-medium text-slate-500">{article.category}</span>
              <h1 className="text-3xl font-bold mt-2 mb-4">{article.title}</h1>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(article.date)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime} read
                </span>
              </div>
            </div>

            <div 
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-600 mb-4">
                This article is for informational purposes. Specific requirements vary by product, destination, and circumstances.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Discuss Your Sourcing Project
              </Link>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-slate-900 text-white py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Blog</h1>
            <p className="text-lg text-slate-300">
              Practical guidance on sourcing from China. Topics include supplier evaluation, 
              quality control, logistics, and common challenges buyers face.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, index) => (
                <span key={index} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <div 
                key={article.id} 
                className="card cursor-pointer hover:border-slate-300"
                onClick={() => setSelectedArticle(article.id)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                    {article.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3 leading-tight">{article.title}</h2>
                <p className="text-slate-600 text-sm mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(article.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title mb-4">Have a Specific Question?</h2>
            <p className="text-slate-600 mb-6">
              Our blog covers general topics. For advice specific to your situation, contact us directly.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
