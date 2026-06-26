import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const products = [
  {
    name: "Double Folding Machine",
    description: "Advanced dual-axis folding system for complex geometries and high-volume production.",
    specs: ["Up to 4mm thickness", "3200mm working length", "CNC precision control"],
  },
  {
    name: "Double Folder",
    description: "Compact yet powerful folding solution ideal for workshops and medium-scale operations.",
    specs: ["Up to 3mm thickness", "2500mm working length", "Manual & semi-auto modes"],
  },
  {
    name: "Sheet Metal Folder",
    description: "Professional-grade folder designed for consistent, clean bends across various materials.",
    specs: ["Up to 2.5mm thickness", "2000mm working length", "Adjustable angle stops"],
  },
  {
    name: "Sheet Metal Folding Machine",
    description: "Heavy-duty folding machine built for demanding industrial applications.",
    specs: ["Up to 6mm thickness", "4000mm working length", "Hydraulic clamping system"],
  },
  {
    name: "Metal Folder",
    description: "Versatile folding equipment perfect for custom fabrication and prototyping.",
    specs: ["Up to 2mm thickness", "1500mm working length", "Quick setup & changeover"],
  },
  {
    name: "Metal Folder Machine",
    description: "Robust folding solution combining precision engineering with user-friendly controls.",
    specs: ["Up to 3.5mm thickness", "3000mm working length", "Digital angle display"],
  },
  {
    name: "Metal Folding Machine",
    description: "Premium folding machine delivering exceptional accuracy for architectural metalwork.",
    specs: ["Up to 5mm thickness", "3500mm working length", "Touchscreen interface"],
  },
]

const Products = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-sm font-medium text-slate-600 mb-4">
            Our Product Line
          </div>
          <h2 className="text-5xl font-semibold tracking-tight text-slate-900 mb-4">
            Precision folding equipment
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Each machine is crafted with meticulous attention to detail, 
            ensuring reliable performance for years to come.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-slate-700 transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-base pt-2">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-3" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#contact">Request Information</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products