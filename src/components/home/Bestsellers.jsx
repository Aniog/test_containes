import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Star } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import products from "@/data/products"
import { useCart } from "@/context/CartContext"

export default function Bestsellers() {
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="font-serif text-3xl lg:text-4xl text-midnight-900 mb-2">
            Bestsellers
          </h2>
          <div className="w-12 h-[1px] bg-gold-400 mx-auto" />
        </div>

        <div className="stagger revealed grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <Link to={`/product/${product.id}`}>
                <div className="aspect-[3/4] bg-velvet-100 rounded overflow-hidden relative">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[prod-desc-${product.id}] [prod-name-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* Quick Add */}
              <button
                onClick={() => addItem(product)}
                className="absolute bottom-3 left-3 right-3 py-2 bg-white/90 backdrop-blur-sm text-midnight-900 text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
              >
                Add to Cart &mdash; ${product.price}
              </button>

              <div className="mt-3">
                <h3
                  id={`prod-name-${product.id}`}
                  className="text-[11px] lg:text-xs tracking-widest uppercase text-midnight-900"
                >
                  {product.name}
                </h3>
                <p
                  id={`prod-desc-${product.id}`}
                  className="text-[11px] text-velvet-500 mt-0.5 line-clamp-1"
                >
                  {product.description}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <Star size={10} className="fill-gold-400 text-gold-400" />
                  <span className="text-[10px] text-velvet-500">
                    {product.rating}
                  </span>
                </div>
                <p className="text-sm font-medium text-midnight-900 mt-1">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}