import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    if (!product) {
      navigate('/shop');
      return;
    }
    setSelectedVariant(product.variants[0]);
    setSelectedImage(0);
    setQuantity(1);
    window.scrollTo(0, 0); // Scroll to top when product changes
  }, [product, navigate]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, selectedImage]); // Re-run image loader when product changes or image changes

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? '' : section);
  };

  // Get 4 random related products (excluding current)
  const relatedProducts = [...products]
    .filter(p => p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <div className="bg-velmora-bg min-h-screen pt-32 pb-24" ref={containerRef}>
      
      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 lg:px-12 mb-8 flex text-xs tracking-widest uppercase text-velmora-text/50">
        <Link to="/" className="hover:text-velmora-text">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-velmora-text">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-velmora-text truncate">{product.name}</span>
      </div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
        
        {/* Left: Image Gallery */}
        <div className="lg:w-1/2 flex flex-col-reverse lg:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:w-24 no-scrollbar">
            <button 
              onClick={() => setSelectedImage(0)}
              className={`flex-none w-20 h-24 lg:w-24 lg:h-32 bg-velmora-border/20 border-2 transition-colors overflow-hidden ${selectedImage === 0 ? 'border-velmora-accent' : 'border-transparent'}`}
            >
              <img
                data-strk-img-id={product.imgId}
                data-strk-img={product.mainImgTag}
                data-strk-img-ratio="4x5"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.name} thumbnail 1`}
                className="w-full h-full object-cover"
              />
            </button>
            {product.altImgId && (
              <button 
                onClick={() => setSelectedImage(1)}
                className={`flex-none w-20 h-24 lg:w-24 lg:h-32 bg-velmora-border/20 border-2 transition-colors overflow-hidden ${selectedImage === 1 ? 'border-velmora-accent' : 'border-transparent'}`}
              >
                <img
                  data-strk-img-id={product.altImgId}
                  data-strk-img={product.altImgTag}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} thumbnail 2`}
                  className="w-full h-full object-cover"
                />
              </button>
            )}
          </div>

          {/* Main Image */}
          <div className="flex-1 bg-velmora-border/20 aspect-[4/5] relative overflow-hidden">
            {selectedImage === 0 ? (
              <img
                data-strk-img-id={product.imgId}
                data-strk-img={product.mainImgTag}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover animate-in fade-in duration-500"
              />
            ) : (
              <img
                data-strk-img-id={product.altImgId}
                data-strk-img={product.altImgTag}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover animate-in fade-in duration-500"
              />
            )}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="lg:w-1/2 flex flex-col pt-4 lg:pt-10">
          <div className="mb-8 border-b border-velmora-border pb-8">
            <h1 id="pdp-title" className="font-serif text-3xl md:text-4xl tracking-[0.2em] uppercase text-velmora-text mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl text-velmora-text/80">${product.price}</span>
              <div className="flex items-center text-velmora-accent border-l border-velmora-border pl-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                ))}
                <span className="text-xs text-velmora-text/50 ml-2 tracking-wider">({product.reviews})</span>
              </div>
            </div>

            {/* Variants */}
            <div className="mb-6">
              <span className="block text-xs tracking-widest uppercase text-velmora-text/60 mb-3">Color: {selectedVariant}</span>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 py-2 border text-sm transition-colors ${selectedVariant === v ? 'border-velmora-accent text-velmora-accent bg-velmora-accent/5' : 'border-velmora-border text-velmora-text hover:border-velmora-text/50'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4">
              <div className="flex items-center border border-velmora-border">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 lg:p-4 text-velmora-text/60 hover:text-velmora-text transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 lg:p-4 text-velmora-text/60 hover:text-velmora-text transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-velmora-text text-white uppercase tracking-widest text-sm hover:bg-velmora-accent transition-colors duration-300"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>
            
            <p className="text-xs text-velmora-text/50 mt-4 text-center or lg:text-left">
              Free shipping on orders over $150.
            </p>
          </div>

          {/* Accordions */}
          <div className="space-y-1">
            {/* Description */}
            <div className="border-b border-velmora-border">
              <button 
                onClick={() => toggleAccordion('description')}
                className="w-full py-4 flex justify-between items-center text-sm tracking-widest uppercase hover:text-velmora-accent transition-colors"
              >
                Description
                {openAccordion === 'description' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === 'description' ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                <p className="text-velmora-text/80 leading-relaxed text-sm">
                  {product.description}
                </p>
                <p className="text-velmora-text/80 leading-relaxed text-sm mt-4">
                  Category: {product.category}<br/>
                  Make a subtle statement or pair it with your favorite everyday pieces.
                </p>
              </div>
            </div>

            {/* Materials & Care */}
            <div className="border-b border-velmora-border">
              <button 
                onClick={() => toggleAccordion('materials')}
                className="w-full py-4 flex justify-between items-center text-sm tracking-widest uppercase hover:text-velmora-accent transition-colors"
              >
                Materials & Care
                {openAccordion === 'materials' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === 'materials' ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                <ul className="list-disc pl-5 text-velmora-text/80 leading-relaxed text-sm space-y-2">
                  <li>{product.material} over a sterling silver base.</li>
                  <li>Nickel-free and hypoallergenic.</li>
                  <li>To maintain the piece's luster, avoid contact with perfumes, lotions, and harsh chemicals.</li>
                  <li>Store in the provided Velmora pouch when not in use.</li>
                </ul>
              </div>
            </div>

             {/* Shipping & Returns */}
             <div className="border-b border-velmora-border">
              <button 
                onClick={() => toggleAccordion('shipping')}
                className="w-full py-4 flex justify-between items-center text-sm tracking-widest uppercase hover:text-velmora-accent transition-colors"
              >
                Shipping & Returns
                {openAccordion === 'shipping' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === 'shipping' ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                <p className="text-velmora-text/80 leading-relaxed text-sm">
                  Complimentary standard shipping on all orders over $150. Orders are processed within 1-2 business days.
                </p>
                <p className="text-velmora-text/80 leading-relaxed text-sm mt-4">
                  We offer a 30-day return policy for unworn items in their original packaging. Huggies and earrings are final sale for hygiene reasons unless faulty.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Related Products */}
      <div className="container mx-auto px-6 lg:px-12 border-t border-velmora-border pt-24 text-center">
        <h2 className="font-serif text-2xl tracking-widest uppercase mb-12 text-velmora-text">You May Also Like</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {relatedProducts.map((p) => (
             <Link key={p.id} to={`/product/${p.id}`} className="group relative block">
                <div className="aspect-[4/5] bg-velmora-border/20 overflow-hidden mb-4 relative">
                  <img
                    data-strk-img-id={p.imgId}
                    data-strk-img={p.mainImgTag}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 id={`pdp-related-title-${p.id}`} className="font-serif uppercase tracking-widest text-sm mb-1 group-hover:text-velmora-accent transition-colors truncate px-2">
                  {p.name}
                </h3>
                <p className="text-velmora-text/70 text-sm">${p.price}</p>
             </Link>
          ))}
        </div>
      </div>

    </div>
  );
}