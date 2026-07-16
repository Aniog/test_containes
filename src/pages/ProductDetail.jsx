import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '../components/cart/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const [selectedTone, setSelectedTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const { addToCart } = useCart();

  useEffect(() => {
    try {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    } catch (e) {
      console.log('ImageHelper not yet fully configured', e);
    }
  }, [id]);

  // Mock product data - in a real app, fetch based on id
  const product = {
    id: id || '1',
    title: 'Vivid Aura Jewels',
    price: 42,
    rating: 4.8,
    reviews: 124,
    description: 'A striking statement piece designed to softly hug the ear contour. Embellished with a brilliant-cut crystal accent that catches the light from every angle. Ideal for stacking or wearing solo for a subtle edge.',
    materials: 'Crafted from 18k solid gold vermeil over sterling silver. Hypoallergenic and nickel-free. Features premium cubic zirconia crystals.',
    shipping: 'Free worldwide shipping on all orders over $50. Enjoy a 30-day return policy for a full refund if the piece isn’t a perfect fit.'
  };

  const relatedProducts = [
    { id: '2', title: 'Majestic Flora Nectar', price: 68 },
    { id: '3', title: 'Golden Sphere Huggies', price: 38 },
    { id: '4', title: 'Amber Lace Earrings', price: 54 }
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-20 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumbs */}
        <div className="text-xs uppercase tracking-widest text-stone-500 mb-8 flex gap-2">
          <Link to="/" className="hover:text-amber-700">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-amber-700">Jewelry</Link>
          <span>/</span>
          <span className="text-stone-900">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4 h-full">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:w-20 snap-x hide-scrollbar">
               {[1, 2, 3].map((num) => (
                  <button key={num} className={`relative flex-shrink-0 w-20 aspect-[3/4] bg-stone-100 border-2 ${num === 1 ? 'border-amber-700' : 'border-transparent'}`}>
                     <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.title} view ${num}`}
                      data-strk-img-id={`prod-thumb-${product.id}-${num}`}
                      data-strk-img={`[product-title] view ${num}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="150"
                      className="object-cover w-full h-full"
                    />
                  </button>
               ))}
            </div>
            <div className="flex-1 bg-stone-100 aspect-[3/4] md:aspect-auto md:h-[600px] relative">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.title}
                data-strk-img-id={`prod-main-${product.id}`}
                data-strk-img="[product-desc] [product-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Details */}
          <div className="py-2 md:py-8 lg:pr-12">
            <h1 id="product-title" className="text-3xl md:text-4xl font-serif text-stone-900 uppercase tracking-wider mb-4">{product.title}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl text-stone-600">${product.price}</span>
              <div className="flex items-center text-amber-500">
                <Star fill="currentColor" size={14} />
                <Star fill="currentColor" size={14} />
                <Star fill="currentColor" size={14} />
                <Star fill="currentColor" size={14} />
                <Star fill="currentColor" size={14} />
                <span className="text-stone-500 text-xs ml-2">({product.reviews})</span>
              </div>
            </div>

            <p id="product-desc" className="text-stone-600 text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Selectors */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-stone-900 font-medium mb-3">Tone: <span className="text-stone-500 capitalize">{selectedTone}</span></p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setSelectedTone('gold')}
                  className={`w-12 h-8 rounded-full bg-gradient-to-br from-yellow-300 to-amber-600 shadow-sm border-2 ${selectedTone === 'gold' ? 'border-amber-900 ring-2 ring-offset-1 ring-amber-700/30' : 'border-transparent'}`}
                  aria-label="Gold Tone"
                />
                <button 
                  onClick={() => setSelectedTone('silver')}
                  className={`w-12 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 shadow-sm border-2 ${selectedTone === 'silver' ? 'border-stone-800 ring-2 ring-offset-1 ring-stone-500/30' : 'border-transparent'}`}
                  aria-label="Silver Tone"
                />
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4 mb-12">
              <div className="border border-stone-300 flex items-center justify-between px-4 w-32 bg-white">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-stone-500 hover:text-foreground">&minus;</button>
                <span className="text-sm font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-stone-500 hover:text-foreground">+</button>
              </div>
              <button 
                onClick={() => addToCart(product, quantity, selectedTone)}
                className="flex-1 bg-amber-700 hover:bg-amber-800 text-white uppercase tracking-widest text-sm font-medium transition-colors"
              >
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border">
              {[
                { id: 'description', title: 'Description', content: product.description },
                { id: 'materials', title: 'Materials & Care', content: product.materials },
                { id: 'shipping', title: 'Shipping & Returns', content: product.shipping }
              ].map((acc) => (
                <div key={acc.id} className="border-b border-stone-200">
                  <button 
                    onClick={() => setActiveAccordion(activeAccordion === acc.id ? null : acc.id)}
                    className="w-full py-4 flex justify-between items-center text-sm font-medium uppercase tracking-wider text-stone-900 hover:text-amber-700 transition-colors"
                  >
                    {acc.title}
                    {activeAccordion === acc.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeAccordion === acc.id ? 'max-h-40 opacity-100 py-2 pb-6' : 'max-h-0 opacity-0'}`}>
                    <p className="text-stone-600 text-sm leading-relaxed">{acc.content}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* You May Also Like */}
        <section className="border-t border-stone-200 pt-20">
          <div className="flex justify-between items-end mb-10">
            <h2 id="related-title" className="text-2xl md:text-3xl font-serif text-stone-900">You May Also Like</h2>
            <Link to="/shop" className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-amber-700 hover:text-amber-800 transition-colors">
              Shop All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-4">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.title}
                    data-strk-img-id={`related-img-${item.id}`}
                    data-strk-img={`[related-title-${item.id}] [related-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 id={`related-title-${item.id}`} className="font-medium text-sm md:text-base uppercase tracking-wider text-stone-900 mb-1">{item.title}</h3>
                <p className="text-stone-500 text-sm">${item.price}</p>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProductDetail;