import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Factory, 
  TrendingUp, 
  Clock, 
  Shield,
  CheckCircle,
  Star
} from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 'european-retail',
      company: 'European Retail Brand',
      industry: 'Home Goods',
      location: 'Germany',
      challenge: 'A mid-sized European retail brand needed to establish a reliable supply chain for kitchenware products. They had previously experienced quality issues and inconsistent deliveries from their existing suppliers.',
      solution: 'We conducted a comprehensive supplier search, verified 15 factories through on-site audits, and established a rigorous quality control process. We also negotiated favorable payment terms and implemented regular production monitoring.',
      result: 'Reduced procurement costs by 25% while improving quality consistency. On-time delivery rate improved from 70% to 98%.',
      metrics: [
        { label: 'Cost Savings', value: '25%' },
        { label: 'On-Time Delivery', value: '98%' },
        { label: 'Factories Verified', value: '15' }
      ],
      testimonial: 'SSourcing China transformed our supply chain. Their verification process gave us confidence in our suppliers, and their QC inspections have virtually eliminated quality issues.',
      testimonialAuthor: 'Managing Director'
    },
    {
      id: 'us-tech-startup',
      company: 'US Tech Startup',
      industry: 'Electronics',
      location: 'United States',
      challenge: 'A Silicon Valley tech startup was launching their first consumer electronics product. They had no experience sourcing from China and needed end-to-end support from supplier identification to shipping.',
      solution: 'We provided full-service sourcing including supplier verification, sample evaluation, production monitoring, and quality inspection. Our team handled all communication with Chinese suppliers in Mandarin.',
      result: 'Successfully launched product on time and within budget. Zero quality issues in first production run. Product now available in 500+ retail locations.',
      metrics: [
        { label: 'Time to Market', value: '4 months' },
        { label: 'Quality Issues', value: '0' },
        { label: 'Retail Locations', value: '500+' }
      ],
      testimonial: 'As a first-time importer, I was nervous about sourcing from China. SSourcing China made the process seamless. Their team handled everything - I just received quality products at my warehouse.',
      testimonialAuthor: 'CEO & Founder'
    },
    {
      id: 'australian-distributor',
      company: 'Australian Distributor',
      industry: 'Furniture',
      location: 'Australia',
      challenge: 'An Australian furniture distributor needed to expand their supplier base with quality manufacturers who had experience exporting to Australia and could meet Australian safety standards.',
      solution: 'We identified and vetted factories with proven export track records to Australia. We coordinated sample testing for Australian compliance standards and established a pre-shipment inspection protocol.',
      result: 'Established a 3-year supply partnership. Delivery times to Australia reduced by 40%. Customer complaints decreased by 60%.',
      metrics: [
        { label: 'Delivery Time', value: '-40%' },
        { label: 'Customer Complaints', value: '-60%' },
        { label: 'Partnership', value: '3 years' }
      ],
      testimonial: 'The Australian market has specific requirements that many Chinese factories don\'t understand. SSourcing China bridge that gap perfectly. They ensured all products met our standards.',
      testimonialAuthor: 'Procurement Manager'
    },
    {
      id: 'uk-fashion-brand',
      company: 'UK Fashion Brand',
      industry: 'Apparel',
      location: 'United Kingdom',
      challenge: 'A UK fashion brand needed to source private-label clothing at competitive prices while maintaining high quality standards. They required factories that could handle small MOQs for their seasonal collections.',
      solution: 'We matched them with flexible manufacturers experienced in fashion/garments. We implemented a sample approval process and during-production inspections to ensure quality.',
      result: 'Successfully launched 3 clothing lines. Reduced cost per unit by 35% compared to previous supplier. Quality pass rate: 97%.',
      metrics: [
        { label: 'Cost Reduction', value: '35%' },
        { label: 'Quality Pass Rate', value: '97%' },
        { label: 'Lines Launched', value: '3' }
      ],
      testimonial: 'Fashion requires speed and flexibility. SSourcing China understood our needs and found factories that could work with our seasonal demands. Exceptional service.',
      testimonialAuthor: 'Creative Director'
    },
    {
      id: 'canadian-medical',
      company: 'Canadian Medical Supplier',
      industry: 'Medical Devices',
      location: 'Canada',
      challenge: 'A Canadian medical equipment supplier needed FDA and CE certified manufacturers for medical-grade products. They required strict quality documentation and traceability.',
      solution: 'We conducted specialized supplier audits focusing on medical device manufacturing capabilities. We coordinated with testing labs for certification and established comprehensive quality documentation.',
      result: 'Found certified manufacturers meeting all regulatory requirements. Achieved FDA registration for products. Zero regulatory issues in 2 years.',
      metrics: [
        { label: 'Regulatory Issues', value: '0' },
        { label: 'Certifications', value: 'FDA, CE' },
        { label: 'Years Partnership', value: '2+' }
      ],
      testimonial: 'Medical devices require strict compliance. SSourcing China\'s expertise in regulatory requirements saved us months of headaches. They found factories that truly understood medical-grade manufacturing.',
      testimonialAuthor: 'Quality Director'
    },
    {
      id: 'french-beauty',
      company: 'French Beauty Brand',
      industry: 'Cosmetics',
      location: 'France',
      challenge: 'A French cosmetics brand wanted to source private-label skincare products from China. They needed GMP-certified factories with experience in natural and organic formulations.',
      solution: 'We identified GMP-certified manufacturers specializing in natural cosmetics. We coordinated formulation development, sample testing, and EU compliance verification.',
      result: 'Launched 12 skincare products. All products passed EU cosmetic regulations testing. Customer satisfaction rating: 4.8/5.',
      metrics: [
        { label: 'Products Launched', value: '12' },
        { label: 'EU Compliance', value: '100%' },
        { label: 'Customer Rating', value: '4.8/5' }
      ],
      testimonial: 'European cosmetic regulations are strict. SSourcing China navigated the requirements perfectly. Our products are now sold across Europe with full regulatory compliance.',
      testimonialAuthor: 'Brand Manager'
    }
  ];

  const industries = ['All', 'Home Goods', 'Electronics', 'Furniture', 'Apparel', 'Medical Devices', 'Cosmetics'];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Real success stories from businesses we've helped with China sourcing. 
              See how we solve complex sourcing challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="grid lg:grid-cols-3">
                  {/* Main Content */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                        {study.industry}
                      </span>
                      <span className="ml-3 text-sm text-slate-500 flex items-center">
                        <Factory className="w-4 h-4 mr-1" />
                        {study.location}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{study.company}</h3>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">Challenge</h4>
                      <p className="text-slate-600">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">Solution</h4>
                      <p className="text-slate-600">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">Result</h4>
                      <p className="text-slate-600">{study.result}</p>
                    </div>
                  </div>

                  {/* Sidebar - Metrics & Testimonial */}
                  <div className="bg-slate-50 p-8 lg:border-l border-slate-200">
                    {/* Metrics */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-4">Key Results</h4>
                      <div className="space-y-4">
                        {study.metrics.map((metric, idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="text-slate-600">{metric.label}</span>
                            <span className="text-xl font-bold text-blue-600">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="border-t border-slate-200 pt-6">
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-slate-600 italic mb-4">"{study.testimonial}"</p>
                      <p className="text-sm font-medium text-slate-900">{study.testimonialAuthor}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Let's discuss how we can help you achieve similar results with your China sourcing.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Your Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;