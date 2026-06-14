import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/sonner'
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Truck,
  Globe,
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  Package,
  FileCheck2,
  Ship,
  MessageSquare,
  ChevronRight,
  Award,
  Clock,
  HeadphonesIcon,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable manufacturers in China that match your product requirements, budget, and quality standards.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-ground audits to verify business licenses, production capacity, quality systems, and social compliance.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, in-line, and pre-shipment inspections to catch defects before they reach your customers.',
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Regular factory visits and progress reports to keep your production on schedule and within spec.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'Consolidation, customs documentation, and freight forwarding to get your goods delivered efficiently.',
  },
  {
    icon: Globe,
    title: 'Sourcing Consultation',
    description: 'Market insights, cost optimization, and negotiation support to improve your sourcing strategy.',
  },
]

const processSteps = [
  { step: '01', title: 'Tell Us What You Need', description: 'Share product specs, target price, quantity, and timeline.' },
  { step: '02', title: 'We Source & Verify', description: 'We find matching suppliers and verify their credentials and capacity.' },
  { step: '03', title: 'Samples & Negotiation', description: 'We coordinate samples and negotiate terms on your behalf.' },
  { step: '04', title: 'Production & QC', description: 'We monitor production and conduct inspections at key stages.' },
  { step: '05', title: 'Shipping & Delivery', description: 'We handle logistics, documentation, and delivery to your door.' },
]

const productCategories = [
  'Electronics & Components',
  'Home & Kitchen',
  'Textiles & Apparel',
  'Hardware & Tools',
  'Gifts & Premiums',
  'Sports & Outdoors',
  'Beauty & Personal Care',
  'Toys & Hobbies',
  'Automotive Parts',
  'Packaging Materials',
]

const problems = [
  { title: 'Unreliable suppliers', description: 'We verify factories and monitor performance so you avoid bad partners.' },
  { title: 'Quality failures', description: 'Our QC inspections reduce defects and returns before shipment.' },
  { title: 'Hidden costs', description: 'We provide transparent quotes and help you optimize total landed cost.' },
  { title: 'Communication gaps', description: 'We bridge language and cultural gaps with clear, regular updates.' },
  { title: 'Shipping delays', description: 'We coordinate logistics proactively to keep your timeline on track.' },
  { title: 'Compliance risks', description: 'We check product standards and documentation for target markets.' },
]

const trustPoints = [
  { icon: Award, title: '10+ Years Experience', description: 'Deep expertise in China sourcing and supply chain management.' },
  { icon: Users, title: '500+ Verified Factories', description: 'A trusted network of audited manufacturers across industries.' },
  { icon: FileCheck2, title: 'ISO-Aligned QC', description: 'Inspection checklists aligned with international quality standards.' },
  { icon: Clock, title: 'Fast Turnaround', description: 'Efficient processes to move from inquiry to shipment without delays.' },
  { icon: HeadphonesIcon, title: 'Dedicated Support', description: 'A single point of contact who understands your business.' },
  { icon: Globe, title: 'Global Shipping', description: 'Experience with sea, air, rail, and express freight worldwide.' },
]

const caseStudies = [
  {
    title: 'Home Goods Importer',
    result: 'Reduced defect rate from 12% to under 2%',
    detail: 'Implemented in-line inspections and revised packaging standards for a US-based home goods brand.',
  },
  {
    title: 'Electronics Distributor',
    result: 'Cut supplier lead time by 18%',
    detail: 'Consolidated two suppliers into one verified partner with better capacity planning.',
  },
  {
    title: 'Promotional Products Buyer',
    result: 'Saved 22% on total landed cost',
    detail: 'Negotiated better terms, optimized packaging, and coordinated consolidated shipping.',
  },
]

const faqs = [
  { q: 'What does a sourcing agent do?', a: 'A sourcing agent helps you find suppliers, negotiate prices, inspect quality, and manage shipping so you can focus on selling.' },
  { q: 'How do you verify factories?', a: 'We conduct on-site audits, review business licenses, check production lines, and assess quality management systems.' },
  { q: 'What are your fees?', a: 'We typically charge a success fee or monthly retainer depending on project scope. Contact us for a custom quote.' },
  { q: 'Can you handle small orders?', a: 'Yes. We work with startups and small businesses as well as large enterprises.' },
  { q: 'Do you ship worldwide?', a: 'Yes. We coordinate shipping to most countries and can handle customs clearance support.' },
  { q: 'How long does the sourcing process take?', a: 'It varies by product, but most clients receive their first supplier options within 5–7 business days.' },
]

export default function Home() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  })
  const [status, setStatus] = React.useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')

    setTimeout(() => {
      setStatus('success')
      toast('Inquiry received. We will reply within 1 business day.')
      setFormData({ name: '', email: '', company: '', product: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 800)
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <Badge variant="secondary" className="mb-4">China Sourcing Agent for Global Buyers</Badge>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Source from China with confidence
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/contact">Get a Free Sourcing Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/how-it-works">See How It Works</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> Verified suppliers</span>
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> QC inspections</span>
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> End-to-end shipping</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <img
                  alt="China factory and quality control"
                  data-strk-img-id="hero-factory-img-8f2a9c"
                  data-strk-img="[hero-subtitle] [hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Trusted by 300+ buyers</div>
                    <div className="text-xs text-slate-500">Across 40+ countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">End-to-end sourcing services</h2>
            <p className="mt-3 text-slate-600">From supplier search to final delivery, we manage the full sourcing cycle so you can reduce risk and save time.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-900">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-3">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link to="/services" className="inline-flex items-center gap-2">
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">How sourcing works with us</h2>
            <p className="mt-3 text-slate-600">A clear, repeatable process designed to give you visibility and control at every stage.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-5">
            {processSteps.map((item) => (
              <Card key={item.step} className="relative">
                <CardHeader>
                  <div className="text-xs font-semibold text-slate-500">{item.step}</div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link to="/how-it-works" className="inline-flex items-center gap-2">
                Learn more <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Products we source</h2>
            <p className="mt-3 text-slate-600">We support a wide range of product categories with experienced sourcing specialists.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {productCategories.map((cat) => (
              <Badge key={cat} variant="secondary" className="px-3 py-1 text-xs">{cat}</Badge>
            ))}
          </div>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link to="/products" className="inline-flex items-center gap-2">
                Browse all categories <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Common sourcing problems we solve</h2>
            <p className="mt-3 text-slate-600">Many buyers face the same challenges when sourcing from China. Here is how we help.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Why buyers choose SSourcing China</h2>
            <p className="mt-3 text-slate-300">We combine local presence, proven processes, and transparent communication to earn long-term trust.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-950 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-800 text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Case studies</h2>
            <p className="mt-3 text-slate-600">Real results from real sourcing projects.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {caseStudies.map((cs) => (
              <Card key={cs.title}>
                <CardHeader>
                  <CardTitle>{cs.title}</CardTitle>
                  <CardDescription>{cs.detail}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-semibold text-green-700">{cs.result}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link to="/case-studies" className="inline-flex items-center gap-2">
                View all case studies <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Frequently asked questions</h2>
            <p className="mt-3 text-slate-600">Quick answers to common questions about working with a China sourcing agent.</p>
          </div>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-white py-16 md:py-24" id="inquiry">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Get a free sourcing quote</h2>
              <p className="mt-3 text-slate-600">Tell us about your product and requirements. We will reply within 1 business day with a tailored proposal.</p>
              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <p className="inline-flex items-center gap-2"><MessageSquare className="h-4 w-4" /> No commitment required</p>
                <p className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Your information is confidential</p>
                <p className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> Response within 1 business day</p>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Submit your inquiry</CardTitle>
                <CardDescription>Fields marked with * are required.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full name *</Label>
                      <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work email *</Label>
                      <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder="you@company.com" />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Company name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product">Product category</Label>
                      <Input id="product" value={formData.product} onChange={(e) => setFormData({ ...formData, product: e.target.value })} placeholder="e.g. electronics" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Project details *</Label>
                    <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required placeholder="Describe your product, target price, quantity, and timeline." rows={5} />
                  </div>
                  <Button type="submit" className="w-full" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending…' : 'Send inquiry'}
                  </Button>
                  {status === 'success' && (
                    <p className="text-sm text-green-700">Thanks! We received your inquiry and will reply within 1 business day.</p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
