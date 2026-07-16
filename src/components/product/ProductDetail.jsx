import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { toast } from 'sonner';

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-[#e8e4df]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-wider uppercase text-[#1a1a1a]">{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-[#6b6560] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-[#6b6560] leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf8f5]">
        <div className="text-center">
          <h1 className="serif-heading text-3xl text-[#1a1a1a] mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div ref={containerRef} className="bg-[#faf8f5] min-h-screen pt-20 md:pt-24">
      <div className="container-padding py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#9a9490] mb-8">
          <Link to="/" className="hover:text-[#1a1a1a] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[#1a1a1a] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[#1a1a1a]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-[#e8e4df] mb-4 overflow-hidden">
              <img
                alt={product.name}
                data-strk-img-id={`product-${product.id}-img-${activeImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-[3/4] bg-[#e8e4df] overflow-hidden transition-all duration-300 ${
                    activeImage === index ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    alt={`${product.name} view ${index + 1}`}
                    data-strk-img-id={`product-${product.id}-thumb-${index}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 id={product.titleId} className="product-name text-2xl md:text-3xl text-[#1a1a1a] mb-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-primary text-primary'
                        : 'text-[#e8e4df]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6b6560]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="serif-heading text-2xl text-[#1a1a1a] mb-6">${product.price}</p>

            <p id={product.descId} className="text-sm text-[#6b6560] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <label className="text-xs tracking-wider uppercase text-[#1a1a1a] mb-3 block">
                Finish
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs tracking-wider uppercase border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-[#1a1a1a] bg-[#1a1a1a] text-[#faf8f5]'
                        : 'border-[#e8e4df] text-[#6b6560] hover:border-[#1a1a1a]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs tracking-wider uppercase text-[#1a1a1a] mb-3 block">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-[#e8e4df] hover:border-[#1a1a1a] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-[#e8e4df] hover:border-[#1a1a1a] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-dark flex items-center justify-center gap-3 py-4"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-3">
                  Each piece is carefully crafted with attention to detail, designed to be worn 
                  every day and treasured for years to come.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>
                  18K gold plated over recycled brass. Hypoallergenic and nickel-free.
                </p>
                <p className="mt-3">
                  To care for your jewelry, avoid contact with water, perfume, and lotions. 
                  Store in the provided pouch when not wearing.
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Free worldwide shipping on all orders. Standard delivery takes 5-10 business days.
                </p>
                <p className="mt-3">
                  30-day hassle-free returns. Items must be unworn and in original packaging.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 md:mt-24">
          <h2 className="serif-heading text-2xl md:text-3xl text-[#1a1a1a] mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((related) => (
                <Link key={related.id} to={`/product/${related.id}`} className="group">
                  <div className="aspect-[3/4] bg-[#e8e4df] overflow-hidden mb-3">
                    <img
                      alt={related.name}
                      data-strk-img-id={`related-${related.id}-img`}
                      data-strk-img={`[${related.descId}] [${related.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="product-name text-xs text-[#1a1a1a] mb-1 truncate">
                    {related.name}
                  </h3>
                  <p className="text-sm text-[#1a1a1a]">${related.price}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
