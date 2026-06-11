import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import CaseStudyCard from '@/components/sections/CaseStudyCard'

const CaseStudies = () => {
  const caseStudies = [
    {
      client: "European Home Goods Retailer",
      industry: "Home & Garden",
      location: "Germany",
      challenge: "Needed to source 12 SKUs of ceramic tableware with consistent quality across multiple factories while meeting EU safety standards and lead-free requirements.",
      solution: "Conducted factory audits at 6 shortlisted manufacturers, coordinated sample evaluation with third-party lab testing, and implemented a two-stage inspection protocol with documented acceptance criteria.",
      results: "Selected 2 qualified suppliers. Achieved 99.2% first-pass inspection rate across 8 container loads. Reduced lead time by 18% compared to previous sourcing approach. Zero product recalls or compliance issues in first year."
    },
    {
      client: "North American Industrial Distributor",
      industry: "Industrial",
      location: "United States",
      challenge: "Required a new supplier for custom-engineered fasteners with tight tolerances and consistent delivery for ongoing OEM contracts. Previous supplier had quality issues and delivery delays.",
      solution: "Performed capability assessments at 5 potential suppliers, verified quality management systems, established production monitoring checkpoints, and implemented first-article inspection requirements.",
      results: "Qualified supplier passed all dimensional and material tests on first submission. Zero quality claims over 14 months of production. On-time delivery rate of 97%. Annual cost reduction of 11% versus previous supplier."
    },
    {
      client: "Australian Outdoor Equipment Brand",
      industry: "Consumer Goods",
      location: "Australia",
      challenge: "Expanding product line with new camping equipment range. Needed reliable production partner with experience in technical textiles, hardware assembly, and compliance with Australian safety standards.",
      solution: "Sourced and verified 4 factories with relevant capabilities, managed multiple sample iterations, coordinated pre-shipment inspections with third-party lab testing for flame resistance and structural integrity.",
      results: "Launched 9 new SKUs on schedule for peak season. Achieved target landed cost within 4% of initial projection. Repeat orders placed within 6 months. Zero warranty claims related to manufacturing defects in first season."
    },
    {
      client: "UK Promotional Products Company",
      industry: "Consumer Goods",
      location: "United Kingdom",
      challenge: "Needed to source custom-branded drinkware and apparel for a large corporate client with strict brand guidelines, tight timeline, and requirement for full traceability and compliance documentation.",
      solution: "Identified 3 factories with proven export experience, conducted expedited verification, established clear production milestones, and coordinated daily progress updates during the compressed production window.",
      results: "Delivered 25,000 units across 6 SKUs on schedule. All products passed brand compliance review on first submission. Full documentation package provided including material certificates and production records."
    },
    {
      client: "Canadian Automotive Aftermarket Supplier",
      industry: "Automotive",
      location: "Canada",
      challenge: "Sourcing replacement parts for European vehicles. Required suppliers capable of meeting OEM-level quality standards with competitive pricing and reliable supply for a catalog of 40+ SKUs.",
      solution: "Conducted technical capability assessments, verified IATF 16949 certification where applicable, established incoming material inspection protocols, and implemented lot traceability requirements.",
      results: "Qualified 2 suppliers for different product families. Achieved 98.5% first-pass quality rate. Reduced average unit cost by 22% compared to previous European sourcing. Established 6-week replenishment cycle."
    },
    {
      client: "Scandinavian Furniture Importer",
      industry: "Home & Garden",
      location: "Sweden",
      challenge: "Expanding into flat-pack furniture category. Needed manufacturers with experience in KD (knock-down) construction, consistent quality across large production runs, and ability to meet strict formaldehyde emission standards.",
      solution: "Audited 7 potential suppliers, coordinated sample evaluation with third-party emissions testing, established production monitoring with emphasis on material sourcing and assembly consistency.",
      results: "Selected supplier passed all emissions and structural tests. Launched 14 SKUs with zero quality claims in first 6 months. Achieved target retail price positioning while maintaining 38% gross margin."
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="uppercase tracking-[2px] text-xs text-slate-400 mb-3">CLIENT RESULTS</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Case Studies</h1>
          <p className="max-w-2xl text-lg text-slate-300">Real projects from our work with buyers across North America, Europe, and Australia. Each case reflects documented outcomes from our sourcing and quality processes.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudies.map((cs, idx) => (
            <CaseStudyCard key={idx} {...cs} />
          ))}
        </div>
      </div>

      <div className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Have a sourcing challenge we can help with?</h2>
          <p className="text-slate-600 mb-6">We provide a preliminary assessment based on your specific requirements at no obligation.</p>
          <Button asChild size="lg">
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CaseStudies