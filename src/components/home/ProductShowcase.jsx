import { ChevronRight } from 'lucide-react'

const products = [
  {
    name: 'Double Folding Machine',
    description:
      'A premium production machine for fabricators who need speed, repeatability, and refined bend quality across demanding workflows.',
    idealFor: 'High-output factories and multi-shift production lines',
  },
  {
    name: 'Double Folder',
    description:
      'Compact, efficient, and easy to integrate into modern shop floors where quick transitions and dependable output matter.',
    idealFor: 'Flexible manufacturing cells and mixed-order environments',
  },
  {
    name: 'Sheet Metal Folder',
    description:
      'A clear, operator-friendly solution for precise folds with smooth handling for a wide range of sheet metal applications.',
    idealFor: 'General fabrication workshops and custom metal projects',
  },
  {
    name: 'Sheet Metal Folding Machine',
    description:
      'Engineered for controlled performance and elegant operation, delivering steady results with a premium industrial finish.',
    idealFor: 'Professional manufacturers focused on consistency',
  },
  {
    name: 'Metal Folder',
    description:
      'A straightforward, reliable choice for shops that want strong forming capability without sacrificing usability.',
    idealFor: 'Growing businesses upgrading from manual workflows',
  },
  {
    name: 'Metal Folder Machine',
    description:
      'Combines robust machine construction with approachable controls to help teams achieve fast onboarding and clean output.',
    idealFor: 'Operations balancing performance and ease of use',
  },
  {
    name: 'Metal Folding Machine',
    description:
      'A polished solution for modern metalworking, built to support accurate folding, production confidence, and long-term dependability.',
    idealFor: 'Buyers seeking long-term machinery value',
  },
]

function ProductShowcase() {
  return (
    <section id="products" className="bg-stone-100 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">
            Product family
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Machinery options built around the way your production team actually works.
          </h2>
          <p className="text-base leading-8 text-slate-600 md:text-lg">
            ARTITECT MACHINERY presents every core product type in a structure that is easy for buyers to scan, compare, and understand.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="flex h-full flex-col rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm shadow-stone-200/50"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-slate-900">{product.name}</h3>
                <div className="rounded-full bg-amber-50 p-2 text-amber-600">
                  <ChevronRight className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{product.description}</p>
              <div className="mt-6 rounded-2xl bg-stone-100 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Ideal for
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{product.idealFor}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
