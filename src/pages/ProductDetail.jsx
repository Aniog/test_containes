import { useParams } from 'react-router-dom';
import { products } from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductAccordion from '@/components/product/ProductAccordion';
import RelatedProducts from '@/components/product/RelatedProducts';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-charcoal mb-4">Product Not Found</h1>
        <p className="text-taupe">The product you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Product layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <ProductGallery product={product} />
          <div>
            <ProductInfo product={product} />
            <ProductAccordion product={product} />
          </div>
        </div>

        {/* Related products */}
        <RelatedProducts currentProductId={product.id} />
      </div>
    </div>
  );
};

export default ProductDetail;
