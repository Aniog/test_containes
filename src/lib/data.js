export const categories = [
  { id: 'earrings', label: 'Earrings', query: 'gold earrings jewelry on model' },
  { id: 'necklaces', label: 'Necklaces', query: 'gold necklace jewelry editorial' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie earrings close up' },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sophie M.',
    text: 'The quality exceeded my expectations. I wear my huggies every single day and they still look brand new.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Elena R.',
    text: 'Beautiful packaging and even more beautiful jewelry. It felt like opening a luxury gift to myself.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amanda K.',
    text: 'I get compliments every time I wear the floral necklace. The perfect balance of delicate and statement.',
    rating: 5,
  },
]

export const formatPrice = (price) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(price)
