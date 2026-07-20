import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm uppercase tracking-wider text-stone-800">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-stone-500" /> : <ChevronDown className="w-4 h-4 text-stone-500" />}
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-stone-600 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(0);
  const containerRef = useRef(null);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="serif-heading text-3xl text-stone-800 mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary inline-block">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const variant = product.variants[selectedVariant];

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    toast.success(`${product.name} added to your bag`);
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-stone-100 rounded overflow-hidden mb-4">
              <div
                className="w-full h-full"
                data-strk-bg-id={`pdp-main-${product.images[selectedImage].id}`}
                data-strk-bg={`[${product.id}-desc] [${product.id}-title] [pdp-title]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
            </div>
            <div className="grid grid-cols-4 gap-2 md:gap-3">
              {product.images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-stone-100 rounded overflow-hidden transition-all duration-300 ${
                    selectedImage === index ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <div
                    className="w-full h-full"
                    data-strk-bg-id={`pdp-thumb-${img.id}`}
                    data-strk-bg={`[${product.id}-desc] [${product.id}-title] [pdp-title]`}
                    data-strk-bg-ratio="1x1"
                    data-strk-bg-width="200"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:py-4">
            <p className="text-xs uppercase tracking-widest text-primary mb-2">{product.category}</p>
            <h1 id="pdp-title" className="product-name text-2xl md:text-3xl text-stone-800 mb-3">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-stone-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-stone-500">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="serif-heading text-2xl text-stone-800 mb-6">${variant.price}</p>

            <p className="text-stone-600 mb-6 leading-relaxed">{product.fullDescription}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-sm uppercase tracking-wider text-stone-800 mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((v, index) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(index)}
                    className={`px-5 py-2.5 text-sm rounded-full border transition-all duration-300 ${
                      selectedVariant === index
                        ? 'border-primary bg-primary/10 text-stone-800'
                        : 'border-stone-300 text-stone-600 hover:border-stone-400'
                    }`}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-sm uppercase tracking-wider text-stone-800 mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-stone-300 rounded flex items-center justify-center hover:bg-stone-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-stone-800">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-stone-300 rounded flex items-center justify-center hover:bg-stone-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn-dark w-full mb-4">
              Add to Bag — ${variant.price}
            </button>

            <p className="text-xs text-stone-400 text-center">Free shipping on all orders · 30-day returns</p>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion
                title="Description"
                isOpen={openAccordion === 0}
                onToggle={() => setOpenAccordion(openAccordion === 0 ? -1 : 0)}
              >
                {product.fullDescription}
              </Accordion>
              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 1}
                onToggle={() => setOpenAccordion(openAccordion === 1 ? -1 : 1)}
              >
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 2}
                onToggle={() => setOpenAccordion(openAccordion === 2 ? -1 : 2)}
              >
                <p className="mb-2">Free worldwide shipping on all orders. Standard delivery takes 5-10 business days.</p>
                <p>We offer 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24 pt-12 border-t border-stone-200">
            <h2 className="serif-heading text-2xl md:text-3xl text-stone-800 mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(related => (
                <Link key={related.id} to={`/product/${related.id}`} className="group">
                  <div className="aspect-[3/4] bg-stone-100 rounded overflow-hidden mb-3">
                    <div
                      className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                      data-strk-bg-id={`related-${related.images[0].id}`}
                      data-strk-bg={`[${related.id}-desc] [${related.id}-title] [related-title]`}
                      data-strk-bg-ratio="3x4"
                      data-strk-bg-width="400"
                    />
                  </div>
                  <h3 className="product-name text-xs md:text-sm text-stone-800 mb-1 truncate">{related.name}</h3>
                  <p className="text-sm font-medium text-stone-800">${related.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
