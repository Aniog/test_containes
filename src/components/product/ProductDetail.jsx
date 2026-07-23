import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import { toast } from 'sonner';

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-t border-[#E8E4DF]">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={onToggle}
      >
        <span className="text-sm tracking-widest uppercase">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-[#6B6560] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl mb-4">Product not found</p>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    toast.success(`${product.name} added to cart`);
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 bg-[#FAF9F7]">
      <div className="container-velmora">
        {/* Breadcrumb */}
        <nav className="py-4 text-xs text-[#6B6560]">
          <Link to="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-[#1A1A1A] transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1A1A1A]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div className="aspect-[3/4] bg-[#E8E4DF] overflow-hidden">
                <img
                  data-strk-img-id={`${product.images[selectedImage].id}-detail`}
                  data-strk-img={`[${product.id}-title] [product-detail-image]`}
                  data-strk-img-ratio={product.images[selectedImage].ratio}
                  data-strk-img-width={800}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square bg-[#E8E4DF] overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-[#1A1A1A]' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={`[${product.id}-title] [product-thumbnail]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width={200}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:py-8">
            {product.badge && (
              <span className="inline-block bg-[#C9A96E]/20 text-[#6B6560] text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-[0.15em] mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-accent text-[#C9A96E]' : 'text-[#E8E4DF]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6B6560]">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl mb-6">${product.price.toFixed(2)}</p>

            {/* Description */}
            <p className="text-sm text-[#6B6560] leading-relaxed mb-8">{product.description}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase mb-3">Color</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs tracking-widest uppercase border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-[#1A1A1A] bg-[#1A1A1A] text-[#FAF9F7]'
                        : 'border-[#E8E4DF] text-[#6B6560] hover:border-[#1A1A1A]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase mb-3">Quantity</p>
              <div className="flex items-center border border-[#E8E4DF] w-fit">
                <button
                  className="p-3 hover:text-[#C9A96E] transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm">{quantity}</span>
                <button
                  className="p-3 hover:text-[#C9A96E] transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="btn-accent w-full mb-4">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-xs text-[#9B9590] text-center">
              Free shipping on orders over $75
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
              >
                <p>
                  Handcrafted with precision, this piece features 18K gold plating over recycled brass base. 
                  Each piece is carefully inspected for quality and finished with a protective coating to ensure 
                  lasting beauty. Designed for everyday wear, it pairs effortlessly with both casual and formal looks.
                </p>
              </Accordion>

              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
              >
                <ul className="space-y-2">
                  <li>• 18K gold plated over recycled brass</li>
                  <li>• Hypoallergenic — nickel-free</li>
                  <li>• Store in the provided pouch when not wearing</li>
                  <li>• Avoid contact with water, perfume, and lotions</li>
                  <li>• Clean gently with a soft, dry cloth</li>
                </ul>
              </Accordion>

              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
              >
                <ul className="space-y-2">
                  <li>• Free worldwide shipping on orders over $75</li>
                  <li>• Standard shipping: 5-7 business days</li>
                  <li>• Express shipping: 2-3 business days ($12)</li>
                  <li>• 30-day hassle-free returns</li>
                  <li>• Items must be unworn and in original packaging</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="py-16 md:py-24">
            <h2 className="section-title mb-12">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
