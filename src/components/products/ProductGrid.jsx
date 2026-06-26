import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { products } from './ProductData'

export default function ProductGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          className="group flex flex-col overflow-hidden rounded-xl border-border bg-card transition-shadow hover:shadow-lg"
        >
          <div className="aspect-[4/3] overflow-hidden bg-slate-100">
            <img
              alt={product.title}
              data-strk-img-id={product.imgId}
              data-strk-img={`[${product.id}-desc] [${product.id}-title] [products-title] [products-subtitle]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <CardHeader className="p-6 pb-2">
            <Badge
              variant="secondary"
              className="mb-2 w-fit bg-accent text-accent-foreground"
            >
              {product.subtitle}
            </Badge>
            <CardTitle
              id={`${product.id}-title`}
              className="text-xl font-bold text-foreground"
            >
              {product.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-6 pt-0">
            <CardDescription
              id={`${product.id}-desc`}
              className="text-sm leading-relaxed text-muted-foreground"
            >
              {product.description}
            </CardDescription>
            <ul className="mt-4 space-y-2">
              {product.features.slice(0, 3).map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Button asChild variant="ghost" className="px-0 text-primary hover:text-primary/80">
              <Link to={`/products#${product.id}`}>
                View details <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
