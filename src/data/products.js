const imageBase = 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_1400/unsplashcom'

export const products = [
  {
    id: 'vivid-aura', slug: 'vivid-aura-jewels', name: 'Vivid Aura Jewels', category: 'Earrings', price: 42, material: '18K Gold Plated', tone: ['Gold', 'Silver'],
    short: 'A sculptural gold ear cuff finished with a fine crystal accent for barely-there radiance.',
    description: 'A luminous ear cuff designed to frame the ear without a piercing. The crystal accent catches soft light while the polished gold silhouette keeps the look refined and everyday-ready.',
    care: '18K gold plated over recycled brass with crystal detailing. Keep dry, store in the included pouch, and polish gently with a soft cloth.',
    shipping: 'Free worldwide shipping on every order. Enjoy 30-day returns on unworn pieces in original packaging.',
    images: {
      primary: `${imageBase}/photo-1680789527299-dbf53044f48b`,
      hover: `${imageBase}/photo-1677578329676-7296dd3d1083`,
      styled: `${imageBase}/photo-1575990255913-ae2580577263`,
      detail: `${imageBase}/photo-1633411078485-8c2a32095ac9`,
    },
  },
  {
    id: 'majestic-flora', slug: 'majestic-flora-nectar', name: 'Majestic Flora Nectar', category: 'Necklaces', price: 68, material: 'Crystal Accent', tone: ['Gold'],
    short: 'A delicate floral crystal necklace with luminous multicolor stones and a fine gold chain.',
    description: 'Inspired by antique botanical studies, this necklace brings a quiet flash of color to fine knitwear, silk slips, and open collars.',
    care: '18K gold plated chain with hand-set crystal accents. Avoid fragrance and water exposure to preserve brilliance.',
    shipping: 'Free worldwide shipping on every order. Gift-ready packaging and 30-day returns are included.',
    images: {
      primary: `${imageBase}/photo-1592307084389-1454f22f77ca`,
      hover: `${imageBase}/photo-1609971919698-283e897e56a4`,
      styled: `${imageBase}/photo-1681766151599-b41f7b8d12c5`,
      detail: `${imageBase}/photo-1644893748093-fc1aff047db9`,
    },
  },
  {
    id: 'golden-sphere', slug: 'golden-sphere-huggies', name: 'Golden Sphere Huggies', category: 'Huggies', price: 38, material: '18K Gold Plated', tone: ['Gold', 'Silver'],
    short: 'Chunky dome huggie earrings with a softened profile and polished demi-fine finish.',
    description: 'The pair that makes a white tee feel intentional. These huggies balance soft volume with a featherlight feel for everyday wear.',
    care: '18K gold plated over hypoallergenic stainless steel. Nickel-safe and designed for sensitive ears.',
    shipping: 'Free worldwide shipping with tracking. Returns are accepted within 30 days of delivery.',
    images: {
      primary: `${imageBase}/photo-1582756825287-a250e1e432d9`,
      hover: `${imageBase}/photo-1632525230528-ec17c49bc168`,
      styled: `${imageBase}/photo-1632525231035-c054cd5019db`,
      detail: `${imageBase}/photo-1637632668522-ac901758a6bb`,
    },
  },
  {
    id: 'amber-lace', slug: 'amber-lace-earrings', name: 'Amber Lace Earrings', category: 'Earrings', price: 54, material: '18K Gold Plated', tone: ['Gold'],
    short: 'Textured gold filigree drop earrings with lace-like movement and warm evening glow.',
    description: 'A romantic drop earring with finely textured detail. Wear them for dinner reservations, winter weddings, and polished gifting moments.',
    care: '18K gold plated filigree with hypoallergenic posts. Store separately to protect the textured finish.',
    shipping: 'Free worldwide shipping, protective packaging, and easy 30-day returns on unworn pieces.',
    images: {
      primary: `${imageBase}/photo-1626087193246-88c8d5d730cf`,
      hover: `${imageBase}/photo-1677578329020-a6170af777a2`,
      styled: `${imageBase}/photo-1681308835217-72f0b99da82d`,
      detail: `${imageBase}/photo-1658472022691-f969a893f12d`,
    },
  },
  {
    id: 'royal-heirloom', slug: 'royal-heirloom-set', name: 'Royal Heirloom Set', category: 'Gift Sets', price: 95, material: 'Gift Boxed', tone: ['Gold'],
    short: 'A gift-boxed earring and necklace set created for considered gestures and lasting keepsakes.',
    description: 'A complete pairing with heirloom-inspired shine. Each set arrives in our signature box, ready for birthdays, bridesmaids, and self-celebration.',
    care: '18K gold plated set with crystal accents. Keep each piece in its pouch between wears to preserve the finish.',
    shipping: 'Complimentary gift packaging, free worldwide shipping, and 30-day returns are included.',
    images: {
      primary: `${imageBase}/photo-1585832641954-e30df38ca004`,
      hover: `${imageBase}/photo-1609252907817-fad418fb02ed`,
      styled: `${imageBase}/photo-1603001572239-24c165fc4168`,
      detail: `${imageBase}/photo-1666060518856-724686a6587d`,
    },
  },
]

export const categories = [
  { id: 'earrings', label: 'Earrings', title: 'Sculptural Earrings', caption: 'Quiet shimmer for everyday rituals and evening plans.' },
  { id: 'necklaces', label: 'Necklaces', title: 'Layered Necklaces', caption: 'Fine chains, floral stones, and luminous collarbone details.' },
  { id: 'huggies', label: 'Huggies', title: 'Polished Huggies', caption: 'Soft volume, close fit, and effortless gold glow.' },
]

export const ugcStories = [
  { id: 'mirror-glow', caption: 'Soft morning gold, worn close.', detail: 'Gold huggies styled in a quiet mirror selfie.' },
  { id: 'dinner-light', caption: 'A little shine for dinner plans.', detail: 'Drop earrings catching candlelight beside silk.' },
  { id: 'gift-note', caption: 'Gifted, unboxed, immediately loved.', detail: 'Velmora gift box with fine necklace and handwritten note.' },
  { id: 'weekend-stack', caption: 'Layered pieces, low effort polish.', detail: 'Floral crystal necklace layered over a cream knit.' },
  { id: 'close-cuff', caption: 'No piercing, all radiance.', detail: 'Ear cuff with crystal accent worn on a model.' },
]

export const testimonials = [
  { id: 'maya', name: 'Maya R.', text: 'The huggies feel substantial without being heavy. They instantly made my everyday outfits feel finished.' },
  { id: 'eline', name: 'Eline P.', text: 'I bought the necklace as a gift and kept thinking about it, so I ordered one for myself too.' },
  { id: 'sophia', name: 'Sophia L.', text: 'The packaging was beautiful, and the gold tone looks far more expensive than the price.' },
]
