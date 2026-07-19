import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import ProductImage from "./ProductImage.jsx"
import { Button } from "@/components/ui/Buttons.jsx"

export default function ProductCard({ product, onAdd, compact = false }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-velmora-hairline bg-velmora-parchment text-velmora-ink shadow-none transition duration-500 hover:-translate-y-1 hover:shadow-soft">
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className={compact ? "relative aspect-[4/5] overflow-hidden" : "relative aspect-[3/4] overflow-hidden"}>
          <ProductImage
            product={product}
            imageId={product.imgId}
            className="transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            query={`[${product.descId}] [${product.titleId}]`}
            ratio="3x4"
            width="700"
          />
          <ProductImage
            product={product}
            imageId={product.hoverImgId}
            className="absolute inset-0 opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            query={`[${product.descId}] [${product.titleId}]`}
            ratio="3x4"
            width="700"
          />
          <div className="absolute left-4 top-4 rounded-full bg-velmora-cream/90 px-3 py-1 text-[10px] font-bold uppercase tracking-luxe text-velmora-clay backdrop-blur">
            {product.category}
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5 text-velmora-ink">
        <Link to={`/product/${product.id}`}>
          <h3 id={product.titleId} className="font-serif text-xl font-semibold uppercase leading-tight tracking-luxe text-velmora-ink transition group-hover:text-velmora-gold">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="line-clamp-2 text-sm leading-6 text-velmora-clay">
          {product.shortDescription}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-velmora-hairline pt-4">
          <span className="text-sm font-bold text-velmora-ink">${product.price}</span>
          <Button
            type="button"
            onClick={() => onAdd(product)}
            className="px-4 py-2 text-[10px] opacity-100 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add
          </Button>
        </div>
      </div>
    </article>
  )
}
