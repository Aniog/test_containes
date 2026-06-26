import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description:
      'Heavy-duty dual-beam folder built for high-volume sheet metal shops.',
    imgId: 'product-double-folding-machine-a1b2c3',
    titleId: 'product-double-folding-machine-title',
    descId: 'product-double-folding-machine-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description:
      'Compact yet powerful double folder for precision box and pan work.',
    imgId: 'product-double-folder-d4e5f6',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description:
      'Versatile manual and CNC sheet metal folders for accurate angle bends.',
    imgId: 'product-sheet-metal-folder-g7h8i9',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description:
      'Automated folding machine designed for consistent, repeatable profiles.',
    imgId: 'product-sheet-metal-folding-machine-j0k1l2',
    titleId: 'product-sheet-metal-folding-machine-title',
    descId: 'product-sheet-metal-folding-machine-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description:
      'Reliable metal folder for general fabrication and architectural metalwork.',
    imgId: 'product-metal-folder-m3n4o5',
    titleId: 'product-metal-folder-title',
    descId: 'product-metal-folder-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description:
      'Robust floor-standing machine for folding steel, aluminum and stainless.',
    imgId: 'product-metal-folder-machine-p6q7r8',
    titleId: 'product-metal-folder-machine-title',
    descId: 'product-metal-folder-machine-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description:
      'Industrial metal folding machine engineered for speed and precision.',
    imgId: 'product-metal-folding-machine-s9t0u1',
    titleId: 'product-metal-folding-machine-title',
    descId: 'product-metal-folding-machine-desc',
  },
]

export function ProductsGrid() {
  return (
    <section id='products' className='bg-cloud py-20 md:py-28'>
      <Container>
        <SectionHeader
          badge='Our machines'
          title='Machines that shape metal'
          subtitle='From compact double folders to industrial metal folding machines, every model is built for accuracy, durability and ease of use.'
        />

        <h2 id='products-title' className='sr-only'>
          Products
        </h2>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {products.map((product) => (
            <Card key={product.id} className='group overflow-hidden p-0'>
              <div className='aspect-[4/3] overflow-hidden bg-slate-100'>
                <img
                  alt={product.title}
                  className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-title]`}
                  data-strk-img-ratio='4x3'
                  data-strk-img-width='600'
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className='p-6'>
                <h3
                  id={product.titleId}
                  className='text-lg font-bold text-navy'
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className='mt-2 text-sm leading-relaxed text-slate-600'
                >
                  {product.description}
                </p>
                <a
                  href='#contact'
                  className='mt-4 inline-flex items-center text-sm font-semibold text-navy hover:text-gold-dark'
                >
                  Request specs
                  <ArrowRight className='ml-1 h-4 w-4' />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}