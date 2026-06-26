import React, { useState } from 'react'
import { Menu, X, ArrowRight, CheckCircle, Users, Award, Truck, Shield, Clock, MapPin, Phone, Mail } from 'lucide-react'
import { Toaster, toast } from 'sonner'

const cn = (...classes) => classes.filter(Boolean).join(' ')

const Button = ({ children, className = '', variant = 'default', size = 'default', ...props }) => {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
  const variants = {
    default: 'bg-slate-900 text-white hover:bg-slate-800',
    outline: 'border border-slate-300 bg-white hover:bg-slate-50 text-slate-900',
    ghost: 'hover:bg-slate-100 text-slate-900'
  }
  const sizes = {
    default: 'h-10 px-4 py-2 text-sm',
    lg: 'h-12 px-6 py-3 text-base',
    sm: 'h-9 px-3 py-1.5 text-sm'
  }
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}

const Card = ({ children, className = '' }) => (
  <div className={cn('rounded-lg border border-slate-200 bg-white shadow-sm', className)}>{children}</div>
)

const Input = ({ className = '', ...props }) => (
  <input className={cn('flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400', className)} {...props} />
)

const Textarea = ({ className = '', ...props }) => (
  <textarea className={cn('flex min-h-[100px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400', className)} {...props} />
)

const Label = ({ children, className = '', ...props }) => (
  <label className={cn('text-sm font-medium text-slate-700', className)} {...props}>{children}</label>
)

const Badge = ({ children, className = '' }) => (
  <span className={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-slate-100 text-slate-800', className)}>{children}</span>
)

const SSourcingChina = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', product: '', quantity: '', message: ''
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'How It Works', page: 'how' },
    { label: 'Products', page: 'products' },
    { label: 'Case Studies', page: 'cases' },
    { label: 'Blog', page: 'blog' },
    { label: 'Contact', page: 'contact' }
  ]

  const services = [
    { icon: Users, title: 'Supplier Sourcing', desc: 'Identify and qualify reliable manufacturers matching your specifications.' },
    { icon: Shield, title: 'Factory Verification', desc: 'On-site audits, license checks, and capability assessments.' },
    { icon: Award, title: 'Quality Inspection', desc: 'Pre-shipment, during-production, and final random inspections.' },
    { icon: Clock, title: 'Production Monitoring', desc: 'Weekly progress reports and timeline management.' },
    { icon: Truck, title: 'Logistics Coordination', desc: 'Freight booking, customs documentation, and delivery tracking.' }
  ]

  const process = [
    { step: '01', title: 'Inquiry', desc: 'Submit your product requirements and target specifications.' },
    { step: '02', title: 'Sourcing', desc: 'We shortlist 3-5 qualified suppliers within 5-7 business days.' },
    { step: '03', title: 'Verification', desc: 'Factory audits and sample evaluation before order placement.' },
    { step: '04', title: 'Production', desc: 'Order management with milestone inspections and updates.' },
    { step: '05', title: 'Shipping', desc: 'Export documentation, freight booking, and final delivery.' }
  ]

  const products = [
    'Consumer Electronics & Accessories', 'Home & Kitchen Appliances', 'Textiles & Apparel', 'Industrial Components & Machinery',
    'Furniture & Home Decor', 'Automotive Parts & Accessories', 'Packaging Materials', 'Building & Construction Supplies'
  ]

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory legitimacy and production capabilities',
    'Quality issues discovered only after goods arrive',
    'Communication barriers and time zone challenges',
    'Complex export documentation and shipping logistics'
  ]

  const trustPoints = [
    { number: '12+', label: 'Years Experience' },
    { number: '850+', label: 'Factories Audited' },
    { number: '40+', label: 'Countries Served' },
    { number: '98%', label: 'On-Time Delivery' }
  ]

  const caseStudies = [
    { client: 'European Retail Chain', industry: 'Home Goods', result: 'Reduced defect rate from 8% to 1.2% through systematic QC protocols.', savings: '22% cost reduction' },
    { client: 'US E-commerce Brand', industry: 'Electronics', result: 'Successfully sourced 3 new OEM suppliers with verified production capacity.', savings: '15% lead time improvement' },
    { client: 'Australian Distributor', industry: 'Industrial', result: 'Established reliable supply chain for specialized components with consistent quality.', savings: '30% logistics savings' }
  ]

  const faqs = [
    { q: 'How do you verify factories?', a: 'We conduct on-site audits covering business licenses, production equipment, quality systems, and workforce capabilities. Reports include photos and video documentation.' },
    { q: 'What inspection standards do you follow?', a: 'We use AQL (Acceptable Quality Limit) sampling per ANSI/ASQ Z1.4 standards, with customizable inspection criteria based on your requirements.' },
    { q: 'How long does the sourcing process take?', a: 'Initial supplier shortlist is delivered within 5-7 business days. Full verification and sample evaluation typically requires 2-3 additional weeks.' },
    { q: 'Do you handle shipping and customs?', a: 'Yes. We coordinate freight forwarders, prepare export documentation, and provide guidance on import requirements for your destination country.' },
    { q: 'What are your service fees?', a: 'Our sourcing fee is 5-8% of order value depending on complexity. Inspection services are charged per man-day. Detailed quotes are provided after initial consultation.' }
  ]

  const blogPosts = [
    { title: '5 Key Questions to Ask Potential Suppliers', date: 'June 18, 2026', excerpt: 'Essential due diligence questions that reveal supplier reliability before you place your first order.' },
    { title: 'Understanding AQL: Quality Inspection Basics', date: 'June 12, 2026', excerpt: 'A practical guide to Acceptable Quality Limit sampling and how to set inspection criteria for your products.' },
    { title: 'Navigating Export Documentation from China', date: 'June 5, 2026', excerpt: 'Common export documents explained: commercial invoice, packing list, certificate of origin, and more.' }
  ]

  const validateForm = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = 'Name is required'
    if (!formData.company.trim()) errors.company = 'Company is required'
    if (!formData.email.trim()) errors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Invalid email format'
    if (!formData.product.trim()) errors.product = 'Product details are required'
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success('Inquiry submitted successfully. We will contact you within 24 hours.')
      setFormData({ name: '', company: '', email: '', phone: '', product: '', quantity: '', message: '' })
      setFormErrors({})
    }, 800)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const navigateTo = (page) => {
    setCurrentPage(page)
    setIsMenuOpen(false)
    window.scrollTo(0, 0)
  }

  const renderHome = () => (
    <>
      <section className="bg-slate-900 text-white pt-20 pb-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Badge className="mb-6 bg-white/10 text-white border-white/20">Established 2014 • China</Badge>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">China Sourcing Agent for Global Buyers</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">Professional sourcing, verification, and quality management services for overseas companies importing from China.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigateTo('contact')} className="bg-white text-slate-900 hover:bg-slate-100">Get a Free Sourcing Quote <ArrowRight className="ml-2 w-4 h-4" /></Button>
            <Button size="lg" variant="outline" onClick={() => navigateTo('how')} className="border-white text-white hover:bg-white/10">See How It Works</Button>
          </div>
        </div>
      </section>

      <section className="py-16 border-b">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustPoints.map((t, i) => (
              <div key={i}>
                <div className="text-4xl font-semibold text-slate-900 mb-1">{t.number}</div>
                <div className="text-sm text-slate-600">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Services We Provide</h2>
            <p className="text-slate-600 max-w-xl mx-auto">End-to-end support for buyers sourcing from China.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((s, i) => (
              <Card key={i} className="p-6">
                <s.icon className="w-8 h-8 text-slate-700 mb-4" />
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.desc}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" onClick={() => navigateTo('services')}>View All Services</Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Problems We Solve</h2>
              <ul className="space-y-4">
                {problems.map((p, i) => (
                  <li key={i} className="flex gap-3"><CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" /><span className="text-slate-700">{p}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 text-white p-8 rounded-xl">
              <h3 className="font-semibold mb-4 text-lg">Ready to Start?</h3>
              <p className="text-slate-300 mb-6">Submit your requirements and receive a detailed sourcing proposal within 24 hours.</p>
              <Button onClick={() => navigateTo('contact')} className="w-full bg-white text-slate-900 hover:bg-slate-100">Get a Free Quote</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-3">Recent Case Studies</h2>
          <p className="text-slate-600 mb-10">Results achieved for our clients.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((c, i) => (
              <Card key={i} className="p-6 text-left">
                <Badge className="mb-4">{c.industry}</Badge>
                <h4 className="font-semibold mb-2">{c.client}</h4>
                <p className="text-sm text-slate-600 mb-4">{c.result}</p>
                <div className="text-emerald-600 text-sm font-medium">{c.savings}</div>
              </Card>
            ))}
          </div>
          <Button variant="outline" className="mt-8" onClick={() => navigateTo('cases')}>View All Case Studies</Button>
        </div>
      </section>
    </>
  )

  const renderServices = () => (
    <div className="pt-20 pb-16 max-w-5xl mx-auto px-6">
      <h1 className="text-4xl font-semibold mb-4">Our Services</h1>
      <p className="text-lg text-slate-600 mb-12 max-w-2xl">Comprehensive sourcing support from supplier identification through final delivery.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <Card key={i} className="p-8">
            <s.icon className="w-10 h-10 text-slate-700 mb-4" />
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-slate-600">{s.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderHow = () => (
    <div className="pt-20 pb-16 max-w-5xl mx-auto px-6">
      <h1 className="text-4xl font-semibold mb-4">How It Works</h1>
      <p className="text-lg text-slate-600 mb-12">A structured 5-step process ensuring transparency and control at every stage.</p>
      <div className="space-y-6">
        {process.map((p, i) => (
          <div key={i} className="flex gap-6 items-start border-l-2 border-slate-200 pl-8 pb-6 last:pb-0">
            <div className="text-3xl font-semibold text-slate-300 w-16 flex-shrink-0">{p.step}</div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
              <p className="text-slate-600">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <Button onClick={() => navigateTo('contact')}>Start Your Sourcing Project</Button>
      </div>
    </div>
  )

  const renderProducts = () => (
    <div className="pt-20 pb-16 max-w-5xl mx-auto px-6">
      <h1 className="text-4xl font-semibold mb-4">Products We Source</h1>
      <p className="text-lg text-slate-600 mb-10 max-w-2xl">We work across diverse product categories with established supplier networks.</p>
      <div className="grid md:grid-cols-2 gap-4">
        {products.map((p, i) => (
          <div key={i} className="flex items-center gap-3 p-4 border rounded-lg"><CheckCircle className="w-5 h-5 text-emerald-600" /><span>{p}</span></div>
        ))}
      </div>
      <div className="mt-12 p-8 bg-slate-50 rounded-xl">
        <h3 className="font-semibold mb-2">Don't see your product category?</h3>
        <p className="text-slate-600 mb-4">We source across 50+ categories. Contact us with your specific requirements.</p>
        <Button onClick={() => navigateTo('contact')}>Discuss Your Needs</Button>
      </div>
    </div>
  )

  const renderCases = () => (
    <div className="pt-20 pb-16 max-w-5xl mx-auto px-6">
      <h1 className="text-4xl font-semibold mb-4">Case Studies</h1>
      <p className="text-lg text-slate-600 mb-12">Real results for international buyers sourcing from China.</p>
      <div className="space-y-8">
        {caseStudies.map((c, i) => (
          <Card key={i} className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <Badge>{c.industry}</Badge>
                <h3 className="text-2xl font-semibold mt-2">{c.client}</h3>
              </div>
              <div className="text-emerald-600 font-medium">{c.savings}</div>
            </div>
            <p className="text-slate-700">{c.result}</p>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderBlog = () => (
    <div className="pt-20 pb-16 max-w-5xl mx-auto px-6">
      <h1 className="text-4xl font-semibold mb-4">Insights</h1>
      <p className="text-lg text-slate-600 mb-12">Practical guidance on sourcing from China.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((b, i) => (
          <Card key={i} className="p-6">
            <div className="text-xs text-slate-500 mb-3">{b.date}</div>
            <h3 className="font-semibold mb-3 leading-snug">{b.title}</h3>
            <p className="text-sm text-slate-600">{b.excerpt}</p>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderContact = () => (
    <div className="pt-20 pb-16 max-w-3xl mx-auto px-6">
      <h1 className="text-4xl font-semibold mb-4">Get a Free Sourcing Quote</h1>
      <p className="text-lg text-slate-600 mb-10">Tell us about your sourcing needs. We respond within one business day.</p>
      
      <Card className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleInputChange} className={formErrors.name ? 'border-red-400' : ''} />
              {formErrors.name && <p className="text-xs text-red-600 mt-1">{formErrors.name}</p>}
            </div>
            <div>
              <Label htmlFor="company">Company *</Label>
              <Input id="company" name="company" value={formData.company} onChange={handleInputChange} className={formErrors.company ? 'border-red-400' : ''} />
              {formErrors.company && <p className="text-xs text-red-600 mt-1">{formErrors.company}</p>}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} className={formErrors.email ? 'border-red-400' : ''} />
              {formErrors.email && <p className="text-xs text-red-600 mt-1">{formErrors.email}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="product">Product / Category *</Label>
              <Input id="product" name="product" value={formData.product} onChange={handleInputChange} placeholder="e.g., LED lighting components" className={formErrors.product ? 'border-red-400' : ''} />
              {formErrors.product && <p className="text-xs text-red-600 mt-1">{formErrors.product}</p>}
            </div>
            <div>
              <Label htmlFor="quantity">Estimated Quantity</Label>
              <Input id="quantity" name="quantity" value={formData.quantity} onChange={handleInputChange} placeholder="e.g., 5,000 units" />
            </div>
          </div>
          <div>
            <Label htmlFor="message">Additional Details</Label>
            <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Specifications, target price, timeline, or other requirements..." />
          </div>
          <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          </Button>
          <p className="text-xs text-center text-slate-500">Your information is confidential. We respond within 24 hours.</p>
        </form>
      </Card>

      <div className="mt-12 grid md:grid-cols-3 gap-6 text-sm">
        <div className="flex gap-3"><MapPin className="w-5 h-5 text-slate-400 flex-shrink-0" /><div><div className="font-medium">Headquarters</div><div className="text-slate-600">Shenzhen, Guangdong, China</div></div></div>
        <div className="flex gap-3"><Mail className="w-5 h-5 text-slate-400 flex-shrink-0" /><div><div className="font-medium">Email</div><div className="text-slate-600">inquiry@ssourcingchina.com</div></div></div>
        <div className="flex gap-3"><Phone className="w-5 h-5 text-slate-400 flex-shrink-0" /><div><div className="font-medium">Phone</div><div className="text-slate-600">+86 755 8888 0000</div></div></div>
      </div>
    </div>
  )

  const renderFAQ = () => (
    <div className="max-w-3xl mx-auto px-6 py-16 border-t">
      <h2 className="text-2xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((f, i) => (
          <div key={i} className="border-l-2 border-slate-200 pl-6">
            <h4 className="font-medium mb-1">{f.q}</h4>
            <p className="text-sm text-slate-600">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  )

  const renderPage = () => {
    switch (currentPage) {
      case 'services': return renderServices()
      case 'how': return renderHow()
      case 'products': return renderProducts()
      case 'cases': return renderCases()
      case 'blog': return renderBlog()
      case 'contact': return renderContact()
      default: return renderHome()
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Toaster position="top-center" richColors closeButton />
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateTo('home')}>
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center"><span className="text-white text-sm font-bold">SS</span></div>
            <span className="font-semibold tracking-tight">SSourcing China</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((l, i) => (
              <button key={i} onClick={() => navigateTo(l.page)} className={cn('hover:text-slate-600 transition-colors', currentPage === l.page && 'text-slate-900 font-medium')}>{l.label}</button>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <Button size="sm" onClick={() => navigateTo('contact')}>Get Quote</Button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white px-6 py-4 space-y-3 text-sm">
            {navLinks.map((l, i) => (
              <button key={i} onClick={() => navigateTo(l.page)} className="block w-full text-left py-1.5">{l.label}</button>
            ))}
          </div>
        )}
      </nav>

      {renderPage()}
      
      {currentPage !== 'contact' && renderFAQ()}

      <footer className="bg-slate-900 text-slate-400 py-12 text-sm">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-white/10 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">SS</span></div>
              <span className="text-white font-medium">SSourcing China</span>
            </div>
            <p className="max-w-xs">Professional China sourcing services for international buyers since 2014.</p>
          </div>
          <div className="md:text-right text-xs space-y-1">
            <div>Shenzhen, Guangdong, China</div>
            <div>inquiry@ssourcingchina.com</div>
            <div>+86 755 8888 0000</div>
            <div className="pt-2">© 2026 SSourcing China. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SSourcingChina
