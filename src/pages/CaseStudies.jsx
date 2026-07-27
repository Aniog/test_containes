import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Shield, 
  CheckCircle,
  Star,
  Quote
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      company: "European Home Goods Retailer",
      industry: "Consumer Goods",
      location: "Germany",
      challenge: "A mid-sized European retailer needed to source home organization products from China with strict quality requirements and competitive pricing. Previous attempts with other agents resulted in quality issues and delays.",
      approach: "We conducted comprehensive supplier research, identified 5 verified factories, performed thorough quality audits, and established a rigorous QC protocol including pre-production, inline, and pre-shipment inspections.",
      results: [
        "Successfully imported 50,000 units with 99.2% quality pass rate",
        "Reduced sourcing costs by 18% compared to previous supplier",
        "On-time delivery for retail season launch",
        "Established long-term partnership with verified factory"
      ],
      testimonial: "SSourcing China transformed our China sourcing. The quality improvements were immediate and significant. Their verification process gave us confidence in our supplier choice.",
      clientName: "Thomas Mueller",
      clientTitle: "Procurement Director"
    },
    {
      id: 2,
      company: "US Technology Startup",
      industry: "Electronics",
      location: "United States",
      challenge: "A Silicon Valley startup needed custom electronic components for their innovative smart home device. They required manufacturers with specific technical capabilities and were concerned about IP protection.",
      approach: "We matched them with a specialized electronics manufacturer, arranged prototype development with strict NDAs, implemented inline QC checkpoints, and coordinated the entire production and shipping process.",
      results: [
        "Product launched on time with zero quality issues in first production run",
        "Manufacturing costs 25% below initial estimates",
        "Full IP protection measures implemented",
        "Scalable production capacity secured for future growth"
      ],
      testimonial: "Their expertise in electronics sourcing was invaluable. They understood our technical requirements and found us a manufacturer who could deliver exactly what we needed.",
      clientName: "Sarah Chen",
      clientTitle: "CEO"
    },
    {
      id: 3,
      company: "Australian Fashion Brand",
      industry: "Textiles & Apparel",
      location: "Australia",
      challenge: "An emerging fashion brand needed to source sustainable textiles and manufactured garments from China. They required transparency in supply chain and adherence to ethical manufacturing standards.",
      approach: "We identified factories with relevant certifications, conducted ethical manufacturing audits, arranged for sustainable material sourcing, and implemented traceability throughout production.",
      results: [
        "Sourced GOTS-certified organic cotton fabrics",
        "All factories passed ethical manufacturing audits",
        "Complete supply chain transparency achieved",
        "First shipment delivered ahead of schedule"
      ],
      testimonial: "They went above and beyond to find factories that met our sustainability standards. The transparency they provided throughout the process was exceptional.",
      clientName: "Emma Williams",
      clientTitle: "Founder"
    },
    {
      id: 4,
      company: "Canadian Industrial Equipment Distributor",
      industry: "Machinery",
      location: "Canada",
      challenge: "A Canadian distributor needed to source industrial machinery components from China. They required precise specifications, reliable quality, and competitive pricing for their B2B customers.",
      approach: "We conducted detailed technical specification reviews, identified qualified manufacturers, performed factory audits, and established comprehensive quality control procedures.",
      results: [
        "Zero defects in first 12 months of production",
        "40% cost reduction compared to previous supplier",
        "ISO 9001 certification verified and maintained",
        "Reliable lead times maintained for 3+ years"
      ],
      testimonial: "The consistency of quality has been remarkable. They've become a critical part of our supply chain and have consistently delivered beyond expectations.",
      clientName: "Robert Johnson",
      clientTitle: "Operations Manager"
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "99%", label: "Quality Pass Rate" },
    { value: "95%", label: "On-Time Delivery" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Real success stories from businesses we've helped with China sourcing. 
              See how we've delivered results for clients across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700 mr-4">
                      {study.industry}
                    </span>
                    <span className="text-slate-500 text-sm">{study.location}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{study.company}</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                      <Shield className="w-5 h-5 text-blue-600 mr-2" />
                      Challenge
                    </h4>
                    <p className="text-slate-600">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                      <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                      Our Approach
                    </h4>
                    <p className="text-slate-600">{study.approach}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`bg-slate-50 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Quote className="w-10 h-10 text-blue-200 mb-4" />
                  <p className="text-lg text-slate-700 italic mb-6">"{study.testimonial}"</p>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-semibold text-slate-900">{study.clientName}</div>
                    <div className="text-slate-500">{study.clientTitle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Trusted by businesses worldwide for reliable China sourcing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "Exceptional service from start to finish. Their attention to detail and quality control is unmatched in the industry."
              </p>
              <div className="font-semibold text-slate-900">Michael Brown</div>
              <div className="text-slate-500 text-sm">CEO, TechImport Inc</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "They've been instrumental in growing our business. Their sourcing expertise has saved us time and money."
              </p>
              <div className="font-semibold text-slate-900">Lisa Anderson</div>
              <div className="text-slate-500 text-sm">Director, GlobalTrade Co</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "Professional, reliable, and results-driven. They truly understand the complexities of China sourcing."
              </p>
              <div className="font-semibold text-slate-900">David Chen</div>
              <div className="text-slate-500 text-sm">Founder, SmartProducts Ltd</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let us help you source quality products from verified Chinese manufacturers.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;