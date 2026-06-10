import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import CaseStudyCard from '@/components/sections/CaseStudyCard'

const CaseStudies = () => {
  const caseStudies = [
    {
      client: "European Home Goods Retailer",
      industry: "Home & Kitchen",
      product: "Kitchenware & Cookware Line",
      challenge: "The client was experiencing an 8% defect rate from their existing supplier, leading to high return rates and damage to brand reputation. Lead times were also inconsistent, causing stockouts during peak seasons.",
      solution: "We conducted a full supplier search and identified three new factories with stronger quality systems. We implemented pre-production sample approval, during-production inspections, and pre-shipment inspections for every order. We also negotiated better payment terms tied to quality acceptance.",
      result: "Defect rate reduced from 8% to under 1%. Lead time shortened by an average of 3 weeks. On-time delivery rate improved to 97%. The client expanded the product line from 12 to 28 SKUs within 18 months."
    },
    {
      client: "US Consumer Electronics Distributor",
      industry: "Electronics",
      product: "Private Label Audio & Accessories",
      challenge: "The client wanted to launch a private label line of Bluetooth speakers and accessories but had no existing supplier relationships in China. They needed compliant products with proper certifications and consistent quality across multiple SKUs.",
      solution: "We sourced and verified three factories capable of producing the full range. We coordinated sample development across all 12 SKUs, managed certification testing (CE, FCC, RoHS), and established a quality inspection protocol before each shipment.",
      result: "Successfully launched 12 SKUs from 3 verified factories. All products passed required compliance testing on first submission. First-year order volume exceeded 85,000 units with a 99.2% first-pass quality rate."
    },
    {
      client: "Mid-Size Apparel Company",
      industry: "Apparel & Fashion",
      product: "Seasonal Fashion Collections",
      challenge: "The client struggled with inconsistent quality and missed delivery windows from multiple small factories. They needed reliable capacity for seasonal collections with strict delivery deadlines tied to retail calendars.",
      solution: "We consolidated production with two verified factories that had the capacity and quality systems to handle their full seasonal volume. We implemented a production calendar with milestone checkpoints and weekly progress reporting.",
      result: "On-time delivery rate improved from 72% to above 95%. Quality issues requiring rework dropped by 80%. The client was able to confidently commit to retail delivery windows and grew their wholesale accounts by 40%."
    },
    {
      client: "Australian Industrial Equipment Importer",
      industry: "Industrial & B2B",
      product: "Custom Mechanical Components",
      challenge: "The client needed a reliable source for custom-machined components with tight tolerances. Previous suppliers had high rejection rates and inconsistent lead times, affecting their ability to fulfill customer orders.",
      solution: "We identified and audited three precision machining factories. We worked with the client to establish clear technical drawings, quality acceptance criteria, and a first-article inspection process before production runs.",
      result: "First-article approval rate reached 94%. Ongoing rejection rate stabilized below 2%. Lead time predictability improved significantly, allowing the client to provide firm delivery commitments to their customers."
    },
    {
      client: "Canadian Pet Products Brand",
      industry: "Consumer Goods",
      product: "Pet Toys & Accessories",
      challenge: "The client had grown rapidly but was managing multiple small suppliers directly, leading to quality variation, communication issues, and difficulty scaling. They needed a single point of coordination and consistent quality standards.",
      solution: "We consolidated sourcing with two verified factories, implemented standardized quality specifications across all products, and took over production monitoring and logistics coordination.",
      result: "Reduced active supplier count from 11 to 2. Quality complaints dropped by 65%. The client was able to focus on product development and marketing while we managed day-to-day supplier coordination."
    },
    {
      client: "UK Promotional Products Company",
      industry: "Promotional & Corporate",
      product: "Custom Branded Merchandise",
      challenge: "The client needed reliable suppliers for custom-branded products with short lead times for corporate events and promotions. Quality and branding consistency were critical for client satisfaction.",
      solution: "We established relationships with factories experienced in promotional products, implemented strict color and branding approval processes, and created expedited production options for rush orders.",
      result: "On-time delivery for time-sensitive promotional orders improved to 96%. Branding consistency issues were virtually eliminated. The client was able to confidently accept rush orders with shorter lead times than competitors."
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold tracking-wider text-blue-300 mb-3">CASE STUDIES</div>
            <h1 className="text-white mb-6">Real Results for Real Buyers</h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Selected examples of how we have helped international companies improve quality, reduce risk, and build reliable supply chains in China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section container">
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={index}
              client={study.client}
              industry={study.industry}
              product={study.product}
              challenge={study.challenge}
              solution={study.solution}
              result={study.result}
            />
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading mb-4">Our Approach to Every Engagement</h2>
            <p className="text-slate-600 mb-8">We do not guarantee specific outcomes because every sourcing situation is different. What we do guarantee is a structured, transparent process and clear communication.</p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <div className="font-medium mb-2">We Verify Before We Recommend</div>
                <p className="text-sm text-slate-600">We do not present suppliers we have not vetted. Every recommendation is based on direct assessment.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <div className="font-medium mb-2">We Document Everything</div>
                <p className="text-sm text-slate-600">Audits, inspections, and progress are recorded and shared. You have visibility into what is happening.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <div className="font-medium mb-2">We Escalate Issues Early</div>
                <p className="text-sm text-slate-600">Problems are flagged as soon as they are identified, with options for resolution, not after the fact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section container text-center">
        <h2 className="section-heading mb-4">Want similar results for your business?</h2>
        <p className="text-slate-600 mb-6 max-w-md mx-auto">Every sourcing project is different. Tell us about your needs and we will provide an honest assessment of what we can help with.</p>
        <Link to="/contact">
          <Button variant="primary" size="lg">Start a Conversation</Button>
        </Link>
      </section>
    </div>
  )
}

export default CaseStudies
