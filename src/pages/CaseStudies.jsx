import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, TrendingDown, Clock, ShieldCheck, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const cases = [
  {
    client: 'European Consumer Electronics Brand',
    industry: 'Electronics',
    challenge: 'High defect rates and inconsistent communication with a previous supplier.',
    solution: 'We re-sourced the product to a verified manufacturer and implemented inline and pre-shipment inspections.',
    results: [
      { icon: TrendingDown, label: 'Defect rate reduced from 8% to 1.5%' },
      { icon: ShieldCheck, label: 'Full factory audit completed' },
      { icon: Clock, label: 'Inspection reports within 24 hours' },
    ],
    tags: ['Quality Inspection', 'Supplier Sourcing'],
  },
  {
    client: 'US Home Goods Retailer',
    industry: 'Home & Garden',
    challenge: 'Long lead times and difficulty finding factories willing to handle smaller MOQs.',
    solution: 'We identified 3 qualified suppliers, negotiated terms, and monitored production milestones.',
    results: [
      { icon: Clock, label: 'Lead time reduced by 18 days' },
      { icon: TrendingUp, label: '3 new suppliers onboarded' },
      { icon: ShieldCheck, label: 'Consistent order fulfillment' },
    ],
    tags: ['Supplier Sourcing', 'Production Monitoring'],
  },
  {
    client: 'Australian Industrial Parts Distributor',
    industry: 'Machinery',
    challenge: 'Complex order combining parts from multiple suppliers and unclear shipping costs.',
    solution: 'We verified 12 factories, consolidated shipments, and managed export documentation.',
    results: [
      { icon: TrendingDown, label: '22% savings on freight costs' },
      { icon: ShieldCheck, label: '12 factory verifications' },
      { icon: Clock, label: 'Simplified customs clearance' },
    ],
    tags: ['Factory Verification', 'Shipping Coordination'],
  },
  {
    client: 'UK Beauty Startup',
    industry: 'Beauty & Personal Care',
    challenge: 'Needed compliant packaging and cosmetic-grade manufacturing with no prior China experience.',
    solution: 'We matched them with certified cosmetics manufacturers and coordinated packaging sourcing.',
    results: [
      { icon: ShieldCheck, label: 'GMPC-compliant factory selected' },
      { icon: TrendingUp, label: 'First order shipped on schedule' },
      { icon: Clock, label: 'Sample approval in 3 weeks' },
    ],
    tags: ['Supplier Sourcing', 'Quality Inspection'],
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
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Case Studies
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Real client outcomes from sourcing projects across electronics, home goods, machinery, and beauty.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {cases.map((item) => (
              <Card key={item.client} className="border-slate-100 transition hover:shadow-md">
                <CardHeader>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl">{item.client}</CardTitle>
                  <CardDescription>{item.industry}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Challenge</h4>
                    <p className="mt-1 text-slate-600">{item.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Solution</h4>
                    <p className="mt-1 text-slate-600">{item.solution}</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-4">
                    <h4 className="text-sm font-semibold text-slate-900">Results</h4>
                    <ul className="mt-3 space-y-3">
                      {item.results.map((result) => {
                        const Icon = result.icon
                        return (
                          <li key={result.label} className="flex items-center gap-3 text-sm text-slate-700">
                            <Icon className="h-5 w-5 shrink-0 text-primary" />
                            <span>{result.label}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">Become Our Next Success Story</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Tell us about your sourcing goals and we will build a plan to achieve them.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-white">
            <Link to="/contact">
              Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
