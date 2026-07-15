import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ui/ProductCard';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-wider uppercase">{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductPage = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const containerRef = useRef(null);

  const product = products.find(p => p.id === productId);
  const relatedProducts = products.filter(p => p.id !== productId).slice(0, 4);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [productId, selectedImage]);

  if (!product) {
    return (
      <div className="container-padding py-32 text-center">
        <h1 className="serif-heading text-3xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-primary inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="container-padding py-4">
        <nav className="text-xs text-muted-foreground tracking-wider">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="container-padding">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="grid grid-cols-2 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-[3/4] overflow-hidden transition-all duration-300 ${
                    selectedImage === index ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    data-strk-img-id={`product-${product.id}-${index}`}
                    data-strk-img={`[${product.id}-desc] [${product.id}-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:py-8">
            {product.badge && (
              <span className="inline-block bg-primary/10 text-primary text-[10px] tracking-widest uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="product-name text-2xl md:text-3xl font-light mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted'}`}
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
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="text-sm tracking-wider uppercase mb-3 block">Color</label>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm tracking-wider capitalize border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-sm tracking-wider uppercase mb-3 block">Quantity</label>
              <div className="flex items-center border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-secondary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-secondary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product, selectedVariant, quantity)}
              className="w-full btn-primary mb-4"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span>Free Shipping</span>
              <span>•</span>
              <span>30-Day Returns</span>
              <span>•</span>
              <span>18K Gold Plated</span>
            </div>

            {/* Accordions */}
            <div className="mt-12">
              <Accordion title="Description">
                <p>{product.description}</p>
                <p className="mt-4">Each piece is carefully crafted using premium materials and finished with 18K gold plating for lasting beauty.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Material:</strong> {product.material} over sterling silver base</p>
                <p className="mb-2"><strong>Care:</strong> Store in a dry place. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.</p>
                <p>Hypoallergenic and nickel-free. Safe for sensitive skin.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2"><strong>Shipping:</strong> Free worldwide shipping on all orders. Standard delivery 5-10 business days.</p>
                <p className="mb-2"><strong>Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
                <p>Gift wrapping available at checkout.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding">
          <div className="container-padding">
            <h2 className="serif-heading text-2xl md:text-3xl font-light text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductPage;
