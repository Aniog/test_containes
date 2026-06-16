import { Gauge, Layers2, PanelTop, ShieldCheck } from 'lucide-react'
import SectionHeading from './SectionHeading'

const products = [
  {
    title: 'Double Folding Machine',
    description:
      'A premium solution for high-efficiency forming where precision, rhythm, and repeatability matter every day.',
    icon: Gauge,
  },
  {
    title: 'Double Folder',
    description:
      'Designed for production teams that want strong output performance with an interface that stays approachable.',
    icon: Layers2,
  },
  {
    title: 'Sheet Metal Folder',
    description:
      'An elegant answer for shops focused on clean folds, dependable handling, and smooth operator flow.',
    icon: PanelTop,
  },
  {
    title: 'Metal Folder Machine',
    description:
      'Engineered to support quality-focused fabrication with a balanced combination of control and consistency.',
    icon: ShieldCheck,
  },
]

const ProductRange = () => {
  return (
    <section id="products" className="bg-brand-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Products"
          title="A focused machinery range for folding performance and day-to-day usability"
          description="Our product presentation is built around the machine types buyers actively search for, while keeping the browsing experience clean and confident."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-3xl border border-brand-ink/10 bg-brand-white p-7 shadow-lg shadow-brand-ink/5"
            >
              <div className="inline-flex rounded-2xl bg-brand-mist p-3 text-brand-ink">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-brand-ink">{title}</h3>
              <p className="mt-3 text-base leading-7 text-brand-slate">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-brand-ink/10 bg-brand-mist p-8 md:p-10">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-bronze">
                Search-friendly product coverage
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-ink md:text-3xl">
                We cover the language buyers use, from sheet metal folding machine to metal folder.
              </h3>
            </div>
            <p className="text-base leading-7 text-brand-slate md:text-lg">
              ARTITECT MACHINERY is positioned around the most relevant industrial folding product terms,
              helping visitors quickly understand your specialty while keeping the site polished and simple to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductRange
