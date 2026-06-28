import { Link } from 'react-router-dom'
import SectionHeading from '@/components/ui/SectionHeading'
import EditorialVisual from '@/components/ui/EditorialVisual'
import Button from '@/components/ui/Button'
import { curatedCollections } from '@/data/products'

export default function CollectionsPage() {
  return (
    <div className="px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Curated edits"
          title="Collections"
          description="Editorially grouped favorites designed around gifting, layering, and polished daily styling."
        />

        <div className="grid gap-7 lg:grid-cols-3">
          {curatedCollections.map((collection, index) => (
            <article
              key={collection.id}
              className="overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-ivory shadow-velmora-soft"
            >
              <EditorialVisual
                mood={index % 3 === 0 ? 'hero' : index % 3 === 1 ? 'portrait' : 'gift'}
                accent={index % 2 === 0 ? 'left' : 'right'}
                className="aspect-[4/5] rounded-none"
              />
              <div className="space-y-4 p-6">
                <p className="text-xs uppercase tracking-brand text-velmora-taupe">Collection</p>
                <h2 className="font-display text-4xl leading-none text-velmora-ink">
                  {collection.title}
                </h2>
                <p className="text-sm leading-7 text-velmora-taupe">{collection.subtitle}</p>
                <Link to={collection.href}>
                  <Button variant="secondary">Shop This Edit</Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
