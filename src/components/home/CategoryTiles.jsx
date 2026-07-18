import { Link } from 'react-router-dom'

const categories = [
  { label: 'Earrings', desc: 'Sculptural cuffs, drops, and everyday shine.', id: 'category-earrings', imgId: 'category-earrings-bg-381acf' },
  { label: 'Necklaces', desc: 'Delicate chains and collarbone-grazing color.', id: 'category-necklaces', imgId: 'category-necklaces-bg-b9d048' },
  { label: 'Huggies', desc: 'Rounded gold forms made for daily stacking.', id: 'category-huggies', imgId: 'category-huggies-bg-77ad2b' },
]

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-ivory py-16 text-velmora-ink md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widerluxe text-velmora-bronze">Explore</p>
          <h2 id="category-section-title" className="mt-3 font-serif text-5xl text-velmora-ink md:text-6xl">Shop by Category</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.label} to={`/shop?category=${category.label}`} className="group relative min-h-[420px] overflow-hidden bg-velmora-ink text-velmora-ivory">
              <div
                className="absolute inset-0 bg-velmora-champagne transition duration-700 group-hover:scale-105"
                data-strk-bg-id={category.imgId}
                data-strk-bg={`[${category.id}-desc] [${category.id}-title] [category-section-title]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-velmora-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 id={`${category.id}-title`} className="font-serif text-4xl text-velmora-ivory">{category.label}</h3>
                <p id={`${category.id}-desc`} className="mt-3 translate-y-3 text-sm leading-6 text-velmora-champagne opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{category.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
