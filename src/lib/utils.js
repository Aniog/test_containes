import { clsx } from "clsx";

export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

export function cnx(...inputs) {
  return clsx(inputs);
}
