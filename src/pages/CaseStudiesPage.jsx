import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Users, CheckCircle, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const caseStudies = [
  {
    id: 'techstart',
    company: 'TechStart Inc.',
    industry: 'Electronics',
    year: '2024',
    challenge:
      'TechStart Inc., a US-based smart home startup, needed to source smart home devices from verified suppliers. They had previously been scammed by a fraudulent supplier and lost $150,000. They needed a reliable partner to verify suppliers and ensure consistent quality.',
    solution:
      'We verified 15 potential suppliers through our comprehensive verification process, conducted factory audits on the top 5, and implemented a rigorous quality control protocol including during-production and pre-shipment inspections.',
    result:
      'Reduced defect rate from 12% to 1.5%, saving approximately $180,000 annually in returns and rework. Established a long-term partnership with 3 verified suppliers.',
    metrics: [
      { label: 'Defect Rate Reduction', value: '87%' },
      { label: 'Annual Cost Savings', value: '$180K' },
      { label: 'Suppliers Verified', value: '15' },
    ],
    testimonial: {
      quote:
        'SSourcing China transformed our supply chain. Their verification process saved us from a potential $500K loss from a fraudulent supplier. The quality control inspections have been invaluable.',
      author: 'Michael Chen',
      role: 'CEO',
      company: 'TechStart Inc.',
    },
    image: 'electronics factory inspection',
  },
  {
    id: 'homestyle',
    company: 'HomeStyle Furniture',
    industry: 'Furniture',
    year: '2023',
    challenge:
      'HomeStyle Furniture, a UK retailer, struggled to find reliable manufacturers for custom wooden furniture at competitive prices. Their previous supplier delivered inconsistent quality, leading to customer complaints and returns.',
    solution:
      'We identified and audited 8 factories specializing in custom wooden furniture, negotiated volume discounts, and established quality control checkpoints at each production stage. We also arranged for sample production before bulk orders.',
    result:
      'Achieved 35% cost reduction while improving product quality. Customer satisfaction increased by 28%, and return rate dropped from 8% to 2%.',
    metrics: [
      { label: 'Cost Reduction', value: '35%' },
      { label: 'Quality Improvement', value: '+28%' },
      { label: 'Return Rate Drop', value: '75%' },
    ],
    testimonial: {
      quote:
        'The quality control inspections have been invaluable. We have not had a single shipment rejected since working with them. Their attention to detail is exceptional.',
      author: 'Sarah Williams',
      role: 'Procurement Director',
      company: 'HomeStyle Furniture',
    },
    image: 'furniture manufacturing workshop',
  },
  {
    id: 'greenpack',
    company: 'GreenPack Solutions',
    industry: 'Packaging',
    year: '2024',
    challenge:
      'GreenPack Solutions, a sustainable packaging company based in Germany, required eco-friendly packaging suppliers with proper certifications. They struggled to verify environmental claims and certification authenticity.',
    solution:
      'We sourced certified sustainable packaging manufacturers, conducted on-site audits to verify their environmental certifications and production practices, and established a traceability system for raw materials.',
    result:
      'Secured 3 certified suppliers with 40% faster lead times. All suppliers now provide FSC-certified materials, and the company successfully met their sustainability commitments to their clients.',
    metrics: [
      { label: 'Lead Time Improvement', value: '40%' },
      { label: 'Suppliers Certified', value: '3' },
      { label: 'Certification Success', value: '100%' },
    ],
    testimonial: {
      quote:
        'Professional, reliable, and cost-effective. They truly understand the challenges of sourcing sustainable products from China. Their verification gave us confidence in our supply chain.',
      author: 'David Park',
      role: 'Founder',
      company: 'GreenPack Solutions',
    },
    image: 'packaging factory quality check',
  },
  {
    id: 'medtech',
    company: 'MedTech Pro',
    industry: 'Medical Devices',
    year: '2023',
    challenge:
      'MedTech Pro, a medical device company, needed to source precision components with strict quality requirements. They required suppliers with ISO 13485 certification and traceable quality documentation.',
    solution:
      'We identified specialized medical device component manufacturers, conducted comprehensive quality system audits, and implemented a detailed inspection protocol with full traceability documentation.',
    result:
      'Successfully qualified 2 suppliers meeting all regulatory requirements. First-pass yield improved to 99.2%, and they passed all regulatory audits without findings.',
    metrics: [
      { label: 'First-Pass Yield', value: '99.2%' },
      { label: 'Suppliers Qualified', value: '2' },
      { label: 'Audit Success', value: '100%' },
    ],
    testimonial: {
      quote:
        'Their understanding of medical device regulatory requirements was impressive. They found us suppliers that met our strict quality standards when others said it was impossible.',
      author: 'Dr. Emily Roberts',
      role: 'Quality Director',
      company: 'MedTech Pro',
    },
    image: 'medical device manufacturing',
  },
  {
    id: 'fitness',
    company: 'FitLife Sports',
    industry: 'Sports Equipment',
    year: '2024',
    challenge:
      'FitLife Sports, a fitness equipment brand, wanted to expand their product line with new gym equipment. They needed manufacturers who could meet their design specifications and deliver consistent quality at scale.',
    solution:
      'We coordinated with their design team to create detailed specifications, sourced manufacturers with casting and welding capabilities, and established a quality control process including material testing and load testing.',
    result:
      'Launched 12 new products within 6 months. Manufacturing costs were 25% below budget, and all products passed rigorous safety testing on the first attempt.',
    metrics: [
      { label: 'Products Launched', value: '12' },
      { label: 'Cost Savings', value: '25%' },
      { label: 'First-Attempt Pass', value: '100%' },
    ],
    testimonial: {
      quote:
        'They made launching our new product line seamless. From design to delivery, every step was professionally managed. We will definitely work with them on future projects.',
      author: 'James Miller',
      role: 'CEO',
      company: 'FitLife Sports',
    },
    image: 'sports equipment manufacturing',
  },
  {
    id: 'beauty',
    company: 'PureBeauty Cosmetics',
    industry: 'Cosmetics',
    year: '2023',
    challenge:
      'PureBeauty Cosmetics needed to source high-quality cosmetic packaging and private-label products. They required suppliers who could meet FDA regulations and provide clean, safe products.',
    solution:
      'We identified GMP-certified manufacturers, conducted facility audits focusing on hygiene and quality systems, and arranged for product testing at accredited laboratories.',
    result:
      'Secured 4 certified suppliers. All products passed FDA compliance testing, and time-to-market was reduced by 3 months compared to their previous sourcing attempts.',
    metrics: [
      { label: 'Time Reduction', value: '3 months' },
      { label: 'Compliance Rate', value: '100%' },
      { label: 'Suppliers Found', value: '4' },
    ],
    testimonial: {
      quote:
        'Navigating FDA compliance seemed overwhelming until we found SSourcing China. Their expertise in regulatory requirements saved us months of frustration.',
      author: 'Lisa Thompson',
      role: 'Operations Manager',
      company: 'PureBeauty Cosmetics',
    },
    image: 'cosmetics manufacturing facility',
  },
]

const industries = ['All', 'Electronics', 'Furniture', 'Packaging', 'Medical Devices', 'Sports Equipment', 'Cosmetics']

export default function CaseStudiesPage() {
  const containerRef = useRef(null)
  const [activeIndustry, setActiveIndustry] = useState('All')
  const [selectedStudy, setSelectedStudy] = useState(caseStudies[0])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const filteredStudies = activeIndustry === 'All'
    ? caseStudies
    : caseStudies.filter(s => s.industry === activeIndustry)

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-plus text-4xl sm:text-5xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="font-inter text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Real results from our partnerships with global buyers. See how we
              have helped businesses overcome sourcing challenges.
            </p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#F8FAFC"
            />
          </svg>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveIndustry(industry)}
                className={`px-5 py-2 rounded-full font-inter text-sm font-medium transition-all ${
                  activeIndustry === industry
                    ? 'bg-[#E67E22] text-white'
                    : 'bg-white text-[#1E293B] border border-[#E2E8F0] hover:bg-[#F8FAFC]'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-[#E67E22]/10 text-[#E67E22] font-inter text-sm font-medium rounded-full mb-4">
              Featured Case Study
            </span>
            <h2 className="font-plus text-3xl font-bold text-[#1E293B]">
              {selectedStudy.company}
            </h2>
            <p className="font-inter text-[#64748B]">
              {selectedStudy.industry} Industry | {selectedStudy.year}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img
                data-strk-img-id={`case-featured-${selectedStudy.id}-8f2a9c`}
                data-strk-img={`[case-featured-company-${selectedStudy.id}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={selectedStudy.company}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#E67E22] text-white font-inter text-sm font-medium rounded-full">
                  {selectedStudy.industry}
                </span>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="mb-8">
                <h3 className="font-plus text-xl font-semibold text-[#1E293B] mb-3">
                  The Challenge
                </h3>
                <p className="font-inter text-[#64748B]">{selectedStudy.challenge}</p>
              </div>

              <div className="mb-8">
                <h3 className="font-plus text-xl font-semibold text-[#1E293B] mb-3">
                  Our Solution
                </h3>
                <p className="font-inter text-[#64748B]">{selectedStudy.solution}</p>
              </div>

              <div className="mb-8">
                <h3 className="font-plus text-xl font-semibold text-[#1E293B] mb-3">
                  The Result
                </h3>
                <p className="font-inter text-[#64748B] mb-4">{selectedStudy.result}</p>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {selectedStudy.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="p-4 bg-[#F8FAFC] rounded-lg text-center"
                    >
                      <div className="font-plus text-2xl font-bold text-[#E67E22]">
                        {metric.value}
                      </div>
                      <div className="font-inter text-xs text-[#64748B]">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="p-6 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#E67E22] text-[#E67E22]"
                    />
                  ))}
                </div>
                <p className="font-inter text-[#64748B] italic mb-4">
                  "{selectedStudy.testimonial.quote}"
                </p>
                <div>
                  <p className="font-plus font-semibold text-[#1E293B]">
                    {selectedStudy.testimonial.author}
                  </p>
                  <p className="font-inter text-sm text-[#64748B]">
                    {selectedStudy.testimonial.role}, {selectedStudy.testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-plus text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
              More Success Stories
            </h2>
            <p className="font-inter text-lg text-[#64748B]">
              Explore how we have helped other businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <button
                key={study.id}
                onClick={() => setSelectedStudy(study)}
                className="group bg-white rounded-xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-all text-left"
              >
                <div className="relative aspect-video">
                  <img
                    data-strk-img-id={`case-grid-${study.id}-8f2a9c`}
                    data-strk-img={`[case-grid-company-${study.id}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.company}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-white/90 text-[#1E293B] font-inter text-xs font-medium rounded">
                      {study.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    id={`case-grid-company-${study.id}`}
                    className="font-plus text-lg font-semibold text-[#1E293B] mb-2"
                  >
                    {study.company}
                  </h3>
                  <p className="font-inter text-sm text-[#64748B] line-clamp-2 mb-4">
                    {study.result}
                  </p>
                  <div className="flex items-center gap-2 text-[#E67E22] font-inter text-sm font-medium">
                    Read more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E3A5F] to-[#2D5A87]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-plus text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="font-inter text-lg text-white/80 mb-8">
            Let us help you overcome your sourcing challenges and achieve similar results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E67E22] text-white font-inter font-semibold text-lg rounded-lg hover:bg-[#D35400] transition-all hover:scale-105"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}