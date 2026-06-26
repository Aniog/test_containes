import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Factory,
  Search,
  ClipboardCheck,
  Truck,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Package
} from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories,
              inspect quality, follow production, and coordinate shipping from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6">
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-6">
                  Learn How It Works
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-6 text-sm text-blue-200">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                <span>500+ Successful Projects</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                <span>98% Client Satisfaction</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                <span>10+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive sourcing solutions to help you buy from China with confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="h-10 w-10 text-blue-600" />,
                title: 'Supplier Sourcing',
                description: 'We identify and evaluate reliable suppliers based on your requirements, product specifications, and quality standards.'
              },
              {
                icon: <Factory className="h-10 w-10 text-blue-600" />,
                title: 'Factory Audit & Verification',
                description: 'On-site factory audits to verify manufacturing capabilities, certifications, and production capacity.'
              },
              {
                icon: <ClipboardCheck className="h-10 w-10 text-blue-600" />,
                title: 'Quality Control Inspection',
                description: 'Pre-production, during production, and pre-shipment inspections to ensure product quality meets your standards.'
              },
              {
                icon: <Package className="h-10 w-10 text-blue-600" />,
                title: 'Production Monitoring',
                description: 'Regular updates and monitoring throughout the production process to ensure timelines and quality.'
              },
              {
                icon: <Truck className="h-10 w-10 text-blue-600" />,
                title: 'Shipping & Logistics',
                description: 'Coordinate shipping, handle customs documentation, and ensure smooth delivery to your door.'
              },
              {
                icon: <Shield className="h-10 w-10 text-blue-600" />,
                title: 'Price Negotiation',
                description: 'Leverage our expertise to negotiate the best prices and payment terms with suppliers.'
              }
            ].map((service, index) => (
              <Card key={index} className="border-2 hover:border-blue-600 transition-colors">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 6-step process to ensure successful sourcing from China
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Understand Your Needs',
                description: 'We start by understanding your product requirements, quality standards, target price, and timeline.'
              },
              {
                step: '02',
                title: 'Supplier Identification',
                description: 'We search our database and network to find suppliers that match your requirements.'
              },
              {
                step: '03',
                title: 'Factory Verification',
                description: 'On-site audits to verify the supplier\'s capabilities, certifications, and legitimacy.'
              },
              {
                step: '04',
                title: 'Sample & Quotation',
                description: 'We help you get samples and detailed quotations for comparison and evaluation.'
              },
              {
                step: '05',
                title: 'Quality Inspection',
                description: 'Rigorous quality checks at different production stages to ensure standards are met.'
              },
              {
                step: '06',
                title: 'Shipping & Delivery',
                description: 'We coordinate logistics, handle documentation, and ensure safe delivery to your warehouse.'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-5xl font-bold text-blue-100 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 5 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-300">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="text-lg">
                View Detailed Process
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Products We Source
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have experience sourcing a wide range of products across various industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Electronics & Gadgets',
              'Home & Garden',
              'Fashion & Accessories',
              'Toys & Gifts',
              'Automotive Parts',
              'Industrial Equipment',
              'Packaging & Printing',
              'Textiles & Fabrics',
              'Furniture & Home Decor',
              'Sports & Outdoor',
              'Beauty & Personal Care',
              'Food & Beverage'
            ].map((product, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer"
              >
                <p className="font-medium text-gray-900">{product}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" variant="outline" className="text-lg">
                View All Product Categories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Problems We Solve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common challenges faced by buyers and how we help overcome them
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                problem: 'Finding Reliable Suppliers',
                solution: 'We have a verified network of suppliers and conduct thorough factory audits to ensure legitimacy and capability.'
              },
              {
                problem: 'Quality Control Issues',
                solution: 'Our experienced QC team conducts inspections at every production stage to ensure products meet your specifications.'
              },
              {
                problem: 'Communication Barriers',
                solution: 'We bridge the language and cultural gap, ensuring clear communication between you and suppliers.'
              },
              {
                problem: 'Shipping & Logistics Complexity',
                solution: 'We handle all logistics, customs documentation, and coordinate with freight forwarders for smooth delivery.'
              },
              {
                problem: 'Unclear Pricing & Hidden Costs',
                solution: 'We provide transparent pricing breakdowns and negotiate the best terms on your behalf.'
              },
              {
                problem: 'Production Delays',
                solution: 'We monitor production progress and proactively address issues to keep your project on schedule.'
              }
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.problem}
                  </h3>
                  <p className="text-gray-600">{item.solution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SSourcing China
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                number: '500+',
                label: 'Successful Projects'
              },
              {
                icon: <Globe className="h-8 w-8 text-blue-600" />,
                number: '50+',
                label: 'Countries Served'
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
                number: '98%',
                label: 'Client Satisfaction'
              },
              {
                icon: <Star className="h-8 w-8 text-blue-600" />,
                number: '10+',
                label: 'Years Experience'
              }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real examples of how we've helped businesses source successfully from China
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'US Retailer Reduces Sourcing Costs by 30%',
                category: 'Home Decor',
                description: 'Helped a US-based home decor retailer identify reliable suppliers and reduce overall sourcing costs while maintaining quality.',
                result: '30% cost reduction, 98% quality pass rate'
              },
              {
                title: 'European E-commerce Seller Scales Production',
                category: 'Electronics',
                description: 'Supported a European Amazon seller in scaling from 1,000 to 10,000 units per month with consistent quality.',
                result: '10x production scale, zero quality complaints'
              },
              {
                title: 'Australian Startup Launches Product Line',
                category: 'Fitness Equipment',
                description: 'Guided an Australian startup from product concept to market launch, handling all sourcing and quality control.',
                result: 'Successful launch, 5-star customer reviews'
              }
            ].map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge className="mb-3">{study.category}</Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="bg-green-50 text-green-800 px-3 py-2 rounded-md text-sm font-medium">
                    {study.result}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/case-studies">
              <Button size="lg" variant="outline" className="text-lg">
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How does SSourcing China charge for its services?',
                answer: 'We typically charge a service fee based on the total order value or a fixed monthly retainer, depending on your sourcing needs. We provide transparent pricing with no hidden costs.'
              },
              {
                question: 'Do you work with small businesses or only large companies?',
                answer: 'We work with businesses of all sizes, from startups to Fortune 500 companies. Our services are scalable to match your sourcing volume and requirements.'
              },
              {
                question: 'How do you ensure product quality?',
                answer: 'We conduct quality inspections at three stages: pre-production (material check), during production (process check), and pre-shipment (final product check). We also help you define quality standards and specifications.'
              },
              {
                question: 'Can you help with shipping and customs clearance?',
                answer: 'Yes, we provide end-to-end logistics support including supplier pickup, freight forwarding, customs documentation, and delivery to your warehouse or Amazon FBA.'
              },
              {
                question: 'How long does the sourcing process take?',
                answer: 'The timeline varies depending on product complexity and order volume. Typically, supplier identification takes 1-2 weeks, sampling 2-3 weeks, and production 30-60 days. We provide a detailed timeline for each project.'
              },
              {
                question: 'Do I need to visit China to source products?',
                answer: 'No, you don\'t need to visit China. We act as your local representative, conducting factory visits, quality inspections, and negotiations on your behalf. We provide regular updates with photos and videos.'
              }
            ].map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-lg p-6">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
                  {faq.question}
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Inquiry Form Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Sourcing from China?
            </h2>
            <p className="text-xl text-blue-200">
              Get a free sourcing quote today. No obligations, no hidden costs.
            </p>
          </div>

          <Card className="bg-white text-gray-900">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="ABC Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                    Product You Want to Source *
                  </label>
                  <input
                    type="text"
                    id="product"
                    name="product"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Wireless earphones, Yoga mats, Kitchen gadgets"
                  />
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your sourcing needs: quantity, target price, quality requirements, timeline, etc."
                  ></textarea>
                </div>

                <div>
                  <Button type="submit" size="lg" className="w-full text-lg bg-blue-600 hover:bg-blue-700">
                    Get My Free Sourcing Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <p className="text-center text-sm text-gray-600">
                  By submitting this form, you agree to our privacy policy. We'll respond within 24 hours.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
