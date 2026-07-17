import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight, Heart, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { getProductById } from "@/data/products";
import ProductGallery from "@/components/products/ProductGallery";
import ProductInfo from "@/components/products/ProductInfo";
import RelatedProducts from "@/components/products/RelatedProducts";
import StrkImage from "@/components/ui/StrkImage";
import { cn } from "@/lib/utils";

export function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);

  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!product) {
    return (
      <div className="container-content py-32 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-serif text-5xl text-ink">Piece not found</h1>
        <p className="mt-3 text-sm text-ink-soft">
          The piece you're looking for may have moved or sold out.
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-flex items-center justify-center bg-gold px-7 py-3.5 cta-label text-ivory transition-colors hover:bg-gold-deep"
        >
          Browse the Collection
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-hairline bg-ivory/60"
      >
        <div className="container-content py-4">
          <ol className="flex flex-wrap items-center gap-1.5 text-[0.6875rem] uppercase tracking-[0.18em] text-ink-soft">
            <li>
              <Link to="/" className="transition-colors hover:text-ink">Home</Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
            </li>
            <li>
              <Link
                to={`/shop?category=${product.category}`}
                className="transition-colors hover:text-ink"
              >
                {product.category}
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
            </li>
            <li className="text-ink">{product.name}</li>
          </ol>
        </div>
      </nav>

      <StrkImage>
        <section
          aria-labelledby="product-heading"
          className="container-content py-12 md:py-16 lg:py-20"
        >
          <div className="sr-only">
            <h1 id="product-heading">{product.name}</h1>
          </div>
          <div className="grid gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
            <ProductGallery product={product} />
            <ProductInfo product={product} />
          </div>
        </section>

        {/* Reassurance strip */}
        <section
          aria-label="Service promises"
          className="border-y border-hairline bg-ivory/60"
        >
          <div className="container-content">
            <ul className="grid divide-y divide-hairline md:grid-cols-3 md:divide-x md:divide-y-0">
              {[
                { icon: Truck, label: "Free worldwide shipping over $75" },
                { icon: RotateCcw, label: "30-day returns, no questions" },
                { icon: ShieldCheck, label: "Hypoallergenic & tarnish-resistant" },
              ].map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center justify-center gap-3 px-4 py-5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ink"
                >
                  <Icon className="h-4 w-4 text-gold-deep" strokeWidth={1.5} />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <RelatedProducts product={product} />
      </StrkImage>
    </div>
  );
}

export default ProductDetail;
