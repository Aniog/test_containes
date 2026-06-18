import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Clock,
  Shield,
  Users,
  Star,
  Quote
} from 'lucide-react'

const PageHeader = ({ title, subtitle }) => (
  <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-gray-200 max-w-2xl">{subtitle}</p>
    </div>
  </section>
)

const CaseStudyCard = ({ caseStudy }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
    <div className="h-48 bg-[#1E3A5F] relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <caseStudy.icon className="w-16 h-16 text-white/30" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <span className="text-white text-sm font-medium">{caseStudy.industry}</span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">{caseStudy.client}</h3>
      <p className="text-[#4A5568] text-sm mb-4">{caseStudy.description}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-[#F8FAFC] rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-[#E67E22]">{caseStudy.metrics.savings}</div>
          <div className="text-xs text-[#4A5568]">{caseStudy.metrics.savingsLabel}</div>
        </div>
        <div className="bg-[#F8FAFC] rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-[#10B981]">{caseStudy.metrics.time}</div>
          <div className="text-xs text-[#4A5568]">{caseStudy.metrics.timeLabel}</div>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4">
        <h4 className="text-sm font-semibold text-[#1A1A2E] mb-2">Challenge:</h4>
        <p className="text-sm text-[#4A5568] mb-3">{caseStudy.challenge}</p>
        <h4 className="text-sm font-semibold text-[#1A1A2E] mb-2">Solution:</h4>
        <p className="text-sm text-[#4A5568]">{caseStudy.solution}</p>
      </div>
    </div>
  </div>
)

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg relative">
    <Quote className="absolute top-6 left-6 w-10 h-10 text-[#E67E22]/20" />
    <div className="relative z-10">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-[#F59E0B] fill-current" />
        ))}
      </div>
      <p className="text-[#4A5568] mb-6 italic">"{testimonial.quote}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-[#1E3A5F] rounded-full flex items-center justify-center">
          <span className="text-white font-bold">{testimonial.initials}</span>
        </div>
        <div>
          <div className="font-semibold text-[#1A1A2E]">{testimonial.name}</div>
          <div className="text-sm text-[#718096]">{testimonial.position}</div>
        </div>
      </div>
    </div>
  </div>
)

const CaseStudies = () => {
  const caseStudies = [
    {
      icon: TrendingUp,
      industry: 'Home Goods',
      client: 'European Home Goods Retailer',
      description: 'Sourcing kitchenware and home decor products from verified Chinese factories.',
      metrics: {
        savings: '35%',
        savingsLabel: 'Cost Reduction',
        time: '4 weeks',
        timeLabel: 'Faster Delivery',
      },
      challenge: 'The client had difficulty finding reliable suppliers and managing quality consistency across multiple product categories. Previous attempts resulted in delayed shipments and quality issues.',
      solution: 'We conducted thorough factory verification, identified 5 qualified manufacturers, and implemented a rigorous quality control process. Regular factory visits and pre-shipment inspections ensured consistent quality.',
    },
    {
      icon: Shield,
      industry: 'Electronics',
      client: 'US Technology Company',
      description: 'Sourcing electronic components and accessories for their product line.',
      metrics: {
        savings: '25%',
        savingsLabel: 'Cost Savings',
        time: '50%',
        timeLabel: 'Faster Time-to-Market',
      },
      challenge: 'The client needed to source electronic components with specific technical specifications and certifications. They struggled to verify supplier capabilities and ensure product compliance.',
      solution: 'We verified factory technical capabilities, coordinated with certified testing labs, and established a quality control protocol. The client received compliant products that met all specifications.',
    },
    {
      icon: Clock,
      industry: 'Textiles',
      client: 'Australian Fashion Distributor',
      description: 'Sourcing garments and textiles for their retail stores.',
      metrics: {
        savings: '40%',
        savingsLabel: 'Cost Reduction',
        time: '100%',
        timeLabel: 'QC Pass Rate',
      },
      challenge: 'The client had experienced quality issues with previous suppliers, including sizing inconsistencies and fabric defects. They needed a partner who could ensure consistent quality.',
      solution: 'We implemented a comprehensive QC process including material inspection, during-production checks, and pre-shipment inspections. All shipments achieved 100% pass rate in the first year.',
    },
    {
      icon: Users,
      industry: 'Industrial Equipment',
      client: 'German Industrial Company',
      description: 'Sourcing machinery parts and industrial equipment.',
      metrics: {
        savings: '30%',
        savingsLabel: 'Procurement Savings',
        time: '6 weeks',
        timeLabel: 'Lead Time Reduction',
      },
      challenge: 'The client required specialized industrial components with precise technical specifications. Finding qualified suppliers and negotiating favorable terms was challenging.',
      solution: 'We identified specialized manufacturers, conducted technical capability assessments, and negotiated volume discounts. The client saved significantly while receiving products that exceeded quality standards.',
    },
    {
      icon: Star,
      industry: 'Sports & Outdoors',
      client: 'UK Sports Retailer',
      description: 'Sourcing fitness equipment and outdoor gear.',
      metrics: {
        savings: '45%',
        savingsLabel: 'Cost Reduction',
        time: '3x',
        timeLabel: 'Order Volume Increase',
      },
      challenge: 'The client wanted to expand their product range but lacked the resources to manage multiple suppliers and ensure quality across different categories.',
      solution: 'We established a network of verified suppliers across multiple product categories. Our quality control process ensured consistent quality, allowing the client to triple their order volume with confidence.',
    },
    {
      icon: CheckCircle,
      industry: 'Packaging',
      client: 'Canadian Packaging Company',
      description: 'Sourcing custom packaging materials for various industries.',
      metrics: {
        savings: '20%',
        savingsLabel: 'Material Cost Savings',
        time: '2 weeks',
        timeLabel: 'Faster Prototyping',
      },
      challenge: 'The client needed custom packaging solutions with specific design requirements. Coordinating between designers and manufacturers was time-consuming and often resulted in delays.',
      solution: 'We coordinated the entire process from design to production, including sample approval and quality checks. The client received high-quality packaging that met their exact specifications.',
    },
  ]

  const testimonials = [
    {
      quote: 'SSourcing China transformed our sourcing operations. Their factory verification process gave us confidence in our suppliers, and their quality control has been exceptional. We have reduced costs by 35% while improving product quality.',
      name: 'Michael Thompson',
      position: 'CEO, HomeGoods Plus (UK)',
      initials: 'MT',
    },
    {
      quote: 'Working with SSourcing China was a game-changer for our business. They helped us navigate the complexities of sourcing from China and delivered results beyond our expectations. Highly recommended!',
      name: 'Sarah Chen',
      position: 'Procurement Director, TechFlow Inc (USA)',
      initials: 'SC',
    },
    {
      quote: 'The team at SSourcing China understands the challenges of international sourcing. Their professionalism, attention to detail, and local presence in China have been invaluable to our business.',
      name: 'David Mueller',
      position: 'Managing Director, Industrial Solutions GmbH (Germany)',
      initials: 'DM',
    },
  ]

  const stats = [
    { number: '500+', label: 'Clients Worldwide' },
    { number: '8+', label: 'Years Experience' },
    { number: '2000+', label: 'Factories Verified' },
    { number: '98%', label: 'Client Satisfaction' },
  ]

  return (
    <>
      <PageHeader 
        title="Case Studies" 
        subtitle="Real success stories from clients who trusted us with their China sourcing"
      />

      {/* Stats */}
      <section className="py-16 bg-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#E67E22] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              See how we've helped businesses like yours succeed with China sourcing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={index} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              Feedback from businesses we've helped
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1E3A5F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join hundreds of satisfied clients who have transformed their sourcing operations
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#E67E22] text-white font-semibold rounded-lg hover:bg-[#D35400] transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default CaseStudies