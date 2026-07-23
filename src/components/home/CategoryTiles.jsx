import { Link } from 'react-router-dom'
import strkImgConfig from '@/strk-img-config.json'

const getCategoryImageUrl = (category) =>
  strkImgConfig?.[`velmora-category-${category.name.toLowerCase()}`]?.results?.[0]?.url

export default function CategoryTiles({ categories }) {
  return (
    <section className="bg-velmora-porcelain py-16 text-velmora-ink md:py-24">
      <div className="velmora-container">
        <div className="mb-10 text-center">
          <p className="eyebrow">Shop by category</p>
          <h2 id="category-title" className="serif-display mx-auto mt-3 max-w-3xl text-5xl text-velmora-ink md:text-7xl">Find your signature glow</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.name} to={category.href} className="group relative min-h-[430px] overflow-hidden bg-velmora-espresso text-velmora-pearl shadow-soft">
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${getCategoryImageUrl(category)})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/85 via-velmora-espresso/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-center transition duration-500 md:translate-y-5 md:group-hover:translate-y-0">
                <h3 id={`category-${category.name}-title`} className="font-serif text-5xl font-semibold text-velmora-pearl">{category.name}</h3>
                <p id={`category-${category.name}-desc`} className="mt-3 text-sm leading-6 text-velmora-mist opacity-100 md:opacity-0 md:transition md:duration-500 md:group-hover:opacity-100">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
