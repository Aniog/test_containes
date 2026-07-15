import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import ProductCard from '@/components/ui/ProductCard';
import strkImgConfig from '@/strk-img-config.json';
import { ImageHelper } from '@strikingly/sdk';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        className="w-full flex items-center justify-between py-4 font-sans text-sm tracking-wide text-foreground hover:text-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="font-sans text-sm text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const containerRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, selectedImage]);

  useEffect(() => {
    setSelectedImage(0);
    setSelectedVariant('gold');
    setQuantity(1);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    openCart();
  };

  const relatedProducts = getRelatedProducts(product.id, 4);

  return (
    <main ref={containerRef} className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="py-4 font-sans text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] bg-secondary rounded-sm overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                data-strk-bg-id={`product-detail-${product.id}-${selectedImage}`}
                data-strk-bg={`[${product.id}-name] gold jewelry ${selectedImage === 0 ? 'elegant' : selectedImage === 1 ? 'detail closeup' : 'on model'}`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="900"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-secondary rounded-sm overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-transparent hover:border-border'
                  }`}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    data-strk-bg-id={`product-thumb-${product.id}-${index}`}
                    data-strk-bg={`[${product.id}-name] jewelry`}
                    data-strk-bg-ratio="1x1"
                    data-strk-bg-width="300"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            {product.badge && (
              <span className="inline-block bg-primary/10 text-primary font-sans text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-sm mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="product-name text-2xl sm:text-3xl text-foreground mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-star text-star' : 'text-border'}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-medium text-foreground mb-6">
              ${product.price.toFixed(2)}
            </p>

            {/* Description */}
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <label className="font-sans text-xs tracking-widest uppercase text-foreground mb-3 block">
                Finish
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`px-5 py-2.5 rounded-full font-sans text-xs tracking-wide transition-all duration-300 ${
                      selectedVariant === variant.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-muted-foreground hover:bg-border'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="font-sans text-xs tracking-widest uppercase text-foreground mb-3 block">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-border rounded-sm hover:bg-secondary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="font-sans text-base w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-border rounded-sm hover:bg-secondary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full flex items-center justify-center gap-2 py-4"
            >
              <ShoppingBag size={16} />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="mt-6 pt-6 border-t border-border-light grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xs">✦</span>
                </div>
                <span className="font-sans text-xs text-muted-foreground">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xs">↺</span>
                </div>
                <span className="font-sans text-xs text-muted-foreground">30-Day Returns</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-3">Each piece is carefully crafted and quality-checked before shipping. Our demi-fine jewelry is designed to be worn daily and last for years with proper care.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-foreground">Materials:</strong> 18K gold plated over recycled brass. Hypoallergenic and nickel-free.</p>
                <p className="mb-2"><strong className="text-foreground">Care:</strong> Store in the provided pouch. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.</p>
                <p><strong className="text-foreground">Longevity:</strong> With proper care, gold plating lasts 1-2 years of daily wear. We offer a replating service.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2"><strong className="text-foreground">Shipping:</strong> Free worldwide shipping on all orders. Standard delivery 5-10 business days. Express available at checkout.</p>
                <p className="mb-2"><strong className="text-foreground">Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
                <p><strong className="text-foreground">Gift wrapping:</strong> Complimentary gift wrapping available at checkout.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="py-16 lg:py-24">
          <div className="hairline-divider mb-12" />
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-3 text-center">
            You May Also Like
          </h2>
          <p className="font-sans text-sm text-muted-foreground text-center mb-10">
            Complete your collection
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetailPage;
