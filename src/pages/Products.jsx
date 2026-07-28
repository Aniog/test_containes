import PageHeader from '@/components/shared/PageHeader'
import SectionHeading from '@/components/shared/SectionHeading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { productCategories } from '@/data/siteData'
import CTASection from '@/components/home/CTASection'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function Products() {
  const containerRef = useImageLoader()

  return (
    <>
      <PageHeader
        title="Products We Source"
        description="We source a wide range of products from verified manufacturers across China."
        badge="Categories"
        pageId="products"
      />

      <section ref={containerRef} className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Industries We Support"
            description="From consumer goods to industrial components, we help you find the right factory for your product."
            className="mb-12"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category, index) => (
              <Card key={category.id} className="overflow-hidden transition-shadow hover:shadow-md">
                <div className="relative h-48 bg-gray-100">
                  <div
                    className="absolute inset-0"
                    data-strk-bg-id={`product-bg-${category.id}-c3`}
                    data-strk-bg={`[product-title-${index}] [product-desc-${index}]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="600"
                  />
                </div>
                <CardHeader>
                  <CardTitle id={`product-title-${index}`}>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p id={`product-desc-${index}`} className="text-sm leading-relaxed text-gray-600">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
