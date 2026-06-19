import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/lib/data';
import { useCart } from '@/lib/store';
import { toast } from 'sonner';
import { ChevronDown, Star, RefreshCw, Truck, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/shop/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('Gold');
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) return <div className="pt-40 text-center">Product not found</div>;

  const handleAddToCart = () => {
    addItem(product, variant);
    toast.success(`${product.name} added to cart`);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-32 pb-24">
      <div className="px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4 h-fit">
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`flex-none w-20 md:w-24 aspect-[3/4] bg-secondary border transition-all ${selectedImage === idx ? 'border-primary' : 'border-transparent opacity-60'}`}
              >
                <img 
                  data-strk-img-id={`thumb-${product.id}-${idx}`}
                  data-strk-img={`[thumb-label-${product.id}-${idx}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={`Thumbnail ${idx}`}
                  className="w-full h-full object-cover"
                />
                <span id={`thumb-label-${product.id}-${idx}`} className="hidden">{img}</span>
              </button>
            ))}
          </div>
          <div className="flex-1 aspect-[3/4] bg-secondary overflow-hidden group relative">
            <img 
              data-strk-img-id={`main-img-${product.id}-${selectedImage}`}
              data-strk-img={`[main-img-label-${product.id}-${selectedImage}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span id={`main-img-label-${product.id}-${selectedImage}`} className="hidden">{product.images[selectedImage]}</span>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <nav className="mb-8 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-foreground">{product.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <h1 id={`pdp-title-${product.id}`} className="font-serif text-4xl md:text-5xl uppercase tracking-tighter mb-4 leading-tight">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-4 mb-6">
            <p className="font-sans text-2xl font-light">${product.price}</p>
            <div className="w-px h-4 bg-border mx-2" />
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-black" />
              <span className="text-xs uppercase tracking-widest font-sans mt-0.5">{product.rating} / 5</span>
            </div>
          </div>

          <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-10 max-w-md font-light">
            {product.description}
          </p>

          <div className="mb-10">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-4">Finish</span>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((v) => (
                <button 
                  key={v}
                  onClick={() => setVariant(v)}
                  className={`px-8 py-3 text-[10px] uppercase tracking-[0.2em] border transition-all ${variant === v ? 'bg-primary text-primary-foreground border-primary' : 'hover:bg-secondary'}`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={handleAddToCart}
            className="w-full bg-primary text-primary-foreground py-5 text-[11px] uppercase tracking-[0.3em] font-sans hover:bg-primary/90 transition-luxury shadow-lg mb-12"
          >
            Add to Bag
          </button>

          {/* Accordions */}
          <div className="border-t">
            {[
              { id: 'description', title: 'Details & Story', content: product.description },
              { id: 'materials', title: 'Materials & Care', content: `Material: ${product.materials}. Care instructions: ${product.care}` },
              { id: 'shipping', title: 'Shipping & Returns', content: "Complimentary worldwide shipping on orders over $100. 30-day returns on all unused items. Each piece arrives in our signature eco-friendly gift box." }
            ].map((acc) => (
              <div key={acc.id} className="border-b">
                <button 
                  onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                  className="w-full py-6 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] font-sans group"
                >
                  <span className="group-hover:opacity-60 transition-opacity">{acc.title}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openAccordion === acc.id ? 'rotate-180' : ''}`} />
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openAccordion === acc.id ? 'auto' : 0, opacity: openAccordion === acc.id ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 text-sm text-muted-foreground leading-relaxed font-sans font-light">
                    {acc.content}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mt-12 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center p-4 bg-secondary/50 rounded-sm">
              <RefreshCw className="w-5 h-5 mb-3 stroke-[1px] text-muted-foreground" />
              <p className="text-[8px] uppercase tracking-[0.2em] text-muted-foreground font-sans">Recycled Metals</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-secondary/50 rounded-sm">
              <Truck className="w-5 h-5 mb-3 stroke-[1px] text-muted-foreground" />
              <p className="text-[8px] uppercase tracking-[0.2em] text-muted-foreground font-sans">Global Delivery</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-secondary/50 rounded-sm">
              <ShieldCheck className="w-5 h-5 mb-3 stroke-[1px] text-muted-foreground" />
              <p className="text-[8px] uppercase tracking-[0.2em] text-muted-foreground font-sans">Hypoallergenic</p>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Row */}
      <section className="mt-40 px-6 md:px-12">
        <div className="flex items-center justify-between mb-12 border-b pb-6">
          <h2 className="font-serif text-3xl italic">Complements Your Style</h2>
          <Link to="/shop" className="text-[10px] uppercase tracking-[0.2em] hover:opacity-60">Shop All</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
