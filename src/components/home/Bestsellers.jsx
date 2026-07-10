import { Link } from "react-router-dom"
import { products } from "../../data/products.js"
import ProductCard from "../product/ProductCard.jsx"
import { ArrowRightIcon } from "../ui/Icons.jsx"

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5)
  return (
    <section className="bg-ivory py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-editorial px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="eyebrow">Most Loved</p>
            <h2 className="display-serif text-[36px] md:text-[52px] mt-3 text-ink leading-[1.05]">
              The bestsellers
            </h2>
            <p className="mt-3 text-[15px] text-muted max-w-md">
              Quietly adored, repeatedly reordered. The five pieces our
              community keeps coming back to.
            </p>
          </div>
          <Link to="/shop" className="link-underline text-ink/80 self-start md:self-end">
            Shop All Bestsellers
            <ArrowRightIcon className="inline h-3.5 w-3.5 ml-1 align-[-1px]" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16">
          {bestsellers.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}
