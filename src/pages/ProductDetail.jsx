import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Star, Minus, Plus } from "lucide-react";
import { products } from "@/lib/data";
import { useCart } from "@/lib/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0]; // fallback for demo
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.image);
  
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImage(product.image);
  }, [product]);

  const handleAddToCart = () => {
    addToCart({ ...product, variant: selectedVariant, image: activeImage }, quantity);
  };

  const images = [product.image, product.hoverImage]; // mock multiple images

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      
      {/* Breadcrumb */}
      <div className="text-xs tracking-wide uppercase text-muted-foreground mb-8">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/collections" className="hover:text-foreground">Collections</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-20 mb-24">
        
        {/* Gallery */}
        <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-4 overflow-x-auto md:w-20 shrink-0">
            {images.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setActiveImage(img)}
                className={`flex-shrink-0 aspect-[4/5] md:w-full rounded-sm overflow-hidden border ${activeImage === img ? 'border-primary' : 'border-transparent'}`}
              >
                <img src={img} alt={`${product.name} ${i+1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <div className="flex-1 aspect-[4/5] bg-muted rounded-sm overflow-hidden">
            <img src={activeImage} alt={product.name} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 md:py-4">
          <h1 className="font-heading text-3xl md:text-4xl uppercase tracking-widest mb-2">{product.name}</h1>
          <div className="flex items-center space-x-4 mb-6">
            <p className="text-xl">${product.price}</p>
            <div className="flex items-center text-primary">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm text-muted-foreground ml-1.5">{product.rating} ({product.reviews})</span>
            </div>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed font-light">{product.description}</p>

          <div className="space-y-6 mb-8">
            {/* Variants */}
            {product.variants.length > 0 && (
              <div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Color: <span className="text-foreground font-medium">{selectedVariant}</span></p>
                <div className="flex gap-3">
                  {product.variants.map(variant => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2 rounded-sm border text-sm uppercase tracking-widest transition-colors ${
                        selectedVariant === variant 
                          ? 'border-primary bg-primary text-primary-foreground' 
                          : 'border-input hover:border-primary/50 text-foreground'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex items-center border border-input rounded-sm w-full sm:w-32 h-12">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="flex-1 flex justify-center hover:bg-muted transition-colors h-full items-center"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="flex-1 flex justify-center hover:bg-muted transition-colors h-full items-center"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button 
                onClick={handleAddToCart}
                className="flex-1 h-12 bg-primary text-primary-foreground hover:bg-primary/90 tracking-widest uppercase rounded-sm"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>
          </div>

          {/* Accordions */}
          <Accordion type="single" collapsible className="w-full border-t">
            <AccordionItem value="features">
              <AccordionTrigger className="text-sm tracking-widest uppercase hover:no-underline hover:text-primary">Details</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping">
              <AccordionTrigger className="text-sm tracking-widest uppercase hover:no-underline hover:text-primary">Shipping & Returns</AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Enjoy free worldwide shipping on orders over $150. Standard delivery typically takes 3-5 business days.</p>
                <p>We accept returns within 30 days of delivery. Items must be unworn and in their original packaging.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Related Products */}
      <section className="border-t pt-16">
        <h2 className="font-heading text-2xl mb-8 text-center">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.filter(p => p.id !== product.id).slice(0, 4).map(p => (
            <div key={p.id} className="group flex flex-col text-left">
              <Link to={`/collections/${p.id}`} className="relative aspect-[4/5] bg-muted mb-4 overflow-hidden rounded-sm">
                <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
                <img src={p.hoverImage} alt={`${p.name} worn`} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>
              <h3 className="font-heading uppercase tracking-wide text-sm mb-1 line-clamp-1">{p.name}</h3>
              <p className="text-muted-foreground text-sm">${p.price}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
