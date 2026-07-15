import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-widest uppercase text-charcoal">{title}</span>
        <ChevronDown className={`w-4 h-4 text-taupe transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-taupe leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const containerRef = useRef(null);

  const product = products.find(p => p.id === id);
  const relatedProducts = product
    ? products.filter(p => product.related.includes(p.id))
    : [];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-20 md:pt-24 min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <p className="text-taupe mb-4">Product not found</p>
          <Link to="/shop" className="text-gold text-xs tracking-widest uppercase border-b border-gold pb-1">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: selectedVariant,
      quantity,
      image: product.images[selectedImage],
    });
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-taupe mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.shortName}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-cream-dark mb-4 overflow-hidden">
              <img
                alt={product.shortName}
                data-strk-img-id={product.images[selectedImage].id}
                data-strk-img={`[${product.images[selectedImage].id}-text]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-24 overflow-hidden transition-all duration-300 ${
                    selectedImage === i ? 'ring-2 ring-gold' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="w-full h-full bg-cream-dark" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-8">
            <h1 className="font-serif text-2xl md:text-3xl text-charcoal tracking-widest-xl uppercase mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-taupe">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="text-2xl text-charcoal font-light mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-taupe leading-relaxed mb-8">{product.description}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <span className="text-xs tracking-widest uppercase text-charcoal block mb-3">Finish</span>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-xs tracking-widest uppercase transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'bg-charcoal text-cream'
                        : 'border border-border text-taupe hover:border-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <span className="text-xs tracking-widest uppercase text-charcoal block mb-3">Quantity</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-border flex items-center justify-center hover:border-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-border flex items-center justify-center hover:border-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold hover:bg-gold-hover text-cream text-xs tracking-widest uppercase py-4 flex items-center justify-center gap-3 transition-colors duration-300 mb-4"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-xs text-taupe text-center">
              Free shipping on orders over $75
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-3">Each piece comes in our signature gift box, ready for gifting or treating yourself.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-charcoal">Material:</strong> {product.material} over recycled brass</p>
                <p className="mb-2"><strong className="text-charcoal">Care:</strong> Avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
                <p><strong className="text-charcoal">Hypoallergenic:</strong> Nickel-free and safe for sensitive skin.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2"><strong className="text-charcoal">Shipping:</strong> Free worldwide shipping on orders over $75. Standard shipping 5-10 business days.</p>
                <p className="mb-2"><strong className="text-charcoal">Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
                <p><strong className="text-charcoal">Gift wrapping:</strong> Complimentary on all orders.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 md:mt-28 pt-16 border-t border-border">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(relProduct => (
                <Link key={relProduct.id} to={`/product/${relProduct.id}`} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark mb-4">
                    <img
                      alt={relProduct.shortName}
                      data-strk-img-id={relProduct.images[0].id}
                      data-strk-img={`[${relProduct.images[0].id}-text]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xs tracking-widest uppercase text-charcoal mb-1 group-hover:text-gold transition-colors">
                    {relProduct.name}
                  </h3>
                  <p className="text-sm text-charcoal font-medium">${relProduct.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
