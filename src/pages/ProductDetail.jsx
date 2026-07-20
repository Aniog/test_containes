import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, Minus, Plus, Check } from 'lucide-react';
import StarRating from '../components/StarRating';
import ProductCard from '../components/ProductCard';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-velmora-sand">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs uppercase tracking-widest text-velmora-charcoal">
          {title}
        </span>
        <ChevronDown
          size={16}
          className={`text-velmora-taupe transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-velmora ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="font-sans text-sm leading-relaxed text-velmora-taupe">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || 'gold'
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-velmora-cream pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-charcoal">
            Product not found
          </h1>
          <Link
            to="/shop"
            className="mt-4 inline-block font-sans text-xs uppercase tracking-widest text-velmora-goldDark underline"
          >
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-velmora-cream pt-20">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse gap-4 lg:flex-row">
            <div className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-visible">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`h-20 w-16 flex-shrink-0 overflow-hidden border transition-colors lg:h-24 lg:w-20 ${
                    selectedImage === idx
                      ? 'border-velmora-charcoal'
                      : 'border-velmora-sand'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="aspect-[3/4] flex-1 overflow-hidden bg-velmora-sand">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <p className="font-sans text-xs uppercase tracking-ultra text-velmora-gold">
              {product.category}
            </p>
            <h1 className="mt-2 font-serif text-3xl uppercase tracking-widest text-velmora-charcoal md:text-4xl">
              {product.name}
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <StarRating rating={product.rating} />
              <span className="font-sans text-xs text-velmora-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <p className="mt-4 font-sans text-2xl font-light text-velmora-charcoal">
              ${product.price}
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-velmora-taupe">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="mb-2 font-sans text-xs uppercase tracking-widest text-velmora-charcoal">
                Tone
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full border px-5 py-2 font-sans text-xs uppercase tracking-widest transition-all ${
                      selectedVariant === variant
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-velmora-cream'
                        : 'border-velmora-sand text-velmora-taupe hover:border-velmora-brown'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="mb-2 font-sans text-xs uppercase tracking-widest text-velmora-charcoal">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-sand">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-velmora-taupe transition-colors hover:text-velmora-charcoal"
                  aria-label="Decrease"
                >
                  <Minus size={14} />
                </button>
                <span className="min-w-[2rem] text-center text-sm text-velmora-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-velmora-taupe transition-colors hover:text-velmora-charcoal"
                  aria-label="Increase"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`mt-8 flex w-full items-center justify-center gap-2 py-4 font-sans text-xs uppercase tracking-widest transition-all duration-300 ${
                added
                  ? 'bg-velmora-gold text-velmora-charcoal'
                  : 'bg-velmora-espresso text-velmora-cream hover:bg-velmora-charcoal'
              }`}
            >
              {added ? (
                <>
                  <Check size={16} />
                  Added to Cart
                </>
              ) : (
                'Add to Cart'
              )}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2">
                  <strong className="text-velmora-brown">Details:</strong>{' '}
                  {product.details}
                </p>
                <p>
                  <strong className="text-velmora-brown">Care:</strong>{' '}
                  {product.care}
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Free worldwide shipping on all orders over $50. Orders are
                  processed within 1–2 business days. We offer 30-day hassle-free
                  returns on all unworn items in original packaging.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20 border-t border-velmora-sand pt-16">
            <h2 className="mb-10 text-center font-serif text-2xl text-velmora-charcoal md:text-3xl">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
              {related.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}