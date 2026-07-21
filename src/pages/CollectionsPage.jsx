import { products } from "@/data/store"
import ProductCard from "@/components/shared/ProductCard"

const collectionGroups = [
  {
    title: "The Gift Edit",
    description:
      "Gift-boxed sets and sparkling pieces chosen for birthdays, bridesmaids, and beautifully wrapped milestones.",
    filter: (product) => product.price >= 54,
  },
  {
    title: "Everyday Gold",
    description:
      "Softly polished earrings and huggies designed to feel refined from morning meetings through dinner plans.",
    filter: (product) => product.category !== "Gift Sets",
  },
]

const CollectionsPage = ({ onAddToCart }) => {
  return (
    <section className="bg-ivory pb-20 pt-8 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-velvet px-6 py-14 text-ivory shadow-lift sm:px-10">
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Collections</p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
            Curated edits with a warm, quietly luxurious point of view
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ivory/76">
            Explore Velmora through collections made for gifting, everyday polish, and softly glowing finishing touches.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {collectionGroups.map((group) => (
            <section key={group.title}>
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.35em] text-gold">Collection</p>
                <h2 className="mt-4 font-serif text-4xl text-velvet">{group.title}</h2>
                <p className="mt-4 text-base leading-7 text-velvet/72">{group.description}</p>
              </div>
              <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                {products.filter(group.filter).map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollectionsPage
