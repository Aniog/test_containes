import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description:
      'Heavy-duty double folding for high-volume production with consistent angle accuracy.',
    imgId: 'product-double-folding-machine',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description:
      'Compact double folder ideal for mid-sized workshops seeking reliable performance.',
    imgId: 'product-double-folder',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description:
      'Versatile manual and hydraulic sheet metal folders for precise bends every time.',
    imgId: 'product-sheet-metal-folder',
  },
]

export default function FeaturedProducts() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2
              id="featured-title"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Featured Machinery
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Explore our most requested sheet metal folding machines, trusted by
              fabricators for their precision and long service life.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/products">
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden rounded-xl border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.id}-desc] [${product.id}-title] [featured-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader className="p-6 pb-2">
                <CardTitle
                  id={`${product.id}-title`}
                  className="text-xl font-bold text-foreground"
                >
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <CardDescription
                  id={`${product.id}-desc`}
                  className="text-sm leading-relaxed text-muted-foreground"
                >
                  {product.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="ghost" className="px-0 text-primary hover:text-primary/80">
                  <Link to={`/products#${product.id}`}>
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
