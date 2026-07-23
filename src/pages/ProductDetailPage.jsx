import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Minus, Plus, ShoppingBag, Heart, Share2 } from 'lucide-react';
import { products } from '../data/products';
import { useCartStore } from '../store/cartStore';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#D4CFC7]">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm uppercase tracking-wider">{title}</span>
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
        <div className="text-sm text-foreground/70 leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const { addItem, openCart } = useCartStore();

  if (!product) {
    return (
      <main className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    openCart();
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.badge))
    .slice(0, 4);

  return (
    <main className="pt-20 md:pt-24">
      <div className="container-padding py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-[#E8E2D9] rounded-sm overflow-hidden mb-4">
              <div className="w-full h-full bg-gradient-to-br from-[#D4CFC7] to-[#E8E2D9] flex items-center justify-center">
                <span className="text-muted-foreground text-sm tracking-wider">Product Image</span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square bg-[#E8E2D9] rounded-sm overflow-hidden transition-all ${
                    selectedImage === i ? 'ring-2 ring-primary' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#D4CFC7] to-[#E8E2D9] flex items-center justify-center">
                    <span className="text-muted-foreground text-[10px]">{i + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:py-4">
            {product.badge && (
              <span className="inline-block bg-primary/10 text-primary text-[10px] uppercase tracking-wider px-3 py-1 rounded-sm mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="product-name text-2xl md:text-3xl mb-3">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted-foreground'}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl mb-6">${product.price}</p>

            <p className="text-foreground/70 leading-relaxed mb-8 font-light">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <label className="text-sm uppercase tracking-wider mb-3 block">Finish</label>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm rounded-sm border transition-all ${
                      selectedVariant === variant
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-[#D4CFC7] text-foreground/70 hover:border-foreground/30'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-sm uppercase tracking-wider mb-3 block">Quantity</label>
              <div className="flex items-center gap-0">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-[#D4CFC7] flex items-center justify-center hover:border-foreground/30 transition-colors rounded-l-sm"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 h-10 border border-[#D4CFC7] border-x-0 flex items-center justify-center text-sm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-[#D4CFC7] flex items-center justify-center hover:border-foreground/30 transition-colors rounded-r-sm"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full mb-4">
              <ShoppingBag size={16} className="mr-2" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                <Heart size={16} />
                Wishlist
              </button>
              <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                <Share2 size={16} />
                Share
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-2">
                  Each piece is carefully crafted and quality-checked before shipping. 
                  Our demi-fine jewelry is designed for everyday wear with lasting beauty.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>
                  <strong>Material:</strong> {product.material} over sterling silver base.
                </p>
                <p className="mt-2">
                  <strong>Care:</strong> Store in the provided pouch when not wearing. 
                  Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  <strong>Shipping:</strong> Free worldwide shipping on all orders. 
                  Standard delivery takes 5-10 business days. Express shipping available at checkout.
                </p>
                <p className="mt-2">
                  <strong>Returns:</strong> 30-day hassle-free returns. Items must be unworn 
                  and in original packaging. Gift sets are final sale.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="font-serif text-2xl md:text-3xl font-light mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group block">
                  <div className="aspect-[3/4] bg-[#E8E2D9] rounded-sm overflow-hidden mb-3">
                    <div className="w-full h-full bg-gradient-to-br from-[#D4CFC7] to-[#E8E2D9] flex items-center justify-center">
                      <span className="text-muted-foreground text-xs tracking-wider">IMG</span>
                    </div>
                  </div>
                  <h3 className="product-name text-xs text-foreground">{p.name}</h3>
                  <p className="text-sm font-medium mt-1">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductDetailPage;
