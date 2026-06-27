import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import ProductCard from '../components/ui/ProductCard';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-velmora-200">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm tracking-widest uppercase">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-velmora-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velmora-500" />
        )}
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="pb-4 text-velmora-600 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addItem } = useCart();
  const { addToast } = useToast();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-outline inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    addToast(`${product.name} added to cart`);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] overflow-hidden bg-velmora-100 mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-charcoal' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="md:py-8">
            <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-2">
              {product.category}
            </p>
            <h1 className="product-name text-2xl md:text-3xl mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-velmora-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-serif mb-6">${product.price}</p>

            <p className="text-velmora-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase mb-3">Color</p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-xs tracking-widest uppercase border transition-colors ${
                      selectedVariant === variant
                        ? 'border-charcoal bg-charcoal text-white'
                        : 'border-velmora-300 hover:border-charcoal'
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
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-velmora-300 flex items-center justify-center hover:border-charcoal transition-colors"
                >
                  -
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-velmora-300 flex items-center justify-center hover:border-charcoal transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="btn-gold w-full flex items-center justify-center gap-3"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-12">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-2">Each piece is carefully crafted and quality-checked before shipping. Our demi-fine jewelry is designed to be worn daily and loved for years.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Material:</strong> {product.material} over recycled brass</p>
                <p className="mb-2"><strong>Stone:</strong> Hypoallergenic crystal accents</p>
                <p className="mb-2"><strong>Care:</strong> Store in the provided pouch. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2"><strong>Shipping:</strong> Free worldwide shipping on all orders. Standard delivery takes 5-7 business days.</p>
                <p className="mb-2"><strong>Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
                <p><strong>Gift wrapping:</strong> Complimentary gift wrapping available at checkout.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-3">Complete the Look</p>
              <h2 className="text-3xl font-serif">You May Also Like</h2>
              <div className="hairline w-16 mx-auto mt-6" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
