import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper, DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import strkImgConfig from '@/strk-img-config.json'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { 
  Shield, 
  Search, 
  ClipboardCheck, 
  Ship, 
  TrendingUp,
  CheckCircle,
  ChevronRight,
  FileText,
  Users,
  Globe,
  Clock,
  BarChart3,
  ArrowRight,
  Building2,
  Package,
  HeadphonesIcon,
  Award,
  Handshake,
  MessageSquare,
  ChevronDown,
  Send,
  Star
} from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and vet reliable manufacturers that match your product requirements, budget, and quality standards.',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    desc: 'On-site audits to verify supplier legitimacy, production capacity, certifications, and working conditions.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment inspections, during-production checks, and detailed reporting to ensure product quality.',
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-up',
    desc: 'Regular progress tracking, material verification, and timeline management throughout the manufacturing process.',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'End-to-end freight coordination, customs documentation, and last-mile delivery to your destination.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Ongoing Support',
    desc: 'Dedicated account management, issue resolution, and continuous supplier relationship management.',
  },
]

const process = [
  {
    step: '01',
    title: 'Submit Your Requirements',
    desc: 'Tell us about your product, target price, quality needs, and delivery timeline. We review and respond within 24 hours.',
  },
  {
    step: '02',
    title: 'Supplier Identification',
    desc: 'We search our verified database and conduct market research to find the best-fit suppliers for your specific needs.',
  },
  {
    step: '03',
    title: 'Factory Audit & Verification',
    desc: 'Our team visits shortlisted factories to verify capabilities, certifications, production lines, and quality systems.',
  },
  {
    step: '04',
    title: 'Sample & Negotiation',
    desc: 'We coordinate sampling, negotiate pricing and payment terms, and draft contracts that protect your interests.',
  },
  {
    step: '05',
    title: 'Production Management',
    desc: 'We monitor production milestones, conduct raw material checks, and perform in-process quality inspections.',
  },
  {
    step: '06',
    title: 'Inspection & Shipping',
    desc: 'Pre-shipment inspection, packaging verification, and full logistics coordination from factory to your warehouse.',
  },
]

const productCategories = [
  { name: 'Consumer Electronics', items: 'Smartphones, accessories, audio, wearables' },
  { name: 'Home & Kitchen', items: 'Appliances, cookware, storage, decor' },
  { name: 'Apparel & Textiles', items: 'Clothing, fabrics, accessories, footwear' },
  { name: 'Industrial Equipment', items: 'Machinery, tools, components, parts' },
  { name: 'Packaging & Printing', items: 'Boxes, labels, custom packaging' },
  { name: 'Furniture & Lighting', items: 'Home office, commercial, indoor & outdoor' },
  { name: 'Auto Parts & Accessories', items: 'Car parts, motorcycle, EV components' },
  { name: 'Pet Products', items: 'Supplies, food, toys, accessories' },
]

const problems = [
  {
    problem: 'You find suppliers but can\'t verify if they\'re legitimate.',
    solution: 'We conduct on-site factory audits, verify business licenses, and check trade references before you commit.',
  },
  {
    problem: 'Samples look great but mass production quality drops.',
    solution: 'We perform in-process inspections and raw material checks to catch issues early, not at the end.',
  },
  {
    problem: 'Communication barriers and time zone differences slow everything down.',
    solution: 'Our bilingual team manages all communication, so you get clear updates in your time zone.',
  },
  {
    problem: 'Shipping delays and customs issues disrupt your supply chain.',
    solution: 'We handle freight booking, documentation, and customs clearance to ensure on-time delivery.',
  },
  {
    problem: 'You\'re not sure if you\'re getting a fair price.',
    solution: 'With deep China market knowledge, we negotiate competitive pricing and transparent cost breakdowns.',
  },
  {
    problem: 'Minimum order quantities are too high for your business.',
    solution: 'We connect you with flexible suppliers and explore consolidation options to lower MOQs.',
  },
]

const trustPoints = [
  { icon: Building2, stat: '500+', label: 'Factories Verified' },
  { icon: Package, stat: '2,000+', label: 'Orders Managed' },
  { icon: Globe, stat: '30+', label: 'Countries Served' },
  { icon: Star, stat: '98%', label: 'Client Satisfaction' },
  { icon: Clock, stat: '8+', label: 'Years Experience' },
  { icon: Users, stat: '200+', label: 'Active Clients' },
]

const caseStudies = [
  {
    company: 'EuroTech GmbH',
    industry: 'Consumer Electronics',
    challenge: 'Needed reliable USB-C hub manufacturer in Shenzhen after previous supplier failed quality audits.',
    result: 'Found certified factory, negotiated 15% cost reduction, delivered 10,000 units on time.',
    badge: 'Cost Reduction',
  },
  {
    company: 'Pacific Home Goods',
    industry: 'Home & Kitchen',
    challenge: 'Wanted to source bamboo kitchenware but struggled to find suppliers meeting EU food safety standards.',
    result: 'Verified 3 qualified factories, passed all SGS tests, first order shipped in 6 weeks.',
    badge: 'Quality Compliance',
  },
  {
    company: 'Nordic Fitwear',
    industry: 'Apparel & Textiles',
    challenge: 'Scaling activewear line needed manufacturer with sustainable production capabilities.',
    result: 'Secured GOTS-certified factory, reduced lead time by 30%, maintained 99% quality rate.',
    badge: 'Sustainability',
  },
]

const faqs = [
  {
    q: 'How do you find suppliers?',
    a: 'We combine our database of pre-vetted manufacturers, online B2B platforms, trade shows, and industry connections. Every supplier goes through our verification process before being recommended.',
  },
  {
    q: 'What does a factory audit include?',
    a: 'Our audits cover business license verification, production capacity assessment, quality management systems, equipment inspection, workforce evaluation, and compliance with relevant certifications.',
  },
  {
    q: 'How much do your services cost?',
    a: 'We offer flexible pricing based on project scope. Contact us for a free consultation and we will provide a transparent quote with no hidden fees.',
  },
  {
    q: 'What if I am not satisfied with the supplier?',
    a: 'We stand behind our recommendations. If issues arise, we mediate between you and the supplier, and if needed, help find alternative options at no additional cost.',
  },
  {
    q: 'Do you handle all product categories?',
    a: 'We source across most manufacturing categories. Our team specializes in electronics, home goods, apparel, industrial equipment, packaging, and more. Contact us to discuss your specific product.',
  },
  {
    q: 'What is the typical timeline?',
    a: 'Timelines vary by product complexity. Generally, supplier identification takes 1-2 weeks, factory audits 1 week, sampling 2-4 weeks, and production 4-12 weeks. We provide detailed timelines upfront.',
  },
]

export default function Home() {
  const containerRef = useRef(null)
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: ''
  })

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const { data: response, error } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            product: formData.product,
            message: formData.message,
            source: 'homepage_form',
            status: 'new',
            created_at: new Date().toISOString(),
          },
        })

      if (error || response?.success === false) {
        const errMsg = Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(', ')
          : error?.message || 'Submission failed'
        toast.error(errMsg)
        setSubmitting(false)
        return
      }

      toast.success('Thank you! We will review your requirements and get back to you within 24 hours.')
      setFormData({ name: '', email: '', company: '', product: '', message: '' })
    } catch (err) {
      toast.error(err.message || 'Something went wrong. Please try again.')
    }
    setSubmitting(false)
  }

  return (
    <div ref={containerRef}>
      {/* ===== HERO ===== */}
      <section className="relative bg-brand-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            data-strk-bg-id="hero-bg-7d34fa"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            className="w-full h-full bg-cover bg-center"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <Badge variant="default" className="bg-accent-500/20 text-accent-200 border border-accent-500/30 mb-6">
              China Sourcing Agent for Global Buyers
            </Badge>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Your Trusted Partner in{' '}
              <span className="text-accent-400">China Sourcing</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-brand-200 leading-relaxed mb-10 max-w-2xl">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, 
              follow production, and coordinate shipping — so you can source from China with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="default" size="xl" className="bg-accent-500 hover:bg-accent-600 text-white shadow-lg shadow-accent-500/25">
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustPoints.map((point, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-brand-500">{point.stat}</div>
                <div className="text-sm text-gray-500 mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Sourcing Services</h2>
            <p className="text-lg text-gray-600">
              End-to-end support from supplier discovery to final delivery. We manage every step of your China sourcing journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-brand-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOURCING PROCESS ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Our Sourcing Process Works</h2>
            <p className="text-lg text-gray-600">
              A transparent, step-by-step approach that takes you from requirement to delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {process.map((step, i) => (
              <div key={i} className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                View Detailed Process
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS WE SOURCE ===== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Products We Source</h2>
            <p className="text-lg text-gray-600">
              We source across a wide range of categories. If it is manufactured in China, we can help you find it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {productCategories.map((cat, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 text-sm mb-1.5">{cat.name}</h3>
                  <p className="text-gray-500 text-xs">{cat.items}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Categories
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROBLEMS WE SOLVE ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Problems We Solve</h2>
            <p className="text-lg text-gray-600">
              Common challenges importers face when sourcing from China — and how we address them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((item, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-red-500 text-xs font-bold">!</span>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium mb-3 text-sm">{item.problem}</p>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <p className="text-gray-600 text-sm">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST POINTS ===== */}
      <section className="py-16 md:py-24 bg-brand-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With SSourcing China?</h2>
            <p className="text-lg text-brand-200">
              We combine local expertise with international standards to deliver results you can rely on.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Rigorous Verification', desc: 'Every supplier is vetted through on-site audits, license checks, and capability assessments before we recommend them.' },
              { icon: Award, title: 'Local Expertise', desc: 'Our team is based in Guangzhou with deep knowledge of China\'s manufacturing landscape and business practices.' },
              { icon: Handshake, title: 'No Conflicts of Interest', desc: 'We work for you, not suppliers. Our recommendations are based solely on your best interests.' },
              { icon: BarChart3, title: 'Data-Driven Decisions', desc: 'We provide detailed reports, photos, and documentation so you can make informed decisions.' },
              { icon: MessageSquare, title: 'Clear Communication', desc: 'Regular updates in English, with transparent reporting and instant access to your account manager.' },
              { icon: FileText, title: 'Full Documentation', desc: 'Comprehensive contracts, inspection reports, shipping documents — everything you need for compliance.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-brand-200 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
            <p className="text-lg text-gray-600">
              Real results from real clients. Here is how we have helped businesses like yours.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((cs, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <Badge variant="success" className="mb-3">{cs.badge}</Badge>
                  <div className="text-xs text-gray-500 mb-2">{cs.industry}</div>
                  <h3 className="font-bold text-gray-900 mb-3">{cs.company}</h3>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-sm text-gray-600">{cs.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Result</p>
                    <p className="text-sm text-gray-600">{cs.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/case-studies">
              <Button variant="outline" size="lg">
                View All Case Studies
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Answers to common questions about our China sourcing services.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-gray-900 text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INQUIRY FORM ===== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get a Free Sourcing Quote</h2>
              <p className="text-lg text-gray-600">
                Tell us about your sourcing needs and we will get back to you within 24 hours with a personalized plan.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name *</label>
                  <Input
                    required
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                  <Input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
                  <Input
                    placeholder="Your Company Ltd."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Product to Source *</label>
                  <Input
                    required
                    placeholder="e.g. Bluetooth speakers"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Tell us about your requirements *</label>
                <Textarea
                  required
                  placeholder="Describe your product, target quantity, budget range, quality requirements, and any specific certifications needed..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button type="submit" variant="default" size="lg" className="w-full" disabled={submitting}>
                <Send className="mr-2 w-4 h-4" />
                {submitting ? 'Submitting...' : 'Submit Sourcing Inquiry'}
              </Button>
              <p className="text-xs text-gray-400 text-center">
                We respect your privacy. Your information will never be shared with third parties.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}