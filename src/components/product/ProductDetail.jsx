import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border/50">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm tracking-wide">{title}</span>
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="serif-heading text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="inline-block border border-primary text-primary px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
            Back to Shop
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

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4">
        <nav className="text-xs text-muted-foreground flex items-center gap-2">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-secondary mb-4 overflow-hidden">
              <img
                data-strk-img-id={`product-${product.id}-main`}
                data-strk-img={`[${product.id}-name] [product-detail-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 bg-secondary overflow-hidden transition-all duration-300 ${
                    selectedImage === index ? 'ring-2 ring-accent' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    data-strk-img-id={`product-${product.id}-thumb-${index}`}
                    data-strk-img={`[${product.id}-name] [product-detail-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block bg-accent/10 text-accent text-[10px] tracking-widest uppercase px-3 py-1.5 mb-4">
                {product.badge}
              </span>
            )}

            <h1 id="product-detail-title" className="product-name text-2xl md:text-3xl mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted'}
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
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs tracking-widest uppercase border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border/50 text-muted-foreground hover:border-primary'
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
              <div className="flex items-center border border-border/50 w-32">
                <button
                  className="p-3 hover:bg-secondary transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="flex-1 text-center text-sm">{quantity}</span>
                <button
                  className="p-3 hover:bg-secondary transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-sm tracking-widest uppercase transition-all duration-300 ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-accent text-accent-foreground hover:opacity-90 hover:shadow-lg'
              }`}
            >
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-3">
                  Each piece is carefully crafted using 18K gold plating over recycled brass, 
                  ensuring both beauty and sustainability. Our demi-fine jewelry is designed 
                  to be worn daily and treasured for years.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>
                  <strong>Material:</strong> 18K gold plated over recycled brass base.
                </p>
                <p className="mt-2">
                  <strong>Care:</strong> Store in the provided pouch when not wearing. 
                  Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.
                </p>
                <p className="mt-2">
                  <strong>Hypoallergenic:</strong> All our pieces are nickel-free and safe for sensitive skin.
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  <strong>Shipping:</strong> Free worldwide shipping on all orders. 
                  Standard delivery takes 5-10 business days. Express shipping available at checkout.
                </p>
                <p className="mt-2">
                  <strong>Returns:</strong> 30-day hassle-free returns. Items must be unworn 
                  and in original packaging. Refunds processed within 5 business days.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="border-t border-border/50 mt-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
            <h2 className="serif-heading text-2xl md:text-3xl text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((related) => (
                <Link key={related.id} to={`/product/${related.id}`} className="group block">
                  <div className="aspect-[3/4] bg-secondary mb-3 overflow-hidden">
                    <img
                      data-strk-img-id={`related-${related.id}`}
                      data-strk-img={`[${related.id}-name] [related-products-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={related.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="product-name text-sm mb-1 group-hover:text-accent transition-colors">
                    {related.name}
                  </h3>
                  <p className="text-sm font-medium">${related.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
