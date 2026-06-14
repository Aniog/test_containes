import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Search, ShieldCheck, ClipboardCheck, Factory, Truck, Globe, Package, ArrowRight } from 'lucide-react'

const categories = [
  {
    title: 'Electronics & Components',
    description: 'Consumer electronics, circuit boards, connectors, sensors, and electronic assemblies.',
    examples: ['Smart home devices', 'LED lighting', 'Power banks', 'Audio equipment'],
  },
  {
    title: 'Home & Kitchen',
    description: 'Household goods, kitchenware, furniture accessories, and home organization products.',
    examples: ['Storage containers', 'Kitchen tools', 'Bathroom accessories', 'Home decor'],
  },
  {
    title: 'Textiles & Apparel',
    description: 'Fabrics, garments, home textiles, and fashion accessories with quality and compliance checks.',
    examples: ['Cotton shirts', 'Blankets', 'Bags', 'Workwear'],
  },
  {
    title: 'Hardware & Tools',
    description: 'Hand tools, power tools, fasteners, and building hardware from verified manufacturers.',
    examples: ['Wrenches', 'Power drills', 'Hinges', 'Safety equipment'],
  },
  {
    title: 'Gifts & Premiums',
    description: 'Promotional products, corporate gifts, and custom-branded merchandise.',
    examples: ['Pens', 'Mugs', 'Notebooks', 'Tech accessories'],
  },
  {
    title: 'Sports & Outdoors',
    description: 'Fitness equipment, camping gear, and outdoor accessories.',
    examples: ['Yoga mats', 'Camping chairs', 'Water bottles', 'Bike parts'],
  },
  {
    title: 'Beauty & Personal Care',
    description: 'Skincare, haircare, cosmetics, and personal hygiene products.',
    examples: ['Face masks', 'Hair dryers', 'Makeup brushes', 'Bath sets'],
  },
  {
    title: 'Toys & Hobbies',
    description: 'Educational toys, games, hobby supplies, and children’s products.',
    examples: ['Building blocks', 'Board games', 'Art supplies', 'RC toys'],
  },
  {
    title: 'Automotive Parts',
    description: 'Replacement parts, accessories, and components for passenger and commercial vehicles.',
    examples: ['Brake pads', 'Filters', 'Lighting', 'Interior accessories'],
  },
  {
    title: 'Packaging Materials',
    description: 'Boxes, bags, labels, and protective packaging for retail and e-commerce.',
    examples: ['Corrugated boxes', 'Poly bags', 'Labels', 'Bubble wrap'],
  },
]

export default function Products() {
  return (
    <div>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4">Products We Source</Badge>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Wide product coverage with expert sourcing</h1>
            <p className="mt-4 text-lg text-slate-600">We support a broad range of product categories with experienced sourcing specialists who understand your market.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Card key={cat.title} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{cat.title}</CardTitle>
                  <CardDescription>{cat.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="text-xs font-semibold uppercase text-slate-500">Common items</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <Badge key={ex} variant="secondary" className="px-2 py-1 text-xs">{ex}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link to="/contact" className="inline-flex items-center gap-2">
                Request a category quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Not sure if we cover your category?</h2>
              <p className="mt-4 text-slate-600">We regularly expand our network. If you do not see your product category listed, contact us and we will let you know if we can help.</p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white">
                    <Search className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Category research</div>
                    <div className="text-sm text-slate-600">We research new categories before taking on a project.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Supplier verification</div>
                    <div className="text-sm text-slate-600">We verify factories even for less common product types.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white">
                    <ClipboardCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Custom inspection plans</div>
                    <div className="text-sm text-slate-600">We adapt our QC process to your product requirements.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <div className="text-sm font-semibold text-slate-900">How to request a new category</div>
                <Separator />
                <ol className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-xs text-white">1</span>
                    Send us your product details and target market.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-xs text-white">2</span>
                    We research supplier availability and feasibility.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-xs text-white">3</span>
                    We reply with a feasibility assessment and next steps.
                  </li>
                </ol>
                <Separator />
                <Button asChild className="w-full">
                  <Link to="/contact">Contact us about your product</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
