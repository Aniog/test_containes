import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '@/components/product/ProductDetail';

export default function ProductPage() {
  const { id } = useParams();
  return <ProductDetail productId={id} />;
}
