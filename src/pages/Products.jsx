import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    title: 'Electronics',
    description: 'Consumer electronics, components, accessories, and IoT devices.',
    examples: ['Audio devices', 'Charging accessories', 'Electronic components', 'Smart home devices'],
  },
  {
    title: 'Home and Kitchen',
    description: 'Household goods, kitchenware, storage, and home improvement products.',
    examples: ['Storage containers', 'Kitchen tools', 'Home organization', 'Small appliances'],
  },
  {
    title: 'Industrial and Hardware',
    description: 'Fasteners, fittings, tools, and industrial components.',
    examples: ['Fasteners', 'Metal fittings', 'Hand tools', 'Hardware accessories'],
  },
  {
    title: 'Textiles and Apparel',
    description: 'Fabric-based products, home textiles, and apparel accessories.',
    examples: ['Home textiles', 'Bags', 'Apparel accessories', 'Fabric goods'],
  },
  {
    title: 'Packaging and Printing',
    description: 'Packaging materials, labels, boxes, and printed products.',
    examples: ['Packaging boxes', 'Labels', 'Printed materials', 'Shipping supplies'],
  },
  {
    title: 'Garden and Outdoor',
    description: 'Outdoor equipment, garden tools, and seasonal products.',
    examples: ['Garden tools', 'Outdoor storage', 'Camping accessories', 'Patio products'],
  },
]

const Products = () => {
  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Badge className="mb-3">Products We Source</Badge>
          <h1 className="text-4xl font-bold text-slate-900">Broad category coverage</h1>
          <p className="mt-3 max-w-3xl text-lg text-slate-600">
            We support many product categories. If your product is not listed, tell us and we will confirm feasibility.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Not sure if we can source it?</h2>
              <p className="mt-3 text-slate-600">
                Tell us your product, target price, and quantity. We will confirm feasibility and suggest a practical sourcing approach.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2"><ArrowRight className="mt-0.5 h-4 w-4 text-slate-900" /> Product feasibility review</li>
                <li className="flex items-start gap-2"><ArrowRight className="mt-0.5 h-4 w-4 text-slate-900" /> Supplier landscape overview</li>
                <li className="flex items-start gap-2"><ArrowRight className="mt-0.5 h-4 w-4 text-slate-900" /> Rough cost and timeline estimate</li>
              </ul>
              <div className="mt-8">
                <Link to="/contact">
                  <Button>Ask About a Product <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>What helps us source faster</CardTitle>
                  <CardDescription>Clear inputs lead to faster results.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li>Product specifications or drawings</li>
                    <li>Target unit price and order quantity</li>
                    <li>Required certifications or standards</li>
                    <li>Preferred packaging and shipping terms</li>
                    <li>Timeline and destination country</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
