import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, TrendingUp, DollarSign, Clock, MapPin, Quote } from 'lucide-react'

const caseStudies = [
  {
    company: 'TechGear Inc.',
    industry: 'Consumer Electronics',
    location: 'San Francisco, USA',
    challenge: 'TechGear needed to source 50,000 custom power banks with specific battery certifications, custom branding, and a tight 8-week deadline for their holiday product launch.',
    solution: 'We identified three qualified power bank manufacturers, conducted factory audits, negotiated pricing 15% below their target, and managed the entire production process with weekly progress reports.',
    result: 'Delivered 15% under budget with zero quality defects. TechGear successfully launched on time and expanded their product line with our help.',
    stats: [
      { icon: DollarSign, value: '$45,000', label: 'Cost Saved' },
      { icon: TrendingUp, value: '0%', label: 'Defect Rate' },
      { icon: Clock, value: '6 Weeks', label: 'Lead Time' },
    ],
    testimonial: 'SSourcing China transformed our sourcing process. Their factory verification and quality control gave us complete confidence in our supply chain.',
    author: 'Michael Chen',
    role: 'VP of Operations, TechGear Inc.',
    image: 'electronics factory production line power bank',
    imageId: 'case-techgear-s1t2u3',
  },
  {
    company: 'HomeStyle Europe',
    industry: 'Home Furnishing',
    location: 'Berlin, Germany',
    challenge: 'HomeStyle was dependent on a single supplier for their furniture line and wanted to diversify their supply chain to reduce risk and improve quality.',
    solution: 'We audited 12 furniture manufacturers, shortlisted 5, arranged samples, and helped them establish relationships with 3 verified suppliers across different regions.',
    result: 'Achieved 40% cost reduction, improved product quality, and eliminated single-source dependency. Now sourcing 200+ SKUs from multiple verified factories.',
    stats: [
      { icon: DollarSign, value: '40%', label: 'Cost Reduction' },
      { icon: TrendingUp, value: '3', label: 'New Suppliers' },
      { icon: Clock, value: '8 Weeks', label: 'Setup Time' },
    ],
    testimonial: 'The supplier diversification project was seamless. SSourcing China found us reliable partners we never would have discovered on our own.',
    author: 'Anna Schmidt',
    role: 'Procurement Director, HomeStyle Europe',
    image: 'home furniture warehouse distribution',
    imageId: 'case-homestyle-v4w5x6',
  },
  {
    company: 'Fashion Forward AU',
    industry: 'Apparel & Textiles',
    location: 'Sydney, Australia',
    challenge: 'Fashion Forward\'s previous supplier consistently delivered late (60% on-time rate) and had recurring quality issues that damaged their brand reputation.',
    solution: 'We conducted a thorough supplier search, found a manufacturer with strong QC systems, implemented our inspection process, and established clear production milestones.',
    result: 'On-time delivery improved from 60% to 98%. Quality complaints reduced by 90%. They now produce 4 seasonal collections per year through our network.',
    stats: [
      { icon: TrendingUp, value: '98%', label: 'On-time Delivery' },
      { icon: DollarSign, value: '90%', label: 'Fewer Complaints' },
      { icon: Clock, value: '4 Weeks', label: 'First Order' },
    ],
    testimonial: 'We went from constant quality headaches to complete peace of mind. SSourcing China\'s quality inspection process is thorough and reliable.',
    author: 'James Wilson',
    role: 'CEO, Fashion Forward AU',
    image: 'textile factory garment production',
    imageId: 'case-fashionforward-y7z8a9',
  },
  {
    company: 'BuildRight Tools',
    industry: 'Industrial Equipment',
    location: 'Toronto, Canada',
    challenge: 'BuildRight needed custom-branded professional tools with specific safety certifications for the North American market, with minimum order quantities that previous suppliers wouldn\'t accommodate.',
    solution: 'We found manufacturers experienced with North American safety standards, negotiated flexible MOQs, and managed the certification process including UL and CSA testing.',
    result: 'Successfully launched 15 custom tool products with full safety certifications. Now ordering 10,000+ units quarterly with consistent quality.',
    stats: [
      { icon: DollarSign, value: '15', label: 'Products Launched' },
      { icon: TrendingUp, value: '100%', label: 'Certification Pass' },
      { icon: Clock, value: '10 Weeks', label: 'Time to Market' },
    ],
    testimonial: 'Finding suppliers who understand North American certification requirements is challenging. SSourcing China made it straightforward.',
    author: 'Robert Lee',
    role: 'Product Manager, BuildRight Tools',
    image: 'industrial tools manufacturing factory',
    imageId: 'case-buildright-z4a5b6',
  },
]

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-950 section-padding text-center">
        <div className="container-max">
          <span className="inline-block px-4 py-1 bg-brand-700 text-brand-200 text-sm font-medium rounded-full mb-4">
            Success Stories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-lg text-brand-200 max-w-2xl mx-auto">
            See how we've helped businesses worldwide successfully source products from China
            with measurable results.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-max space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto bg-slate-100">
                  <img
                    data-strk-img-id={study.imageId}
                    data-strk-img={`[case-${study.company.toLowerCase().replace(/[^a-z]/g, '-')}-industry] ${study.image}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${study.company} case study`}
                    className="w-full h-full object-cover"
                    id={`case-${study.company.toLowerCase().replace(/[^a-z]/g, '-')}-industry`}
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-brand-100 text-brand-700 text-xs font-medium rounded-full">
                      {study.industry}
                    </span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                      <MapPin size={12} />
                      {study.location}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mb-4">{study.company}</h2>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase mb-1">Challenge</h3>
                      <p className="text-slate-700">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase mb-1">Solution</h3>
                      <p className="text-slate-700">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase mb-1">Result</h3>
                      <p className="text-slate-700 font-medium">{study.result}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.stats.map((stat, i) => {
                      const Icon = stat.icon
                      return (
                        <div key={i} className="text-center p-3 bg-slate-50 rounded-lg">
                          <div className="text-xl font-bold text-brand-600">{stat.value}</div>
                          <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-brand-50 rounded-lg p-4">
                    <div className="flex gap-2 mb-2">
                      <Quote size={16} className="text-brand-400" />
                    </div>
                    <p className="text-slate-700 italic mb-3">{study.testimonial}</p>
                    <div>
                      <div className="font-semibold text-slate-900">{study.author}</div>
                      <div className="text-sm text-slate-500">{study.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50 text-center">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your sourcing needs and see how we can help your business grow.
          </p>
          <Link to="/contact" className="btn-accent gap-2">
            Start Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
