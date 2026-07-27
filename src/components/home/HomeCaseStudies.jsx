import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, DollarSign, Clock } from 'lucide-react'

const caseStudies = [
  {
    company: 'TechGear Inc.',
    industry: 'Consumer Electronics',
    location: 'USA',
    challenge: 'Needed to source 50,000 custom power banks with strict quality requirements and tight deadline.',
    result: 'Delivered 15% under budget with zero defects. Saved $45,000 compared to previous supplier.',
    stats: [
      { icon: DollarSign, value: '$45K', label: 'Cost Saved' },
      { icon: TrendingUp, value: '0%', label: 'Defect Rate' },
      { icon: Clock, value: '6 Weeks', label: 'Lead Time' },
    ],
    image: 'electronics factory production line quality control',
    imageId: 'case-techgear-s1t2u3',
  },
  {
    company: 'HomeStyle Europe',
    industry: 'Home Furnishing',
    location: 'Germany',
    challenge: 'Wanted to diversify supply chain from single-source to multiple verified manufacturers.',
    result: 'Established 3 reliable suppliers with 40% cost reduction and improved product quality.',
    stats: [
      { icon: DollarSign, value: '40%', label: 'Cost Reduction' },
      { icon: TrendingUp, value: '3', label: 'New Suppliers' },
      { icon: Clock, value: '8 Weeks', label: 'Setup Time' },
    ],
    image: 'home furniture warehouse distribution center',
    imageId: 'case-homestyle-v4w5x6',
  },
  {
    company: 'Fashion Forward AU',
    industry: 'Apparel & Textiles',
    location: 'Australia',
    challenge: 'Previous supplier consistently delivered late and with quality issues on seasonal collections.',
    result: 'On-time delivery improved from 60% to 98%. Quality complaints reduced by 90%.',
    stats: [
      { icon: DollarSign, value: '98%', label: 'On-time Delivery' },
      { icon: TrendingUp, value: '90%', label: 'Fewer Complaints' },
      { icon: Clock, value: '4 Weeks', label: 'First Order' },
    ],
    image: 'textile factory garment production quality inspection',
    imageId: 'case-fashionforward-y7z8a9',
  },
]

const HomeCaseStudies = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-brand-100 text-brand-700 text-sm font-medium rounded-full mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="text-lg text-slate-600">
            See how we've helped companies like yours successfully source products from China.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
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
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                      {study.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{study.company}</h3>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-slate-500 mb-1">Challenge:</p>
                    <p className="text-slate-700">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-medium text-slate-500 mb-1">Result:</p>
                    <p className="text-slate-700 font-medium">{study.result}</p>
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

                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-1 text-brand-600 font-medium text-sm hover:text-brand-700 transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/case-studies" className="btn-primary gap-2">
            View All Case Studies
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeCaseStudies
