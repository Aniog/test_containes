import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById, fetchProducts } from '@/api/products';
import { useCartStore } from '@/lib/cart-store';
import { Plus, Minus, ChevronDown, ChevronUp, Star } from 'lucide-react';
import ProductCard from '@/components/home/ProductGrid';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addItem } = useCartStore();

  useEffect(() => {
    fetchProductById(id).then((data) => {
      setProduct(data);
      setSelectedVariant(data.data.variants?.[0] || 'Gold');
      
      // Fetch related
      fetchProducts({ category: data.data.category }).then(all => {
        setRelatedProducts(all.filter(p => p.id !== data.id).slice(0, 4));
      });
    });
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return <div className="pt-32 px-6 h-screen text-center font-serif italic">Loading piece...</div>;

  const fields = product.data;

  const Accordion = ({ id, title, content }) => (
    <div className="border-b">
      <button 
        onClick={() => setOpenAccordion(openAccordion === id ? null : id)}
        className="w-full py-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] font-bold hover:text-primary transition-colors"
      >
        <span>{title}</span>
        {openAccordion === id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        openAccordion === id ? "max-h-[300px] pb-6" : "max-h-0"
      )}>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
        {/* Gallery */}
        <div className="flex flex-col md:flex-row-reverse gap-4">
          <div className="flex-1 aspect-[3/4] bg-secondary overflow-hidden">
            <img 
              src={fields.images?.[activeImage]} 
              alt={fields.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
            {fields.images?.map((img, i) => (
              <button 
                key={i}
                onClick={() => setActiveImage(i)}
                className={cn(
                  "w-20 md:w-24 aspect-[3/4] bg-secondary overflow-hidden flex-shrink-0 border-2 transition-all",
                  activeImage === i ? "border-primary" : "border-transparent"
                )}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif leading-tight uppercase tracking-widest">{fields.name}</h1>
            <p className="text-2xl font-light">${fields.price}</p>
            <div className="flex items-center space-x-2 text-primary">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < Math.floor(fields.rating) ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{fields.rating} / 5.0</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold">Finish</p>
              <div className="flex space-x-3">
                {fields.variants?.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={cn(
                      "px-6 py-2 text-[10px] uppercase tracking-widest border transition-all",
                      selectedVariant === v ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => addItem(product, selectedVariant)}
              className="w-full bg-primary text-white py-5 uppercase tracking-[0.3em] text-xs font-bold hover:bg-primary/90 transition-all flex items-center justify-center space-x-3 shadow-lg shadow-primary/10"
            >
              <span>Add to Cart</span>
            </button>
          </div>

          <div className="space-y-0 pt-4 border-t">
            <Accordion 
              id="description" 
              title="Description" 
              content={fields.description} 
            />
            <Accordion 
              id="materials" 
              title="Materials & Care" 
              content={fields.materials + " " + fields.care} 
            />
            <Accordion 
              id="shipping" 
              title="Shipping & Returns" 
              content="Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. Must be in original packaging and unworn." 
            />
          </div>
        </div>
      </div>

      {/* Related */}
      {relatedProducts.length > 0 && (
        <section className="mt-32 border-t pt-24">
          <h2 className="text-3xl font-serif text-center italic mb-16">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
