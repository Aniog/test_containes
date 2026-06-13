import { Link } from 'react-router-dom'
import { ArrowRight, Quote, TrendingUp, DollarSign, Clock, Shield } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const caseStudies = [
  {
    id: 1,
    client: 'US Home Goods Retailer',
    industry: 'Home & Kitchen',
    region: 'United States',
    volume: '50+ SKUs, 20,000+ units',
    challenge: 'A mid-size US retailer needed to source 50+ SKUs of kitchen utensils from FDA-compliant factories. They had been sourcing through trade shows but were struggling with inconsistent quality and rising costs from their existing suppliers.',
    solution: 'We identified 6 qualified factories in Guangzhou and Yangjiang, conducted on-site audits, and developed a multi-supplier strategy. We implemented AQL inspections at each production run and negotiated volume-based pricing across the supplier group.',
    results: [
      { metric: '22%', label: 'Cost Reduction', icon: DollarSign },
      { metric: '45 days', label: 'First Delivery', icon: Clock },
      { metric: '0.3%', label: 'Defect Rate', icon: Shield },
    ],
    quote: 'SSourcing China found us three qualified suppliers within two weeks. Their QC process caught a material substitution issue that would have cost us over $40,000 in returns.',
    author: 'Mark T., Procurement Director',
  },
  {
    id: 2,
    client: 'European Electronics Brand',
    industry: 'Consumer Electronics',
    region: 'Germany',
    volume: '10,000 units/month',
    challenge: 'A growing German electronics brand needed a CE-certified Bluetooth speaker manufacturer with a minimum production capacity of 10,000 units per month. Previous suppliers had missed certification requirements, causing costly delays at EU customs.',
    solution: 'We shortlisted 4 factories in Shenzhen with existing CE certification and audited each one. We facilitated sample testing at a third-party lab, negotiated pricing, and set up an ongoing QC program with monthly inspections.',
    results: [
      { metric: '18%', label: 'Cost Savings', icon: DollarSign },
      { metric: '4', label: 'Verified Factories', icon: Shield },
      { metric: '10 days', label: 'Sample Delivery', icon: Clock },
    ],
    quote: 'Their factory audit report was more detailed than anything we had received from other agents. We finally have confidence in our supply chain.',
    author: 'Anna K., Supply Chain Manager',
  },
  {
    id: 3,
    client: 'Australian Fitness Company',
    industry: 'Sports & Fitness',
    region: 'Australia',
    volume: '5,000 units initial order',
    challenge: 'An Australian fitness startup wanted to launch a private label line of resistance bands and yoga mats. They had no experience sourcing from China and needed end-to-end support from product development through delivery.',
    solution: 'We managed the entire process: product design refinement, material selection, mold development, sample approval, brand packaging design, production monitoring, quality inspection, and door-to-door shipping to Melbourne.',
    results: [
      { metric: '60 days', label: 'Launch Timeline', icon: Clock },
      { metric: '0%', label: 'First-shipment Defects', icon: Shield },
      { metric: '100%', label: 'On-time Delivery', icon: TrendingUp },
    ],
    quote: 'We went from searching Alibaba to having a reliable supply chain in under two months. SSourcing China handled everything so we could focus on marketing.',
    author: 'James L., Founder',
  },
  {
    id: 4,
    client: 'Middle East Construction Supplier',
    industry: 'Building Materials',
    region: 'UAE',
    volume: '100+ containers/year',
    challenge: 'A Dubai-based construction supplier needed reliable sources for ceramic tiles, sanitary ware, and hardware. They had experienced quality issues and delayed shipments from multiple agents.',
    solution: 'We consolidated their sourcing across three key factories in Foshan, establishing long-term supply agreements with quality guarantees. We assigned a dedicated account manager and implemented container-loading inspections for every shipment.',
    results: [
      { metric: '30%', label: 'Lead Time Reduction', icon: Clock },
      { metric: '99.5%', label: 'Quality Pass Rate', icon: Shield },
      { metric: '15%', label: 'Cost Improvement', icon: DollarSign },
    ],
    quote: 'Having a dedicated team in China who understands construction materials has transformed our business. We now compete on quality, not just price.',
    author: 'Hassan M., Operations Manager',
  },
  {
    id: 5,
    client: 'Canadian Promotional Products Company',
    industry: 'Promotional Products',
    region: 'Canada',
    volume: '200+ custom products/year',
    challenge: 'A Canadian promotional products distributor needed a reliable sourcing partner who could handle diverse, small-batch custom orders with tight deadlines for corporate events and campaigns.',
    solution: 'We built a network of 8 specialized factories in Yiwu and Guangzhou, each covering different product types. We created a streamlined quoting process that delivers pricing within 24 hours and samples within 5 business days.',
    results: [
      { metric: '24 hours', label: 'Quote Turnaround', icon: Clock },
      { metric: '98%', label: 'On-time Delivery Rate', icon: TrendingUp },
      { metric: '200+', label: 'Products Sourced Annually', icon: Shield },
    ],
    quote: 'Speed is everything in promotional products. SSourcing China delivers quotes in hours and samples in days. That responsiveness has won us new clients.',
    author: 'Sarah M., VP of Procurement',
  },
  {
    id: 6,
    client: 'UK Pet Products Brand',
    industry: 'Pet Products',
    region: 'United Kingdom',
    volume: '15 SKUs, 50,000+ units',
    challenge: 'A UK pet products brand was expanding their product line and needed safe, durable pet toys and accessories that met British safety standards. They required REACH compliance and EN71 toy safety testing.',
    solution: 'We sourced from factories in Dongguan specializing in pet products, ensured full material traceability, and coordinated third-party testing at SGS for REACH and EN71 compliance. We also helped optimize packaging for UK retail standards.',
    results: [
      { metric: '100%', label: 'Compliance Rate', icon: Shield },
      { metric: '3 months', label: 'Full Line Launch', icon: Clock },
      { metric: '25%', label: 'Margin Improvement', icon: DollarSign },
    ],
    quote: 'The compliance documentation SSourcing provided was impeccable. Our retailers were impressed, and we passed all regulatory checks on the first attempt.',
    author: 'Emma W., Product Development Lead',
  },
]

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary/20 text-primary-light text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Real Results for Real Businesses
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              See how we have helped companies across industries build reliable, cost-effective
              supply chains in China. Each case study represents a real client engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {caseStudies.map((study, index) => (
              <article key={study.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 md:p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="bg-neutral-100 text-neutral-600 text-xs font-medium px-2.5 py-1 rounded-full">
                      {study.region}
                    </span>
                    <span className="bg-neutral-100 text-neutral-600 text-xs font-medium px-2.5 py-1 rounded-full">
                      {study.volume}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-neutral-900 mb-5">{study.client}</h2>

                  {/* Challenge & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">Challenge</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-2">Our Solution</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6 bg-neutral-50 rounded-lg p-5">
                    {study.results.map((result) => (
                      <div key={result.label} className="text-center">
                        <result.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-primary mb-1">{result.metric}</div>
                        <div className="text-xs text-neutral-500">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="border-t border-neutral-100 pt-5">
                    <div className="flex gap-3">
                      <Quote className="w-5 h-5 text-neutral-300 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-neutral-600 italic leading-relaxed">"{study.quote}"</p>
                        <p className="text-xs text-neutral-400 mt-2 font-medium">- {study.author}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want Similar Results?</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Tell us about your sourcing needs and we will show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-lg text-base transition-all shadow-lg"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
