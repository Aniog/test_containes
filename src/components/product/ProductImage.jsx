const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%23F7F0E7'/%3E%3Cstop offset='0.52' stop-color='%23E7D7C6'/%3E%3Cstop offset='1' stop-color='%23C7A56B'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='800' fill='url(%23g)'/%3E%3Ccircle cx='300' cy='370' r='120' fill='none' stroke='%238A633C' stroke-width='18' opacity='0.42'/%3E%3Ccircle cx='300' cy='370' r='55' fill='%23FFFBF5' opacity='0.35'/%3E%3Ctext x='300' y='530' text-anchor='middle' font-family='Georgia,serif' font-size='44' fill='%231F1713' letter-spacing='12'%3EVELMORA%3C/text%3E%3C/svg%3E"

export default function ProductImage({
  product,
  variant = 'primary',
  className = '',
  width = '700',
  ratio = '4x3',
}) {
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const materialId = `product-${product.id}-material`

  return (
    <img
      alt={product.name}
      className={className}
      data-strk-img-id={`velmora-${product.id}-${variant}`}
      data-strk-img={`[${descId}] [${titleId}] [${materialId}]`}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={placeholder}
    />
  )
}

export { placeholder }
