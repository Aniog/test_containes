import React from 'react'
import { S3_DOMAIN } from '@/config'

const ProductCard = ({ product }) => {
  const { name, description, category, specifications, image } = product.data
  
  const imageUrl = image?.storageKey 
    ? `${S3_DOMAIN}/${image.storageKey}`
    : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
      <div className="aspect-4/3 overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          data-strk-img-id={`prod-${product.id}`}
          data-strk-img={`[prod-desc-${product.id}] [prod-title-${product.id}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2">
          <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary uppercase tracking-wider">
            {category}
          </span>
        </div>
        <h3 id={`prod-title-${product.id}`} className="text-xl font-bold tracking-tight">
          {name}
        </h3>
        <p id={`prod-desc-${product.id}`} className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        
        {specifications && specifications.length > 0 && (
          <div className="mt-4 flex-1">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Key Specs</h4>
            <ul className="space-y-1">
              {specifications.slice(0, 3).map((spec, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-center">
                  <span className="mr-2 h-1 w-1 rounded-full bg-primary" />
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mt-6">
          <button className="w-full rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
