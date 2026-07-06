import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium text-charcoal">{title}</span>
        <ChevronDown className={`w-4 h-4 text-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-4 text-sm text-muted leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

function RelatedProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="aspect-[3/4] bg-muted-bg overflow-hidden mb-3">
        <div className="w-full h-full flex items-center justify-center p-4">
          <span className="text-xs text-muted text-center font-medium tracking-wide uppercase">
            {product.name}
          </span>
        </div>
      </div>
      <h3 className="font-serif text-xs font-medium tracking-product uppercase text-charcoal group-hover:text-accent transition-colors">
        {product.name}
      </h3>
      <p className="text-sm text-muted mt-1">${product.price}</p>
    </Link>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="text-accent text-sm mt-4 inline-block hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-muted">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted-bg flex items-center justify-center">
              <span className="text-sm text-muted font-medium tracking-wide uppercase text-center px-8">
                {product.images[selectedImage]}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square bg-muted-bg flex items-center justify-center p-2 transition-all duration-200 ${
                    selectedImage === i ? 'ring-2 ring-accent' : 'hover:ring-1 hover:ring-border'
                  }`}
                >
                  <span className="text-[10px] text-muted text-center">{img}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="py-2">
            <h1 className="font-serif text-2xl md:text-3xl font-medium tracking-product uppercase text-charcoal">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-xl font-serif font-medium text-charcoal mt-4">
              ${product.price}
            </p>

            <p className="text-sm text-muted leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-8">
                <p className="text-xs font-medium text-charcoal uppercase tracking-wide mb-3">
                  Tone: <span className="capitalize text-muted">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map(variant => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-4 py-2 text-xs font-medium tracking-wide uppercase border transition-all duration-200 ${
                        selectedVariant === variant
                          ? 'border-accent bg-accent text-white'
                          : 'border-border text-charcoal hover:border-accent'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs font-medium text-charcoal uppercase tracking-wide mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 py-4 bg-accent text-white text-sm font-medium tracking-wide uppercase hover:bg-accent-hover transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.material}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 md:mt-28 border-t border-border pt-16">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <RelatedProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
