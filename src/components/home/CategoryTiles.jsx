import { Link } from 'react-router-dom'

const categories = [
  { name: 'Earrings', desc: 'Light-catching drops and crystal cuffs.', id: 'earrings', imgId: 'category-earrings-img-b08a31' },
  { name: 'Necklaces', desc: 'Layered chains and floral crystal pendants.', id: 'necklaces', imgId: 'category-necklaces-img-91df4c' },
  { name: 'Huggies', desc: 'Close-fitting gold essentials for every day.', id: 'huggies', imgId: 'category-huggies-img-3f75aa' },
]

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-cream py-20 text-velmora-ink sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-sage">Shop by category</p>
          <h2 className="mt-3 font-serifDisplay text-5xl font-light text-velmora-ink">Find Your Finish</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.name}`} className="group relative min-h-[26rem] overflow-hidden bg-velmora-espresso text-velmora-cream">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                data-strk-bg-id={category.imgId}
                data-strk-bg={`[category-${category.id}-desc] [category-${category.id}-title] [category-section-title]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-velmora-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-5 p-7 transition duration-500 group-hover:translate-y-0">
                <h3 id={`category-${category.id}-title`} className="font-serifDisplay text-5xl font-light">{category.name}</h3>
                <p id={`category-${category.id}-desc`} className="mt-3 max-w-xs text-sm leading-6 text-velmora-cream/78 opacity-0 transition duration-500 group-hover:opacity-100">{category.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        <span id="category-section-title" className="sr-only">Gold jewelry category editorial tiles</span>
      </div>
    </section>
  )
}
