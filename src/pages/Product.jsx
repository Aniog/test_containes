import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronRight, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductGallery from '@/components/product/ProductGallery';
import RelatedProducts from '@/components/product/RelatedProducts';

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#E8E4DF]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-5 text-left"
      >
        <span className="text-sm font-medium tracking-[0.15em] uppercase text-[#1A1A1A]">
          {title}
        </span>
        <span className="text-[#78716C] text-lg">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 text-[#78716C] text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const { addItem, setCartOpen } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FBF9F6]">
        <div className="text-center">
          <h1 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#1A1A1A] mb-4">
            Product Not Found
          </h1>
          <Link
            to="/shop"
            className="text-sm text-[#B8860B] hover:text-[#9A7209] transition-colors duration-300 underline underline-offset-4"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setCartOpen(true);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F6] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#78716C] mb-8">
          <Link to="/" className="hover:text-[#B8860B] transition-colors duration-300">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-[#B8860B] transition-colors duration-300">
            Shop
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#1A1A1A]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Product info */}
          <div>
            <h1 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-semibold text-[#1A1A1A] tracking-wide mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[#B8860B] text-[#B8860B]'
                        : 'fill-none text-[#D6D3D1]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#78716C]">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium text-[#1A1A1A] mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-[#78716C] text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <label className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1A1A1A] mb-3 block">
                Tone
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 border text-xs font-medium tracking-[0.1em] uppercase transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-[#B8860B] bg-[#B8860B] text-white'
                        : 'border-[#E8E4DF] text-[#1A1A1A] hover:border-[#B8860B]'
                    }`}
                  >
                    {variant === 'gold' ? '18K Gold' : 'Sterling Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1A1A1A] mb-3 block">
                Quantity
              </label>
              <div className="inline-flex items-center border border-[#E8E4DF]">
                <button
                  onClick={decreaseQuantity}
                  className="p-3 hover:text-[#B8860B] transition-colors duration-300"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm font-medium text-[#1A1A1A] min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={increaseQuantity}
                  className="p-3 hover:text-[#B8860B] transition-colors duration-300"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-[#1A1A1A] text-[#FBF9F6] text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#B8860B] transition-colors duration-300 mb-4"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#78716C]">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#B8860B]" />
                Free shipping over $75
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#B8860B]" />
                30-day returns
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#B8860B]" />
                Hypoallergenic
              </span>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p className="mb-3">{product.details}</p>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">{product.shipping}</p>
                <p>{product.returns}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentId={product.id} category={product.category} />
    </div>
  );
}
