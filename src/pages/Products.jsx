import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Package, Search, ShieldCheck, ClipboardList, Ship } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    title: 'Consumer Electronics',
    description: 'Audio, video, smart devices, chargers, cables, and accessories.',
    examples: ['Wireless earbuds', 'Bluetooth speakers', 'Phone cases', 'USB-C accessories'],
  },
  {
    title: 'Home & Kitchen',
    description: 'Cookware, storage, cleaning tools, small appliances, and decor.',
    examples: ['Stainless steel cookware', 'Food storage containers', 'Cleaning sets', 'Kitchen gadgets'],
  },
  {
    title: 'Textiles & Apparel',
    description: 'Fabrics, garments, home textiles, bags, and accessories.',
    examples: ['Cotton shirts', 'Backpacks', 'Bedding sets', 'Custom logo apparel'],
  },
  {
    title: 'Hardware & Tools',
    description: 'Hand tools, power tool accessories, fasteners, and fittings.',
    examples: ['Tool sets', 'Measuring tools', 'Fastener kits', 'Workshop accessories'],
  },
  {
    title: 'Packaging & Printing',
    description: 'Boxes, labels, flexible packaging, and printed materials.',
    examples: ['Custom boxes', 'Labels and stickers', 'Flexible pouches', 'Instruction manuals'],
  },
  {
    title: 'Garden & Outdoor',
    description: 'Garden tools, lighting, furniture, and outdoor accessories.',
    examples: ['Solar lights', 'Garden tools', 'Outdoor furniture', 'Patio accessories'],
  },
]

export default function Products() {
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
          <Badge variant="secondary" className="mb-4">Products We Source</Badge>
          <h1 className="text-4xl font-bold text-slate-900">Products we can help you source</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            We support a wide range of product categories. If your product is not listed, tell us what you need and we’ll assess feasibility.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.title}>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {category.examples.map((example) => (
                      <li key={example} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                        {example}
                      </li>
                    ))}
                  </ul>
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
              <h2 className="text-3xl font-bold text-slate-900">Not sure if we can source it?</h2>
              <p className="mt-3 text-slate-600">
                Tell us your product idea, specifications, and target price. We’ll let you know whether it’s feasible and what support we can provide.
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <Search className="mt-0.5 h-5 w-5 text-slate-900" />
                  <div>
                    <div className="font-semibold">Supplier search</div>
                    <div className="text-slate-600">We look for manufacturers with relevant experience and capacity.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-slate-900" />
                  <div>
                    <div className="font-semibold">Feasibility check</div>
                    <div className="text-slate-600">We assess materials, tolerances, certifications, and production readiness.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ClipboardList className="mt-0.5 h-5 w-5 text-slate-900" />
                  <div>
                    <div className="font-semibold">Clear next steps</div>
                    <div className="text-slate-600">If feasible, we outline a practical plan with timelines and cost estimates.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-slate-100 overflow-hidden">
                <img
                  alt="Product sourcing and supplier review"
                  data-strk-img-id="products-hero-img-5a6b7c"
                  data-strk-img="[products-hero-subtitle] [products-hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <p id="products-hero-title" className="sr-only">Product sourcing and supplier review</p>
              <p id="products-hero-subtitle" className="sr-only">Wide product category support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-slate-900">How we evaluate a product category</h2>
          <p className="mt-3 text-slate-600">A practical checklist we use when assessing sourcing feasibility.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Market availability', description: 'Is the product commonly manufactured in China with reliable supply?' },
              { title: 'Supplier capability', description: 'Are there factories with suitable capacity, certifications, and experience?' },
              { title: 'Quality standards', description: 'Can quality be defined, measured, and inspected consistently?' },
              { title: 'Logistics fit', description: 'Can the product be packed, shipped, and cleared for your target market?' },
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild>
              <Link to="/contact">Tell us what you need</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
