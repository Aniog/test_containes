import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

const ProductCardSmall = ({ product }) => {
  const { addItem } = useCart();

  return (
    <Link to={`/product/${product.id}`} className="product-card group">
      <div className="product-card-image">
        <img
          data-strk-img-id={product.images[0].id}
          data-strk-img={`[${product.images[0].id}-text] [${product.id}-name]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-gold text-white text-[10px] tracking-widest uppercase px-3 py-1">
            {product.badge}
          </span>
        )}
        <div className="product-card-overlay">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product, product.variants[0]);
            }}
            className="bg-white text-velmora-black px-6 py-2 text-xs tracking-widest uppercase flex items-center gap-2 hover:bg-velmora-gold hover:text-white transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-black">
          {product.name}
        </h3>
        <p className="font-sans text-sm mt-2 text-velmora-black">${product.price}</p>
      </div>
    </Link>
  );
};

const ProductDetail = ({ productId }) => {
  const product = products.find(p => p.id === productId);
  const containerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-serif text-2xl text-velmora-gray-dark">Product not found</p>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4);

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description + '. Crafted with care using premium materials, this piece is designed for everyday wear and lasting beauty. Each Velmora piece undergoes rigorous quality testing to ensure it meets our high standards.',
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: '18K gold plated over sterling silver base. Hypoallergenic and nickel-free. To maintain the luster, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft jewelry cloth.',
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Orders ship within 1-2 business days. 30-day hassle-free returns — if you\'re not completely in love, send it back for a full refund. Gift packaging available at checkout.',
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-velmora-warm mb-4 overflow-hidden">
              <img
                data-strk-img-id={product.images[selectedImage].id}
                data-strk-img={`[${product.images[selectedImage].id}-text] [${product.id}-name] [product-detail-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 bg-velmora-warm overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${image.id}`}
                    data-strk-img={`[${image.id}-text]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {product.badge && (
              <span className="inline-block bg-velmora-gold text-white text-[10px] tracking-widest uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}
            <h1 className="font-serif text-3xl md:text-4xl text-velmora-black tracking-wide">
              {product.name}
            </h1>
            <p className="font-sans text-sm text-velmora-gray-dark mt-2">{product.description}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-gray'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-velmora-gray-dark">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-velmora-black mt-6">${product.price}</p>

            {/* Variant Selector */}
            <div className="mt-6">
              <label className="font-sans text-xs tracking-widest uppercase text-velmora-gray-dark">
                Color: <span className="text-velmora-black capitalize">{selectedVariant}</span> tone
              </label>
              <div className="flex gap-3 mt-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-xs tracking-widest uppercase border transition-all ${
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-gray text-velmora-gray-dark hover:border-velmora-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <label className="font-sans text-xs tracking-widest uppercase text-velmora-gray-dark">
                Quantity
              </label>
              <div className="flex items-center gap-4 mt-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-velmora-gray flex items-center justify-center hover:border-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-velmora-gray flex items-center justify-center hover:border-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="btn-primary w-full mt-8"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-8 space-y-0">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-t border-velmora-gray/50">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-sm tracking-widest uppercase text-velmora-black">
                      {accordion.title}
                    </span>
                    {openAccordion === accordion.id ? (
                      <ChevronUp className="w-5 h-5 text-velmora-gray-dark" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-velmora-gray-dark" />
                    )}
                  </button>
                  {openAccordion === accordion.id && (
                    <div className="pb-4">
                      <p className="font-sans text-sm text-velmora-gray-dark leading-relaxed">
                        {accordion.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="section-title">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCardSmall key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
