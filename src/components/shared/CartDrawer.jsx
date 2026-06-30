import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useImageLoader } from '@/hooks/useImageLoader'
import Drawer from '@/components/ui/Drawer'
import Button from '@/components/ui/Button'
import ProductImage from '@/components/ui/ProductImage'
import { formatPrice } from '@/lib/format'

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
    totalItems,
  } = useCart()

  const containerRef = useImageLoader([isOpen, items])

  return (
    <Drawer isOpen={isOpen} onClose={closeCart} title="Your Cart">
      <div ref={containerRef}>
      {items.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <p className="font-serif text-xl tracking-wide">Your cart is empty</p>
          <p className="mt-2 text-sm text-velmora-taupe-light">
            Discover pieces crafted to be treasured.
          </p>
          <Link to="/shop" onClick={closeCart} className="mt-6">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="flex h-full flex-col">
          <div className="flex-1 space-y-6 overflow-y-auto pr-1">
            {items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                <Link
                  to={`/products/${item.slug}`}
                  onClick={closeCart}
                  className="h-24 w-20 flex-shrink-0 overflow-hidden bg-velmora-taupe/10"
                >
                  <ProductImage
                    imgId={`product-img-${item.id}`}
                    id={`product-title-${item.id}`}
                    alt={item.name}
                    ratio="4x3"
                    width={160}
                  />
                </Link>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <Link
                      to={`/products/${item.slug}`}
                      onClick={closeCart}
                      className="font-serif text-sm uppercase tracking-wide transition-colors hover:text-velmora-gold"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-0.5 text-xs text-velmora-taupe-light">
                      {item.variant} Tone
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 border border-velmora-taupe/30 px-2 py-1">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="text-velmora-taupe-light transition-colors hover:text-velmora-ivory"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="min-w-[1.25rem] text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="text-velmora-taupe-light transition-colors hover:text-velmora-ivory"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="text-sm font-medium">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.id, item.variant)}
                  className="self-start text-velmora-taupe-light transition-colors hover:text-red-400"
                  aria-label="Remove item"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-velmora-taupe/30 pt-6">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-velmora-taupe-light">
                Subtotal ({totalItems} item{totalItems > 1 ? 's' : ''})
              </span>
              <span className="font-serif text-xl tracking-wide">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mb-4 text-xs text-velmora-taupe-light">
              Shipping and taxes calculated at checkout.
            </p>
            <Button className="w-full">Checkout</Button>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-3 block text-center text-xs uppercase tracking-widest text-velmora-taupe-light transition-colors hover:text-velmora-ivory"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
      </div>
    </Drawer>
  )
}
