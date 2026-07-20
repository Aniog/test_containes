export default function ProductImage({
  product,
  variant = 'primary',
  ratio = '4x3',
  width = '800',
  className = '',
  scope = 'product',
}) {
  void ratio
  void width
  void scope
  const useAlternate = /secondary|styled|detail|gallery|thumb/.test(variant)
  const imageSrc = useAlternate ? product.imageAlt || product.image : product.image

  return (
    <img
      alt={`${product.name} ${useAlternate ? 'lifestyle view' : 'jewelry product view'}`}
      className={className}
      src={imageSrc}
    />
  )
}
