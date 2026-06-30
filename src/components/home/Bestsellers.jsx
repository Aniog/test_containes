import { Link } from "react-router-dom"
import ImageLoader from "@/components/ImageLoader"
import ProductCard from "@/components/ProductCard"
import { bestsellers } from "@/data/products"

export default function Bestsellers() {
  return (
    <ImageLoader as="section" className="mx-auto max-w-editorial px-6 py-20 md:px-10 md:py-28" deps={[]}>
      <div className="flex flex-col items-center text-center">
        <p className="eyebrow">Loved by Velmora</p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Bestsellers</h2>
        <p className="mt-4 max-w-md text-sm text-stone">
          The pieces our community reaches for again and again — each one
          designed to be worn and treasured daily.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5 md:gap-x-8">
        {bestsellers.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link to="/shop" className="btn-outline">
          View All Jewelry
        </Link>
      </div>
    </ImageLoader>
  )
}
