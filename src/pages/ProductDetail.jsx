import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-brand-warm-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-extra-wide uppercase font-sans font-medium text-brand-warm-black">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-brand-warm-gray transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <div className="text-sm text-brand-warm-gray font-sans leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-brand-warm-black mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-sm text-brand-gold font-sans tracking-wide hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 md:mb-8">
          <ol className="flex items-center gap-2 text-xs font-sans text-brand-warm-gray-light">
            <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-brand-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-brand-warm-black">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3x4] overflow-hidden bg-brand-ivory mb-3">
              <img
                data-strk-img-id={`pdp-${product.id}-${selectedImage}`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-name-${product.id}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-20 overflow-hidden bg-brand-ivory border-2 transition-colors ${
                    selectedImage === index ? 'border-brand-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${index}`}
                    data-strk-img={`[pdp-desc-${product.id}] [pdp-name-${product.id}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:pl-4">
            <h1
              id={`pdp-name-${product.id}`}
              className="product-name text-xl md:text-2xl font-medium text-brand-warm-black"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-warm-border'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-brand-warm-gray font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-serif font-semibold text-brand-warm-black mt-4">
              ${product.price}
            </p>

            <p
              id={`pdp-desc-${product.id}`}
              className="text-sm text-brand-warm-gray font-sans leading-relaxed mt-4"
            >
              {product.description}. Crafted with premium {product.material} materials for lasting shine and comfort. Each piece is hypoallergenic and water-resistant, designed to be worn every day.
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs tracking-extra-wide uppercase font-sans font-medium text-brand-warm-black mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs tracking-extra-wide uppercase font-sans border transition-colors duration-300 ${
                      selectedVariant === variant
                        ? 'border-brand-gold bg-brand-gold text-white'
                        : 'border-brand-warm-border text-brand-warm-gray hover:border-brand-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-extra-wide uppercase font-sans font-medium text-brand-warm-black mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-brand-warm-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-brand-warm-gray hover:text-brand-warm-black transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-sans text-brand-warm-black">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-brand-warm-gray hover:text-brand-warm-black transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full mt-8 bg-brand-gold text-white text-xs tracking-ultra-wide uppercase font-sans font-medium py-4 hover:bg-brand-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag
            </button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-4 text-[11px] text-brand-warm-gray-light font-sans tracking-wide">
              <span>Free Shipping</span>
              <span>·</span>
              <span>30-Day Returns</span>
              <span>·</span>
              <span>Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-brand-warm-border">
              <Accordion title="Description" defaultOpen>
                <p>
                  The {product.name} is a statement of refined elegance. {product.description}, this piece embodies the Velmora philosophy — luxury that moves with you. Perfect for both everyday wear and special occasions.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-2">
                  <li>• 18K Gold Plated over 925 Sterling Silver</li>
                  <li>• Hypoallergenic — safe for sensitive skin</li>
                  <li>• Water-resistant finish</li>
                  <li>• Tarnish-resistant with proper care</li>
                  <li>• Store in the provided Velmora pouch when not wearing</li>
                  <li>• Avoid direct contact with perfume and chemicals</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-2">
                  <li>• Free worldwide shipping on all orders</li>
                  <li>• Standard delivery: 5–7 business days</li>
                  <li>• Express delivery: 2–3 business days (available at checkout)</li>
                  <li>• 30-day hassle-free returns</li>
                  <li>• Items must be unworn and in original packaging</li>
                  <li>• Gift wrapping available at checkout</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <h2 className="font-serif text-2xl md:text-3xl text-brand-warm-black tracking-wide text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((rp) => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                <div className="aspect-[3x4] overflow-hidden bg-brand-ivory mb-3">
                  <img
                    data-strk-img-id={`related-${rp.id}-1`}
                    data-strk-img={`[related-desc-${rp.id}] [related-name-${rp.id}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3
                  id={`related-name-${rp.id}`}
                  className="product-name text-sm font-medium text-brand-warm-black"
                >
                  {rp.name}
                </h3>
                <p
                  id={`related-desc-${rp.id}`}
                  className="text-xs text-brand-warm-gray font-sans mt-0.5"
                >
                  {rp.description}
                </p>
                <p className="text-sm font-sans font-medium text-brand-warm-black mt-1">
                  ${rp.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
