import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle, Quote, TrendingUp, Clock, DollarSign,
  Shield, Package, Globe, Award, Star
} from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'US Retailer Saved 35% on Home Furniture Line',
    category: 'Home & Garden',
    client: 'Mike R., Procurement Director',
    company: 'HomeStyle USA',
    location: 'Texas, USA',
    challenge: 'HomeStyle USA was sourcing furniture through intermediaries with high markups and inconsistent quality. They needed a direct sourcing solution with better pricing and reliable quality control.',
    solution: 'We audited 12 furniture factories in Foshan, shortlisted 3 that met their quality and capacity requirements, negotiated pricing 35% below their current supplier, and implemented a multi-stage QC process.',
    results: [
      { icon: DollarSign, value: '35%', label: 'Cost Reduction' },
      { icon: Clock, value: '2 weeks', label: 'Faster Delivery' },
      { icon: Shield, value: 'Zero', label: 'Quality Returns' },
      { icon: TrendingUp, value: '3x', label: 'Order Volume Growth' },
    ],
    quote: 'SSourcing China found us a factory we never would have discovered on our own. The quality has been consistently excellent across five orders now.',
    duration: 'Ongoing since 2023',
  },
  {
    id: 2,
    title: 'EU Brand Launched 12 SKUs in 90 Days',
    category: 'Consumer Electronics',
    client: 'Anna K., CEO',
    company: 'TechNova Europe',
    location: 'Berlin, Germany',
    challenge: 'TechNova wanted to launch a new line of Bluetooth speakers and accessories for the EU market but had no experience sourcing from China and needed everything from concept to shelves in 90 days.',
    solution: 'We managed the entire project from supplier sourcing through tooling, sampling, mass production, CE certification, and shipping. Multiple factories were coordinated in parallel to meet the tight deadline.',
    results: [
      { icon: Package, value: '12', label: 'SKUs Launched' },
      { icon: Clock, value: '90 days', label: 'Time to Market' },
      { icon: Shield, value: '100%', label: 'CE Compliance' },
      { icon: Award, value: '0', label: 'Quality Issues' },
    ],
    quote: 'They managed everything from sourcing to shipping. We just approved the designs and received the goods. Incredible efficiency.',
    duration: 'Project completed in 2024',
  },
  {
    id: 3,
    title: 'Australian Importer Cut Lead Time by 40%',
    category: 'Industrial Components',
    client: 'James L., Operations Manager',
    company: 'BuildPro Australia',
    location: 'Melbourne, Australia',
    challenge: 'BuildPro was experiencing 12-week lead times and frequent communication breakdowns with their existing Chinese suppliers, causing project delays and inventory issues.',
    solution: 'We identified alternative suppliers with shorter lead times, implemented a production monitoring system with weekly updates, and established clear communication protocols. We also helped consolidate shipments to reduce logistics costs.',
    results: [
      { icon: Clock, value: '40%', label: 'Lead Time Reduction' },
      { icon: DollarSign, value: '20%', label: 'Logistics Savings' },
      { icon: TrendingUp, value: '98%', label: 'On-time Delivery Rate' },
      { icon: Globe, value: '1 source', label: 'Single Point of Contact' },
    ],
    quote: 'The production follow-up alone was worth it. We always knew exactly where our order stood, and delays were flagged early so we could plan accordingly.',
    duration: 'Ongoing since 2022',
  },
  {
    id: 4,
    title: 'UK Retailer Scaled to 50+ Product Lines',
    category: 'Fashion & Accessories',
    client: 'Sarah M., Head of Sourcing',
    company: 'TrendBox UK',
    location: 'London, United Kingdom',
    challenge: 'TrendBox wanted to expand their product range from 15 to 50+ fashion accessories but their small team could not manage the supplier relationships, QC, and logistics at that scale.',
    solution: 'We became their dedicated sourcing department in China. We manage supplier relationships, conduct quarterly audits, handle all QC inspections, coordinate shipments, and provide monthly sourcing reports.',
    results: [
      { icon: Package, value: '50+', label: 'Product Lines' },
      { icon: Shield, value: '12', label: 'Verified Suppliers' },
      { icon: Star, value: '99%', label: 'Quality Pass Rate' },
      { icon: Globe, value: 'Monthly', label: 'Consolidated Shipments' },
    ],
    quote: 'SSourcing China is essentially our China office. They understand our quality standards and deliver consistently. Our business would not have scaled this fast without them.',
    duration: 'Ongoing since 2021',
  },
]

const CaseStudiesPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Case Studies</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Real Results for Real Businesses</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            See how we have helped companies around the world source from China with confidence,
            reduce costs, and improve quality.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((cs, i) => (
            <div key={cs.id} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
              <div className="p-8 lg:p-10">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">
                    {cs.category}
                  </span>
                  <span className="text-xs text-slate-500">{cs.location}</span>
                  <span className="text-xs text-slate-400">|</span>
                  <span className="text-xs text-slate-500">{cs.duration}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">{cs.title}</h2>

                {/* Challenge & Solution */}
                <div className="grid lg:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-xl p-6 border border-slate-200">
                    <h3 className="text-sm font-bold text-red-700 uppercase tracking-wider mb-3">The Challenge</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-slate-200">
                    <h3 className="text-sm font-bold text-green-700 uppercase tracking-wider mb-3">Our Solution</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {cs.results.map((r) => (
                    <div key={r.label} className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                      <r.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                      <div className="text-2xl font-extrabold text-primary">{r.value}</div>
                      <div className="text-xs text-slate-500">{r.label}</div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="bg-white rounded-xl p-6 border border-slate-200">
                  <Quote className="w-6 h-6 text-slate-300 mb-2" />
                  <p className="text-slate-600 italic leading-relaxed mb-3">"{cs.quote}"</p>
                  <p className="text-sm font-medium text-slate-700">
                    {cs.client} — {cs.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Want Similar Results?</h2>
          <p className="text-slate-500 text-lg mb-8">Let us show you how we can help your business source from China more effectively.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudiesPage
