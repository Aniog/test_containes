import React from 'react'
import { Link } from 'react-router-dom'
import { 
  TrendingUp, Users, Clock, ArrowRight, Package, Globe, Award
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

const caseStudies = [
  {
    id: 'techstart',
    company: 'TechStart Inc.',
    industry: 'Electronics',
    year: '2024',
    challenge: 'TechStart Inc., a US-based startup, needed to launch a new line of smart home devices but had no experience sourcing from China. They were concerned about supplier reliability and quality control.',
    solution: 'We conducted thorough supplier verification and identified three qualified manufacturers. After样品 approval and price negotiation, they selected a factory in Shenzhen. We performed during-production inspections and pre-shipment checks.',
    results: [
      { metric: '35%', label: 'Cost savings vs. US suppliers' },
      { metric: '2 weeks', label: 'Early delivery' },
      { metric: '99.2%', label: 'Quality pass rate' },
    ],
    testimonial: {
      quote: "SSourcing China made what seemed like a daunting process incredibly smooth. Their verification gave us confidence, and their QC inspections ensured we received exactly what we expected.",
      author: 'John Miller',
      role: 'CEO, TechStart Inc.',
    },
  },
  {
    id: 'fashion-forward',
    company: 'Fashion Forward',
    industry: 'Apparel',
    year: '2023',
    challenge: 'Fashion Forward, a European fashion brand, had been struggling with inconsistent quality from their previous Chinese suppliers. Returns due to defects were affecting their reputation and bottom line.',
    solution: 'We implemented a comprehensive QC program including pre-production material checks, during-production inspections, and strict pre-shipment verification. We also helped negotiate better payment terms.',
    results: [
      { metric: '99.5%', label: 'Defect-free rate' },
      { metric: '60%', label: 'Reduction in returns' },
      { metric: '40%', label: 'Faster time-to-market' },
    ],
    testimonial: {
      quote: "The quality improvement was immediate and dramatic. We went from constant headaches with defects to a nearly perfect success rate. The investment in proper QC has paid for itself many times over.",
      author: 'Sarah Chen',
      role: 'Supply Chain Director, Fashion Forward',
    },
  },
  {
    id: 'homegoods',
    company: 'HomeGoods Plus',
    industry: 'Home & Garden',
    year: '2024',
    challenge: 'HomeGoods Plus needed to source 8 different product categories for a new product line, each requiring different suppliers. Coordinating multiple factories and ensuring consistent quality was overwhelming.',
    solution: 'We identified and vetted suppliers for each category, then coordinated production scheduling. We performed consolidated quality inspections and arranged combined shipping to simplify logistics.',
    results: [
      { metric: '8', label: 'Suppliers coordinated' },
      { metric: '40%', label: 'Faster than solo sourcing' },
      { metric: 'Single', label: 'Consolidated shipment' },
    ],
    testimonial: {
      quote: "Managing 8 different suppliers would have been a nightmare. SSourcing China handled everything - from finding the right factories to coordinating inspections and shipping. It was truly a turnkey solution.",
      author: 'Michael Brown',
      role: 'Founder, HomeGoods Plus',
    },
  },
  {
    id: 'medtech',
    company: 'MedTech Solutions',
    industry: 'Medical Devices',
    year: '2023',
    challenge: 'MedTech Solutions needed to source medical-grade components with strict regulatory compliance. Finding suppliers with proper certifications and quality systems was critical.',
    solution: 'We focused on factories with ISO 13485 certification and relevant medical device experience. We coordinated with their QA team to ensure all documentation and traceability requirements were met.',
    results: [
      { metric: '100%', label: 'Compliance rate' },
      { metric: 'ISO 13485', label: 'Certified suppliers' },
      { metric: 'Zero', label: 'Regulatory issues' },
    ],
    testimonial: {
      quote: "Medical device sourcing requires extreme attention to detail. SSourcing China understood the regulatory requirements and connected us with manufacturers who could meet our strict standards.",
      author: 'Dr. Lisa Wang',
      role: 'CEO, MedTech Solutions',
    },
  },
  {
    id: 'sports-gear',
    company: 'ProSports Gear',
    industry: 'Sports Equipment',
    year: '2024',
    challenge: 'ProSports Gear wanted to expand their product line with custom-designed sports equipment. They needed a manufacturer willing to handle smaller initial orders with flexibility for growth.',
    solution: 'We found a flexible manufacturer who accepted lower MOQs for custom designs. We assisted with product development, prototyping, and gradually increased order volumes as the product gained traction.',
    results: [
      { metric: '500', label: 'Initial MOQ accepted' },
      { metric: '3x', label: 'Order growth in 6 months' },
      { metric: '25%', label: 'Below competitor pricing' },
    ],
    testimonial: {
      quote: "Most factories wouldn't touch our small initial orders. SSourcing China found a partner who believed in our product, and now we're their largest customer in this category.",
      author: 'David Thompson',
      role: 'CEO, ProSports Gear',
    },
  },
  {
    id: 'beauty-brand',
    company: 'Natural Beauty Co.',
    industry: 'Health & Beauty',
    year: '2023',
    challenge: 'Natural Beauty Co. wanted to launch a line of organic skincare products. They needed suppliers who could meet their sustainability requirements and provide traceable, clean ingredients.',
    solution: 'We sourced suppliers with organic certifications and sustainable manufacturing practices. We coordinated lab testing for ingredient verification and helped establish proper documentation for their marketing claims.',
    results: [
      { metric: '100%', label: 'Organic certified' },
      { metric: 'Full', label: 'Traceability' },
      { metric: 'EU', label: 'Compliance achieved' },
    ],
    testimonial: {
      quote: "Finding truly sustainable suppliers in China seemed impossible until we worked with SSourcing China. They understood our values and found partners who shared our commitment to quality and sustainability.",
      author: 'Emma Wilson',
      role: 'Founder, Natural Beauty Co.',
    },
  },
]

const industries = ['All', 'Electronics', 'Apparel', 'Home & Garden', 'Medical Devices', 'Sports Equipment', 'Health & Beauty']

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Case Studies
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Real success stories from businesses we've helped source from China.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background-light">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-text-primary">500+</p>
              <p className="text-text-secondary text-sm">Clients Served</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-text-primary">35+</p>
              <p className="text-text-secondary text-sm">Countries</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-text-primary">98%</p>
              <p className="text-text-secondary text-sm">On-Time Delivery</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-text-primary">15+</p>
              <p className="text-text-secondary text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-sm text-text-secondary">{study.year}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-text-primary mb-4">{study.company}</h2>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold text-text-primary mb-2">Challenge</h3>
                      <p className="text-text-secondary">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold text-text-primary mb-2">Solution</h3>
                      <p className="text-text-secondary">{study.solution}</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.results.map((result, i) => (
                        <div key={i} className="bg-background-light rounded-lg p-3 text-center">
                          <p className="text-xl font-bold text-primary">{result.metric}</p>
                          <p className="text-xs text-text-secondary">{result.label}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-border pt-6">
                      <blockquote className="italic text-text-secondary mb-2">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <p className="text-sm">
                        <span className="font-medium text-text-primary">{study.testimonial.author}</span>
                        <span className="text-text-secondary"> - {study.testimonial.role}</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Image Placeholder */}
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center p-8 lg:p-12">
                    <div className="text-center">
                      <Package className="w-24 h-24 text-primary/30 mx-auto mb-4" />
                      <p className="text-primary font-medium">{study.industry}</p>
                      <p className="text-text-secondary text-sm">Project Image</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-blue-200 max-w-xl mx-auto mb-8">
              Let us help you find the right suppliers and make your China sourcing a success.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent-hover">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudiesPage