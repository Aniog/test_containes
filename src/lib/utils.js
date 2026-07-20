// src/lib/utils.js
import { clsx } from "clsx";

export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}
