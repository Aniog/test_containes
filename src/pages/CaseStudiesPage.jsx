import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Package,
  Globe,
  FileText
} from 'lucide-react';

const CaseStudiesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-blue-100">
              Real success stories from our clients across different industries
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-20">
            {/* Case Study 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
                    Home Decor
                  </span>
                  <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full ml-2">
                    USA
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  US Retail Chain Reduces Defects by 85%
                </h2>
                <p className="text-gray-600 mb-6">
                  A major US retail chain needed a reliable supplier for ceramic vases with strict quality standards. 
                  Previous supplier had 30% defect rate.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Challenge:</h3>
                    <p className="text-gray-600">High defect rate (30%), inconsistent quality, missed deliveries with existing supplier.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Solution:</h3>
                    <ul className="space-y-2">
                      {[
                        'Conducted factory audit of 5 potential suppliers',
                        'Implemented 3-stage quality inspection process',
                        'Negotiated better pricing and terms',
                        'Set up production monitoring with weekly reports'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h3 className="font-semibold text-green-800 mb-2">Results:</h3>
                  <ul className="space-y-1">
                    {[
                      'Defect rate reduced from 30% to 4.5%',
                      '22% cost savings achieved',
                      'On-time delivery improved to 98%',
                      'Long-term supplier relationship established'
                    ].map((result, index) => (
                      <li key={index} className="text-green-700">✓ {result}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="bg-blue-50 rounded-xl p-8 mb-6">
                  <div className="text-5xl font-bold text-blue-700 mb-2">85%</div>
                  <div className="text-xl text-gray-700">Defect Reduction</div>
                </div>
                <div className="bg-green-50 rounded-xl p-8 mb-6">
                  <div className="text-5xl font-bold text-green-600 mb-2">22%</div>
                  <div className="text-xl text-gray-700">Cost Savings</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-8">
                  <div className="text-5xl font-bold text-purple-600 mb-2">98%</div>
                  <div className="text-xl text-gray-700">On-Time Delivery</div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
                      Electronics
                    </span>
                    <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full ml-2">
                      Germany
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    German E-commerce Saves 30% on Electronic Components
                  </h2>
                  <p className="text-gray-600 mb-6">
                    A German e-commerce company needed CE-certified electronic components at competitive prices 
                    for their private label products.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Challenge:</h3>
                      <p className="text-gray-600">Existing suppliers too expensive, needed CE certification, required small initial order quantity.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Solution:</h3>
                      <ul className="space-y-2">
                        {[
                          'Identified 4 suppliers with CE certification',
                          'Negotiated MOQ from 5,000 to 1,000 units',
                          'Coordinated sample testing and certification',
                          'Arranged consolidated shipping to reduce costs'
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <h3 className="font-semibold text-green-800 mb-2">Results:</h3>
                    <ul className="space-y-1">
                      {[
                        '30% cost reduction per unit',
                        'MOQ reduced by 80%',
                        'CE certification obtained',
                        'Annual savings of $150,000+'
                      ].map((result, index) => (
                        <li key={index} className="text-green-700">✓ {result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-8">
                  <div className="text-5xl font-bold text-blue-700 mb-2">30%</div>
                  <div className="text-xl text-gray-700">Cost Reduction</div>
                </div>
                <div className="bg-green-50 rounded-xl p-8">
                  <div className="text-5xl font-bold text-green-600 mb-2">80%</div>
                  <div className="text-xl text-gray-700">MOQ Reduction</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-8 col-span-2">
                  <div className="text-5xl font-bold text-purple-600 mb-2">$150K+</div>
                  <div className="text-xl text-gray-700">Annual Savings</div>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 grid grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-8">
                  <div className="text-5xl font-bold text-blue-700 mb-2">2 Weeks</div>
                  <div className="text-xl text-gray-700">Supplier Found</div>
                </div>
                <div className="bg-green-50 rounded-xl p-8">
                  <div className="text-5xl font-bold text-green-600 mb-2">90%</div>
                  <div className="text-xl text-gray-700">Quality Improvement</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-8 col-span-2">
                  <div className="text-5xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-xl text-gray-700">On-Spec Delivery</div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
                      Sports Equipment
                    </span>
                    <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full ml-2">
                      Australia
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Australian Brand Improves Quality by 90%
                  </h2>
                  <p className="text-gray-600 mb-6">
                    An Australian sports brand faced consistent quality issues with their existing supplier 
                    and needed an urgent replacement without disrupting their supply chain.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Challenge:</h3>
                      <p className="text-gray-600">Quality defects, delayed responses from supplier, needed new supplier urgently to meet seasonal demand.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Solution:</h3>
                      <ul className="space-y-2">
                        {[
                          'Emergency supplier search initiated',
                          'Found and verified new supplier in 2 weeks',
                          'Conducted accelerated quality inspection process',
                          'Coordinated express shipping for initial order'
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <h3 className="font-semibold text-green-800 mb-2">Results:</h3>
                    <ul className="space-y-1">
                      {[
                        'New supplier found and verified in 2 weeks',
                        'Quality defects reduced by 90%',
                        'Seasonal demand met on time',
                        '35% improvement in profit margin'
                      ].map((result, index) => (
                        <li key={index} className="text-green-700">✓ {result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Mitchell',
                company: 'Retail Chain, USA',
                quote: 'SSourcing China transformed our supply chain. Their quality inspections caught issues before shipment, saving us thousands in returns.',
                rating: 5
              },
              {
                name: 'Sarah Chen',
                company: 'E-commerce, Germany',
                quote: 'Professional, responsive, and truly care about our success. They negotiated better terms than we could achieve on our own.',
                rating: 5
              },
              {
                name: 'Michael Thompson',
                company: 'Sports Brand, Australia',
                quote: 'When we had a supplier crisis, they found us a new factory in 2 weeks. Lifesavers! Quality is now better than ever.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-700 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. Let's discuss how we can help you 
            achieve similar results for your business.
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-4">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
