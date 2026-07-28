import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle } from 'lucide-react'

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const categories = [
    {
      title: 'Electronics & Components',
      items: ['Consumer electronics', 'Electronic components', 'Cables and connectors', 'Power supplies', 'PCB assembly', 'LED products'],
    },
    {
      title: 'Machinery & Equipment',
      items: ['Industrial machinery', 'Manufacturing equipment', 'Tools and hardware', 'Automation components', 'Spare parts', 'Workshop equipment'],
    },
    {
      title: 'Textiles & Apparel',
      items: ['Garments and clothing', 'Fabrics and textiles', 'Home textiles', 'Workwear and uniforms', 'Accessories', 'Technical textiles'],
    },
    {
      title: 'Home & Garden',
      items: ['Kitchenware and cookware', 'Home decor', 'Furniture', 'Garden tools and supplies', 'Storage solutions', 'Lighting products'],
    },
    {
      title: 'Automotive Parts',
      items: ['OEM and aftermarket parts', 'Accessories and trim', 'Maintenance supplies', 'Electrical components', 'Body and chassis parts', 'Interior components'],
    },
    {
      title: 'Medical & Healthcare',
      items: ['Medical devices (non-regulated)', 'Healthcare supplies', 'Personal protective equipment', 'Wellness products', 'Laboratory equipment', 'Disposable medical items'],
    },
    {
      title: 'Industrial Materials',
      items: ['Raw materials', 'Packaging materials', 'Chemicals and additives', 'Building materials', 'Metals and plastics', 'Adhesives and sealants'],
    },
    {
      title: 'Consumer Goods',
      items: ['Household products', 'Personal care items', 'Toys and games', 'Sports and outdoor gear', 'Pet products', 'Gifts and promotional items'],
    },
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">Products We Source</h1>
            <p className="text-xl text-slate-300">
              We support B2B buyers across a wide range of product categories. If your product is not listed, we can still help.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-700">
                  {category.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">Do Not See Your Product?</h2>
          <p className="text-lg text-slate-600 mb-8">
            We work with buyers across many additional categories. Contact us with your requirements and we will let you know how we can assist.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Discuss Your Sourcing Needs</Link>
          </Button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">What We Need From You</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3"><span className="font-semibold text-teal-600">•</span> Product description, specifications, or reference samples</li>
              <li className="flex gap-3"><span className="font-semibold text-teal-600">•</span> Target price range and quality expectations</li>
              <li className="flex gap-3"><span className="font-semibold text-teal-600">•</span> Estimated order quantity and frequency</li>
              <li className="flex gap-3"><span className="font-semibold text-teal-600">•</span> Any compliance, certification, or packaging requirements</li>
              <li className="flex gap-3"><span className="font-semibold text-teal-600">•</span> Preferred delivery timeline and destination</li>
            </ul>
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden bg-slate-100">
            <img
              data-strk-img-id="products-specs"
              data-strk-img="[Products We Source] [Sourcing Services] product samples specifications review meeting"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Product samples and specifications review"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
