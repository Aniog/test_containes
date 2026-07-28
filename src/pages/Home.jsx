import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Search,
  ShieldCheck,
  ClipboardList,
  Ship,
  Factory,
  CheckCircle2,
  ArrowRight,
  Star,
  Globe,
  Users,
  PackageCheck,
  MessageSquare,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable manufacturers that match your product requirements, budget, and quality standards.',
    icon: Search,
  },
  {
    title: 'Factory Verification',
    description: 'On-site audits to confirm factory legitimacy, capacity, certifications, and production capabilities.',
    icon: ShieldCheck,
  },
  {
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to reduce defects and returns.',
    icon: ClipboardList,
  },
  {
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including consolidation, customs documentation, and freight forwarding.',
    icon: Ship,
  },
]

const process = [
  { step: '1', title: 'Share Requirements', description: 'Tell us your product specs, target price, and timeline.' },
  { step: '2', title: 'We Source Suppliers', description: 'We shortlist qualified factories and share profiles.' },
  { step: '3', title: 'Verify & Inspect', description: 'We audit factories and inspect samples or production runs.' },
  { step: '4', title: 'Order & Ship', description: 'We coordinate production, QC, and logistics to your door.' },
]

const problems = [
  'Unreliable suppliers or middlemen',
  'Hidden costs and unclear pricing',
  'Quality issues and inconsistent standards',
  'Delayed shipments and poor communication',
  'Complex customs and logistics',
]

const trustPoints = [
  { icon: Globe, title: 'Global Buyers Served', description: 'Experience supporting buyers from North America, Europe, Australia, and Asia.' },
  { icon: Factory, title: 'Factory Network', description: 'Access to verified manufacturers across multiple industries in China.' },
  { icon: Users, title: 'Dedicated Support', description: 'A single point of contact for sourcing, QC, and shipping.' },
  { icon: PackageCheck, title: 'Transparent Process', description: 'Clear reporting, photos, videos, and documentation at every stage.' },
]

const faqs = [
  {
    question: 'What industries do you support?',
    answer: 'We support consumer electronics, home goods, textiles, hardware, packaging, and more. If you can manufacture it in China, we can likely help source it.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We use a combination of business registration checks, on-site factory visits, capability assessments, and reference checks before recommending a supplier.',
  },
  {
    question: 'What inspection standards do you use?',
    answer: 'We follow internationally recognized inspection protocols including AQL sampling, functional testing, and packaging checks. We also customize checks to your product category.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes. We coordinate freight, prepare shipping documents, and work with customs brokers to help clear goods for import.',
  },
  {
    question: 'How much does your service cost?',
    answer: 'Fees depend on project scope, product category, and required services. We provide clear quotes after reviewing your requirements.',
  },
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">China Sourcing Agent for Global Buyers</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Source from China with confidence
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <Link to="/contact">Get a Free Sourcing Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/how-it-works">See How It Works</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> Verified suppliers</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> Transparent pricing</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> End-to-end support</div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-slate-100 overflow-hidden">
                <img
                  alt="China sourcing and factory operations"
                  data-strk-img-id="home-hero-img-8f2a9c"
                  data-strk-img="[home-hero-subtitle] [home-hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <p id="home-hero-title" className="sr-only">China sourcing and factory operations</p>
              <p id="home-hero-subtitle" className="sr-only">Professional sourcing agent services</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-900 text-white">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">How our sourcing process works</h2>
              <p className="mt-3 text-slate-600">A structured workflow designed to reduce risk and keep your project on track.</p>
              <div className="mt-8 space-y-6">
                {process.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-900">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{item.title}</div>
                      <div className="text-sm text-slate-600">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link to="/how-it-works">View full process <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-slate-100 overflow-hidden">
                <img
                  alt="Sourcing process and factory review"
                  data-strk-img-id="home-process-img-9b2c1d"
                  data-strk-img="[home-process-subtitle] [home-process-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <p id="home-process-title" className="sr-only">Sourcing process and factory review</p>
              <p id="home-process-subtitle" className="sr-only">Structured sourcing workflow</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-slate-900">Problems we solve</h2>
          <p className="mt-3 text-slate-600">Common sourcing challenges and how we help you avoid them.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 p-4">
                <MessageSquare className="mt-0.5 h-5 w-5 text-slate-500" />
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-slate-900">Why buyers work with us</h2>
          <p className="mt-3 text-slate-600">Trust built on transparency, local expertise, and consistent execution.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white border border-slate-200 text-slate-900">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-4">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-slate-900">Case Studies</h2>
          <p className="mt-3 text-slate-600">Real examples of how we helped buyers source, inspect, and ship products from China.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Consumer Electronics', result: 'Reduced defect rate from 12% to under 2% through pre-shipment inspection.' },
              { title: 'Home & Kitchen', result: 'Consolidated 3 suppliers into 1 reliable partner and cut lead time by 18%.' },
              { title: 'Textiles & Apparel', result: 'Verified factory compliance and supported customs clearance for EU import.' },
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.result}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/case-studies">Read case study</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-slate-900">Frequently asked questions</h2>
          <p className="mt-3 text-slate-600">Quick answers to common questions about working with a China sourcing agent.</p>
          <div className="mt-8 max-w-3xl">
            <Accordion type="single" collapsible>
              {faqs.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Ready to source with confidence?</h2>
              <p className="mt-3 text-slate-600">Tell us what you need. We’ll prepare a practical sourcing plan and quote.</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2"><Star className="mt-0.5 h-4 w-4 text-yellow-500" /> No-obligation quote</li>
                <li className="flex items-start gap-2"><Star className="mt-0.5 h-4 w-4 text-yellow-500" /> Clear next steps and timeline</li>
                <li className="flex items-start gap-2"><Star className="mt-0.5 h-4 w-4 text-yellow-500" /> Direct communication with your sourcing specialist</li>
              </ul>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/contact">Get a Free Sourcing Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-slate-100 overflow-hidden">
                <img
                  alt="Shipping container and logistics coordination"
                  data-strk-img-id="home-cta-img-3e4f5a"
                  data-strk-img="[home-cta-subtitle] [home-cta-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <p id="home-cta-title" className="sr-only">Shipping container and logistics coordination</p>
              <p id="home-cta-subtitle" className="sr-only">End-to-end shipping support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
