import { formatPrice } from '@/lib/utils'

export default function Price({ price, className }) {
  return (
    <span className={className}>
      {formatPrice(price)}
    </span>
  )
}
