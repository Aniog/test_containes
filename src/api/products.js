import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const seedProducts = [
  { id: 2966, data: { name: 'Vivid Aura Jewels', slug: 'vivid-aura-jewels', price: 42, category: 'Earrings', material: '18K Gold Plated', tone: 'Gold', description: 'A sculptural gold ear cuff with a luminous crystal accent. Designed to be worn solo or stacked for a bold, modern look.', details: '18K gold plated over brass. Features a single faceted crystal accent. Nickel-free and hypoallergenic. Avoid contact with perfumes and lotions to preserve plating. Store in a dry pouch.', shipping_info: 'Free worldwide shipping on orders over $50. Standard delivery 5-10 business days. Express 2-4 business days. 30-day hassle-free returns.', image_url: 'https://placehold.co/800x800/d4af37/ffffff?text=Velmora', hover_image_url: 'https://placehold.co/800x800/e6c875/ffffff?text=Velmora', gallery: ['https://placehold.co/800x800/d4af37/ffffff?text=Velmora','https://placehold.co/800x800/e6c875/ffffff?text=Velmora','https://placehold.co/800x800/c5a028/ffffff?text=Velmora'], rating: 4.8, review_count: 124, is_bestseller: true, is_new: false, tags: ['ear cuff','crystal','gold','bestseller'] } },
  { id: 2967, data: { name: 'Majestic Flora Nectar', slug: 'majestic-flora-nectar', price: 68, category: 'Necklaces', material: '18K Gold Plated', tone: 'Gold', description: 'A radiant necklace featuring multicolor floral crystals set in a delicate gold chain. A statement piece that catches light beautifully.', details: '18K gold plated chain with enamel and crystal floral pendant. Length: 40cm + 5cm extender. Nickel-free and hypoallergenic. Clean gently with a soft cloth.', shipping_info: 'Free worldwide shipping on orders over $50. Standard delivery 5-10 business days. Express 2-4 business days. 30-day hassle-free returns.', image_url: 'https://placehold.co/800x800/d4af37/ffffff?text=Velmora', hover_image_url: 'https://placehold.co/800x800/e6c875/ffffff?text=Velmora', gallery: ['https://placehold.co/800x800/d4af37/ffffff?text=Velmora','https://placehold.co/800x800/e6c875/ffffff?text=Velmora','https://placehold.co/800x800/c5a028/ffffff?text=Velmora'], rating: 4.9, review_count: 89, is_bestseller: true, is_new: false, tags: ['necklace','floral','crystal','gold','bestseller'] } },
  { id: 2968, data: { name: 'Golden Sphere Huggies', slug: 'golden-sphere-huggies', price: 38, category: 'Huggies', material: '18K Gold Plated', tone: 'Gold', description: 'Chunky gold dome huggie earrings with a polished mirror finish. Comfortable enough for all-day wear, bold enough to turn heads.', details: '18K gold plated over surgical steel. Dome diameter: 12mm. Hinge closure. Nickel-free and hypoallergenic. Wipe clean after wear.', shipping_info: 'Free worldwide shipping on orders over $50. Standard delivery 5-10 business days. Express 2-4 business days. 30-day hassle-free returns.', image_url: 'https://placehold.co/800x800/d4af37/ffffff?text=Velmora', hover_image_url: 'https://placehold.co/800x800/e6c875/ffffff?text=Velmora', gallery: ['https://placehold.co/800x800/d4af37/ffffff?text=Velmora','https://placehold.co/800x800/e6c875/ffffff?text=Velmora','https://placehold.co/800x800/c5a028/ffffff?text=Velmora'], rating: 4.7, review_count: 156, is_bestseller: true, is_new: false, tags: ['huggies','dome','gold','bestseller'] } },
  { id: 2969, data: { name: 'Amber Lace Earrings', slug: 'amber-lace-earrings', price: 54, category: 'Earrings', material: '18K Gold Plated', tone: 'Gold', description: 'Textured gold filigree drop earrings inspired by vintage lacework. Lightweight and elegant, perfect for day-to-night transitions.', details: '18K gold plated filigree with brushed and polished textures. Drop length: 35mm. Fishhook closure. Nickel-free and hypoallergenic.', shipping_info: 'Free worldwide shipping on orders over $50. Standard delivery 5-10 business days. Express 2-4 business days. 30-day hassle-free returns.', image_url: 'https://placehold.co/800x800/d4af37/ffffff?text=Velmora', hover_image_url: 'https://placehold.co/800x800/e6c875/ffffff?text=Velmora', gallery: ['https://placehold.co/800x800/d4af37/ffffff?text=Velmora','https://placehold.co/800x800/e6c875/ffffff?text=Velmora','https://placehold.co/800x800/c5a028/ffffff?text=Velmora'], rating: 4.9, review_count: 72, is_bestseller: true, is_new: false, tags: ['earrings','filigree','lace','gold','bestseller'] } },
  { id: 2970, data: { name: 'Royal Heirloom Set', slug: 'royal-heirloom-set', price: 95, category: 'Sets', material: '18K Gold Plated', tone: 'Gold', description: 'A curated gift set featuring a pair of earrings and a matching necklace, presented in a signature Velmora gift box. The ultimate self-gift or surprise.', details: '18K gold plated earrings and necklace set. Necklace length: 42cm + 5cm extender. Earring drop: 22mm. Presented in a matte black Velmora gift box with gold foil logo. Nickel-free and hypoallergenic.', shipping_info: 'Free worldwide shipping on orders over $50. Standard delivery 5-10 business days. Express 2-4 business days. 30-day hassle-free returns.', image_url: 'https://placehold.co/800x800/d4af37/ffffff?text=Velmora', hover_image_url: 'https://placehold.co/800x800/e6c875/ffffff?text=Velmora', gallery: ['https://placehold.co/800x800/d4af37/ffffff?text=Velmora','https://placehold.co/800x800/e6c875/ffffff?text=Velmora','https://placehold.co/800x800/c5a028/ffffff?text=Velmora'], rating: 4.8, review_count: 210, is_bestseller: true, is_new: false, tags: ['set','gift box','earrings','necklace','gold','bestseller'] } },
]

export async function fetchProducts(params = {}) {
  try {
    let query = client.from('Product').select('*')
    if (params.category) {
      query = query.eq('category', params.category)
    }
    if (params.bestseller) {
      query = query.eq('is_bestseller', true)
    }
    if (params.limit) {
      query = query.limit(params.limit)
    }
    query = query.order('created_at', { ascending: false })
    const { data: response, error } = await query
    if (error) throw error
    const list = response?.data?.list ?? []
    if (list.length) return list
  } catch (err) {
    console.warn('fetchProducts fallback to seed data', err)
  }
  return seedProducts
}

export async function fetchProductBySlug(slug) {
  try {
    const { data: response, error } = await client
      .from('Product')
      .select('*')
      .eq('slug', slug)
      .maybeSingle()
    if (error) throw error
    const item = response?.data ?? null
    if (item) return item
  } catch (err) {
    console.warn('fetchProductBySlug fallback to seed data', err)
  }
  return seedProducts.find((p) => p.data.slug === slug) || null
}

export async function fetchRelatedProducts(category, excludeSlug, limit = 4) {
  try {
    const { data: response, error } = await client
      .from('Product')
      .select('*')
      .eq('category', category)
      .neq('slug', excludeSlug)
      .limit(limit)
    if (error) throw error
    const list = response?.data?.list ?? []
    if (list.length) return list
  } catch (err) {
    console.warn('fetchRelatedProducts fallback to seed data', err)
  }
  return seedProducts
    .filter((p) => p.data.category === category && p.data.slug !== excludeSlug)
    .slice(0, limit)
}
