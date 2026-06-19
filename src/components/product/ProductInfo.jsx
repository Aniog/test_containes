import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0].value);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: selectedVariant,
      quantity,
    });
  };

  return (
    <div>
      <p className="section-subheading text-xs">{product.category.toUpperCase()}</p>
      <h1 id="pdp-name-ref" className="font-serif text-3xl md:text-4xl mt-2 font-medium product-name text-deep-950">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-3">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? 'fill-gold-500 text-gold-500'
                  : 'text-deep-300'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-deep-500">{product.rating} ({product.reviews} reviews)</span>
      </div>

      {/* Price */}
      <p className="text-2xl font-semibold text-deep-800 mt-4">${product.price}</p>

      {/* Description */}
      <p className="text-deep-600 text-sm leading-relaxed mt-5">{product.description}</p>

      <hr className="hairline-divider my-6" />

      {/* Variant selector */}
      {product.variants.length > 1 && (
        <div className="mb-6">
          <p className="text-xs tracking-wider text-deep-500 mb-3">TONE</p>
          <div className="flex gap-3">
            {product.variants.map((v) => (
              <button
                key={v.value}
                onClick={() => setSelectedVariant(v.value)}
                className={`px-5 py-2 text-sm border rounded-sm transition-all duration-200 ${
                  selectedVariant === v.value
                    ? 'border-deep-800 bg-deep-800 text-cream-50'
                    : 'border-deep-300 text-deep-600 hover:border-deep-500'
                }`}
              >
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full mr-2 align-middle"
                  style={{ backgroundColor: v.hex }}
                />
                {v.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div className="mb-6">
        <p className="text-xs tracking-wider text-deep-500 mb-3">QUANTITY</p>
        <div className="flex items-center border border-deep-300 rounded-sm w-fit">
          <button
            className="p-3 hover:text-gold-600 transition-colors"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="px-4 text-sm font-medium min-w-[48px] text-center">{quantity}</span>
          <button
            className="p-3 hover:text-gold-600 transition-colors"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button onClick={handleAdd} className="btn-primary w-full py-3.5 text-sm tracking-wider">
        <ShoppingBag className="w-4 h-4 mr-2" />
        ADD TO BAG — ${(product.price * quantity).toFixed(2)}
      </button>

      <hr className="hairline-divider my-7" />

      {/* Accordions */}
      <div className="space-y-1">
        {[
          { title: 'Description', content: product.description },
          { title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
          { title: 'Shipping & Returns', content: product.shipping },
        ].map(({ title, content }, i) => (
          <AccordionItem key={title} title={title} defaultOpen={i === 0}>
            <p className="text-deep-600 text-sm leading-relaxed whitespace-pre-line">{content}</p>
          </AccordionItem>
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-deep-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left text-sm tracking-wider text-deep-700 hover:text-deep-900 transition-colors"
      >
        <span>{title.toUpperCase()}</span>
        <span className={`transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>
          <Plus className="w-4 h-4" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
