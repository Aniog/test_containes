import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const FeaturedProducts = () => {
  const products = [
    {
      id: 'double-folder-pro',
      title: 'Double Folder Pro-X',
      description: 'The ultimate double folding machine for complex profiles and large series production.',
      features: ['Automatic sequencing', 'Dual bending drive', 'High speed clamping'],
      imgId: 'product-pro-x'
    },
    {
      id: 'sheet-metal-expert',
      title: 'Expert Sheet Metal Folder',
      description: 'Precision folding for standard and delicate architectural sheet metal materials.',
      features: ['Gentle material handling', 'Precision down-acting', 'Multi-zone control'],
      imgId: 'product-expert-folder'
    },
    {
      id: 'compact-folder',
      title: 'Compact Metal Folder',
      description: 'Space-saving industrial folder with full CNC capabilities for smaller workshops.',
      features: ['Compact footprint', 'Easy programming', 'Versatile tooling'],
      imgId: 'product-compact'
    }
  ]

  return (
    <section className="bg-secondary/30 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="featured-title" className="text-3xl font-extrabold text-primary sm:text-4xl">
            Our Premium Products
          </h2>
          <p id="featured-subtitle" className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Explore our range of high-performance metal folding machines designed for excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col border-none shadow-md hover:shadow-xl transition-shadow bg-background overflow-hidden">
              <div className="h-60 overflow-hidden">
                <img
                  data-strk-img-id={`product-${product.id}`}
                  data-strk-img={`[product-${product.id}-desc] [product-${product.id}-title] industrial metal folding machine`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  className="w-full h-full object-cover"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                  alt={product.title}
                />
              </div>
              <CardHeader>
                <CardTitle id={`product-${product.id}-title`} className="text-xl text-primary">{product.title}</CardTitle>
                <p id={`product-${product.id}-desc`} className="text-muted-foreground text-sm">{product.description}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 mb-6 text-sm text-primary/80">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-secondary">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
