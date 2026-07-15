import { useEffect, useRef } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductCard from "@/components/shop/ProductCard";
import Reveal from "@/components/ui/Reveal";
import Newsletter from "@/components/layout/Newsletter";
import { getProduct, getRelated } from "@/data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProduct(id);

  const relatedRef = useRef(null);
  useEffect(() => {
    const node = relatedRef.current;
    if (!node) return undefined;
    return ImageHelper.loadImages(strkImgConfig, node);
  }, [id]);

  if (!product) return <Navigate to="/shop" replace />;

  const related = getRelated(product.id, 4);

  return (
    <div className="bg-cream">
      {/* Breadcrumb */}
      <div className="container-editorial pt-6 md:pt-10 pb-2">
        <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-eyebrow text-mauve">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link to="/" className="hover:text-ink transition-colors">
                Home
              </Link>
            </li>
            <li><ChevronRight size={11} strokeWidth={1.4} /></li>
            <li>
              <Link to="/shop" className="hover:text-ink transition-colors">
                Shop
              </Link>
            </li>
            <li><ChevronRight size={11} strokeWidth={1.4} /></li>
            <li className="text-ink">{product.name}</li>
          </ol>
        </nav>
      </div>

      {/* Product */}
      <section className="container-editorial py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <ProductGallery
            images={product.images}
            name={product.name}
            imgIds={[`product-${product.id}-hero`, `product-${product.id}-alt`]}
          />
          <ProductInfo product={product} />
        </div>
      </section>

      {/* Related products */}
      <section ref={relatedRef} className="bg-ivory py-20 md:py-24 mt-12 md:mt-16">
        <div className="container-editorial">
          <Reveal>
            <div className="flex items-end justify-between mb-10 md:mb-12">
              <div>
                <p className="eyebrow text-gold-deep">You may also love</p>
                <h2 className="mt-3 font-serif text-3xl md:text-4xl text-ink">
                  Pairs <em className="italic text-mauve font-normal">perfectly with</em>
                </h2>
              </div>
              <Link to="/shop" className="link-underline text-[12px] uppercase tracking-nav">
                Shop all
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} eager={i < 2} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter variant="cream" />
    </div>
  );
}
