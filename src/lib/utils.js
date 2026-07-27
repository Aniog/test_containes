import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phone) {
  if (!phone) return ''
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{1,3})(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `+${match[1]} ${match[2]} ${match[3]} ${match[4]}`
  }
  return phone
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export function truncate(text, length = 100) {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}
