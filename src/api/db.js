import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

export const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getRows = (response) => response?.data?.list ?? [];

// Normalize a raw DB entity into the shape the UI expects
const normalizeProduct = (entity) => {
  if (!entity) return null;
  const d = entity.data ?? {};
  return {
    id: entity.id,
    name: d.name,
    brand: d.brand,
    category: d.category,
    price: d.price,
    originalPrice: d.original_price,
    discount: d.discount,
    rating: d.rating,
    reviews: d.reviews,
    badge: d.badge,
    image: d.image,
    images: d.images ?? [d.image],
    tagline: d.tagline,
    description: d.description,
    features: d.features ?? [],
    specs: d.specs ?? {},
    colors: d.colors ?? [],
    inStock: d.in_stock ?? true,
    sortOrder: d.sort_order ?? 0,
  };
};

const normalizeTestimonial = (entity) => {
  if (!entity) return null;
  const d = entity.data ?? {};
  return {
    id: entity.id,
    name: d.name,
    role: d.role,
    avatar: d.avatar ?? `https://i.pravatar.cc/80?img=${entity.id}`,
    rating: d.rating,
    product: d.product,
    text: d.text,
    sortOrder: d.sort_order ?? 0,
  };
};

export const fetchProducts = async () => {
  console.log('[db] fetchProducts');
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .order('sort_order', { ascending: true })
    .limit(50);

  if (error) throw error;
  return getRows(response).map(normalizeProduct);
};

export const fetchTestimonials = async () => {
  console.log('[db] fetchTestimonials');
  const { data: response, error } = await client
    .from('Testimonials')
    .select('*')
    .order('sort_order', { ascending: true })
    .limit(20);

  if (error) throw error;
  return getRows(response).map(normalizeTestimonial);
};
