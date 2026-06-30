import { useMemo, useState } from 'react'
import Button from '@/components/ui/Button'
import QuantitySelector from '@/components/ui/QuantitySelector'
import AccordionItem from '@/components/ui/AccordionItem'
import Stars from '@/components/ui/Stars'
import { currency } from '@/data/products'

const ProductInfo = ({ product, onAddToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [openPanel, setOpenPanel] = useState('description')

  const accordionItems = useMemo(
    () => [
      { key: 'description', title: 'Description', content: product.description },
      { key: 'materials', title: 'Materials & Care', content: product.materials },
      { key: 'shipping', title: 'Shipping & Returns', content: product.shipping },
    ],
    [product.description, product.materials, product.shipping],
  )

  const handleAdd = () => {
    onAddToCart(product, selectedVariant, quantity)
    setQuantity(1)
  }

  return (
    <div className="rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm shadow-stone-200/40 sm:p-8">
      <p className="text-xs uppercase tracking-[0.32em] text-stone-500">Velmora Signature</p>
      <h1 id={product.titleId} className="mt-4 font-serif text-4xl uppercase leading-none tracking-[0.32em] text-stone-900 sm:text-5xl">
        {product.name}
      </h1>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <p className="text-xl font-medium text-stone-900">{currency.format(product.price)}</p>
        <div className="flex items-center gap-3">
          <Stars />
          <span className="text-sm text-stone-500">{product.rating} · {product.reviewCount} reviews</span>
        </div>
      </div>
      <p id={product.descId} className="mt-6 text-base leading-8 text-stone-600">
        {product.shortDescription}
      </p>

      <div className="mt-8">
        <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Variant</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant}
              type="button"
              className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.28em] transition-all duration-300 ${
                selectedVariant === variant
                  ? 'border-stone-900 bg-stone-900 text-stone-50'
                  : 'border-stone-300 bg-stone-50 text-stone-900 hover:border-stone-900'
              }`}
              onClick={() => setSelectedVariant(variant)}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <QuantitySelector value={quantity} onChange={setQuantity} />
        <Button variant="accent" size="lg" className="w-full" onClick={handleAdd}>
          Add to Cart
        </Button>
      </div>

      <div className="mt-10">
        {accordionItems.map((item) => (
          <AccordionItem
            key={item.key}
            title={item.title}
            open={openPanel === item.key}
            onToggle={() => setOpenPanel((current) => (current === item.key ? '' : item.key))}
          >
            {item.content}
          </AccordionItem>
        ))}
      </div>
    </div>
  )
}

export default ProductInfo
