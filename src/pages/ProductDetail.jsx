import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductGallery = ({ product }) => {
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-x-visible no-scrollbar">
        {product.images.map((img, index) => (
          <button
            key={img.id}
            onClick={() => setActiveImage(index)}
            className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 border-2 transition-all duration-300 ${
              activeImage === index
                ? 'border-velmora-accent'
                : 'border-transparent hover:border-velmora-border-thin'
            }`}
          >
            <div className="w-full h-full bg-velmora-border/30" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 aspect-[3/4] bg-velmora-border/30 overflow-hidden">
        <img
          data-strk-img-id={product.images[activeImage].id}
          data-strk-img={`[${product.id}-desc] [${product.id}-title] [product-gallery-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.shortName}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-wider uppercase text-velmora-text">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-velmora-secondary" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velmora-secondary" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-velmora-secondary text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-velmora-text mb-4">Product not found</p>
          <Link to="/shop" className="text-velmora-accent underline">
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
    .filter(p => p.id !== product.id && (p.category === product.category || p.badge))
    .slice(0, 4);

  return (
    <div className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/shop" className="flex items-center gap-2 text-velmora-secondary text-sm hover:text-velmora-accent transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Product Info */}
          <div className="md:pt-8">
            {product.badge && (
              <span className="inline-block bg-velmora-accent-light text-velmora-accent text-xs tracking-wider uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-3xl md:text-4xl tracking-wider uppercase text-velmora-text mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-velmora-accent text-velmora-accent'
                        : 'text-velmora-border-thin'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-secondary">{product.rating}</span>
              <span className="text-sm text-velmora-muted">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="text-2xl text-velmora-text font-medium mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-velmora-secondary text-base leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-sm tracking-wider uppercase text-velmora-text mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm tracking-wider uppercase border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-velmora-accent bg-velmora-accent text-white'
                        : 'border-velmora-border-thin text-velmora-secondary hover:border-velmora-accent'
                    }`}
                  >
                    {variant === 'gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm tracking-wider uppercase text-velmora-text mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-border-thin w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-velmora-border/30 transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4 text-velmora-secondary" />
                </button>
                <span className="flex-1 text-center text-velmora-text">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-velmora-border/30 transition-colors"
                >
                  <Plus className="w-4 h-4 text-velmora-secondary" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-velmora-accent text-white hover:bg-velmora-accent-hover'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-velmora-muted">
              <span>Free Shipping</span>
              <span className="text-velmora-border-thin">·</span>
              <span>30-Day Returns</span>
              <span className="text-velmora-border-thin">·</span>
              <span>Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-2">Each piece is carefully crafted and quality-checked before shipping. 
                Our demi-fine jewelry is designed to be worn daily and last for years with proper care.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-velmora-text">Material:</strong> {product.material} over brass base</p>
                <p className="mb-2"><strong className="text-velmora-text">Care:</strong> Store in the provided pouch. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.</p>
                <p><strong className="text-velmora-text">Hypoallergenic:</strong> Nickel-free and safe for sensitive skin.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2"><strong className="text-velmora-text">Shipping:</strong> Free worldwide shipping. Orders ship within 1-2 business days. Delivery in 5-10 business days.</p>
                <p className="mb-2"><strong className="text-velmora-text">Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
                <p><strong className="text-velmora-text">Gift Wrapping:</strong> Complimentary gift wrapping available at checkout.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-velmora-surface py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-velmora-text text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[3/4] bg-velmora-border/30 mb-3 overflow-hidden">
                    <div className="w-full h-full bg-velmora-border/30 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="font-serif text-sm tracking-wider uppercase text-velmora-text group-hover:text-velmora-accent transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-velmora-secondary text-sm mt-1">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
