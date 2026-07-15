import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/StarRating';
import ProductCard from '@/components/ProductCard';

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-velmora-taupe/30">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-medium tracking-wider uppercase">{title}</span>
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {open && (
        <div className="pb-4 text-sm text-velmora-warmgray leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = useMemo(() => products.find((p) => p.id === id), [id]);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <p className="font-serif text-xl">Product not found</p>
        <Link to="/shop" className="text-sm text-velmora-gold mt-2 inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = useMemo(
    () => products.filter((p) => p.id !== product.id).slice(0, 4),
    [product]
  );

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: selectedVariant,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-20 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Images */}
          <div className="flex flex-col gap-3">
            <div className="aspect-square bg-velmora-sand rounded-sm overflow-hidden">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                data-strk-img-id={`product-${product.id}-main`}
                data-strk-img={`[product-title-${product.id}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="900"
                className="w-full h-full object-cover"
              />
              <h1 id={`product-title-${product.id}`} className="sr-only">{product.name} {product.category}</h1>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-velmora-sand rounded-sm overflow-hidden cursor-pointer hover:ring-1 ring-velmora-gold transition-all">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    data-strk-img-id={`product-${product.id}-thumb-${i}`}
                    data-strk-img={`[product-title-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="md:py-4">
            <p className="text-xs tracking-[0.25em] uppercase text-velmora-gold mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-light tracking-widest uppercase">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mt-3">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-velmora-warmgray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <p className="text-xl md:text-2xl font-medium mt-4">${product.price}</p>
            <p className="mt-5 text-sm text-velmora-warmgray leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-6">
                <p className="text-xs tracking-wider uppercase text-velmora-warmgray mb-2">Color</p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 text-xs tracking-wider uppercase border rounded-full transition-all duration-300 ${
                        selectedVariant === v
                          ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                          : 'border-velmora-taupe text-velmora-charcoal hover:border-velmora-charcoal'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-wider uppercase text-velmora-warmgray mb-2">Quantity</p>
              <div className="inline-flex items-center border border-velmora-taupe/50 rounded">
                <button
                  className="px-3 py-2 hover:bg-velmora-sand transition-colors"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 text-sm font-medium w-10 text-center">{quantity}</span>
                <button
                  className="px-3 py-2 hover:bg-velmora-sand transition-colors"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`w-full mt-8 py-4 text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 ${
                added
                  ? 'bg-green-700 text-white'
                  : 'bg-velmora-charcoal text-white hover:bg-velmora-gold'
              }`}
            >
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <AccordionItem title="Description">
                {product.description}
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                Free worldwide shipping on all orders over $50. Standard delivery 5–10 business days. Express delivery 2–4 business days. Easy 30-day returns on unworn items in original packaging.
              </AccordionItem>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="bg-velmora-sand py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
