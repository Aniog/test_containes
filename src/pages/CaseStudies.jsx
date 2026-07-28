import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CheckCircle2, ArrowRight, Factory, ShieldCheck, Ship } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const caseStudies = [
  {
    title: 'Reducing defects in consumer electronics',
    industry: 'Consumer Electronics',
    challenge: 'A North American buyer was receiving wireless earbuds with a 12% defect rate, mainly related to battery life and charging case fit.',
    actions: ['Introduced a pre-production inspection', 'Added during-production checks at key milestones', 'Implemented pre-shipment inspection with AQL sampling'],
    result: 'Defect rate dropped to under 2% within three production runs. The buyer also gained clearer documentation for future orders.',
  },
  {
    title: 'Consolidating suppliers for home goods',
    industry: 'Home & Kitchen',
    challenge: 'A European buyer was working with three different suppliers for similar kitchen products, leading to inconsistent quality and higher logistics costs.',
    actions: ['Audited all three factories', 'Compared capacity, quality systems, and pricing', 'Recommended one primary supplier with backup options'],
    result: 'The buyer consolidated to one reliable partner and reduced lead time by 18%. Quality consistency improved and logistics costs decreased.',
  },
  {
    title: 'Factory verification for textile imports',
    industry: 'Textiles & Apparel',
    challenge: 'An Australian buyer needed to confirm that a new apparel factory met compliance and social responsibility requirements before placing a large order.',
    actions: ['Conducted a factory audit covering licenses, certifications, and working conditions', 'Reviewed sample quality and production capacity', 'Provided a risk assessment report'],
    result: 'The buyer proceeded with confidence and successfully cleared customs. The factory later became a long-term partner.',
  },
  {
    title: 'Shipping coordination for industrial components',
    industry: 'Industrial Components',
    challenge: 'A buyer in the Middle East needed help coordinating consolidated shipments from multiple factories and preparing customs documentation.',
    actions: ['Consolidated cargo from three suppliers', 'Prepared commercial invoices, packing lists, and certificates of origin', 'Worked with a customs broker to pre-clear documentation'],
    result: 'The shipment arrived on schedule with no customs holds. The buyer now uses the same coordination process for repeat orders.',
  },
  {
    title: 'Improving packaging for fragile goods',
    industry: 'Home & Kitchen',
    challenge: 'A buyer reported high breakage rates for glassware during transit. The factory packaging was not sufficient for long-distance shipping.',
    actions: ['Reviewed packaging design and materials', 'Recommended improved inner support and outer carton specifications', 'Supervised a test pack and drop simulation'],
    result: 'Breakage rate fell significantly. The buyer updated packaging standards and shared them with the factory for future orders.',
  },
  {
    title: 'Supporting a new product category launch',
    industry: 'Consumer Electronics',
    challenge: 'A startup wanted to launch a new Bluetooth speaker but had no existing supplier relationships or quality benchmarks.',
    actions: ['Sourced multiple potential suppliers', 'Arranged sample production and testing', 'Conducted a factory audit and pre-shipment inspection'],
    result: 'The startup launched with a reliable supplier and a documented quality baseline. They returned for repeat orders with clearer requirements.',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <Badge variant="secondary" className="mb-4">Case Studies</Badge>
          <h1 className="text-4xl font-bold text-slate-900">Real results from real projects</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Examples of how we helped buyers reduce risk, improve quality, and streamline shipping from China.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((item) => (
              <Card key={item.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{item.industry}</Badge>
                  </div>
                  <CardTitle className="mt-2">{item.title}</CardTitle>
                  <CardDescription>{item.challenge}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4 text-sm text-slate-700">
                    <div>
                      <div className="font-semibold text-slate-900">What we did</div>
                      <ul className="mt-2 space-y-2">
                        {item.actions.map((action) => (
                          <li key={action} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Separator />
                    <div>
                      <div className="font-semibold text-slate-900">Result</div>
                      <p className="mt-1 text-slate-600">{item.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Want similar results?</h2>
              <p className="mt-3 text-slate-600">
                Tell us about your product, suppliers, and challenges. We’ll suggest a practical approach and quote.
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <Factory className="mt-0.5 h-5 w-5 text-slate-900" />
                  <div>
                    <div className="font-semibold">Supplier support</div>
                    <div className="text-slate-600">From search to selection, we help you find the right partner.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-slate-900" />
                  <div>
                    <div className="font-semibold">Quality assurance</div>
                    <div className="text-slate-600">Inspections and audits to reduce defects and returns.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Ship className="mt-0.5 h-5 w-5 text-slate-900" />
                  <div>
                    <div className="font-semibold">Shipping coordination</div>
                    <div className="text-slate-600">End-to-end logistics support from factory to destination.</div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/contact">Get a Free Sourcing Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-slate-100 overflow-hidden">
                <img
                  alt="Case study and factory inspection"
                  data-strk-img-id="casestudies-hero-img-7g8h9i"
                  data-strk-img="[casestudies-hero-subtitle] [casestudies-hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <p id="casestudies-hero-title" className="sr-only">Case study and factory inspection</p>
              <p id="casestudies-hero-subtitle" className="sr-only">Real sourcing project results</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
