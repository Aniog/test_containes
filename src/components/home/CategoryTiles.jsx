import { Link } from 'react-router-dom'

const categories = [
  {
    label: 'Earrings',
    desc: 'Sculptural shine for every stack.',
    titleId: 'category-earrings-title',
    descId: 'category-earrings-desc',
    bgId: 'category-earrings-bg-1e70af',
  },
  {
    label: 'Necklaces',
    desc: 'Fine chains with luminous focal points.',
    titleId: 'category-necklaces-title',
    descId: 'category-necklaces-desc',
    bgId: 'category-necklaces-bg-382bb8',
  },
  {
    label: 'Huggies',
    desc: 'Compact gold curves with daily polish.',
    titleId: 'category-huggies-title',
    descId: 'category-huggies-desc',
    bgId: 'category-huggies-bg-91dd43',
  },
]

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-parchment py-16 text-velmora-ink md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-velmora-goldDeep">Shop by category</p>
          <h2 className="mt-3 font-serifDisplay text-5xl font-medium text-velmora-ink md:text-6xl">Choose Your Ritual</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.label} to="/shop" className="group relative min-h-[420px] overflow-hidden bg-velmora-espresso text-velmora-pearl shadow-soft">
              <div
                className="absolute inset-0 transition duration-700 group-hover:scale-105"
                data-strk-bg-id={category.bgId}
                data-strk-bg={`[${category.descId}] [${category.titleId}]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-velmora-ink/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 transition duration-300 md:translate-y-10 md:group-hover:translate-y-0">
                <h3 id={category.titleId} className="font-serifDisplay text-5xl text-velmora-pearl">{category.label}</h3>
                <p id={category.descId} className="mt-3 max-w-xs text-sm leading-7 text-velmora-champagne md:opacity-0 md:transition md:group-hover:opacity-100">
                  {category.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
