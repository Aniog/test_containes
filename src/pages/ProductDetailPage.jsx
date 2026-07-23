import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { toast } from 'sonner';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#E8E4DF]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm uppercase tracking-widest text-foreground">{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-[#6B6560] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-[#6B6560] leading-relaxed">{children}</p>
      </div>
    </div>
  );
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="serif-heading text-2xl text-foreground">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    toast.success(`${product.name} added to your bag`);
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.bestseller))
    .slice(0, 4);

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24">
      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-[#FAF8F5] mb-4">
              <img
                data-strk-img-id={`product-main-${product.id}`}
                data-strk-img={`[${product.id}-subtitle] [${product.id}-name] gold jewelry detail`}
                data-strk-img-ratio={product.images[0].ratio}
                data-strk-img-width={product.images[0].width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-[3/4] bg-[#FAF8F5] transition-all duration-300 ${
                    selectedImage === index ? 'ring-2 ring-accent' : 'hover:ring-1 hover:ring-[#E8E4DF]'
                  }`}
                >
                  <img
                    data-strk-img-id={`product-thumb-${product.id}-${index}`}
                    data-strk-img={`[${product.id}-subtitle] [${product.id}-name] gold jewelry`}
                    data-strk-img-ratio={img.ratio}
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product details */}
          <div className="lg:py-8">
            <h1 className="product-name text-2xl sm:text-3xl text-foreground mb-2">
              {product.name}
            </h1>
            <p className="text-[#6B6560] mb-4">{product.subtitle}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-[#E8E4DF]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6B6560]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="serif-heading text-2xl text-foreground mb-8">${product.price}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#6B6560] mb-3 block">
                Finish
              </span>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => variant.available && setSelectedVariant(variant.id)}
                    disabled={!variant.available}
                    className={`px-6 py-2.5 text-xs uppercase tracking-widest border transition-all duration-300 ${
                      selectedVariant === variant.id
                        ? 'border-accent bg-accent text-white'
                        : variant.available
                        ? 'border-[#E8E4DF] text-foreground hover:border-accent'
                        : 'border-[#E8E4DF] text-[#9B9590] cursor-not-allowed'
                    }`}
                  >
                    {variant.label}
                    {!variant.available && ' (Sold Out)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest text-[#6B6560] mb-3 block">
                Quantity
              </span>
              <div className="flex items-center border border-[#E8E4DF] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-[#FAF8F5] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm text-foreground">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-[#FAF8F5] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full mb-4">
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-xs text-[#6B6560] text-center">
              Free shipping on orders over $75 · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials} To maintain the beauty of your piece, avoid contact with water, 
                perfume, and lotions. Store in the provided pouch when not wearing.
              </Accordion>
              <Accordion title="Shipping & Returns">
                Free worldwide shipping on all orders. Express shipping available at checkout. 
                30-day hassle-free returns. Items must be unworn and in original packaging.
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 lg:py-20 bg-[#FAF8F5] section-divider">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="serif-heading text-2xl sm:text-3xl text-foreground text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailPage;
