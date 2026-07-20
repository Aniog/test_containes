import { useParams } from 'react-router-dom';
import ProductDetail from '@/components/product/ProductDetail';

const ProductPage = () => {
  const { productId } = useParams();
  return <ProductDetail productId={productId} />;
};

export default ProductPage;
