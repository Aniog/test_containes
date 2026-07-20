import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import products from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import { useCart } from '@/context/CartContext';

function AccordionItem({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-velmora-sand/40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-[0.15em] uppercase font-medium text-velmora-charcoal">
          {title}
        </span>
        {isOpen ? (
          <ChevronUp size={14} className="text-velmora-gold flex-shrink-0" />
        ) : (
          <ChevronDown size={14} className="text-velmora-gold flex-shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-velmora-smoke/70 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart, openCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center section-padding">
        <h2 className="font-serif text-2xl text-velmora-ink">Product not found</h2>
        <Link to="/shop" className="btn-primary mt-6 inline-flex">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedVariant);
    }
    openCart();
  };

  return (
    <div className="pt-20 md:pt-28 pb-20 section-padding">
      <div className="max-w-[1200px] mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8">
          <p className="text-xs tracking-[0.1em] text-velmora-smoke/50 uppercase">
            <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-velmora-charcoal">{product.name}</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl md:text-3xl tracking-[0.12em] text-velmora-ink uppercase leading-snug">
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-xl text-velmora-gold font-medium mt-3">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating)
                      ? 'fill-velmora-gold text-velmora-gold'
                      : 'text-velmora-sand/60'
                    }
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-smoke/60">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-velmora-smoke/70 leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-8">
                <p className="text-xs tracking-[0.12em] uppercase text-velmora-charcoal mb-3 font-medium">
                  Finish
                </p>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2.5 text-xs tracking-[0.1em] uppercase transition-all duration-200 border ${
                        selectedVariant === v
                          ? 'border-velmora-gold bg-velmora-gold text-white'
                          : 'border-velmora-sand/50 text-velmora-smoke hover:border-velmora-gold'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add to Cart */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <p className="text-xs tracking-[0.12em] uppercase text-velmora-charcoal font-medium">
                  Quantity
                </p>
                <div className="flex items-center border border-velmora-sand/50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-velmora-charcoal hover:text-velmora-gold transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-4 py-2 text-sm text-velmora-charcoal min-w-[40px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-velmora-charcoal hover:text-velmora-gold transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <button onClick={handleAddToCart} className="btn-primary w-full">
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <AccordionItem title="Description" defaultOpen={true}>
                {product.details}
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                {product.care}
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                {product.shipping}
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <div className="hairline-divider mb-12" />
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-ink tracking-wide text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group block">
                  <div className="aspect-[3/4] bg-velmora-blush mb-3 overflow-hidden">
                    <img
                      alt={p.name}
                      data-strk-img-id={`related-${p.imgId}`}
                      data-strk-img={`[related-${p.descId}] [related-${p.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3
                    id={`related-${p.titleId}`}
                    className="font-serif text-xs tracking-[0.12em] text-velmora-charcoal uppercase truncate"
                  >
                    {p.name}
                  </h3>
                  <p id={`related-${p.descId}`} className="sr-only">{p.description}</p>
                  <p className="text-sm text-velmora-gold font-medium mt-1">${p.price}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
