import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Accordion = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-border/50">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-widest uppercase">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-muted-foreground leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="serif-heading text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    toast.success(`${product.name} added to cart`);
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4);

  const imageIds = [product.imgId, product.imgId2, product.imgId3];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-xs text-muted-foreground tracking-wider">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Product detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] bg-secondary/20 mb-4 overflow-hidden rounded-sm">
              <img
                alt={product.name}
                className="w-full h-full object-cover"
                data-strk-img-id={imageIds[selectedImage]}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="flex gap-3">
              {imageIds.map((imgId, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 overflow-hidden rounded-sm border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                    data-strk-img-id={imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-8">
            {product.badge && (
              <span className="inline-block bg-foreground text-background text-xs tracking-widest uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}
            <h1 id={product.titleId} className="product-name text-3xl md:text-4xl mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted-foreground/30'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="serif-heading text-2xl mb-6">${product.price}</p>

            {/* Description */}
            <p id={product.descId} className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <label className="text-sm tracking-widest uppercase mb-3 block">Finish</label>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm tracking-wider capitalize rounded-full border transition-all ${
                      selectedVariant === variant
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border/50 hover:border-primary'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-sm tracking-widest uppercase mb-3 block">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-border/50 rounded hover:border-primary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-border/50 rounded hover:border-primary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-foreground text-background py-4 text-sm tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 mb-4"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-xs text-muted-foreground text-center">
              Free shipping on orders over $75
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
              >
                {product.description}
                <br /><br />
                Designed for everyday wear, this piece features a secure closure and hypoallergenic materials suitable for sensitive skin.
              </Accordion>
              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
              >
                {product.materials}
                <br /><br />
                <strong>Care:</strong> Store in the provided pouch. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.
              </Accordion>
              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
              >
                <strong>Shipping:</strong> Free worldwide shipping on orders over $75. Standard delivery 5-10 business days. Express available at checkout.
                <br /><br />
                <strong>Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-20 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="serif-heading text-3xl md:text-4xl text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(related => (
                <Link key={related.id} to={`/product/${related.id}`} className="group">
                  <div className="aspect-[3/4] bg-secondary/20 overflow-hidden mb-3 rounded-sm">
                    <img
                      alt={related.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      data-strk-img-id={related.imgId}
                      data-strk-img={`[${related.descId}] [${related.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <h3 id={related.titleId} className="product-name text-sm group-hover:text-primary transition-colors">{related.name}</h3>
                  <p className="text-sm font-medium">${related.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailPage;
