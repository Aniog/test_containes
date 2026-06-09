import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num) {
  if (num >= 1e9) return (num / 1e9).toFixed(1) + ' GW'
  if (num >= 1e6) return (num / 1e6).toFixed(1) + ' MW'
  if (num >= 1e3) return (num / 1e3).toFixed(1) + ' kW'
  return num + ' W'
}
