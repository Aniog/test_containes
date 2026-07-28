import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SectionHeading from '@/components/shared/SectionHeading'
import { productCategories } from '@/data/siteData'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ProductsSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={{ text: 'Products We Source' }}
          title="Products We Source from China"
          description="We source across a wide range of categories for importers, brands, retailers, and distributors worldwide."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <Card key={category.id} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-gray-600">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-base font-medium text-primary hover:text-primary-dark"
          >
            View all product categories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
