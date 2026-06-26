import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Factory, Truck, Star, TrendingDown, Shield } from 'lucide-react'

const CaseStudies = () => {
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    if (window.ImageHelper && containerRef.current) {
      window.ImageHelper.loadImages(window.strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
          <p className="text-lg text-gray-600">
            Real success stories from businesses we've helped source from China
          </p>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Case Study 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center justify-center">
                  <Factory className="w-32 h-32 text-blue-200" />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded">Home Decor & Furniture</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">US Home Decor Retailer Reduces Sourcing Costs by 30%</h2>
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Challenge:</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      A US-based home decor retailer needed to find reliable furniture suppliers in China with custom design capabilities.
                      They were struggling with inconsistent quality and communication barriers with existing suppliers.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Solution:</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We conducted thorough factory audits, identified 3 qualified suppliers, negotiated competitive pricing,
                      and implemented a multi-stage quality inspection process. We also provided regular production updates with photos.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Result:</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Reduced sourcing costs by 30% while maintaining quality standards. Improved communication and on-time delivery rate increased to 95%.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Furniture', 'Home Decor', 'Quality Control', 'Cost Reduction'].map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded">Electronics</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">German Electronics Brand Achieves 99.5% Quality Pass Rate</h2>
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Challenge:</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      A German electronics brand required strict quality control for electronic components.
                      Previous sourcing attempts resulted in high defect rates and customer complaints.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Solution:</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We implemented a rigorous supplier verification process, established clear quality standards,
                      conducted during-production inspections, and arranged third-party testing for all batches.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Result:</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Achieved 99.5% pass rate through rigorous inspection process. Zero customer complaints related to quality in 12 months.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Electronics', 'Quality Inspection', 'Testing', 'Components'].map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 bg-gray-50 rounded-lg p-8">
                <div className="flex items-center justify-center">
                  <Shield className="w-32 h-32 text-blue-200" />
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center justify-center">
                  <Truck className="w-32 h-32 text-blue-200" />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded">Fitness Equipment</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Australian Fitness Equipment Company Streamlines Shipping</h2>
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Challenge:</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      An Australian fitness equipment company needed to source specialized gym equipment with certifications
                      and manage shipping to 3 different warehouses across Australia.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Solution:</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We sourced certified fitness equipment manufacturers, coordinated product certifications,
                      managed consolidated shipping, and handled customs clearance and delivery to multiple locations.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Result:</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Successfully sourced certified products and managed shipping to 3 warehouses. Reduced logistics costs by 20% through consolidation.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Fitness', 'Shipping', 'Certifications', 'Logistics'].map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded">Fashion & Accessories</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">UK Fashion Brand Improves Supplier Reliability</h2>
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Challenge:</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      A UK fashion brand was experiencing delays and quality issues with their existing Chinese suppliers.
                      They needed a reliable partner to help them find better suppliers and manage production.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Solution:</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We conducted factory audits for 8 potential suppliers, helped them select the best 2,
                      negotiated improved payment terms, and provided weekly production updates with photos.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Result:</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Improved on-time delivery from 60% to 92%. Defect rate reduced from 8% to 2%. Established long-term relationship with 2 reliable suppliers.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Fashion', 'Supplier Verification', 'Production Monitoring', 'Quality'].map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 bg-gray-50 rounded-lg p-8">
                <div className="flex items-center justify-center">
                  <TrendingDown className="w-32 h-32 text-blue-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                company: 'Home Decor Retailer, USA',
                quote: 'SSourcing China helped us reduce costs and improve quality. Their team is professional and responsive.',
                rating: 5,
              },
              {
                name: 'Michael Weber',
                company: 'Electronics Brand, Germany',
                quote: 'The quality inspections gave us confidence in our orders. Highly recommend their services.',
                rating: 5,
              },
              {
                name: 'Sarah Johnson',
                company: 'Fitness Equipment, Australia',
                quote: 'They made sourcing from China easy. Great communication and attention to detail.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today and let's discuss how we can help you achieve your sourcing goals.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
