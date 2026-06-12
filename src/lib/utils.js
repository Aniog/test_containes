import { clsx } from "clsx";

export function cn(...inputs) {
  return inputs.flat(Infinity).filter(Boolean).map((v) => (typeof v === "string" ? v : "")).join(" ").trim();
}

// Use clsx for proper className composition
export function classes(...inputs) {
  return clsx(inputs);
}
