import { useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, Minus, Plus, ChevronRight, Check } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductCard } from "@/components/ProductCard";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = PRODUCTS.find((p) => p.id === id);

  const [selectedTone, setSelectedTone] = useState(product?.tone?.[0] || "gold");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);

  const images = useMemo(
    () => [product?.image, product?.hoverImage].filter(Boolean),
    [product]
  );

  const related = useMemo(
    () => PRODUCTS.filter((p) => p.id !== product?.id).slice(0, 4),
    [product]
  );

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-cream pt-24 text-center">
        <h1 className="font-serif text-3xl font-light">Product Not Found</h1>
        <p className="mt-2 text-mocha">
          We couldn’t find the piece you’re looking for.
        </p>
        <Button asChild className="mt-6">
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, { quantity, tone: selectedTone });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-cream pb-20 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-6 flex items-center gap-2 text-xs text-mocha">
          <Link to="/" className="hover:text-espresso">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-espresso">
            Shop
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-espresso">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden bg-parchment">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square w-20 overflow-hidden border bg-parchment transition-colors ${
                    selectedImage === idx
                      ? "border-espresso"
                      : "border-hairline hover:border-taupe"
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
              {product.category}
            </p>
            <h1 className="mt-2 font-serif text-3xl font-light uppercase tracking-[0.1em] sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-gold text-gold" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-mocha">
                {product.reviews} reviews
              </span>
            </div>

            <p className="mt-4 font-serif text-2xl font-light text-espresso">
              ${product.price.toFixed(2)}
            </p>

            <p className="mt-6 leading-relaxed text-mocha">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-espresso">
                Metal Tone
              </p>
              <div className="flex flex-wrap gap-3">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-wider transition-all ${
                      selectedTone === tone
                        ? "border-espresso bg-espresso text-white"
                        : "border-hairline bg-white text-mocha hover:border-espresso"
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-espresso">
                Quantity
              </p>
              <div className="inline-flex items-center border border-hairline bg-white">
                <button
                  className="p-3 text-mocha hover:text-espresso"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium">
                  {quantity}
                </span>
                <button
                  className="p-3 text-mocha hover:text-espresso"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button
              size="lg"
              className="mt-8 h-12 w-full"
              onClick={handleAddToCart}
            >
              {added ? (
                <>
                  <Check className="mr-2 h-4 w-4" /> Added to Cart
                </>
              ) : (
                `Add to Cart — $${(product.price * quantity).toFixed(2)}`
              )}
            </Button>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-mocha">
              <Check className="h-3.5 w-3.5 text-gold" />
              Free shipping over $50
              <span className="mx-2">·</span>
              <Check className="h-3.5 w-3.5 text-gold" />
              30-day returns
            </div>

            <Separator className="my-8" />

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>{product.description}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger>Materials & Care</AccordionTrigger>
                <AccordionContent>{product.materials}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                <AccordionContent>{product.shipping}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <section className="mt-20">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-gold">
              Complete the Look
            </p>
            <h2 className="font-serif text-3xl font-light sm:text-4xl">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
