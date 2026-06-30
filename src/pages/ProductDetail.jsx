import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/CartContext';

// Mock data (matching seed products from instructions)
const products = [
  { 
    id: '1', 
    name: 'VIVID AURA JEWELS', 
    price: 42, 
    description: 'A delicate gold ear cuff featuring a solitary crystal accent. Designed for everyday wear, this piece adds a subtle touch of elegance without the need for a piercing.', 
    details: '18k Gold Plated Vermeil on Sterling Silver. Cubic Zirconia accent.',
    images: ['[vivid-aura-earrings]', '[vivid-aura-earrings-worn]', '[vivid-aura-earrings-detail]'],
    shipping: 'Free worldwide shipping on all orders. Returns accepted within 30 days.'
  },
  // ... add others if needed for direct linking, but we'll use a fallback for now.
];

const fallbackProduct = {
    id: 'default', 
    name: 'VIVID AURA JEWELS', 
    price: 42, 
    description: 'A delicate gold ear cuff featuring a solitary crystal accent. Designed for everyday wear, this piece adds a subtle touch of elegance without the need for a piercing.', 
    details: '18k Gold Plated Vermeil on Sterling Silver. Cubic Zirconia accent. Dimensions: 12mm outer diameter.',
    images: ['[product-main-vivid-aura-earrings]', '[product-worn-vivid-aura-earrings]', '[product-detail-vivid-aura-earrings]'],
    shipping: 'Free worldwide shipping on all orders. Returns accepted within 30 days.'
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find(p => p.id === id) || fallbackProduct;
  const [selectedImage, setSelectedImage] = React.useState(product.images[0]);
  const [quantity, setQuantity] = React.useState(1);
  const [selectedTone, setSelectedTone] = React.useState('gold');

  const handleAddToCart = () => {
    addItem(product, quantity, selectedTone);
  };

  const containerRef = React.useRef(null);

  React.useEffect(() => {
    import('@strikingly/sdk').then(({ ImageHelper }) => {
       import('@/strk-img-config.json').then((module) => {
         if (containerRef.current) {
            ImageHelper.loadImages(module.default || module, containerRef.current);
         }
       }).catch((e) => console.warn(e));
    }).catch((e) => console.error(e));
  }, [product, selectedImage]); // Re-run if product changes


  return (
    <div ref={containerRef} className="container mx-auto px-4 py-12 md:py-24 animate-in fade-in duration-500">
      
      {/* Breadcrumbs */}
      <nav className="flex text-sm text-secondary mb-8 font-sans">
        <ol className="flex items-center space-x-2">
          <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><span className="mx-2">/</span></li>
          <li><Link to="/shop" className="hover:text-primary transition-colors">Shop</Link></li>
          <li><span className="mx-2">/</span></li>
          <li className="text-foreground capitalize">{product.name.toLowerCase()}</li>
        </ol>
      </nav>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
        
        {/* Left: Images */}
        <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4 h-[600px] lg:h-[700px]">
           {/* Thumbnails */}
           <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto w-full md:w-24 shrink-0 no-scrollbar">
              {product.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 md:w-full aspect-[4/5] shrink-0 border-2 rounded-sm overflow-hidden ${selectedImage === img ? 'border-primary' : 'border-transparent'}`}
                >
                   <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E" 
                      data-strk-img-id={`prod-thumb-${idx}-${product.id}`}
                      data-strk-img={img}
                      data-strk-img-ratio="4x5"
                      className="object-cover w-full h-full"
                      alt={`Thumbnail ${idx + 1}`}
                    />
                </button>
              ))}
           </div>
           
           {/* Main Image */}
           <div className="flex-grow bg-card rounded-sm overflow-hidden relative">
              {/* Force distinct image IDs based on selected to re-trigger if needed, though usually swapping src is enough if SDK handles it. 
                  Actually, best practice with the sdk is to have all images in DOM if possible or re-run helper.
                  Here we render the selected image. */}
              <img 
                  key={selectedImage} // Force re-render of img tag when selectedImage changes
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E" 
                  data-strk-img-id={`prod-main-${product.id}`}
                  data-strk-img={selectedImage}
                  data-strk-img-ratio="4x5"
                  className="object-cover w-full h-full animate-in fade-in duration-300"
                  alt={product.name}
              />
           </div>
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 flex flex-col pt-4 md:pt-10">
          
          <h1 id="product-name" className="text-3xl lg:text-4xl font-serif tracking-widest uppercase mb-4 text-foreground">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-4 mb-6 text-primary">
            {/* Stars */}
            <div className="flex">
               {[1,2,3,4,5].map(star => (
                   <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                   </svg>
                ))}
            </div>
            <span className="text-sm text-secondary">(42 reviews)</span>
          </div>

          <p className="text-2xl mb-8 font-sans">${product.price}</p>
          
          <p className="text-secondary leading-relaxed mb-8 max-w-lg font-sans text-sm">
            {product.description}
          </p>

          <div className="w-full h-[1px] bg-border mb-8"></div>

          {/* Variants */}
          <div className="mb-8">
            <span className="block text-sm font-sans tracking-widest uppercase text-foreground mb-4">Metal: <span className="font-semibold">{selectedTone}</span></span>
            <div className="flex gap-4">
               <button 
                 onClick={() => setSelectedTone('gold')}
                 className={`w-8 h-8 rounded-full bg-[#E5C158] border-2 ring-offset-2 ring-offset-background transition-all ${selectedTone === 'gold' ? 'ring-1 ring-primary' : 'border-transparent'}`}
                 aria-label="Select Gold"
               />
               <button 
                 onClick={() => setSelectedTone('silver')}
                 className={`w-8 h-8 rounded-full bg-[#E0E0E0] border-2 ring-offset-2 ring-offset-background transition-all ${selectedTone === 'silver' ? 'ring-1 ring-secondary' : 'border-transparent'}`}
                 aria-label="Select Silver"
               />
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex gap-4 mb-12 h-12">
            <div className="flex items-center border border-border rounded-sm px-4">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-secondary hover:text-primary w-6 h-6 flex items-center justify-center -ml-2 pb-1 text-xl">&minus;</button>
              <span className="w-12 text-center font-sans text-sm">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="text-secondary hover:text-primary w-6 h-6 flex items-center justify-center -mr-2 pb-1 text-xl">+</button>
            </div>
            <Button 
               size="lg" 
               onClick={handleAddToCart}
               className="flex-1 w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </Button>
          </div>

          {/* Accordions (Simplified Custom Implementation for now, can swap to Radix if needed) */}
          <div className="border-t border-border divide-y divide-border">
             <details className="group" open>
                <summary className="flex justify-between items-center font-serif text-lg py-4 cursor-pointer list-none text-foreground uppercase tracking-widest text-sm">
                  Description
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-secondary text-sm pb-4 pt-0 font-sans leading-relaxed animate-in slide-in-from-top-1">
                  {product.description}
                </p>
             </details>
             <details className="group">
                <summary className="flex justify-between items-center font-serif text-lg py-4 cursor-pointer list-none text-foreground uppercase tracking-widest text-sm">
                  Materials & Care
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-secondary text-sm pb-4 pt-0 font-sans leading-relaxed">
                  {product.details} We recommend removing jewelry before swimming, bathing, or using lotions. Store in the provided Velmora pouch when not in use.
                </p>
             </details>
             <details className="group">
                <summary className="flex justify-between items-center font-serif text-lg py-4 cursor-pointer list-none text-foreground uppercase tracking-widest text-sm">
                  Shipping & Returns
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-secondary text-sm pb-4 pt-0 font-sans leading-relaxed">
                  {product.shipping}
                </p>
             </details>
          </div>

        </div>
      </div>
      
      {/* Related Products placeholder */}
      <div className="mt-32 mb-16">
          <h2 className="text-3xl text-center mb-12 font-serif">You May Also Like</h2>
          {/* Will use a simple grid here similar to homepage but fewer items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
             {/* Taking a subset of seed products */}
             {products.slice(0, 4).map(p => (
                <div key={p.id} className="group flex flex-col gap-4 cursor-pointer">
                  <div className="relative aspect-[4/5] bg-card overflow-hidden rounded-sm">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E" 
                      data-strk-img-id={`related-img-${p.id}`}
                      data-strk-img={p.images[0]}
                      data-strk-img-ratio="4x5"
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                      alt={p.name}
                    />
                  </div>
                  <div className="flex flex-col items-center text-center space-y-1">
                    <h3 className="font-serif uppercase tracking-widest text-xs text-foreground">{p.name}</h3>
                    <p className="text-secondary text-xs">${p.price}</p>
                  </div>
                </div>
             ))}
          </div>
      </div>

    </div>
  );
};

export default ProductDetail;