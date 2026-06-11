import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'

const BlogPost = () => {
  const { slug } = useParams()

  const posts = {
    "factory-audit-checklist-china-sourcing": {
      title: "Factory Audit Checklist: What to Verify Before Placing an Order",
      date: "May 28, 2026",
      category: "Quality",
      readTime: "12 min read",
      content: [
        "Before placing an order with a new supplier in China, we recommend conducting an on-site factory audit. A thorough audit helps verify that the factory is legitimate, has the capability to produce your product, and maintains quality systems that support consistent output.",
        "This article outlines the key areas we evaluate during factory audits and why each matters for buyers sourcing from China.",
        "1. Legal Status and Business Registration",
        "We begin by verifying that the factory is a legally registered business in China. This includes reviewing the business license, checking the registered address against the physical location, and confirming that the company name on the license matches the entity we are dealing with. We also note the registered capital and business scope to understand the company's formal status.",
        "2. Production Facility and Equipment",
        "We assess whether the factory has the physical space, equipment, and workforce to produce your order at the required volume and quality level. This includes reviewing production lines, key machinery, tooling, and maintenance practices. We also evaluate whether the factory has experience producing similar products.",
        "3. Quality Management System",
        "We examine how the factory controls quality at each stage of production. This includes incoming material inspection, in-process checks, finished goods inspection, and how non-conforming products are handled. We look for documented procedures, inspection records, and evidence that quality issues are identified and addressed systematically.",
        "4. Incoming Material Control",
        "The quality of finished goods depends heavily on the quality of incoming materials. We review how the factory qualifies and monitors suppliers, whether incoming materials are inspected, and how material traceability is maintained. For products with specific material requirements, we verify that the factory has processes to ensure compliance.",
        "5. Production Planning and Capacity",
        "We assess whether the factory can realistically meet your timeline. This includes understanding current order backlog, how production schedules are managed, and whether the factory has experience with similar order sizes and lead times. We also discuss how the factory handles rush orders and schedule changes.",
        "6. Workforce and Working Conditions",
        "We observe workforce conditions as part of a complete audit. This includes assessing whether workers appear trained for their roles, whether safety equipment is used where appropriate, and whether the facility meets basic standards for a manufacturing environment. We also note any indicators of labor practices that could create reputational or compliance risk.",
        "7. Reference Checks",
        "We ask the factory for references from existing clients, preferably export customers with similar product requirements. We contact references to understand their experience with quality, communication, and delivery performance. This provides an external perspective that complements our on-site observations.",
        "What We Deliver",
        "After each audit, we provide a written report with photographs documenting our findings. The report includes a summary of strengths and concerns, along with our assessment of whether the factory is suitable for your specific requirements. We do not provide a simple pass/fail rating because suitability depends on your product, quality standards, and risk tolerance.",
        "When to Conduct an Audit",
        "We recommend auditing any new supplier before placing a significant order. For smaller trial orders or when working with a factory that has been recommended by a trusted source, a lighter verification may be sufficient. We can advise on the appropriate level of due diligence based on your specific situation.",
        "If you are preparing to source from China and would like to discuss factory verification for your project, contact us for a preliminary assessment."
      ]
    },
    "pre-shipment-inspection-guide": {
      title: "Pre-Shipment Inspection: A Practical Guide for Importers",
      date: "May 15, 2026",
      category: "Quality",
      readTime: "10 min read",
      content: [
        "A pre-shipment inspection is one of the most effective ways to reduce the risk of receiving products that do not meet your specifications. This article explains how we approach inspections and what buyers should consider when defining inspection requirements.",
        "Why Pre-Shipment Inspection Matters",
        "Once goods leave the factory, correcting quality issues becomes expensive and time-consuming. A pre-shipment inspection provides an independent assessment of product quality before you make final payment and before goods are shipped. It gives you leverage to address issues while the goods are still at the factory.",
        "Sampling Standards",
        "We typically use ANSI/ASQ Z1.4 (AQL) sampling standards. The AQL level you choose reflects your tolerance for defects. Common levels include AQL 2.5 for major defects and AQL 4.0 for minor defects. For critical products or components, tighter levels may be appropriate. We work with you to define acceptance criteria that match your quality requirements and risk tolerance.",
        "What We Inspect",
        "A typical pre-shipment inspection includes: visual inspection for appearance, workmanship, and finish; dimensional measurements against specifications; functional testing where applicable; packaging and labeling verification; quantity and assortment confirmation; and review of required documentation. We document findings with photographs and measurements.",
        "Common Issues We Encounter",
        "Based on our inspection data, common issues include: dimensional deviations, finish defects, incorrect labeling or packaging, missing components or accessories, and products that do not match approved samples. Many of these issues can be identified and addressed before shipment if an inspection is conducted.",
        "Interpreting Inspection Reports",
        "An inspection report documents what was found during the inspection. A 'pass' result means the sample met your acceptance criteria. A 'fail' result means issues were identified that require attention. We provide clear findings and photographs so you can make an informed decision about whether to accept, reject, or request rework.",
        "When to Inspect",
        "For most orders, we recommend a pre-shipment inspection when production is complete and at least 80% of goods are packed. For high-value or complex products, an in-process inspection during production can identify issues earlier. We can advise on the appropriate inspection timing based on your product and order.",
        "If you are preparing an order and would like to discuss inspection requirements, contact us for guidance."
      ]
    },
    "understanding-incoterms-2020-sourcing": {
      title: "Understanding Incoterms 2020 for China Sourcing",
      date: "May 2, 2026",
      category: "Logistics",
      readTime: "8 min read",
      content: [
        "Incoterms define the responsibilities of buyers and sellers in international trade transactions. Understanding which term applies to your shipment helps clarify who is responsible for freight, insurance, customs clearance, and risk at each stage of the journey.",
        "Common Incoterms in China Sourcing",
        "FOB (Free On Board): The seller delivers goods on board the vessel nominated by the buyer at the named port of shipment. Risk transfers when goods are on board. The buyer arranges and pays for ocean freight, insurance, and import clearance. This is one of the most common terms for container shipments from China.",
        "CIF (Cost, Insurance and Freight): The seller pays for freight and insurance to the named port of destination. Risk transfers when goods are on board at the port of shipment. The buyer handles import clearance and onward transportation. CIF is often used when the buyer wants the seller to arrange ocean freight.",
        "DDP (Delivered Duty Paid): The seller is responsible for delivering goods to the named destination, cleared for import, and ready for unloading. This places the most responsibility on the seller and the least on the buyer. DDP can simplify logistics for the buyer but may result in higher costs.",
        "Choosing the Right Term",
        "The appropriate Incoterm depends on your experience, logistics capabilities, and risk tolerance. Buyers who want more control over freight and insurance often prefer FOB. Buyers who want a simpler transaction may prefer CIF or DDP. We can discuss the implications of each term for your specific shipment.",
        "Practical Considerations",
        "Regardless of the Incoterm, it is important to clearly specify the named port or place in your contract. We also recommend confirming who is responsible for loading, unloading, and any terminal handling charges. Clear documentation reduces the risk of disputes and unexpected costs.",
        "If you are preparing a shipment and would like to discuss Incoterms or logistics coordination, contact us for guidance."
      ]
    },
  }

  const post = posts[slug]

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-semibold mb-4">Article Not Found</h1>
          <p className="text-slate-600 mb-6">The article you are looking for does not exist or has been moved.</p>
          <Link to="/blog" className="text-slate-900 font-medium hover:underline">← Back to Blog</Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 pt-12 pb-20">
        <Link to="/blog" className="text-sm text-slate-600 hover:text-slate-900">← Back to Blog</Link>
        
        <div className="mt-6 mb-8">
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">{post.title}</h1>
        </div>

        <div className="prose prose-slate max-w-none">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="mb-5 text-[15px] leading-relaxed text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-600 mb-4">Have a sourcing question or project to discuss?</p>
          <Button asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BlogPost