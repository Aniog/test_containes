import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Package, Star, TrendingUp, CheckCircle,
  Clock, DollarSign, Users, Quote, Phone
} from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      company: 'TechCorp USA',
      industry: 'Consumer Electronics',
      location: 'California, USA',
      challenge: 'TechCorp needed to find a reliable manufacturer for custom Bluetooth speakers with strict quality requirements, specific material specifications, and a tight deadline for product launch.',
      solution: 'We identified 5 potential suppliers, conducted thorough factory audits, and selected the best match. Our team managed the entire sampling process, coordinated design modifications, and implemented rigorous quality control throughout production.',
      result: 'Reduced production costs by 25% while maintaining premium quality. Delivered 10,000 units 2 weeks ahead of schedule. Established a long-term supply relationship with ongoing orders.',
      savings: '$150,000',
      timeline: '12 weeks',
      quantity: '10,000 units',
      testimonial: {
        quote: "SSourcing China transformed our supply chain. Their attention to detail and factory verification process gave us confidence we never had before.",
        author: 'Michael Chen',
        role: 'CEO'
      },
      stats: [
        { label: 'Cost Reduction', value: '25%' },
        { label: 'On-time Delivery', value: '2 weeks early' },
        { label: 'Quality Rating', value: '99.8%' }
      ]
    },
    {
      company: 'HomeStyle EU',
      industry: 'Home & Garden',
      location: 'Berlin, Germany',
      challenge: 'HomeStyle wanted to source eco-friendly kitchen products from sustainable manufacturers. They needed suppliers with proper environmental certifications and the ability to produce custom designs.',
      solution: 'We searched our network for manufacturers with environmental certifications, conducted on-site audits to verify sustainability claims, and coordinated sample development with multiple iterations until the products met exact specifications.',
      result: 'Found 3 certified suppliers, completed first order of 5,000 units with zero defects. Products received excellent customer reviews and helped establish HomeStyle as a premium eco-friendly brand.',
      savings: '$85,000',
      timeline: '16 weeks',
      quantity: '5,000 units',
      testimonial: {
        quote: "We saved over $80,000 on our first order while getting better quality than our previous suppliers. The team's communication was exceptional throughout.",
        author: 'Sarah Johnson',
        role: 'Procurement Manager'
      },
      stats: [
        { label: 'Cost Savings', value: '$85,000' },
        { label: 'Defect Rate', value: '0%' },
        { label: 'Suppliers Found', value: '3' }
      ]
    },
    {
      company: 'SportsPro UK',
      industry: 'Sporting Goods',
      location: 'London, UK',
      challenge: 'SportsPro required custom-branded fitness equipment with specific material requirements, unique color schemes, and a very tight deadline for their seasonal product launch.',
      solution: 'We identified manufacturers experienced with custom fitness equipment, negotiated expedited production timelines, and implemented daily quality checks to ensure specifications were met while meeting the aggressive deadline.',
      result: 'Delivered 2,000 units ahead of schedule. The products received outstanding customer feedback, and SportsPro has since placed 3 additional orders with increasing quantities.',
      savings: '$120,000',
      timeline: '10 weeks',
      quantity: '2,000 units',
      testimonial: {
        quote: "The production follow-up service is invaluable. We always know exactly where our order stands, and any issues are resolved before they become problems.",
        author: 'James Wilson',
        role: 'Director'
      },
      stats: [
        { label: 'Time Saved', value: '2 weeks' },
        { label: 'Repeat Orders', value: '3' },
        { label: 'Customer Rating', value: '4.9/5' }
      ]
    },
    {
      company: 'BeautyBrand Australia',
      industry: 'Health & Beauty',
      location: 'Sydney, Australia',
      challenge: 'BeautyBrand needed to source high-quality makeup brushes and beauty tools with custom packaging. They required FDA-compliant materials and consistent quality across large order quantities.',
      solution: 'We sourced manufacturers with FDA compliance experience, coordinated material testing, and established a multi-stage quality control process. Our team also helped design custom packaging that met retail requirements.',
      result: 'Successfully launched product line with 15,000 units. Quality consistency exceeded expectations, leading to expansion into retail distribution across Australia.',
      savings: '$200,000',
      timeline: '18 weeks',
      quantity: '15,000 units',
      testimonial: {
        quote: "From sourcing to shipping, SSourcing China handled everything professionally. Our products arrived on time and exceeded quality expectations.",
        author: 'Emma Davis',
        role: 'Founder'
      },
      stats: [
        { label: 'Quality Score', value: '98.5%' },
        { label: 'Retail Expansion', value: '3 chains' },
        { label: 'Cost Reduction', value: '30%' }
      ]
    },
    {
      company: 'AutoParts GmbH',
      industry: 'Automotive',
      location: 'Munich, Germany',
      challenge: 'AutoParts needed to find suppliers for specialized LED lighting components that met strict automotive industry standards and certifications.',
      solution: 'We identified manufacturers with automotive industry experience and necessary certifications (ISO/TS 16949). Our team conducted extensive testing and validation to ensure components met all technical requirements.',
      result: 'Established reliable supply chain with 2 certified suppliers. Reduced component costs by 20% while improving quality consistency and delivery reliability.',
      savings: '$300,000',
      timeline: '20 weeks',
      quantity: '50,000 units',
      testimonial: {
        quote: "Finding suppliers that meet automotive industry standards is challenging. SSourcing China found us the perfect partners and managed the entire qualification process.",
        author: 'Hans Mueller',
        role: 'Supply Chain Director'
      },
      stats: [
        { label: 'Cost Reduction', value: '20%' },
        { label: 'Certification', value: 'ISO/TS 16949' },
        { label: 'Lead Time', value: '-15%' }
      ]
    },
    {
      company: 'ToyWorld Canada',
      industry: 'Toys & Games',
      location: 'Toronto, Canada',
      challenge: 'ToyWorld needed to source educational toys that met strict safety standards (ASTM, EN71) while maintaining competitive pricing for the North American market.',
      solution: 'We identified manufacturers with toy safety certification experience, coordinated safety testing at accredited labs, and implemented comprehensive quality control to ensure consistent compliance.',
      result: 'Successfully launched product line with zero safety recalls. Products were featured in major retail chains across Canada and the United States.',
      savings: '$175,000',
      timeline: '14 weeks',
      quantity: '25,000 units',
      testimonial: {
        quote: "Safety is our top priority. SSourcing China ensured every product met all safety standards before shipment. Their documentation and testing process is thorough.",
        author: 'David Thompson',
        role: 'Product Manager'
      },
      stats: [
        { label: 'Safety Compliance', value: '100%' },
        { label: 'Retail Chains', value: '5+' },
        { label: 'Zero Recalls', value: '✓' }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-800 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-brand-200 font-semibold text-sm uppercase tracking-wider">Success Stories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              See how we've helped businesses across the globe successfully source products from China. 
              Real results from real clients.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-medium text-brand-500 bg-brand-50 px-3 py-1 rounded-full">
                          {study.industry}
                        </span>
                        <span className="text-xs text-slate-500">{study.location}</span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                        {study.company}
                      </h2>
                      
                      <div className="flex flex-wrap gap-4 mb-6">
                        {study.stats.map((stat, sIndex) => (
                          <div key={sIndex} className="bg-slate-50 px-4 py-2 rounded-lg">
                            <p className="text-xs text-slate-500">{stat.label}</p>
                            <p className="text-lg font-bold text-brand-500">{stat.value}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">Challenge</h4>
                          <p className="text-slate-600">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">Solution</h4>
                          <p className="text-slate-600">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">Results</h4>
                          <p className="text-slate-600">{study.result}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-brand-500" />
                          <span>Timeline: {study.timeline}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Package className="w-4 h-4 text-brand-500" />
                          <span>Quantity: {study.quantity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-brand-500" />
                          <span>Savings: {study.savings}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Testimonial */}
                    <div className="lg:w-80 flex-shrink-0">
                      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 h-full">
                        <Quote className="w-8 h-8 text-brand-200 mb-4" />
                        <p className="text-slate-700 mb-6 leading-relaxed">
                          "{study.testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{study.testimonial.author}</p>
                          <p className="text-sm text-slate-600">
                            {study.testimonial.role}, {study.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-lg text-slate-600">
              Numbers that speak to our commitment to client success
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: '500+', label: 'Projects Completed', icon: Package },
              { stat: '$10M+', label: 'Client Savings', icon: DollarSign },
              { stat: '98%', label: 'Success Rate', icon: TrendingUp },
              { stat: '40+', label: 'Countries Served', icon: Users }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border border-slate-200">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-brand-500" />
                </div>
                <p className="text-3xl font-bold text-brand-500 mb-2">{item.stat}</p>
                <p className="text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-600 to-brand-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of businesses who have successfully sourced products from China with our help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+8613800138000"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 border border-white/30"
            >
              <Phone className="w-5 h-5 mr-2" />
              Discuss Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
