import { Link } from 'react-router-dom'
import { categoryTiles } from '@/data/editorial'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-cream px-5 py-16 text-velmora-obsidian md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-gold">Shop by category</p>
          <h2 className="mt-3 font-serifDisplay text-5xl leading-none md:text-7xl">Find your signature</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categoryTiles.map((tile) => (
            <Link key={tile.name} to={`/shop?category=${tile.name}`} className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-velmora-parchment shadow-editorial">
              <ImagePlaceholder
                alt={tile.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                imgId={tile.imageId}
                query={`[${tile.descId}] [${tile.titleId}]`}
                ratio="3x4"
                width="760"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/70 via-velmora-obsidian/10 to-transparent opacity-80 transition group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-velmora-cream translate-y-2 transition group-hover:translate-y-0">
                <h3 id={tile.titleId} className="font-serifDisplay text-4xl leading-none">{tile.name}</h3>
                <p id={tile.descId} className="mt-3 font-sansBody text-sm leading-6 text-velmora-cream/78 opacity-0 transition group-hover:opacity-100">
                  {tile.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
