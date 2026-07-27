import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  Shield,
  Globe,
  Users,
  Star
} from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      company: 'European Retail Brand',
      industry: 'Home Goods',
      location: 'Germany',
      challenge: 'Needed to source 50,000 ceramic mugs with custom branding within 3 months. Previous supplier had quality issues and delays.',
      solution: 'We verified 8 factories, conducted 2 factory audits, performed pre-shipment inspection, and coordinated sea freight. We also arranged custom packaging with their brand.',
      result: 'Delivered on time with 99.5% quality pass rate. Saved 23% compared to their previous supplier through competitive bidding.',
      metrics: [
        { label: 'Order Size', value: '50,000 units' },
        { label: 'Quality Pass Rate', value: '99.5%' },
        { label: 'Cost Savings', value: '23%' },
        { label: 'Delivery', value: 'On Time' }
      ],
      testimonial: 'SSourcing China transformed our sourcing operation. The quality improvement was immediate, and the cost savings exceeded our expectations.'
    },
    {
      company: 'US Tech Startup',
      industry: 'Electronics',
      location: 'United States',
      challenge: 'First-time sourcing from China for a new smart home device. No local team, no language capability, and concerns about IP protection.',
      solution: 'End-to-end service: supplier matching, factory audit, IP protection guidance, production monitoring, and shipping. We also arranged FCC certification testing.',
      result: 'Successfully launched product in 4 months. Zero quality issues in first 10,000 units. Product now generating $2M in annual revenue.',
      metrics: [
        { label: 'Time to Market', value: '4 months' },
        { label: 'First Order', value: '10,000 units' },
        { label: 'Quality Issues', value: '0' },
        { label: 'Revenue', value: '$2M/yr' }
      ],
      testimonial: 'As a startup, we couldn\'t afford to make mistakes. SSourcing China guided us through every step and made our China sourcing seamless.'
    },
    {
      company: 'Australian Distributor',
      industry: 'Outdoor Gear',
      location: 'Australia',
      challenge: 'Sourcing camping equipment from multiple factories with consistent quality and coordinated shipping. Previous experience with quality variations.',
      solution: 'We managed 4 suppliers, performed inline inspections at each, consolidated shipments at our warehouse, and handled all customs and documentation.',
      result: '40% cost reduction through consolidation. 100% on-time delivery over 2 years. Quality consistency improved dramatically.',
      metrics: [
        { label: 'Suppliers Managed', value: '4' },
        { label: 'Cost Reduction', value: '40%' },
        { label: 'On-Time Delivery', value: '100%' },
        { label: 'Partnership', value: '2+ years' }
      ],
      testimonial: 'The consolidation savings alone paid for their services many times over. Their quality control is exceptional.'
    },
    {
      company: 'UK E-commerce Brand',
      industry: 'Fashion Accessories',
      location: 'United Kingdom',
      challenge: 'Sourcing fashion jewelry with fast fashion turnaround. Needed quick response times and flexible order quantities.',
      solution: 'We identified factories specializing in fashion jewelry, established flexible production arrangements, and implemented rapid sample turnaround.',
      result: 'Reduced sample time from 6 weeks to 10 days. Can now respond to trends within 3 weeks. Orders increased 300% in one year.',
      metrics: [
        { label: 'Sample Time', value: '10 days' },
        { label: 'Trend Response', value: '3 weeks' },
        { label: 'Order Growth', value: '300%' },
        { label: 'Min Order', value: '500 units' }
      ],
      testimonial: 'Their flexibility and speed are incredible. We\'ve grown 300% thanks to their responsive sourcing.'
    },
    {
      company: 'Canadian Industrial Company',
      industry: 'Industrial Equipment',
      location: 'Canada',
      challenge: 'Sourcing specialized industrial components with technical specifications. Needed ISO-certified suppliers with exact tolerances.',
      solution: 'We conducted thorough supplier qualification, arranged technical audits, and established quality protocols. All suppliers were ISO 9001 certified.',
      result: 'Found certified suppliers meeting exact specifications. Zero defects in first year. Cost savings of 35% vs. previous supplier.',
      metrics: [
        { label: 'Suppliers Qualified', value: '3' },
        { label: 'Certification', value: 'ISO 9001' },
        { label: 'Defect Rate', value: '0%' },
        { label: 'Savings', value: '35%' }
      ],
      testimonial: 'Technical sourcing requires expertise. They found us certified suppliers that others couldn\'t locate.'
    },
    {
      company: 'Middle East Retail Chain',
      industry: 'Consumer Goods',
      location: 'UAE',
      challenge: 'Sourcing household products for 50+ stores across the Middle East. Needed products compliant with regional regulations and cultural requirements.',
      solution: 'We identified compliant suppliers, arranged product customization for the regional market, and coordinated consolidated shipping to Dubai warehouse.',
      result: 'Successfully launched 200+ SKUs. 100% customs clearance rate. Now their exclusive sourcing partner for all Asia procurement.',
      metrics: [
        { label: 'SKUs Launched', value: '200+' },
        { label: 'Clearance Rate', value: '100%' },
        { label: 'Stores Served', value: '50+' },
        { label: 'Partnership', value: 'Exclusive' }
      ],
      testimonial: 'They understand regional requirements. Our products are perfectly suited for the Middle East market.'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Globe, value: '30+', label: 'Countries' },
    { icon: TrendingUp, value: '$200M+', label: 'Orders Processed' },
    { icon: Shield, value: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Case Studies
            </h1>
            <p className="text-xl text-gray-200">
              See how we've helped businesses around the world succeed with China sourcing. Real results from real clients.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <stat.icon className="text-[var(--primary)]" size={28} />
                </div>
                <div className="text-3xl font-bold text-[var(--primary)] mb-1">{stat.value}</div>
                <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section">
        <div className="container">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="card">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left Column - Company Info */}
                  <div className="lg:col-span-1">
                    <div className="mb-4">
                      <span className="text-sm text-[var(--secondary)] font-medium">{study.industry}</span>
                    </div>
                    <h2 className="text-2xl mb-2">{study.company}</h2>
                    <div className="flex items-center gap-2 text-[var(--text-secondary)] mb-6">
                      <Globe size={16} />
                      <span>{study.location}</span>
                    </div>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-[var(--bg-secondary)] rounded-lg p-3">
                          <div className="text-lg font-bold text-[var(--primary)]">{metric.value}</div>
                          <div className="text-xs text-[var(--text-secondary)]">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h4 className="font-semibold text-[var(--primary)] mb-2">Challenge</h4>
                      <p className="text-[var(--text-secondary)]">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--primary)] mb-2">Solution</h4>
                      <p className="text-[var(--text-secondary)]">{study.solution}</p>
                    </div>
                    <div className="pt-4 border-t border-[var(--border)]">
                      <h4 className="font-semibold text-[var(--accent)] mb-2">Result</h4>
                      <p className="text-[var(--text-secondary)]">{study.result}</p>
                    </div>
                    <div className="bg-[var(--bg-secondary)] rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Star className="text-[var(--secondary)] flex-shrink-0 mt-1" size={20} />
                        <p className="text-[var(--text-secondary)] italic">"{study.testimonial}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container">
          <div className="bg-[var(--primary)] rounded-2xl p-12 text-center">
            <h2 className="text-white mb-4">Ready to Be Our Next Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses who trust us with their China sourcing. Get started today.
            </p>
            <Link to="/contact" className="btn bg-[var(--secondary)] text-white hover:bg-[var(--secondary-hover)] inline-flex items-center gap-2">
              Get a Free Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;