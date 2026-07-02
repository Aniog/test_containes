import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCartStore } from '../lib/cart';
import { cn } from '../lib/utils';

// Sample Product Data
const products = [
  {
    id: '1',
    name: 'Vivid Aura Jewels',
    price: 42,
    description: 'Elevate your everyday look with these striking ear cuffs. Featuring a delicate row of crystal accents set in 18k gold vermeil, they provide the illusion of multiple piercings without the commitment. Lightweight and comfortable enough to sleep in.',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=1000&auto=format&fit=crop',
    ]
  },
  {
    id: '2',
    name: 'Majestic Flora Nectar',
    price: 68,
    description: 'A statement piece that captures the essence of spring. This necklace features an intricate floral pendant adorned with multicolor crystals, gracefully suspended from a durable 18k gold vermeil chain. Perfect for adding a touch of elegance to any outfit.',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1599643478524-fb66f45209f9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop',
    ]
  },
  {
    id: '3',
    name: 'Golden Sphere Huggies',
    price: 38,
    description: 'Our bestselling huggies feature a chunky, domed silhouette crafted from premium 18k gold vermeil. A modern twist on a classic hoop, these earrings are the ultimate everyday staple. So comfortable you will forget you are wearing them.',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=1000&auto=format&fit=crop',
    ]
  },
  {
    id: '4',
    name: 'Amber Lace Earrings',
    price: 54,
    description: 'Intricate filigree work defines these stunning drop earrings. The textured 18k gold vermeil creates a beautiful play of light, reminiscent of antique lacework. A perfect blend of vintage charm and contemporary styling.',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1000&auto=format&fit=crop',
    ]
  },
  {
    id: '5',
    name: 'Royal Heirloom Set',
    price: 95,
    description: 'The ultimage gift. This beautifully boxed set includes our signature pendant necklace and matching drop earrings. Handcrafted in 18k gold vermeil with subtle crystal detailing. A timeless pairing meant to be layered or worn separately.',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1591209627710-d2427565a41f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
    ]
  }
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];
  const addItem = useCartStore((state) => state.addItem);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product.material);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleAddToCart = () => {
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0]
      },
      selectedVariant,
      quantity
    );
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-8 flex items-center gap-2">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-foreground font-medium truncate uppercase tracking-widest">{product.name}</span>
        </div>

        {/* Product Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
          
          {/* Image Gallery */}
          <div className="flex-1 flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible w-full md:w-24 flex-shrink-0">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    "relative aspect-square md:aspect-[4/5] w-20 md:w-full overflow-hidden border-2 transition-all",
                    selectedImage === idx ? "border-primary" : "border-transparent hover:border-border"
                  )}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[4/5] bg-muted overflow-hidden relative">
               <img 
                 src={product.images[selectedImage]} 
                 alt={product.name} 
                 className="w-full h-full object-cover transition-opacity duration-300"
                 key={selectedImage} // forces re-render for clean transition if needed
               />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-[450px] flex-shrink-0">
            <h1 className="text-3xl md:text-4xl font-serif leading-tight uppercase tracking-widest mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-medium">${product.price}</span>
              <div className="flex items-center gap-1 text-primary">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm text-foreground ml-1">(128)</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              {product.description.substring(0, 100)}...
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <span className="block text-sm font-medium uppercase tracking-widest mb-3">Color: <span className="text-muted-foreground capitalize">{selectedVariant}</span></span>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedVariant('gold')}
                  className={cn(
                    "w-10 h-10 rounded-full bg-[#E5C158] border-2 transition-all",
                    selectedVariant === 'gold' ? "border-foreground ring-2 ring-background shadow-md scale-110" : "border-transparent hover:scale-105"
                  )}
                  aria-label="Gold"
                />
                <button
                  onClick={() => setSelectedVariant('silver')}
                  className={cn(
                    "w-10 h-10 rounded-full bg-[#E0E0E0] border-2 transition-all",
                    selectedVariant === 'silver' ? "border-foreground ring-2 ring-background shadow-md scale-110" : "border-transparent hover:scale-105"
                  )}
                  aria-label="Silver"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-12">
              <div className="flex items-center border rounded h-14">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 hover:bg-muted text-muted-foreground transition-colors h-full flex items-center justify-center"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 hover:bg-muted text-muted-foreground transition-colors h-full flex items-center justify-center"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 h-14 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm font-medium"
              >
                Add to Cart
              </button>
            </div>

            {/* Shipping note */}
            <div className="text-sm flex flex-col gap-2 mb-12 py-6 border-y border-border">
              <div className="flex gap-2">
                <span className="font-medium inline-block min-w-28">Availability:</span>
                <span className="text-green-600 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-600 inline-block"/> In Stock</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium inline-block min-w-28">Delivery:</span>
                <span className="text-muted-foreground">Dispatches in 1-2 business days</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-b">
              {/* Description Accordion */}
              <div className="border-t">
                <button
                  onClick={() => toggleAccordion('description')}
                  className="flex items-center justify-between w-full py-4 text-left font-serif text-lg tracking-wide uppercase hover:text-primary transition-colors"
                >
                  Description
                  {openAccordion === 'description' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  openAccordion === 'description' ? "max-h-96 pb-4" : "max-h-0"
                )}>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Materials Accordion */}
              <div className="border-t">
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="flex items-center justify-between w-full py-4 text-left font-serif text-lg tracking-wide uppercase hover:text-primary transition-colors"
                >
                  Materials & Care
                  {openAccordion === 'materials' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  openAccordion === 'materials' ? "max-h-96 pb-4" : "max-h-0"
                )}>
                  <ul className="text-muted-foreground leading-relaxed space-y-2 list-disc pl-4">
                    <li>18k Gold Vermeil: A thick layer of 18k solid gold on sterling silver.</li>
                    <li>Thicker than standard plating, meaning it will last longer.</li>
                    <li>Hypoallergenic, nickel-free, and water-resistant.</li>
                    <li>To clean, gently wipe with a soft, dry cloth. Avoid harsh chemicals.</li>
                  </ul>
                </div>
              </div>

              {/* Shipping Accordion */}
              <div className="border-t">
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="flex items-center justify-between w-full py-4 text-left font-serif text-lg tracking-wide uppercase hover:text-primary transition-colors"
                >
                  Shipping & Returns
                  {openAccordion === 'shipping' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  openAccordion === 'shipping' ? "max-h-96 pb-4" : "max-h-0"
                )}>
                  <ul className="text-muted-foreground leading-relaxed space-y-2">
                    <li><strong>Free Worldwide Shipping</strong> on orders over $50.</li>
                    <li>Standard Delivery: 3-5 business days.</li>
                    <li>Express Delivery: 1-2 business days.</li>
                    <li><strong>30-Day Returns:</strong> If you're not completely satisfied, return it within 30 days for a full refund.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Related Products */}
        <div className="pt-16 border-t">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-serif">You May Also Like</h2>
            <Link to="/shop" className="hidden md:flex items-center text-sm uppercase tracking-widest hover:text-primary transition-colors gap-2">
              Shop All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <div key={p.id} className="group relative flex flex-col cursor-pointer">
                <Link to={`/product/${p.id}`} className="relative aspect-[4/5] overflow-hidden bg-muted mb-4">
                  <img 
                    src={p.images[0]} 
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                  />
                  <img 
                    src={p.images[1] || p.images[0]} 
                    alt={`${p.name} alternate`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 scale-105 group-hover:scale-100 transition-transform"
                  />
                </Link>
                <div className="flex flex-col gap-1 items-center text-center">
                  <Link to={`/product/${p.id}`} className="font-serif text-lg tracking-wider hover:text-primary transition-colors">
                    {p.name}
                  </Link>
                  <span className="text-muted-foreground font-medium">${p.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}