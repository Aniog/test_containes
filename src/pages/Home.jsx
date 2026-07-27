import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { CheckCircle2, Factory, ShieldCheck, Ship, ClipboardCheck, Globe2, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  { title: 'Supplier Sourcing', description: 'Find vetted manufacturers and suppliers matched to your product, price, and quality requirements.', icon: Globe2 },
  { title: 'Factory Verification', description: 'On-site audits including business registration, production capacity, and compliance checks.', icon: Factory },
  { title: 'Quality Inspection', description: 'Pre-production, in-line, and pre-shipment inspections with clear reporting.', icon: ShieldCheck },
  { title: 'Shipping Coordination', description: 'Consolidation, freight forwarding, customs support, and door-to-door delivery options.', icon: Ship },
]

const problems = [
  'Unreliable suppliers and hidden costs',
  'Quality issues discovered after shipment',
  'Communication and timezone challenges',
  'Complex logistics and customs paperwork',
]

const trustPoints = [
  { title: 'On-Ground China Team', description: 'Local engineers and QC staff based in Shenzhen and surrounding manufacturing hubs.' },
  { title: 'Transparent Process', description: 'Clear milestones, documented inspections, and regular status updates.' },
  { title: 'Factory Network', description: 'Access to audited manufacturers across electronics, home goods, industrial parts, and more.' },
  { title: 'Buyer Protection', description: 'We help reduce risk with verification, inspection, and structured agreements.' },
]

const faqs = [
  { question: 'What products can you source?', answer: 'We support a wide range of categories including electronics, home goods, industrial components, textiles, and more. Tell us your product and we will confirm feasibility.' },
  { question: 'How do you verify suppliers?', answer: 'We conduct factory audits, review business licenses, check production capacity, and assess quality systems before recommending partners.' },
  { question: 'Do you handle shipping?', answer: 'Yes. We coordinate consolidation, freight forwarding, customs documentation, and delivery to your warehouse or final destination.' },
  { question: 'How long does the sourcing process take?', answer: 'Initial supplier shortlists are usually ready within 3-7 business days. Full verification and first shipment timelines depend on product complexity and factory schedules.' },
  { question: 'What inspection standards do you use?', answer: 'We use internationally recognized inspection criteria and can align with your specific requirements, including AQL-based sampling.' },
]

const Home = () => {
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
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-4">China Sourcing Agent for Global Buyers</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Source from China with less risk and more clarity
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact">
                  <Button size="lg">Get a Free Sourcing Quote</Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" size="lg">See How It Works</Button>
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
                <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> Verified suppliers</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> QC inspections</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> Shipping support</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <img
                  alt="Factory and shipping operations"
                  data-strk-img-id="home-hero-8f2a9c"
                  data-strk-img="[home-hero-subtitle] [home-hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <p id="home-hero-title" className="sr-only">China sourcing agent for global buyers</p>
              <p id="home-hero-subtitle" className="sr-only">Factory verification, quality control, and shipping coordination</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-900 text-white">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-3">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Problems we solve</h2>
              <p className="mt-3 text-slate-600">
                Many buyers face the same sourcing challenges. We reduce those risks with a structured, on-ground process.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {problems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ClipboardCheck className="mt-0.5 h-4 w-4 text-slate-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/services">
                  <Button>Explore Services <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {trustPoints.map((item) => (
                <Card key={item.title}>
                  <CardHeader>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Frequently asked questions</h2>
          <p className="mt-2 text-slate-600">Quick answers to common sourcing questions.</p>
          <div className="mt-8 max-w-3xl">
            <Accordion type="single" collapsible defaultValue="item-0">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900">Ready to source with confidence?</h2>
            <p className="mt-3 text-slate-600">
              Tell us what you need. We will prepare a tailored sourcing plan and quote.
            </p>
            <div className="mt-6">
              <Link to="/contact">
                <Button size="lg">Get a Free Sourcing Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
