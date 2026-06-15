import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ClipboardCheck, 
  FileText, 
  Shield, 
  Factory, 
  Truck,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';

const HowItWorksPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Our Sourcing Process Works
            </h1>
            <p className="text-xl text-blue-100">
              A proven 6-step process designed to ensure quality, reliability, and cost-effectiveness
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="mb-20">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-blue-700 text-white rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Understand Requirements</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    We start with a detailed discussion to understand your product specifications, 
                    quality standards, target price, order quantity, and timeline.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">What We Need From You:</h3>
                    <ul className="space-y-2">
                      {[
                        'Product specifications (technical drawings, samples, or detailed descriptions)',
                        'Quality standards and certifications required',
                        'Target price and annual volume',
                        'Preferred materials and components',
                        'Packaging requirements',
                        'Timeline and delivery deadline'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                      <span className="font-semibold">Timeline:</span> 1-2 days for initial consultation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-20">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-blue-700 text-white rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Supplier Identification</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    We search our extensive database of 2000+ verified suppliers and leverage our 
                    network to identify 3-5 qualified manufacturers that match your requirements.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Our Search Criteria:</h3>
                    <ul className="space-y-2">
                      {[
                        'Product specialization and experience',
                        'Production capacity and equipment',
                        'Quality certifications (ISO, CE, FDA, etc.)',
                        'Export experience to your target market',
                        'Financial stability and business reputation',
                        'Location and logistics advantages'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                      <span className="font-semibold">Timeline:</span> 3-5 days for supplier shortlist
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-20">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-blue-700 text-white rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Factory Verification & Audit</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Before recommending any supplier, we conduct comprehensive on-site audits to verify 
                    their capabilities, quality systems, and business legitimacy.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Audit Includes:</h3>
                    <ul className="space-y-2">
                      {[
                        'Business license and certification verification',
                        'Factory tour and production line inspection',
                        'Equipment and technology assessment',
                        'Quality control system evaluation',
                        'Workforce skill and capacity check',
                        'Social compliance and ethical manufacturing audit',
                        'Past client references and sample review'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                      <span className="font-semibold">Timeline:</span> 5-7 days for complete audit
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="mb-20">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-blue-700 text-white rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample & Quotation</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    We coordinate sample production and negotiate competitive pricing with the selected 
                    suppliers. You receive detailed quotations and sample products for evaluation.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">What You Receive:</h3>
                    <ul className="space-y-2">
                      {[
                        'Physical samples from each shortlisted supplier',
                        'Detailed price quotes with MOQ breakdown',
                        'Lead time and production capacity confirmation',
                        'Payment terms and incoterms negotiation',
                        'Comparison analysis of all options',
                        'Our recommendation with pros and cons'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                      <span className="font-semibold">Timeline:</span> 10-15 days for samples and quotes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="mb-20">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-blue-700 text-white rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                  5
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Production & Quality Control</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Once you approve the supplier and samples, we monitor production closely and conduct 
                    quality inspections at key stages to ensure your products meet specifications.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Our Monitoring Includes:</h3>
                    <ul className="space-y-2">
                      {[
                        'Regular factory visits during production',
                        'Weekly progress reports with photos/videos',
                        'Pre-production inspection (raw materials & components)',
                        'During production inspection (DUPRO) at 20-30% completion',
                        'Pre-shipment inspection (PSI) with AQL sampling',
                        'Final quality sign-off before shipment',
                        'Immediate issue escalation and resolution'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                      <span className="font-semibold">Timeline:</span> Varies by product (2-8 weeks typical)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="mb-20">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-blue-700 text-white rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                  6
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Shipping & Delivery</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    We coordinate the entire logistics process from factory pickup to delivery at your 
                    warehouse, including freight forwarding, customs clearance, and final delivery.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Logistics Services:</h3>
                    <ul className="space-y-2">
                      {[
                        'Freight forwarding (sea, air, or express)',
                        'Cargo booking and space reservation',
                        'Export documentation preparation',
                        'Customs clearance at origin and destination',
                        'Cargo insurance coordination',
                        'Real-time shipment tracking',
                        'Final delivery to your warehouse or fulfillment center',
                        'Amazon FBA shipment preparation (if needed)'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                      <span className="font-semibold">Timeline:</span> 7-40 days depending on shipping method
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline Visual */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Total Timeline Overview
            </h2>
            <p className="text-xl text-gray-600">
              Typical end-to-end sourcing timeline
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200"></div>

              {[
                { step: 'Week 1', title: 'Consultation & Requirements', desc: 'Understand your needs and specifications' },
                { step: 'Week 2', title: 'Supplier Search & Shortlisting', desc: 'Identify 3-5 qualified suppliers' },
                { step: 'Week 3', title: 'Factory Audits & Verification', desc: 'On-site assessments and reporting' },
                { step: 'Week 4-5', title: 'Samples & Quotations', desc: 'Coordinate samples and negotiate pricing' },
                { step: 'Week 6+', title: 'Production & QC', desc: 'Monitor production and inspect quality' },
                { step: 'Week 8-12', title: 'Shipping & Delivery', desc: 'Coordinate logistics and track shipment' }
              ].map((item, index) => (
                <div key={index} className="relative flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold z-10">
                    {index + 1}
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm flex-1">
                    <div className="text-sm text-blue-700 font-semibold mb-1">{item.step}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Can I skip some steps in the process?',
                answer: 'Yes, we offer flexible service packages. If you already have a supplier, we can provide factory audit, quality inspection, or shipping coordination only. We tailor our services to your needs.'
              },
              {
                question: 'How much does the service cost?',
                answer: 'Our service fee is typically 5-10% of the order value, depending on the complexity and scope. We also offer fixed-fee packages for smaller projects. Contact us for a customized quote.'
              },
              {
                question: 'What if I\'m not satisfied with the samples?',
                answer: 'We work with you to provide feedback to the supplier and coordinate improvements. If needed, we can source from alternative suppliers. Your satisfaction is our priority.'
              },
              {
                question: 'Do you handle small orders?',
                answer: 'Yes, we work with both small and large orders. While we specialize in orders of $10,000+, we can often negotiate lower MOQs with suppliers in our network.'
              }
            ].map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-lg p-6 group">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  {faq.question}
                  <ArrowRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-700 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. We'll create a customized sourcing plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-4">
              Get a Free Quote
            </Link>
            <a href="tel:+8613800000000" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 text-lg px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
