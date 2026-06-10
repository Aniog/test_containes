import { clsx } from "clsx";

export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

export function classNames(...inputs) {
  return clsx(inputs);
}
