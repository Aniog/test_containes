import { clsx } from 'clsx'

export function cn(...inputs) {
  return inputs.filter(Boolean).map((value) => clsx(value)).join(' ')
}
