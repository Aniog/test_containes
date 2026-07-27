import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Clock, DollarSign, Users, Package } from 'lucide-react'

const caseStudies = [
  {
    id: 'led-lighting',
    title: 'LED Lighting for US Retail Chain',
    client: 'Major US Retail Chain',
    industry: 'Electronics',
    challenge: 'The client needed to source 50,000 LED panel lights for their retail stores while maintaining UL certification standards and achieving significant cost savings.',
    solution: 'We identified and verified 5 potential suppliers, conducted factory audits, negotiated pricing, implemented quality control at every production stage, and coordinated shipping to multiple US locations.',
    results: [
      { icon: DollarSign, value: '35%', label: 'Cost Reduction' },
      { icon: Package, value: '50,000', label: 'Units Delivered' },
      { icon: Clock, value: '45 days', label: 'Lead Time' },
      { icon: TrendingUp, value: '99.2%', label: 'Quality Rate' },
    ],
    testimonial: {
      content: 'SSourcing China helped us reduce costs by 35% while maintaining the quality standards our customers expect. Their factory verification process gave us confidence in our supplier choice.',
      author: 'John Smith',
      role: 'Procurement Director',
    },
    tags: ['Electronics', 'Bulk Order', 'Quality Control', 'Shipping'],
  },
  {
    id: 'furniture-collection',
    title: 'Custom Furniture Line Development',
    client: 'European Home Brand',
    industry: 'Home & Garden',
    challenge: 'The client wanted to develop a complete furniture collection with custom designs, requiring prototype development, material sourcing, and production management across multiple product lines.',
    solution: 'We worked with the client\'s design team to develop prototypes, sourced sustainable materials, managed production across 3 factories, and implemented comprehensive quality control for all 200+ SKUs.',
    results: [
      { icon: DollarSign, value: '40%', label: 'Cost Savings' },
      { icon: Package, value: '200+', label: 'Product SKUs' },
      { icon: Clock, value: '60 days', label: 'Development' },
      { icon: TrendingUp, value: '100%', label: 'On-time Delivery' },
    ],
    testimonial: {
      content: 'The team at SSourcing managed our entire product development process flawlessly. From prototypes to production, they handled everything professionally and delivered on time.',
      author: 'Maria Garcia',
      role: 'Sourcing Director',
    },
    tags: ['Furniture', 'Custom Design', 'Product Development', 'Multiple Factories'],
  },
  {
    id: 'workwear-safety',
    title: 'High-Visibility Workwear Collection',
    client: 'Australian Safety Company',
    industry: 'Apparel',
    challenge: 'The client needed to source high-visibility workwear and safety equipment that complied with Australian safety standards (AS/NZS) while meeting strict quality requirements.',
    solution: 'We identified suppliers with experience in safety wear manufacturing, conducted compliance audits, sourced certified materials, implemented rigorous quality testing, and ensured all products met Australian standards.',
    results: [
      { icon: DollarSign, value: '30%', label: 'Cost Reduction' },
      { icon: Package, value: '10,000+', label: 'Units/Month' },
      { icon: Clock, value: '30 days', label: 'First Order' },
      { icon: TrendingUp, value: '100%', label: 'Compliance Rate' },
    ],
    testimonial: {
      content: 'Finding a sourcing agent who understands Australian safety standards was crucial for us. SSourcing delivered products that met all compliance requirements at competitive prices.',
      author: 'David Chen',
      role: 'Operations Manager',
    },
    tags: ['Workwear', 'Safety Equipment', 'Compliance', 'Australian Standards'],
  },
  {
    id: 'kitchen-appliances',
    title: 'Kitchen Appliance Product Line',
    client: 'North American Distributor',
    industry: 'Home & Garden',
    challenge: 'The client wanted to launch a new line of kitchen appliances with custom branding, requiring OEM manufacturing, FDA compliance, and retail-ready packaging.',
    solution: 'We sourced FDA-compliant manufacturers, developed custom branding and packaging, implemented quality control for electrical safety, and coordinated container shipping to the client\'s distribution center.',
    results: [
      { icon: DollarSign, value: '45%', label: 'Cost Savings' },
      { icon: Package, value: '15', label: 'Product SKUs' },
      { icon: Clock, value: '75 days', label: 'Total Timeline' },
      { icon: TrendingUp, value: '98%', label: 'Quality Rate' },
    ],
    testimonial: {
      content: 'SSourcing helped us launch our kitchen appliance line with confidence. Their attention to quality and compliance was exceptional, and the cost savings exceeded our expectations.',
      author: 'Sarah Johnson',
      role: 'Product Manager',
    },
    tags: ['Kitchen Appliances', 'OEM', 'FDA Compliance', 'Retail Packaging'],
  },
  {
    id: 'industrial-parts',
    title: 'CNC Machined Parts Supply',
    client: 'European Manufacturing Company',
    industry: 'Machinery',
    challenge: 'The client needed a reliable supply of precision CNC machined parts with tight tolerances, requiring ISO certification and consistent quality for their production line.',
    solution: 'We identified ISO-certified CNC machining facilities, conducted technical capability assessments, implemented statistical quality control, and established a reliable supply chain with buffer inventory management.',
    results: [
      { icon: DollarSign, value: '25%', label: 'Cost Reduction' },
      { icon: Package, value: '50,000+', label: 'Parts/Quarter' },
      { icon: Clock, value: '14 days', label: 'Lead Time' },
      { icon: TrendingUp, value: '99.8%', label: 'Defect Rate' },
    ],
    testimonial: {
      content: 'The precision and consistency of the CNC parts we receive through SSourcing are excellent. They\'ve become an integral part of our supply chain.',
      author: 'Thomas Weber',
      role: 'Supply Chain Manager',
    },
    tags: ['CNC Parts', 'Precision Manufacturing', 'ISO Certified', 'Supply Chain'],
  },
  {
    id: 'promotional-products',
    title: 'Promotional Product Campaign',
    client: 'Global Marketing Agency',
    industry: 'Promotional',
    challenge: 'The client needed 100,000 custom promotional products for a global marketing campaign, requiring fast turnaround, consistent branding, and delivery to 15 countries.',
    solution: 'We sourced multiple suppliers for different product categories, implemented strict brand guidelines, coordinated production schedules, and managed international shipping logistics to all 15 destinations.',
    results: [
      { icon: DollarSign, value: '50%', label: 'Cost Savings' },
      { icon: Package, value: '100,000+', label: 'Products' },
      { icon: Clock, value: '21 days', label: 'Production' },
      { icon: TrendingUp, value: '15', label: 'Countries Served' },
    ],
    testimonial: {
      content: 'Managing a global promotional campaign is complex, but SSourcing made the sourcing and logistics seamless. They delivered quality products on time to all our destinations.',
      author: 'Emily Brown',
      role: 'Campaign Director',
    },
    tags: ['Promotional Products', 'Global Logistics', 'Fast Turnaround', 'Multi-destination'],
  },
]

export default function CaseStudies() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Case Studies</h1>
            <p className="body-large text-gray-300">
              Discover how we've helped businesses worldwide source quality products 
              from China with confidence and success.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="card overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Left - Summary */}
                  <div className="bg-gradient-to-br from-primary-900 to-primary-700 text-white p-8 lg:p-12">
                    <span className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                      {study.industry}
                    </span>
                    <h2 className="heading-3 mb-4">{study.title}</h2>
                    <p className="text-gray-300 mb-6">{study.client}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-3 py-1 bg-white/10 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Middle - Details */}
                  <div className="p-8 lg:p-12 lg:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">Challenge</h3>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">Solution</h3>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      {study.results.map((result) => (
                        <div key={result.label} className="text-center p-4 bg-gray-50 rounded-xl">
                          <result.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                          <div className="text-2xl font-bold text-foreground">{result.value}</div>
                          <div className="text-sm text-muted-foreground">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <p className="text-muted-foreground italic mb-4">
                        "{study.testimonial.content}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{study.testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{study.testimonial.role}</p>
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

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="section-title">
            <h2>Our Track Record</h2>
            <p>
              Numbers that reflect our commitment to delivering successful 
              sourcing outcomes for our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg font-semibold text-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-lg font-semibold text-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">30+</div>
              <div className="text-lg font-semibold text-foreground">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">10+</div>
              <div className="text-lg font-semibold text-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Want Similar Results?</h2>
          <p className="body-large text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your sourcing needs and discover how we can 
            help your business succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent text-lg px-8 py-4 group">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
