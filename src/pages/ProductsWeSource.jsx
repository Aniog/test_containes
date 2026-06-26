import { useEffect } from 'react'
import { SectionHeading } from '@/components/SectionHeading'
import { Card, CardContent } from '@/components/ui/Card'
import { products } from '@/data/siteData'

const pageTitle = 'Products We Source | SSourcing China'

export default function ProductsWeSource() {
  useEffect(() => {
    document.title = pageTitle
  }, [])

  return (
    <div className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Products We Source"
          title="Product Categories We Support"
          description="From industrial parts to consumer goods, we source across a wide range of categories."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h2 id={product.titleId} className="text-lg font-semibold text-slate-900">
                  {product.name}
                </h2>
                <p id={product.descId} className="mt-2 text-slate-600">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
