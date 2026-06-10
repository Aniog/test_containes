import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import InquiryForm from '@/components/sections/InquiryForm'
import { 
  CheckCircle, Shield, Truck, Users, Award, Clock, 
  Search, FileCheck, Package, Ship, ArrowRight 
} from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: Search,
      title: "Supplier Sourcing",
      description: "Identify and qualify manufacturers that match your product specifications, quality standards, and volume requirements."
    },
    {
      icon: Shield,
      title: "Factory Verification",
      description: "On-site audits to confirm legitimacy, production capacity, quality systems, and compliance with international standards."
    },
    {
      icon: FileCheck,
      title: "Quality Inspection",
      description: "Pre-shipment, during-production, and pre-production inspections to ensure products meet your specifications."
    },
    {
      icon: Package,
      title: "Production Monitoring",
      description: "Regular progress updates, milestone tracking, and issue resolution throughout the manufacturing process."
    },
    {
      icon: Ship,
      title: "Logistics Coordination",
      description: "Freight booking, customs documentation, and end-to-end shipping management to your destination."
    },
    {
      icon: Users,
      title: "Order Management",
      description: "End-to-end coordination including sampling, contract negotiation, payment terms, and delivery tracking."
    }
  ]

  const processSteps = [
    {
      number: "01",
      title: "Submit Your Requirements",
      description: "Share your product specifications, target price, quantity, and timeline through our inquiry form."
    },
    {
      number: "02",
      title: "Receive Supplier Shortlist",
      description: "Within 3-5 business days, we provide a curated list of 3-5 verified suppliers with pricing and capabilities."
    },
    {
      number: "03",
      title: "Factory Verification & Sampling",
      description: "We conduct on-site verification and coordinate samples for your approval before production begins."
    },
    {
      number: "04",
      title: "Production & Quality Control",
      description: "We monitor production milestones and conduct inspections at key stages to ensure quality compliance."
    },
    {
      number: "05",
      title: "Shipping & Delivery",
      description: "We coordinate logistics, documentation, and track your shipment until it reaches your warehouse."
    }
  ]

  const productCategories = [
    "Consumer Electronics & Accessories",
    "Home & Kitchen Products",
    "Apparel, Textiles & Accessories",
    "Industrial Components & Machinery",
    "Automotive Parts & Accessories",
    "Health, Beauty & Personal Care",
    "Toys, Games & Sporting Goods",
    "Furniture & Home Furnishings",
    "Packaging Materials & Supplies",
    "Building Materials & Hardware"
  ]

  const problems = [
    "Difficulty finding reliable manufacturers who meet quality and compliance standards",
    "Uncertainty about supplier legitimacy and actual production capabilities",
    "Quality issues discovered only after products arrive at your warehouse",
    "Communication barriers and time zone challenges with Chinese factories",
    "Complex logistics, documentation, and customs clearance processes",
    "No visibility into production progress until it's too late to make changes"
  ]

  const trustPoints = [
    { number: "12+", label: "Years in Operation" },
    { number: "850+", label: "Verified Suppliers" },
    { number: "2,400+", label: "Orders Managed" },
    { number: "48", label: "Countries Served" }
  ]

  const caseStudies = [
    {
      id: 1,
      title: "Kitchenware Brand Scales to 40,000 Units/Month",
      client: "European Home Goods Retailer",
      result: "Reduced defect rate from 8% to under 1% and shortened lead time by 3 weeks",
      category: "Home & Kitchen"
    },
    {
      id: 2,
      title: "US Importer Launches Private Label Electronics Line",
      client: "Consumer Electronics Distributor",
      result: "Successfully sourced 12 SKUs from 3 verified factories with full compliance documentation",
      category: "Electronics"
    },
    {
      id: 3,
      title: "Fashion Brand Secures Consistent Production Capacity",
      client: "Mid-Size Apparel Company",
      result: "Established reliable supply chain for seasonal collections with on-time delivery rate above 95%",
      category: "Apparel"
    }
  ]

  const faqs = [
    {
      q: "How much does your sourcing service cost?",
      a: "Our service is typically structured as a percentage of the order value or a fixed project fee, depending on the scope and complexity. We provide transparent pricing after understanding your requirements. There are no hidden fees."
    },
    {
      q: "How long does it take to find suitable suppliers?",
      a: "For standard products, we usually present a shortlist of qualified suppliers within 3-5 business days. More specialized or custom products may require additional time for research and verification."
    },
    {
      q: "Do you only work with large volume orders?",
      a: "We work with a range of order sizes. While many of our clients place container-load orders, we also support smaller trial orders and ongoing smaller-volume sourcing for businesses testing new products or markets."
    },
    {
      q: "How do you verify that factories are legitimate?",
      a: "We conduct on-site visits, review business licenses and export documentation, assess production equipment and capacity, interview management, and check references from other international buyers."
    },
    {
      q: "What if there is a quality issue with my order?",
      a: "We conduct pre-shipment inspections and work with factories to address issues before goods leave China. In the rare case of issues discovered after arrival, we assist with claims and work with the supplier on resolution."
    },
    {
      q: "Can you help with existing suppliers I already have?",
      a: "Yes. We can conduct verification audits on your current suppliers, implement quality control processes, or take over production monitoring and logistics coordination for existing relationships."
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sm mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              Serving international buyers since 2014
            </div>
            <h1 className="text-white mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              We help overseas companies find reliable Chinese suppliers, verify factories, 
              control quality, and manage production and shipping — so you can source with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#inquiry-form" className="cta-button cta-button-primary text-base">
                Get a Free Sourcing Quote
              </a>
              <Link to="/how-it-works" className="cta-button cta-button-secondary text-base border-white/30 text-white hover:bg-white/10">
                See How It Works
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> No upfront fees
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> 24-hour response
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> NDA available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-slate-200 bg-slate-50 py-6">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustPoints.map((stat, index) => (
              <div key={index}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section container">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold tracking-wider text-accent mb-2">WHAT WE DO</div>
          <h2 className="section-heading">End-to-End Sourcing Services</h2>
          <p className="section-subheading mx-auto">
            We manage the entire sourcing process so you can focus on your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="b2b-card p-6">
                <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-primary">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-8">
          <Link to="/services" className="inline-flex items-center text-accent font-medium hover:underline">
            View all services <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold tracking-wider text-accent mb-2">OUR APPROACH</div>
            <h2 className="section-heading">How Our Sourcing Process Works</h2>
            <p className="section-subheading mx-auto">
              A structured, transparent process designed to reduce risk and deliver results.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step flex gap-6 pb-8 last:pb-0">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
                  {step.number}
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-lg text-primary mb-1.5">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/how-it-works" className="inline-flex items-center text-accent font-medium hover:underline">
              Learn more about our process <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section id="products" className="section container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm font-semibold tracking-wider text-accent mb-2">PRODUCT EXPERTISE</div>
            <h2 className="section-heading mb-4">Products We Source</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We have experience sourcing across a wide range of product categories for 
              retailers, wholesalers, brands, and distributors worldwide.
            </p>
            <Link to="/products" className="inline-flex items-center text-accent font-medium hover:underline">
              Browse all categories <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {productCategories.map((category, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="text-sm font-semibold tracking-wider text-accent mb-2">COMMON CHALLENGES</div>
            <h2 className="section-heading">Problems We Help You Solve</h2>
            <p className="text-slate-600">
              Sourcing from China involves real risks. We help buyers avoid the most common and costly mistakes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {problems.map((problem, index) => (
              <div key={index} className="flex gap-3 bg-white p-5 rounded-lg border border-slate-200">
                <div className="text-red-500 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <p className="text-sm text-slate-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credentials */}
      <section className="section container">
        <div className="text-center mb-10">
          <h2 className="section-heading">Why International Buyers Trust Us</h2>
          <p className="section-subheading mx-auto">
            We operate with transparency, accountability, and a focus on long-term client relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">On-the-Ground Presence</h3>
            <p className="text-sm text-slate-600">Our team is based in China with direct access to factories across major manufacturing regions.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileCheck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Documented Processes</h3>
            <p className="text-sm text-slate-600">Every verification, inspection, and milestone is documented and shared with you in real time.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Responsive Communication</h3>
            <p className="text-sm text-slate-600">We provide regular updates and are available during your business hours, not just ours.</p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="section bg-slate-50">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <div className="text-sm font-semibold tracking-wider text-accent mb-2">RESULTS</div>
              <h2 className="section-heading">Recent Case Studies</h2>
            </div>
            <Link to="/case-studies" className="mt-4 md:mt-0 inline-flex items-center text-accent font-medium hover:underline">
              View all case studies <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <Link key={study.id} to="/case-studies" className="b2b-card p-6 block group">
                <div className="product-tag mb-4">{study.category}</div>
                <h3 className="font-semibold text-lg mb-3 text-primary group-hover:text-accent transition-colors">{study.title}</h3>
                <p className="text-sm text-slate-500 mb-3">{study.client}</p>
                <p className="text-sm text-slate-700 leading-relaxed">{study.result}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="text-slate-600">Answers to common questions from buyers new to sourcing from China.</p>
          </div>

          <div className="divide-y divide-slate-200">
            {faqs.map((faq, index) => (
              <details key={index} className="group py-1">
                <summary className="faq-question list-none">
                  {faq.q}
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>

          <div className="text-center mt-8 text-sm text-slate-600">
            Still have questions? <Link to="/contact" className="text-accent font-medium hover:underline">Contact us directly</Link>.
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-sm font-semibold tracking-wider text-blue-300 mb-2">START YOUR PROJECT</div>
              <h2 className="text-3xl font-semibold text-white mb-3">Get a Free Sourcing Quote</h2>
              <p className="text-slate-200">
                Tell us about your sourcing needs. Our team will review your requirements and respond within 24 hours.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-slate-900">
              <InquiryForm source="Homepage" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
