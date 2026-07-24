const sharedProps = (item) => ({
  src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E",
  alt: item.name,
  className: 'h-full w-full object-cover',
  'data-strk-img': `[${item.key}-cue] [${item.key}-desc] [${item.key}-title]`,
  'data-strk-img-ratio': '3x4',
  'data-strk-img-width': '500',
})

const CartItemImage = ({ item }) => {
  const props = sharedProps(item)

  if (item.slug === 'vivid-aura-jewels' && item.tone === 'Gold') {
    return <img {...props} data-strk-img-id="vivid-aura-gallery-1-main-e31d" />
  }

  if (item.slug === 'vivid-aura-jewels' && item.tone === 'Silver') {
    return <img {...props} data-strk-img-id="vivid-aura-gallery-2-main-e31d" />
  }

  if (item.slug === 'majestic-flora-nectar' && item.tone === 'Gold') {
    return <img {...props} data-strk-img-id="majestic-flora-gallery-1-main-e31d" />
  }

  if (item.slug === 'majestic-flora-nectar' && item.tone === 'Silver') {
    return <img {...props} data-strk-img-id="majestic-flora-gallery-2-main-e31d" />
  }

  if (item.slug === 'golden-sphere-huggies' && item.tone === 'Gold') {
    return <img {...props} data-strk-img-id="golden-sphere-gallery-1-main-e31d" />
  }

  if (item.slug === 'golden-sphere-huggies' && item.tone === 'Silver') {
    return <img {...props} data-strk-img-id="golden-sphere-gallery-2-main-e31d" />
  }

  if (item.slug === 'amber-lace-earrings' && item.tone === 'Gold') {
    return <img {...props} data-strk-img-id="amber-lace-gallery-1-main-e31d" />
  }

  if (item.slug === 'amber-lace-earrings' && item.tone === 'Silver') {
    return <img {...props} data-strk-img-id="amber-lace-gallery-2-main-e31d" />
  }

  if (item.slug === 'royal-heirloom-set' && item.tone === 'Gold') {
    return <img {...props} data-strk-img-id="royal-heirloom-gallery-1-main-e31d" />
  }

  if (item.slug === 'royal-heirloom-set' && item.tone === 'Silver') {
    return <img {...props} data-strk-img-id="royal-heirloom-gallery-2-main-e31d" />
  }

  return <img {...props} data-strk-img-id="vivid-aura-gallery-3-main-e31d" />
}

export default CartItemImage
